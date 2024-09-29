---
draft: true
eleventyExcludeFromCollections: false
title: 
metaDesc: 
happeningImage: 
imageAltText:
image: >-
    {% if happeningImage %}{{happeningImage}}{% else %}{{happenings.defaultImage}}{% endif %}
happeningDate:
tags:
summary:
permalink: >- 
    /happenings/{% assign title = title | slugify %}{{ page.filePathStem | fileSubstringFilter | append: title | downcase }}/index.html
socialImage: >- 
    {{ image }}
layout: "layouts/page.html"
id:
hero:
content_blocks: []
---