---
_schema: default
draft: true
title: Home
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Home
  order: 1
  title:
  parent:
  url:
pageLink: /
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slug}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
pagination:
  data: collections.blog
  size: 22
  generatePageOnEmptyData: true
metaDesc: Testing
layout: layouts/page.html
hero:
content_blocks: []
---
