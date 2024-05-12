---
_schema: default
draft: false
eleventyExcludeFromCollections: false
title: Social image test
metaDesc: testing
date: 2024-05-12T01:10:32Z
author: cf5af1f3-4b28-4280-a664-0ef482ae921b
tags:
  - Business Tips
blogImage: >-
  /assets/uploads/3d-illustration-figma-graphic-design-web-design-black-white-black-background.jpg
imageAltText:
image: '{% if blogImage %}{{blogImage}}{% else %}{{blog.defaultImage}}{% endif %}'
permalink: /blog/{{ title | slug }}/index.html
socialImage: '{{image}}'
---
## Once upon a time...

There was a...