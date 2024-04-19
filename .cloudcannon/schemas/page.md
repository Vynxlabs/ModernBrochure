---
draft: true
title: ""
eleventyExcludeFromCollections: false
eleventyNavigation:
  pageKey: 
  key: {% if pageKey %}{{pageKey}}{% else %}{{title | slug}}{%endif %}
  order: 1
  title:
  parent:
pageLink: ""
permalink: {% if pageLink and pageLink | downcase == "blog" %}blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{%endif %}/index.html{% elsif pageLink %}"/{{ pageLink | slug }}/index.html"{% else %}"/{{ title | slug }}/index.html"{%endif %}
   
  
metaDesc: ""
layout: "layouts/base.html"
hero:
content_blocks: []
---
