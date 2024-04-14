---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: HEro
  order: 1
  title: Lel
  parent:
pageLink: hero
permalink: /{{ pageLink | slug }}/index.html
metaDesc: ''
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: false
    eyebrow: My Eybroe
    headline: This is my really cool headline telling you about all my stuff
    description: Hello World!
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Contact Us
        color_group: primary
        ghostButton: false
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath:
      imageAlt:
      imageSizes:
  styles:
    color_group: primary
    contentAlignment: left
content_blocks: []
---
