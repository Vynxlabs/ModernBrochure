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
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: false
    eyebrow:
    headline:
    description: Hello World!
    buttons: []
    image:
      _bookshop_name: generic/image
      imagePath:
      imageAlt:
      imageSizes:
      class:
  styles:
    color_group: primary
    contentAlignment: left
    textAlignment: left
    backgroundOpacity: 50
content_blocks:
  - _bookshop_name: sections/blogCards
    styles:
      color_group: rose1
---
