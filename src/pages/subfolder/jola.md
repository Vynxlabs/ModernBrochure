---
_schema: default
draft: false
title: jola
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Hero2
  order: 1
  title:
  parent:
pageLink: dld
permalink: >-
  {% if pageLink and pageLink == 'blog' or pageLink == 'Blog' %}blog{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%endif
  %}/index.html {% elsif pageLink %}/{{ pageLink | slug }}/index.html{% else
  %}/{{ title | slug }}/index.html{%endif %}
pagination:
  data: collections.blog
  size: 22
metaDesc: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/simpleHero
  heading:
    _bookshop_name: generic/heading
    content:
      highlightEyebrow: false
      eyebrow: And my eyebrow
      headline: >-
        This is my hero This is my hero This is my hero This is my hero This is
        my hero This is my hero
      description: Do you think its cool?
      headingHierarchy: h2
    styles:
      contentAlignment: left
      textAlignment: left
content_blocks:
  - _bookshop_name: sample
    text: Hello World!
  - _bookshop_name: generic/heroLibraryIcon
    heroLibraryIconName: academic-cap
    iconSize: large
    iconType: outline
    roundedBorder: false
    themeColor: true
    color: '#6c9e22'
---
