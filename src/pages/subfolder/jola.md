---
_schema: default
draft: false
title: jola
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: page
  order: 1
  title:
  parent:
pageLink: dld
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
