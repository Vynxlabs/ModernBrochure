
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

const primaryColorGroup = theme.primary_color_group;
const customColorGroups = theme.custom_color_groups;

tailwindConfig.theme.extend.colors[primaryColorGroup.name] = {
  background_color: primaryColorGroup.background_color,
  foreground_color: primaryColorGroup.foreground_color,
  interaction_color: primaryColorGroup.interaction_color,
};

customColorGroups.forEach(colorGroup => {
  tailwindConfig.theme.extend.colors[colorGroup.name] = {
    background_color: colorGroup.background_color,
    foreground_color: colorGroup.foreground_color,
    interaction_color: colorGroup.interaction_color,
  };
});

// Write updated Tailwind configuration to file
fs.writeFileSync(tailwindConfigPath, `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`);
