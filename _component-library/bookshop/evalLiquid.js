const { Liquid } = require("liquidjs");

module.exports = function (Liquid) {
    this.registerFilter("evalLiquid", (input, context) => {
        const engine = new Liquid();
        const tpl = engine.parseAndRender(input, context);
        return tpl;
    });
}