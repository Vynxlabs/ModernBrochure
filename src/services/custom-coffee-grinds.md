---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title: Custom Coffee Grinds
metaDesc: null
customCode:
  headCode: ''
  bodyCode: ''
serviceImage: /assets/uploads/custom-coffee-grinds/2148209248.jpg
imageAltText: null
category: null
summary: null
pageLink: does this work
permalink: >-
  /services/{% capture varPagePath %}{% if pageLink%}{% assign pageLink =
  pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append:
  pageLink }}{% else %}{% assign title = title | slugify%}{{  page.filePathStem
  |fileSubstringFilter | append: title }}{% endif %}{% endcapture
  %}/{{varPagePath | strip}}/index.html
layout: layouts/page.html
id: 35c8fb14-dfa6-44ea-ab33-dfa4f6676f7d
hero:
  _bookshop_name: sections/bannerHero
  content:
    sectionId: null
    heading:
      _bookshop_name: generic/heading
      content:
        highlightEyebrow: false
        eyebrow: ''
        headline: Custom Coffees
        description: ''
        buttons: []
        headingHierarchy: h2
      styles:
        contentAlignment: center
        textAlignment: center
        visualInterest: none
        visualInterestColor: '#000000'
        highContrast: false
        contrastColorGroup: null
        contrastAgainst: null
        textClassOverride: null
    backgroundImage:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/custom-coffee-grinds/2148209248.jpg
      imageAlt: null
      yAxisPosition: 50
      imageSizes: null
      class: null
      imageNumber: null
      imageWidths: null
  styles:
    color_group: primary
    backgroundOpacity: 50
content_blocks:
  - _bookshop_name: sections/simpleTextBlock
    content:
      sectionId: null
      heading: null
      text:
        _bookshop_name: generic/textBlock
        text: >-
          ### Your rich text content

          You can use **bold text** and *italic text* along with
          [links](http://google.com) and others options.
    styles:
      color_group: primary
_inputs:
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---

