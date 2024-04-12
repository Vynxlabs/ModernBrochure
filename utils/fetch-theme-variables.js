
const fs = require('fs');
const path = require('path');

// Read theme file (e.g., theme.json)
const themeFilePath = path.join(__dirname, '..', 'src', '_data', 'theme.json');
const theme = JSON.parse(fs.readFileSync(themeFilePath, 'utf-8'));

// Read Tailwind configuration template
const tailwindConfigPath = path.join(__dirname, '..', 'tailwind.config.js');
const tailwindConfigTemplate = require(tailwindConfigPath);

// Populate Tailwind configuration with theme colors
const tailwindConfig = {
  ...tailwindConfigTemplate,
  theme: {
    ...tailwindConfigTemplate.theme,
    extend: {
      ...tailwindConfigTemplate.theme.extend,
      colors: {
        ...tailwindConfigTemplate.theme.extend.colors,
      },
    },
  },
};

const primaryColorGroup = theme.primaryColor_group;
const customColorGroups = theme.customColor_groups;

tailwindConfig.theme.extend.colors[primaryColorGroup.name] = {
  backgroundColor: primaryColorGroup.backgroundColor,
  foregroundColor: primaryColorGroup.foregroundColor,
  interactionColor: primaryColorGroup.interactionColor,
};

customColorGroups.forEach(colorGroup => {
  tailwindConfig.theme.extend.colors[colorGroup.name] = {
    backgroundColor: colorGroup.backgroundColor,
    foregroundColor: colorGroup.foregroundColor,
    interactionColor: colorGroup.interactionColor,
  };
});

// Write updated Tailwind configuration to file
fs.writeFileSync(tailwindConfigPath, `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`);
