---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Hero
  order: 1
  title:
  parent:
pageLink: mylocation
permalink: /{{ pageLink | slug }}/index.html
metaDesc: ''
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    eyebrow:
    headline:
    description: Hello World!
    button:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Text
        color_group: primary
        ghostButton: false
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt: Tree in the middle of a field
      imageSizes:
  styles:
    color_group: primary
    contentAlignment: left
content_blocks: []
---
