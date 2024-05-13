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
  url:
pageLink: blog
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slug}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
pagination:
  data: collections.blog
  size: 22
  generatePageOnEmptyData: true
metaDesc: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/simpleHero
  heading:
    _bookshop_name: generic/heading
    content:
      highlightEyebrow: true
      eyebrow: asdfasdfasdfasdf
      headline: Welcome to the blog
      description: this is my cool blog
      headingHierarchy: h2
    styles:
      contentAlignment: center
      textAlignment: center
content_blocks:
  - _bookshop_name: sections/blogCards
    content: {}
    styles:
      color_group: primary
---
