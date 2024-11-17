const {
  FaviconSettings,
  MasterIcon,
  generateFaviconFiles,
  generateFaviconHtml,
} = require("@realfavicongenerator/generate-favicon");
const {
  getNodeImageAdapter,
  loadAndConvertToSvg,
} = require("@realfavicongenerator/image-adapter-node");
const fs = require("fs");
const path = require("path");
const { compileString } = require("sass");

async function generateFavicon() {
  const imageAdapter = await getNodeImageAdapter();

  // Load the master icon
  const masterIcon = {
    icon: await loadAndConvertToSvg("src/assets/uploads/vynxlabs-08.png"),
  };

  const faviconSettings = {
    icon: {
      desktop: {
        regularIconTransformation: {
          type: "none",
        },
        darkIconType: "none",
      },
      touch: {
        transformation: {
          type: "none",
        },
        appTitle: null,
      },
      webAppManifest: {
        transformation: {
          type: "none",
        },
        backgroundColor: "#ffffff",
        themeColor: "#ffffff",
        name: "MyWebSite",
        shortName: "MySite",
      },
    },
    path: "/",
  };

  const faviconFolder = path.join(process.cwd(), "src/images/favicon");
  fs.rmSync(faviconFolder, { recursive: true, force: true });
  fs.mkdirSync(faviconFolder);

  // Generate files
  const files = await generateFaviconFiles(
    masterIcon,
    faviconSettings,
    imageAdapter,
  );

  for (const fileName in files) {
    const filePath = path.join(faviconFolder, fileName);
    const fileContents = files[fileName];

    // Check the type of fileContents
    if (Buffer.isBuffer(fileContents) || typeof fileContents === "string") {
      fs.writeFileSync(filePath, fileContents);
    } else if (typeof fileContents === "object") {
      fs.writeFileSync(filePath, JSON.stringify(fileContents, null, 2));
    } else {
      console.warn(`Unsupported file type for ${fileName}`);
    }
  }

 const html = await generateFaviconHtml(faviconSettings);

  // Extract markups and join them into a single HTML string
  const htmlContent = html.markups.join("\n");
  console.log(htmlContent)
  const htmlFilePath = path.join(
    process.cwd(),
    "src/_includes/partials/favicon.html",
  );

  fs.writeFileSync(htmlFilePath, htmlContent); 
}

generateFavicon();