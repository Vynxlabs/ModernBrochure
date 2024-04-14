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
    highlightEybrow: true
    eyebrow: My Eybroe
    headline: This is my really cool headline telling you about all my stuff
    description: THis is ym amazing description convincing you to buy
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Contact Us
        color_group: primary
        ghostButton: false
        blackText: false
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Button text
        color_group: magic0
        ghostButton: true
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
