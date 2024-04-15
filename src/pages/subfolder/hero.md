---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: service
  order: 1
  title: Services
  parent:
pageLink: hero
permalink: /{{ pageLink | slug }}/index.html
metaDesc: ''
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: true
    eyebrow: This is my really cool eyebrow text
    headline: >-
      This is my headline talking about all the cool stuff my business does and
      things
    description: >-
      This is my description talking about how cool my business is at doing
      stuff compared to other businesses
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
    contentAlignment: left
    textAlignment: left
    backgroundOpacity: 35
content_blocks: []
---
