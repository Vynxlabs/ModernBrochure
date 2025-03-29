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
  /listing/{% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink }}{% else %}{% assign title = title | slugify%}{{  page.filePathStem |fileSubstringFilter | append: title }}{% endif %}{% endcapture %}/{{varPagePath | strip}}/index.html
layout: "layouts/page.html"
hero:
content_blocks: []
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
