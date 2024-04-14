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
    eyebrow: Very cool eyebrow
    headline: This is my headline about how cool my business is
    description: This is even more text talking about how cool this business is
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Sign up
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
      imageAlt: Single tree in field
      imageSizes:
      class:
  styles:
    color_group: primary
    contentAlignment: left
    backgroundOpacity: 50
content_blocks: []
---
