const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const matter = require('gray-matter');

const componentsDir = './_component-library/components';
const pagesDirs = ['./src/pages', './src/services'];
const componentBlueprints = {};
const componentsInUse = [];

// Function to traverse directory and collect component blueprints
const collectComponentBlueprints = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      collectComponentBlueprints(filePath);
    } else if (file.endsWith('.bookshop.yml')) {
      const componentName = path.basename(file, '.bookshop.yml');
      const componentYaml = fs.readFileSync(filePath, 'utf8');
      const componentData = yaml.load(componentYaml);
      componentBlueprints[componentName] = componentData.blueprint;
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
        componentsInUse.push(frontMatter.hero._bookshop_name);
      }
      
      if (frontMatter.content_blocks) {
        frontMatter.content_blocks.forEach(block => {
          if (block._bookshop_name) {
            componentsInUse.push(block._bookshop_name);
          }
        });
      }
    }
  });
};

// Function to validate components used against blueprints
const validateComponents = (componentsUsed, blueprints) => {
  componentsUsed.forEach(component => {
    if (!blueprints[component]) {
      console.log(`Warning: Component "${component}" used in pages but not found in blueprints.`);
    } else {
      console.log(`Component "${component}" is valid.`);
    }
  });
};

collectComponentBlueprints(componentsDir);
pagesDirs.forEach((dir) => collectComponentsInUse(dir));
validateComponents(componentsInUse, componentBlueprints);