---
_schema: default
draft: false
title: The Vynxlabs Blog
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: blog
  order: 1
  title:
  parent:
pageLink: blog
permalink: >-
  {% if pageLink and pageLink == 'blog' or pageLink == 'Blog' %}blog{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%endif
  %}/index.html {% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
metaDesc: ''
layout: layouts/base.html
hero:
content_blocks: []
---
