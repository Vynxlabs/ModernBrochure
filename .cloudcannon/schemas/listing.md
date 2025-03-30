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
pageLink:
tags:
canExpire: false
expireDate:
permalink: >-
  /listing/{% assign id = id | uuidHashFilter%}{% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink | append: "-" | append: id  }}{% else %}{{  page.filePathStem |fileSubstringFilter | append: id }}{% endif %}{% endcapture %}/{{varPagePath | strip}}/index.html
layout: "layouts/listing.html"
heading:
  eyebrow:
  headline:
  description:
images: []
buttons: []
overviewCards:
details:
extra_blocks: []
_structures:
  cards:
    style: select
    value:
      eyebrow:
      headline:
      description:
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
  buttons:
    label: Action bar
    comment: "These are button that will always be visible at the bottom of the screen. Greate for CTAs like 'Call now', 'contact us', etc" 
  description:
    label: Key information
    comment: "Short description of the listing. Will be shown on the listing cards. Should be a few sentences long"
  headline:
    label: Listing Title
    comment: "Main title of the listing. Will be used on the listing cards. If left blank, the page title will be used"
  details:
    comment: "This for EVERYTHING else you want someone to know about the listing"
    type: markdown
    options:
      link: true
      blockquote: false
      bold: true
      format: p h3 h4 h5 h6
      italic: true
      strike: true
      subscript: true
      superscript: true
      underline: true
      bulletedlist: true
      numberedlist: true
      indent: false
      outdent: false
      code: false
      embed: false
      horizontalrule: false
      image: false
      table: false
      undo: true
      redo: true
      removeformat: true
      copyformatting: true
      snippet: true
  overviewCards:
    type: array
    options:
      structures: _structures.cards
---
