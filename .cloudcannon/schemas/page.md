---
draft: true
title: ""
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: page
  order: 1
  title:
  parent:
pageLink: 
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slug}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
metaDesc: ""
layout: "layouts/page.html"
hero:
content_blocks: []
---
