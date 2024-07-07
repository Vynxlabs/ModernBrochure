const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

const componentsDir = './_component-library/components';
const pagesDirs = ['./src/pages', './src/services'];
const componentBlueprints = {};
const componentsInUse = [];

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
        componentsInUse.push(frontMatter.hero);
      }

      if (frontMatter.content_blocks) {
        frontMatter.content_blocks.forEach(block => {
          if (block._bookshop_name) {
            componentsInUse.push(block);
          }
        });
      }
    }
  });
};

// Function to validate component parameters against blueprint
const validateParameters = (componentName, usedParameters, blueprintParameters) => {
  for (const key in usedParameters) {
    if (!blueprintParameters.hasOwnProperty(key)) {
      console.log(`Warning: Parameter "${key}" used in component "${componentName}" but not found in blueprint.`);
    }
  }
};

// Function to validate components used against blueprints, including nested components
const validateComponents = (componentsUsed, blueprints) => {
  const validateComponentRecursively = (component, blueprint) => {
    const componentName = component._bookshop_name;

    if (!blueprints[componentName]) {
      console.log(`Warning: Component "${componentName}" used in pages but not found in blueprints.`);
    } else {
      const componentBlueprint = blueprints[componentName];
      validateParameters(componentName, component, componentBlueprint);

      // Check nested components
      for (const key in component) {
        if (component[key] && typeof component[key] === 'object') {
          validateComponentRecursively(component[key], componentBlueprint[key]);
        }
      }
    }
  };

  componentsUsed.forEach(component => {
    validateComponentRecursively(component, componentBlueprints[component._bookshop_name]);
  });
};

collectComponentBlueprints(componentsDir);
pagesDirs.forEach((dir) => collectComponentsInUse(dir));
validateComponents(componentsInUse, componentBlueprints);
