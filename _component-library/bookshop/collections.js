module.exports = function (Liquid) {
  this.registerFilter(
    "collectionsFilter",
    (collection, item, collectionTags, tags = [], limit = 50) => {
let filteredItems = collection.filter((x) => x.data.draft === false);
        filteredItems = filteredItems.filter((x) => x.data.addToCollections === false);
    filteredItems = filteredItems.filter((x) => x.url !== item.url);

    if (tags !== null && tags.length > 0) {
        if (collectionTags === null) {
            filteredItems = filteredItems.filter((x) => x.data.tags && x.data.tags.some((tag) => tags.includes(tag)));
        } else {
            tags = tags.filter((tag) => collectionTags.includes(tag));
            if (tags.length > 0) {
                filteredItems = filteredItems.filter((x) => x.data.tags && x.data.tags.some((tag) => tags.includes(tag)));
            }
        }
    }

    if (limit === null || limit <= 0) {
        limit = 50;
    }

    if (limit > 0) {
        filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
    },
  );
};
