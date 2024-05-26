const GetSVGContents = require("eleventy-plugin-svg-contents").GetSVGContents;

module.exports = function (Liquid) {
  this.registerFilter('svgContents', (file, className, extractTag = 'svg') => {
    const getSVGContents = new GetSVGContents(file, className, extractTag);

    return getSVGContents.getSvg();
  });
};
