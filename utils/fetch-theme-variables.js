const fs = require('fs');

// Read theme file (e.g., theme.json)
const theme = require('./theme.json');

// Define Tailwind configuration template
const tailwindConfig = require('./tailwind.config.js');

// Populate Tailwind configuration with theme colors
Object.entries(theme.colors).forEach(([colorName, colorValue]) => {
  tailwindConfig.theme.extend.colors[colorName] = colorValue;
});

// Populate Tailwind configuration with theme fonts
// theme.fonts.forEach((font) => {
//   tailwindConfig.theme.extend.fontFamily[font.name] = font.stack;
// });

// Write updated Tailwind configuration to file
fs.writeFileSync('./tailwind.config.js', `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`);
