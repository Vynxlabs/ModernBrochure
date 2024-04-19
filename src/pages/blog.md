---
_schema: default
draft: false
title: The Vynxlabs Blog
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Blog
  order: 6
pageLink: blog
permalink: >-
  blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%
  endif %}/index.html
metaDesc: ''
layout: layouts/feed.html
pagination:
    data: collections.blog
    size: 10
content_blocks: []
---
