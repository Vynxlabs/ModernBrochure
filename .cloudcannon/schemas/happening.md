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
    {% assign title = title | slugify %}/happenings/{{ page.filePathStem |
    fileSubstringFilter | append: title | downcase }}{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%
    endif %}/index.html
socialImage: >- 
    {{ image }}
layout: "layouts/page.html"
id:
hero:
content_blocks: []
---