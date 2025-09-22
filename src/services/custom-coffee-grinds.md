---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title: Custom Coffee Grinds
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
serviceImage: /assets/uploads/listing.jpeg
imageAltText:
category:
summary:
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
    sectionId:
    heading:
      _bookshop_name: generic/heading
      content:
        highlightEyebrow: false
        eyebrow: ''
        headline: heading
        description: ''
        buttons: []
        headingHierarchy: h2
      styles:
        contentAlignment: center
        textAlignment: center
        visualInterest: none
        visualInterestColor: '#000000'
        highContrast: false
        contrastColorGroup:
        contrastAgainst:
        textClassOverride:
    backgroundImage:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/aliensunrise-1.jpg
      imageAlt:
      yAxisPosition:
      imageSizes:
      class:
      imageNumber:
  styles:
    color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
    backgroundOpacity: 50
content_blocks:
  - _bookshop_name: sections/simpleTextBlock
    content:
      sectionId:
      heading:
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
