---
_schema: default
draft: false
title: Herov3
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Herov3
  order: 1
  title:
  parent:
pageLink: mylocation
permalink: /{{ pageLink | slug }}/index.html
metaDesc: asdfasdfsadf
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    eyebrow: Mega brow
    headline: Headline
    description: Hello World!
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Button text
        color_group: primary
        ghostButton: false
        blackText: false
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Button text
        color_group: primary
        ghostButton: true
        blackText: true
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Button text
        color_group: whatda2
        ghostButton: false
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt:
      imageSizes:
  styles:
    color_group: primary
    contentAlignment: left
content_blocks: []
---
