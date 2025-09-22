---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title: Custom Coffee Grinds
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
serviceImage: /assets/uploads/listing.jpeg
imageAltText:
category:
summary:
pageLink: does this work
permalink: >-
  /services/{% capture varPagePath %}{% if pageLink%}{% assign pageLink =
  pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append:
  pageLink }}{% else %}{% assign title = title | slugify%}{{  page.filePathStem
  |fileSubstringFilter | append: title }}{% endif %}{% endcapture
  %}/{{varPagePath | strip}}/index.html
layout: layouts/page.html
id: 35c8fb14-dfa6-44ea-ab33-dfa4f6676f7d
hero:
content_blocks: []
_inputs:
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---
