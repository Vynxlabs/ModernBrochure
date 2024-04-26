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
pagination:
  data: collections.blog
  size: 22
metaDesc: ''
layout: layouts/page.html
content_blocks:
  - _bookshop_name: sections/blogCardsPartial
    contents:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: true
          eyebrow: fsdfdsf
          headline: Check out the blog
          description: Explore our free knowledge
          headingHierarchy: h2
        styles:
          contentAlignment: left
          textAlignment: left
      randomize: true
    styles:
      color_group: cotton_candy2
  - _bookshop_name: sections/blogCards
    styles:
      color_group: primary
---
