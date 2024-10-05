---
draft: true
eleventyExcludeFromCollections: false
title: 
metaDesc: 
date:
happeningDate: 
author:
tags: 
blogImage: 
imageAltText: 
image: >-
    {% if blogImage %}{{blogImage}}{% else %}{{blog.defaultImage}}{% endif %}
permalink: >-
    /blog/{% assign title = title | slugify %}{{ page.filePathStem | fileSubstringFilter | append: title | downcase }}/index.html
socialImage: >- 
    {{ image }}
eleventyExcludeFromCollections: false
---
## Once upon a time...
There was a...