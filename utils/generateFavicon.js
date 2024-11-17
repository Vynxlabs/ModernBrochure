const { FaviconSettings, MasterIcon, generateFaviconFiles, generateFaviconHtml } = require('@realfavicongenerator/generate-favicon');
const { getNodeImageAdapter, loadAndConvertToSvg } = require('@realfavicongenerator/image-adapter-node');
const fs = require('fs');
const path = require('path');

const imageAdapter = await getNodeImageAdapter();

// This is the icon that will be transformed into the various favicon files
const masterIcon = {
  icon: await loadAndConvertToSvg("path/to/master-icon.svg"),
}

const faviconSettings = {
  icon: {
    desktop: {
      regularIconTransformation: {
        type: IconTransformationType.None,
      },
      darkIconType: "none",
    },
    touch: {
      transformation: {
        type: IconTransformationType.None,
      },
      appTitle: null
    },
    webAppManifest: {
      transformation: {
        type: IconTransformationType.None,
      },
      backgroundColor: "#ffffff",
      themeColor: "#ffffff",
      name: "MyWebSite",
      shortName: "MySite"
    }
  },
  path: "/",
};

// Remove existing files in src/images/favicon
const faviconFolder = path.join(__dirname, 'src/images/favicon');
fs.rmSync(faviconFolder, { recursive: true, force: true });
fs.mkdirSync(faviconFolder);

// Generate files
const files = await generateFaviconFiles(masterIcon, faviconSettings, imageAdapter);
files.forEach((file) => {
  const filePath = path.join(faviconFolder, file.name);
  fs.writeFileSync(filePath, file.contents);
});

// Generate HTML
const html = await generateFaviconHtml(faviconSettings);
const htmlFilePath = path.join(__dirname, 'src/_includes/partials/favicon.html');
fs.writeFileSync(htmlFilePath, html);