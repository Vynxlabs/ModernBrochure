---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Hero
  order: 1
  title: HEROO
  parent:
pageLink: Hero
permalink: /{{ pageLink | slug }}/index.html
metaDesc: So much meta
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    eyebrow: Test
    headline: Testestsesesetset
    description: adfasdfasdfasdfasdfasdf
    button:
      - _bookshop_name: generic/button
        url: /menu/
        openInNewTab: false
        text: So much text
        color_group: primary
        ghostButton: false
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt: Tree in a field
      imageSizes:
  styles:
    color_group: primary
    contentAlignment: left
content_blocks: []
---
