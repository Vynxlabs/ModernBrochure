---
draft: true
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title: 
metaDesc: 
customCode:
  headCode: ""
  bodyCode: ""
happeningImage: 
imageAltText:
image: >-
    {% if happeningImage %}{{happeningImage}}{% else %}{{happenings.defaultImage}}{% endif %}
cancelled: false
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
_inputs:
  hero:
    image:
      hidden: false
  content_blocks:
    image:
      hidden: false
  headCode:
    type: "code"
    comment: "Add code at the end of the <head> tag"
  bodyCode:
    type: "code"
    comment: "Add code before the </body> tag"
---