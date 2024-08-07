const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

const componentsDir = './_component-library/components';
const pagesDirs = ['./src/pages', './src/services'];
const componentBlueprints = {};
const componentsInUse = [];
let hasWarnings = false;
let warnings = [];

// Function to traverse directory and collect component blueprints
const collectComponentBlueprints = (dir, relativePath = '') => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      collectComponentBlueprints(filePath, path.join(relativePath, file));
    } else if (file.endsWith('.bookshop.yml')) {
      const componentName = path.basename(file, '.bookshop.yml');
      let componentKey = path.join(relativePath, componentName);

      // Check if the folder name matches the component name
      const folderName = path.basename(path.dirname(filePath));
      if (folderName === componentName) {
        componentKey = path.join(path.dirname(relativePath), componentName);
      }

      const componentYaml = fs.readFileSync(filePath, 'utf8');
      const componentData = yaml.load(componentYaml);
      componentBlueprints[componentKey] = componentData.blueprint;
    }
  });
};

collectComponentBlueprints(componentsDir);

// Function to traverse pages directories and collect components used
const collectComponentsInUse = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      collectComponentsInUse(filePath);
    } else if (file.endsWith('.md')) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontMatter } = matter(fileContent);

      // Collect components used in hero and content_blocks
      if (frontMatter.hero && frontMatter.hero._bookshop_name) {
        componentsInUse.push({ component: frontMatter.hero, filename: filePath, type: 'hero' });
      }

      if (frontMatter.content_blocks) {
        frontMatter.content_blocks.forEach((block, index) => {
          if (block._bookshop_name) {
            componentsInUse.push({ component: block, filename: filePath, type: 'content_blocks', index });
          }
        });
      }
    }
  });
};

pagesDirs.forEach((dir) => collectComponentsInUse(dir));

// Function to validate and resolve conflicts in component parameters against blueprint
const validateAndResolveParameters = (componentName, usedParameters, blueprintParameters, filename) => {
  const validateObject = (paramObj, blueprintObj) => {
    // Validate extra parameters
    for (const key in paramObj) {
      if (key === '_bookshop_name') continue;

      const paramValue = paramObj[key];
      const blueprintValue = blueprintObj[key];

      if (Array.isArray(paramValue)) {
        paramValue.forEach((item, index) => {
          validateObject(item, Array.isArray(blueprintValue) ? (blueprintValue[index] || blueprintValue[0] || {}) : {});
        });
      } else if (typeof paramValue === 'object' && paramValue !== null) {
        if (paramValue._bookshop_name) {
          const nestedComponentName = paramValue._bookshop_name;
          if (!componentBlueprints[nestedComponentName]) {
            warnings.push(`Warning: Nested component "${nestedComponentName}" used in "${componentName}" but not found in blueprints. File: ${filename}`);
            hasWarnings = true;
          } else {
            validateObject(paramValue, componentBlueprints[nestedComponentName]);
          }
        } else {
          validateObject(paramValue, blueprintValue || {});
        }
      } else if (!blueprintObj.hasOwnProperty(key) && typeof blueprintObj === 'object') {
        warnings.push(`Warning: Parameter "${key}" used in component "${componentName}" but not found in blueprint. File: ${filename}`);
        hasWarnings = true;
        delete paramObj[key]; // Remove extra parameter
      }
    }

    // Check for missing parameters
    for (const key in blueprintObj) {
      if (!paramObj.hasOwnProperty(key) && key !== '_bookshop_name' && typeof blueprintObj === 'object') {
        warnings.push(`Warning: Missing parameter "${key}" in component "${componentName}". File: ${filename}`);
        hasWarnings = true;
        if (blueprintObj[key] === null || blueprintObj[key] === undefined) {
          paramObj[key] = blueprintObj[key]; // Add missing optional parameter
        } else if (Array.isArray(blueprintObj[key])) {
          paramObj[key] = paramObj[key] || [];
          blueprintObj[key].forEach((blueprintItem, index) => {
            if (!paramObj[key][index]) paramObj[key][index] = {};
            validateObject(paramObj[key][index], blueprintItem);
          });
        } else if (typeof blueprintObj[key] === 'object') {
          paramObj[key] = paramObj[key] || {};
          validateObject(paramObj[key], blueprintObj[key]);
        }
      }
    }
  };

  // Initial parameter validation
  for (const key in usedParameters) {
    if (key === '_bookshop_name') continue;

    const paramValue = usedParameters[key];
    const blueprintValue = blueprintParameters[key];

    if (Array.isArray(paramValue)) {
      paramValue.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          if (item._bookshop_name) {
            const nestedComponentName = item._bookshop_name;
            if (!componentBlueprints[nestedComponentName]) {
              warnings.push(`Warning: Nested component "${nestedComponentName}" used in "${componentName}" but not found in blueprints. File: ${filename}`);
              hasWarnings = true;
            } else {
              validateAndResolveParameters(nestedComponentName, item, componentBlueprints[nestedComponentName], filename);
            }
          } else if (blueprintValue && blueprintValue.length > index) {
            validateAndResolveParameters(componentName, item, blueprintValue[index], filename);
          }
        }
      });
    } else if (typeof paramValue === 'object' && paramValue !== null) {
      if (paramValue._bookshop_name) {
        const nestedComponentName = paramValue._bookshop_name;
        if (!componentBlueprints[nestedComponentName]) {
          warnings.push(`Warning: Nested component "${nestedComponentName}" used in "${componentName}" but not found in blueprints. File: ${filename}`);
          hasWarnings = true;
        } else {
          validateAndResolveParameters(nestedComponentName, paramValue, componentBlueprints[nestedComponentName], filename);
        }
      } else if (blueprintValue) {
        validateAndResolveParameters(componentName, paramValue, blueprintValue, filename);
      } else {
        validateAndResolveParameters(componentName, paramValue, {}, filename);
      }
    } else if (!blueprintParameters.hasOwnProperty(key)) {
      warnings.push(`Warning: Parameter "${key}" used in component "${componentName}" but not found in blueprint. File: ${filename}`);
      hasWarnings = true;
      console.log("deleted usedParam")
      console.log(usedParameters[key])
      delete usedParameters[key]; // Remove extra parameter
    }
  }

  // Check for missing parameters and validate nested objects
  validateObject(usedParameters, blueprintParameters);
};

// Function to validate and resolve components used against blueprints, including nested components
const validateAndResolveComponents = (componentsUsed, blueprints) => {
  componentsUsed.forEach(({ component, filename, type, index }) => {
    const componentName = component._bookshop_name;
    if (!blueprints[componentName]) {
      warnings.push(`Warning: Component "${componentName}" used in pages but not found in blueprints. File: ${filename}`);
      hasWarnings = true;
    } else {
      validateAndResolveParameters(componentName, component, blueprints[componentName], filename);
    }
  });
};

// Resolve conflicts first
componentsInUse.forEach(({ component, filename, type, index }) => {
  const componentName = component._bookshop_name;
  if (componentBlueprints[componentName]) {
    validateAndResolveParameters(componentName, component, componentBlueprints[componentName], filename);
  }
});

// Write updated components back to files
componentsInUse.forEach(({ component, filename, type, index }) => {
  const fileContent = fs.readFileSync(filename, 'utf8');
  const { data: frontMatter, content } = matter(fileContent);

  if (type === 'hero') {
    frontMatter.hero = component;
  } else if (type === 'content_blocks') {
    if (index !== undefined && frontMatter.content_blocks[index]._bookshop_name === component._bookshop_name) {
      frontMatter.content_blocks[index] = component;
    } else {
      const blockIndex = frontMatter.content_blocks.findIndex((block, i) => i === index && block._bookshop_name === component._bookshop_name);
      if (blockIndex !== -1) {
        frontMatter.content_blocks[blockIndex] = component;
      }
    }
  }

  const newFrontMatter = matter.stringify(content, frontMatter);
  fs.writeFileSync(filename, newFrontMatter);
});

// Reset warnings and hasWarnings for final validation
warnings = [];
hasWarnings = false;

// Validate components again after conflict resolution
validateAndResolveComponents(componentsInUse, componentBlueprints);

if (hasWarnings) {
  warnings.forEach(warning => console.log(warning));
  process.exit(1); // Exit with an error code to indicate failure
} else {
  console.log("No warnings found. All components and parameters are valid.");
}
