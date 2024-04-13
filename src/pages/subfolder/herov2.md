---
_schema: default
draft: true
title: Herov2
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Herov2
  order: 1
  title:
  parent:
pageLink: herov2
permalink: /{{ pageLink | slug }}/index.html
metaDesc: ''
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    eyebrow: Eybroww
    headline: Headline
    description: Hello World!
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: testete
        color_group: primary
        ghostButton: false
        blackText: false
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: testtdftdf
        color_group: primary
        ghostButton: true
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt: tree in a field
      imageSizes:
  styles:
    color_group: primary
    contentAlignment: left
content_blocks: []
---
