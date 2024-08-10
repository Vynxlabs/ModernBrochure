---
draft: true
title: ""
eleventyExcludeFromCollections: false
removeFromNavigation: false
eleventyNavigation:
  key: page
  order: 1
  title:
  parent:
  url:
pageLink: 
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slugify}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{% assign pagelink = pageLink | slugify %}{{  page.filePathStem | fileSubstringFilter | append: pagelink }}/index.html{% else
  %}/{% assign title = title | slugify %}{{ page.filePathStem | fileSubstringFilter | append: title }}/index.html{%endif %}
pagination:
  data: collections.blog
  size: 22
  generatePageOnEmptyData: true
metaDesc: ""
layout: "layouts/page.html"
hero:
content_blocks: []
_inputs:
  eleventyNavigation:
    hidden: '!removeFromNavigation'
---
