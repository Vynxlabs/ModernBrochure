module.exports = function (Liquid) {
    this.registerFilter("happeningsFilter", (collection, item, happeningsConfig, tags=[], limit = 3) => {
        let filteredItems = collection.filter((x) => x.url !== item.url);

        filteredItems = filteredItems.filter((x) => {
          return (x.url.includes("happenings/") || x.data.happeningDate !== null || happeningsConfig.tags.some((tag) => x.data.tags.includes(tag)));
        });
    
        const today = new Date();
        filteredItems = filteredItems.filter((x) => {
          const happeningDate = new Date(x.data.happeningDate);
          return happeningDate >= today;
        });
    
        if (tags.length > 0) {
          tags = tags.filter((tag) => happeningsConfig.tags.includes(tag));
          if (tags.length > 0) {
            filteredItems = filteredItems.filter((x) => x.data.tags.some((tag) => tags.includes(tag)));
          } 
        }
    
        // Lastly, trim to length
        if (limit > 0) {
          filteredItems = filteredItems.slice(0, limit);
        }
    
        return filteredItems;
    });
  };
  