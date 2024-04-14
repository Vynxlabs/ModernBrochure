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
    eyebrow: The best in the business
    headline: This is my awesome headline explaining how I am the nest
    description: We are the best in the business because we just simply are
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
        text: Sign Up
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
    backgroundOpacity: 30
content_blocks: []
---
