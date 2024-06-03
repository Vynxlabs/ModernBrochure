const slugify = require('slugify');

module.exports = (collection) => {
    const CATEGORIES = new Map();
    for (const item of collection) {
      const slug = slugify(item.data.category, { lower: true });
      if (!CATEGORIES.has(slug)) {
        CATEGORIES.set(slug, item.data.category);
      }
    }
    return Array.from(CATEGORIES.values());
  };
  