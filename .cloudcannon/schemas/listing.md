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
tagColors: colorful
canExpire: false
expireDate:
permalink: >-
  /listings/{% assign id = id | uuidHashFilter%}{% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink | slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink | append: "-" | append: id  }}{% else %}{{  page.filePathStem |fileSubstringFilter | append: id }}{% endif %}{% endcapture %}/{{varPagePath | strip}}/index.html
layout: "layouts/listing.html"
heading:
  eyebrow:
  listingTitle:
  keyInformation:
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
    comment: "The date the listing will expire. Time must be entered in UTC time."
    type: datetime
  images:
    comment: "The first image will be used as the primary image will be used for listing cards"
  listingTitle:
    comment: "The title of the listing. Will be used on the listing cards. If left blank, the page title will be used"
    type: markdown
    options:
      link: false
      blockquote: false
      bold: false
      italic: true
      strike: true
      subscript: true
      superscript: true
      underline: false
      bulletedlist: false
      numberedlist: false
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
      initial_height: 150
  keyInformation:
    label: Key information
    comment: "Short description of the listing. Will be shown on the listing cards. Should be a few sentences long"
    type: markdown
    options:
      link: true
      blockquote: false
      bold: true
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
