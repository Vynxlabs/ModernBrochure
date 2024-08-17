const { Liquid } = require("liquidjs");

module.exports =  (input, context) => {
  const engine = new Liquid();

  const tpl = engine.parseAndRender(input, context);
  return tpl;
};
