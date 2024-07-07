const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

const componentsDir = './_component-library/components';
const pagesDirs = ['./src/pages', './src/services'];
const componentBlueprints = {};
const componentsInUse = [];
let hasWarnings = false;
const warnings = [];

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
        componentsInUse.push({ component: frontMatter.hero, filename: filePath });
      }

      if (frontMatter.content_blocks) {
        frontMatter.content_blocks.forEach(block => {
          if (block._bookshop_name) {
            componentsInUse.push({ component: block, filename: filePath });
          }
        });
      }
    }
  });
};

pagesDirs.forEach((dir) => collectComponentsInUse(dir));

// Function to validate component parameters against blueprint
const validateParameters = (componentName, usedParameters, blueprintParameters, filename) => {
  for (const key in usedParameters) {
    if (key === '_bookshop_name') {
      continue; // Skip _bookshop_name key
    }

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
              validateParameters(nestedComponentName, item, componentBlueprints[nestedComponentName], filename);
            }
          } else if (blueprintValue && blueprintValue.length > index) {
            validateParameters(componentName, item, blueprintValue[index], filename);
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
          validateParameters(nestedComponentName, paramValue, componentBlueprints[nestedComponentName], filename);
        }
      } else if (blueprintValue) {
        validateParameters(componentName, paramValue, blueprintValue, filename);
      } else {
        validateParameters(componentName, paramValue, {}, filename);
      }
    } else if (!blueprintParameters.hasOwnProperty(key)) {
      warnings.push(`Warning: Parameter "${key}" used in component "${componentName}" but not found in blueprint. File: ${filename}`);
      hasWarnings = true;
    }
  }
};

// Function to validate components used against blueprints, including nested components
const validateComponents = (componentsUsed, blueprints) => {
  componentsUsed.forEach(({ component, filename }) => {
    const componentName = component._bookshop_name;
    if (!blueprints[componentName]) {
      warnings.push(`Warning: Component "${componentName}" used in pages but not found in blueprints. File: ${filename}`);
      hasWarnings = true;
    } else {
      validateParameters(componentName, component, blueprints[componentName], filename);
    }
  });
};

validateComponents(componentsInUse, componentBlueprints);

if (hasWarnings) {
  warnings.forEach(warning => console.log(warning));
  process.exit(1); // Exit with an error code to indicate failure
} else {
  console.log("No warnings found. All components and parameters are valid.");
}
