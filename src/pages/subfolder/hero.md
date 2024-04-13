---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: Hero
  order: 1
  title: lel
  parent:
pageLink: hero
permalink: /{{ pageLink | slug }}/index.html
metaDesc: Yoga sessions in Boise
layout: layouts/base.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: false
    eyebrow: 'Eyebrow highlight '
    headline: My headline
    description: This is my very cool description about my service
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
        text: Button text
        color_group: rose1
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
