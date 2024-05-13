module.exports = (itemUrl, pageUrl) => {
  let response = "";
    console.log(itemUrl, pageUrl)
  if (itemUrl === pageUrl) {
    response = ' aria-current="page"';
  }

  if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
    response += " data-state=active";
  }

  return response;
};
