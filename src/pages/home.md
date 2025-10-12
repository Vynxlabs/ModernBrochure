---
_schema: default
draft: false
title: Home
eleventyExcludeFromCollections: false
disableNav: false
disableSitemap: false
removeFromNavigation: false
eleventyNavigation:
  key: Home
  order: 1
  title: null
  parent: null
  url: null
pageLink: /
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slugify}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{% assign pagelink = pageLink | slugify
  %}{{  page.filePathStem | fileSubstringFilter | append: pagelink | downcase
  }}/index.html{% else %}/{% assign title = title | slugify %}{{
  page.filePathStem | fileSubstringFilter | append: title | downcase
  }}/index.html{%endif %}
metaDesc: null
customCode:
  headCode: ''
  bodyCode: ''
addToCollections: false
layout: layouts/page.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: false
    sectionId: null
    eyebrow: Building a website shouldn't be hard
    headline: A Modern Small Business Template
    description: >-
      This template is simple and is ready to go. Just replace the images and
      the text to match your business.
    buttons:
      - _bookshop_name: generic/button
        url: '#contact'
        openInNewTab: false
        text: Contact us
        color_group: primary
        colorFromGroup: primary
        ghostButton: false
        formSubmit: false
    image:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/home/142005.jpg
      imageAlt: null
      yAxisPosition: null
      imageSizes: null
      class: null
      imageNumber: null
      imageWidths: null
  styles:
    color_group: primary
    contentAlignment: left
    textAlignment: left
    backgroundOpacity: 65
content_blocks:
  - _bookshop_name: sections/servicesSection
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: How we can help
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
      showNote: true
    styles:
      color_group: 66cae480-4329-460a-a1fa-5a80a3569411
      cardStyle: defaultCard
  - _bookshop_name: sections/reviewCards
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Kind Words from the Community
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
      usePersonImage: false
      reviews:
        - review: cf5af1f3-4b28-4280-a664-0ef482ae9215
          card_color_group: 66cae480-4329-460a-a1fa-5a80a3569411
          colorFromGroup: background
        - review: e8b58d19-77b3-4e15-9d00-88808b9dc2b4
          card_color_group: 66cae480-4329-460a-a1fa-5a80a3569411
          colorFromGroup: background
    styles:
      color_group: primary
  - _bookshop_name: sections/sideBySideStandard
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: About us
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
      entries:
        - _bookshop_name: generic/leftRight
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: In the business for over 20 years
                description: >-
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                buttons: []
                headingHierarchy: h2
              styles:
                contentAlignment: center
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup: null
                contrastAgainst: null
                textClassOverride: null
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/home/2148366651.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
              imageWidths: null
            entryNumber: 0
          styles:
            color_group: 66cae480-4329-460a-a1fa-5a80a3569411
            colorFromGroup: background
    styles:
      color_group: primary
      startImageRight: false
      fullWidth: true
  - _bookshop_name: sections/simpleForm
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Send us a message
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
      form:
        _bookshop_name: simple/formBuilder
        formName: Home Contact
        sectionId: contact
        successPage: null
        form_elements:
          - _bookshop_name: generic/form/textInput
            label: First Name
            placeholder: Jhon
            id: 5818e354-310b-46a6-a1e3-3588d865d162
            required: true
            helperText: ''
          - _bookshop_name: generic/form/textInput
            label: Last Name
            placeholder: Doe
            id: 54386c74-6812-47b1-8122-0f86e03b26f4
            required: true
            helperText: ''
          - _bookshop_name: generic/form/emailInput
            label: Email
            id: 63eefe6d-cf3c-4a8b-97d8-44b2ab761400
            required: true
            placeholder: Jdoe@example.com
            helperText: ''
          - _bookshop_name: generic/form/phoneInput
            label: Phone
            id: 3f4a014e-d38a-431c-8e1f-f0f99cec6cbe
            required: true
            placeholder: 208-000-0000
            helperText: ''
          - _bookshop_name: generic/form/textAreaInput
            label: Message
            placeholder: I was wondering about...
            id: 8b69047b-2189-4319-ad16-5b385bd7cd79
            rows: 4
            required: false
            helperText: ''
          - _bookshop_name: generic/form/simpleText
            text: '* are required'
        submitButton:
          text: Submit
          color_group: primary
          colorFromGroup: primary
          ghostButton: false
          formSubmit: true
        inboxKey: null
        subject: null
    styles:
      color_group: primary
  - _bookshop_name: sections/blogCardsPartial
    contents:
      sectionId: null
      showNote: true
      heading:
        _bookshop_name: generic/headingHorizontal
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Industry insights
          description: These are some insights about our industry.
          buttons: []
          headingHierarchy: h2
        styles:
          headingRight: false
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup: null
          contrastAgainst: null
      randomize: false
    styles:
      color_group: primary
      cardStyle: default
_inputs:
  removeFromNavigation:
    hidden: true
  eleventyNavigation:
    hidden: true
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
  addToCollections:
    type: switch
    comment: Enabling this allows this page to be added to collections of your choosing
  tags:
    hidden: '!addToCollections'
    type: multiselect
    options:
      values: 'data.pageCollections.tags[*]'
  collectionImage:
    hidden: '!addToCollections'
  imageAltText:
    hidden: '!addToCollections'
  keyInformation:
    hidden: '!addToCollections'
    label: Key information
    comment: >-
      Short description or summary for this page. Will be shown on the
      collection cards
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
---

