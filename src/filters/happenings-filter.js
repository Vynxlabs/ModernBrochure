module.exports=(collection, item, tags=[], happeningsConfig, limit = 3, random = true)=> {
    let filteredItems = collection.filter((x) => x.url !== item.url);

    filteredItems = filteredItems.filter((x) => {
      return (x.url.includes("happenings/") || x.data.happeningDate !== null || happeningsConfig.tags.some((tag) => x.data.tags.includes(tag)));
    });

    if (tags.length > 0) {
      tags = tags.filter((tag) => happeningsConfig.tags.includes(tag));
      if (tags.length > 0) {
        filteredItems = filteredItems.filter((x) => x.data.tags.some((tag) => tags.includes(tag)));
      } else {
        return filteredItems;
      }
    }

    if (random) {
      let counter = filteredItems.length;

      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = filteredItems[counter];

        // Swap the last element with the random one
        filteredItems[counter] = filteredItems[index];
        filteredItems[index] = temp;
      }
    }

    // Lastly, trim to length
    if (limit > 0) {
      filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
  }
