---
_schema: default
draft: false
title: Hero
eleventyExcludeFromCollections: false
eleventyNavigation:
  key: services
  order: 1
  title: all services
  parent:
pageLink: hero
permalink: /{{ pageLink | slug }}/index.html
pagination:
  data: collections.blog
  size: 22
metaDesc: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/fullImageHero
  content:
    highlightEybrow: true
    eyebrow: This is my really cool eyebrow text
    headline: >-
      This is my headline talking about all the cool stuff my business does and
      things
    description: >-
      This is my description talking about how cool my business is at doing
      stuff compared to other businesses
    buttons:
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Sign Up
        color_group: orange3
        ghostButton: false
        blackText: false
        formSubmit: false
        form: false
      - _bookshop_name: generic/button
        url: '#'
        openInNewTab: false
        text: Contact us
        color_group: orange3
        ghostButton: true
        blackText: false
        formSubmit: false
        form: false
    image:
      _bookshop_name: generic/image
      imagePath: /images/tree.jpg
      imageAlt: Single tree in a field
      imageSizes:
      class:
  styles:
    color_group: orange3
    contentAlignment: left
    textAlignment: left
    backgroundOpacity: 35
content_blocks:
  - _bookshop_name: sections/blogCardsPartial
    contents:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: true
          eyebrow: Its free!
          headline: Check out the blog
          description: Looking for more? [See all our posts](/blog/ "blog")
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
      randomize: true
    styles:
      color_group: magic0
  - _bookshop_name: sections/simpleForm
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow:
          headline: primary heading
          description:
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
      description: >-
        fadfasdfasdfasfasdfasdfasdfasdfasdfasd asdf asdfasd fas
        dfasfasdfasdfasdff
      form:
        _bookshop_name: simple/formBuilder
        formName: ''
        sectionId:
        successPage:
        form_elements:
          - _bookshop_name: generic/form/checkBoxGroup
            label: Day
            id: 39aeb58c-c2f7-4697-bb2f-5d679405bcec
            checkboxes:
              - label: Monday
                id: 8e2a29f6-5666-4231-a24f-27f89a923a6f
                checked: false
                required: false
              - label: Wednesday
                id: 669bd2a9-764c-4cca-bbc5-162748eaa9ed
                checked: true
                required: true
              - label: Friday
                id: 3560883e-5d4e-4c8f-a294-44dc5c75ee9c
                checked: false
                required: false
            arrangement: inline
            helperText: Hello
          - _bookshop_name: generic/form/radioButtonGroup
            label: My group
            id: 74ede366-8d1d-41a2-b4a8-5d3e0bbbfc6d
            radioButtons:
              - label: One radio
                id: 8361a61d-07e8-4ddf-83e1-9094c651b5c1
                checked: true
                required: false
              - label: My other radio
                id: b19ef905-1438-4690-9779-ebca47418b7b
                checked: false
                required: false
              - label: Third
                id: c72e0c29-8766-48df-9f8e-ce0ae9695fd5
                checked: false
                required: false
              - label: Fourth
                id: f14b3676-e1b3-4f88-ad22-d53bf86de98f
                checked: false
                required: false
              - label: Fifth
                id: 66d9e531-2186-4cef-923e-e6e89e2a5725
                checked: false
                required: false
              - label: Sixth
                id: f91f101b-2fa5-4ffa-8486-86364d49fb73
                checked: false
                required: false
            arrangement: stacked
            helperText: Choose 1
          - _bookshop_name: generic/form/countrySelectInput
            label: asdfasdf
            id: 16ed8b71-7eaf-42d0-bd6d-a793a8c90fbb
            required: true
            helperText: asdfasdf
          - _bookshop_name: generic/form/dateInput
            label: Choose a date
            id: b8d87900-f8a9-4e7e-ab16-1668637c8736
            required: true
            minToday: false
            min:
            maxToday: false
            max:
            helperText: Some date
          - _bookshop_name: generic/form/emailInput
            label: Email
            id: c33537aa-f69a-4408-8ed2-fd1083293a61
            required: true
            placeholder: jsmith@example.com
            helperText: Use your business email
          - _bookshop_name: generic/form/phoneInput
            label: Business Phone
            id: 01eb32bd-4942-448b-adef-30d28c25f60e
            required: true
            placeholder: 208-555-5555
            helperText: Use your business phone number
        submitButton:
          text: submit
          color_group: primary
          ghostButton: false
          blackText: false
          formSubmit: true
    styles:
      color_group: primary
---
## This is me adding some content

Something about my service being awesome

### asdfasdfasdfasdfasdfasdf

asdfasdfasdfasdfasdfasf

* 4t2This is my list
* lel

Now this is my ***other*** list:

1. 456
2. asdf
3. a456

#### Heading 4

This is some text

##### Heading 5

This is some more text

###### Heading 6

This is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the textThis is all the text

![tree](/images/tree.jpg "tasdfasdf")

&nbsp;