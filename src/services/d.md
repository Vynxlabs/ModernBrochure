---
_schema: default
draft: false
eleventyExcludeFromCollections: false
title: d
metaDesc:
serviceImage:
imageAltText:
category:
summary:
permalink: /services/{{ title | slug }}/index.html
pagination:
  data: collections.blog
  size: 22
layout: layouts/page.html
hero:
  _bookshop_name: sections/simpleHero
  heading:
    _bookshop_name: generic/heading
    content:
      highlightEyebrow: false
      eyebrow: Services
      headline: primary heading
      description: asdf dfasdfasdf sdf asdf asd sdf asdfsdf asdf asd
      headingHierarchy: h2
    styles:
      contentAlignment: center
      textAlignment: center
content_blocks:
  - _bookshop_name: sections/blogCardsPartial
    contents:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow:
          headline: primary heading
          description: ''
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
      randomize: false
    styles:
      color_group: primary
---
