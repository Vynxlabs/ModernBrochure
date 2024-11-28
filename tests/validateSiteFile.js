const fs = require("fs");
const path = require("path");

// Paths to the reference and client files
const referenceFilePath = path.resolve("./src/_data-ref/site.json");
const clientFilePath = path.resolve("./src/_data/site.json");

let warnings = [];

// Function to validate and sync _inputs key
function syncInputs(referenceInputs, clientInputs) {
  const updatedInputs = {};

  // Add missing keys from reference to client
  for (const [key, value] of Object.entries(referenceInputs)) {
    if (!(key in clientInputs)) {
      updatedInputs[key] = value;
      warnings.push(`Added missing key '${key}' to _inputs.`);
    } else {
      updatedInputs[key] = clientInputs[key];
    }
  }

  // Remove extra keys in client that are not in reference
  for (const key of Object.keys(clientInputs)) {
    if (!(key in referenceInputs)) {
      warnings.push(`Removed extra key '${key}' from _inputs.`);
    }
  }

  return { updatedInputs, warnings };
}

// Function to validate and sync arrays
function validateArray(referenceArray, clientArray, key) {
  const warnings = [];
  const referenceStructure = referenceArray[0];
  const validatedArray = clientArray.map((item, index) => {
    const newItem = {};
    for (const refKey in referenceStructure) {
      if (!(refKey in item)) {
        newItem[refKey] = referenceStructure[refKey];
        warnings.push(
          `Array '${key}' index ${index}: Added missing key '${refKey}'.`,
        );
      } else {
        newItem[refKey] = item[refKey];
      }
    }
    return newItem;
  });

  return { validatedArray, warnings };
}

// Function to sync the client file with the reference file
function syncFiles(referenceFilePath, clientFilePath) {
  const warnings = [];

  // Read and parse JSON files
  const referenceData = JSON.parse(fs.readFileSync(referenceFilePath, "utf-8"));
  const clientData = JSON.parse(fs.readFileSync(clientFilePath, "utf-8"));

  // Sync _inputs key
  if (referenceData._inputs && clientData._inputs) {
    const { updatedInputs, warnings: inputWarnings } = syncInputs(
      referenceData._inputs,
      clientData._inputs,
    );
    clientData._inputs = updatedInputs;
    warnings.push(...inputWarnings);
  }

  // Traverse and sync top-level keys
  for (const key of Object.keys(referenceData)) {
    if (!(key in clientData)) {
      clientData[key] = referenceData[key];
      warnings.push(`Added missing key '${key}' to client file.`);
    } else if (
      Array.isArray(referenceData[key]) &&
      Array.isArray(clientData[key])
    ) {
      const { validatedArray, warnings: arrayWarnings } = validateArray(
        referenceData[key],
        clientData[key],
        key,
      );
      clientData[key] = validatedArray;
      warnings.push(...arrayWarnings);
    } else if (
      typeof referenceData[key] === "object" &&
      typeof clientData[key] === "object"
    ) {
      // Deep merge objects (excluding arrays and _inputs already handled)
      for (const refKey of Object.keys(referenceData[key])) {
        if (!(refKey in clientData[key])) {
          clientData[key][refKey] = referenceData[key][refKey];
          warnings.push(`Added missing key '${key}.${refKey}' to client file.`);
        }
      }
    }
  }

  // Remove extra keys not in reference
  for (const key of Object.keys(clientData)) {
    if (!(key in referenceData)) {
      delete clientData[key];
      warnings.push(`Removed extra key '${key}' from client file.`);
    }
  }

  // Write the updated client file
  fs.writeFileSync(clientFilePath, JSON.stringify(clientData, null, 2));
}

// Execute the script
syncFiles(referenceFilePath, clientFilePath);

// Log warnings or success message
if (warnings.length > 0) {
  console.warn("Warnings:\n", warnings.join("\n"));
}
if (warnings.length > 0) {
  warnings = [];
  console.log("Rechecking for warnings...");
  syncFiles(referenceFilePath, clientFilePath);
}

// Log warnings or success message
if (warnings.length > 0) {
  console.warn("Warnings:\n", warnings.join("\n"));
  process.exit(1);
} else {
  console.log("Client file is up to date. No warnings.");
}
