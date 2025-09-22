---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title: Example blog post
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
date: 2025-09-22T03:26:02Z
happening: false
cancelled: false
happeningDate:
summary:
author: cf5af1f3-4b28-4280-a664-0ef482ae921b
tags:
  - Industry Insights
blogImage:
imageAltText:
image: '{% if blogImage %}{{blogImage}}{% else %}{{blog.defaultImage}}{% endif %}'
permalink: >-
  /blog/{% assign title = title | slugify %}{{ page.filePathStem |
  fileSubstringFilter | append: title | downcase }}/index.html
socialImage: '{{ image }}'
_inputs:
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---
## Once upon a time...

There was a...