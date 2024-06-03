import slugify from 'slugify';

module.exports = function (Liquid) {
    this.registerFilter('getServicesCategories', (collection) => {
        const CATEGORIES = new Map();
        for (const item of collection) {
            const slug = slugify(item.data.category ? item.data.category : 'Services', { lower: true });
            if (!CATEGORIES.has(slug)) {
                CATEGORIES.set(slug, item.data.category ? item.data.category : 'Services');
            }
        }
        return Array.from(CATEGORIES.values());
    });
}

