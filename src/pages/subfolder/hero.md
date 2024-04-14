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
    eyebrow: This is my really cool eyebrow
    headline: >-
      This is my headline talking about all the cool stuff my business does and
      things
    description: This **text** is actually kind of hard to read
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Sign Up
        color_group: primary
        ghostButton: false
        blackText: false
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Contact us
        color_group: primary
        ghostButton: true
        blackText: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt: Single tree in a field
      imageSizes:
      class:
  styles:
    color_group: primary
    contentAlignment: center
    textAlignment: center
    backgroundOpacity: 40
content_blocks: []
---
