---
_schema: default
title: Something
eleventyExcludeFromCollections: true
eleventyNavigation:
  key: Something
  order: 1
  title: New Title
  parent:
pageLink: something
permalink: /{{ pageLink | slug }}/index.html
metaDesc: SEO focused meta description
layout: layouts/page.html
---
