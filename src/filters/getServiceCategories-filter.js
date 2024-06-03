module.exports = (collection) => {
    //console.log(collection)
    const CATEGORIES = new Array();
    for (counter in collection) {
      console.log("-----------------------------------------------");
      console.log(collection[counter].data.categorySlug);
      CATEGORIES.push(collection[counter].data.categorySlug);
      counter--;
    }
    return [...new Set(CATEGORIES)];
  };
  