const Image = require("@11ty/eleventy-img");
const path = require("path");
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");
const readTimeFilter = require("./src/filters/read-time-filter.js");
const randomBlogsFilter = require("./src/filters/random-blogs-filter.js");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it"),
md = new markdownIt({
  html: true,
});
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const pluginBookshop = require("@bookshop/eleventy-bookshop");
const yaml = require("js-yaml");
const { execSync } = require("child_process");
const fs = require("fs");
const svgContents = require("eleventy-plugin-svg-contents");

const imageShortcode = async (
  src,
  alt,
  cls = "",
  sizes = "100vw",
  preferSvg = true,
  widths = [200, 400, 850, 1280, 1600],
  formats = ["avif", "webp", "svg", "jpeg"],
) => {
  let before = Date.now();

  let inputFilePath =
    src == null ? src : path.join("src", src);

  if(src.includes("http://") || src.includes("https://")) {
    inputFilePath = src;
  }
    
    // console.log(
    //   `[11ty/eleventy-img] ${Date.now() - before}ms: ${inputFilePath}`,
    // );
    const imageMetadata = await Image(inputFilePath, {
      svgShortCircuit: preferSvg ? "size" :false,
      widths: [...widths],
      formats: [...formats, null],
      outputDir: "dist/assets/images",
      urlPath: "/assets/images",
    });

    const imageAttributes = {
      class: cls,
      alt,
      sizes: sizes || "100vw",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(imageMetadata, imageAttributes);

};

const logoShortcode = async (
  src,
  alt,
  cls = "",
  sizes = "100vw",
  preferSvg = true,
  widths = [200],
  formats = ["avif", "webp", "svg", "jpeg"],
) => {
  let before = Date.now();
  let inputFilePath =
    src == null ? src : path.join("src", src);
  if (fs.existsSync(inputFilePath)) {
    
    // console.log(
    //   `[11ty/eleventy-img] ${Date.now() - before}ms: ${inputFilePath}`,
    // );
    const imageMetadata = await Image(inputFilePath, {
      svgShortCircuit: preferSvg ? "size" :false,
      widths: [...widths],
      formats: [...formats, null],
      outputDir: "dist/assets/images",
      urlPath: "/assets/images",
    });

    const imageAttributes = {
      class: cls,
      alt,
      sizes: sizes || "100vw",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(imageMetadata, imageAttributes);
  } else{
    return `<img class='${cls}' src='${src}' alt='${alt}'>`;
  }
};

function generateImages(src, widths = [200, 400, 850, 1920, 2500]) {
  let source = src;
  let options = {
    widths: [...widths, null],
    formats: ["jpeg", "webp", null],
    outputDir: "dist/assets/images",
    urlPath: "/assets/images",
    useCache: true,
    sharpJpegOptions: {
      quality: 80,
      progressive: true,
    },
  };
  // genrate images, ! dont wait
  Image(source, options);
  // get metadata even the image are not fully generated
  return Image.statsSync(source, options);
}

function imageCssBackground(src, selector, widths) {
  const metadata = generateImages(src, widths);
  let markup = [
    `${selector} { background-image: url(${metadata.jpeg[0].url});} `,
  ];
  // i use always jpeg for backgrounds
  metadata.webp.slice(1).forEach((image, idx) => {
    markup.push(
      `@media (min-width: ${metadata.jpeg[idx].width}px) { ${selector} {background-image: url(${image.url});}}`,
    );
  });
  return markup.join("");
}

module.exports = (eleventyConfig) => {
  // Markdown
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));

  eleventyConfig.addWatchTarget("./_component-library/**/*");  

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("/src/images/");
  eleventyConfig.addPassthroughCopy("./src/_includes/partials/background");
  // eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy({ "./src/images/favicon": "/" });
  eleventyConfig.addPassthroughCopy("./src/fonts");
  //eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  eleventyConfig.addAsyncShortcode("logo", logoShortcode);
  eleventyConfig.addShortcode("cssBackground", imageCssBackground);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginTOC, { tags: ["h1", "h2", "h3", "h4", "h5", "h6"] });
  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addPlugin(
    pluginBookshop({
      bookshopLocations: ["_component-library"],
      pathPrefix: "",
    }),
  );

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  eleventyConfig.addCollection("pages", (collection) => {
    return collection.getFilteredByGlob("./src/pages/**/*.md");
  });

  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("w3DateFilter", w3DateFilter);
  eleventyConfig.addFilter("readTimeFilter", readTimeFilter);
  eleventyConfig.addFilter("randomBlogsFilter", randomBlogsFilter);
  eleventyConfig.addFilter("ymlify", (yml) => yaml.load(yml));
  eleventyConfig.addFilter("markdownify", (markdown) => md.render(markdown));

  eleventyConfig.on("eleventy.before", () => {
    execSync(
      "node ./utils/fetch-theme-variables.js",
    );
  });

  eleventyConfig.on("eleventy.after", () => {
    execSync(
      "npx tailwindcss -i ./src/css/styles.css -o ./dist/css/styles.css --minify",
    );
  });

  return {
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    cssTemplateEngine: "liquid",
    dir: {
      input: "src",
      pages: "pages",
      output: "dist",
    },
  };
};
