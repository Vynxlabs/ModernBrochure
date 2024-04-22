---
_schema: default
draft: false
title: The Vynxlabs 
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: blog
  order: 1
  title:
  parent:
pageLink: blog
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slug}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
metaDesc: ''
layout: layouts/feed.html
pagination:
  data: collections.blog
  size: 22
hero:
content_blocks: []
---
