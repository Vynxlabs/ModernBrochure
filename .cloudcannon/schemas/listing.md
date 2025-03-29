---
id:
draft: true
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
title:
metaDesc:
customCode:
  headCode: ""
  bodyCode: ""
tags:
listingSetup:
  primaryImage:
  imageAltText:
  canExpire: false
  expireDate:
  images: [bookshop:generic/image]
pageLink:
permalink: >-
  /listing/{% assign id = id | uuidHashFilter%}{% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink | append: "-" | append: id  }}{% else %}{{  page.filePathStem |fileSubstringFilter | append: id }}{% endif %}{% endcapture %}/{{varPagePath | strip}}/index.html
layout: "layouts/page.html"
hero:
  _bookshop_name: sections/simpleHero
content_blocks:
  - _bookshop_name: sections/imageCarousel
  - _bookshop_name: sections/informationCards
_inputs:
  headCode:
    type: "code"
    comment: "Add code at the end of the <head> tag"
  bodyCode:
    type: "code"
    comment: "Add code before the </body> tag"
  tags:
    type: multiselect
    options:
      values: data.listingTags
  expireDate:
    hidden: "!canExpire"
  images:
    comment: "The first image will be used as the primary image will be used for listing cards"
---
