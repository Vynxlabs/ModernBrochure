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
  url:
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
          headline: Start a conversation
          description: Reach out if you are ready to get started or have questions
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
      description: ''
      form:
        _bookshop_name: simple/formBuilder
        formName: SiteStitcher Contact
        sectionId:
        successPage:
        form_elements:
          - _bookshop_name: generic/form/sectionHeading
            text: Basic Info
          - _bookshop_name: generic/form/textInput
            label: First and Last name
            placeholder: John Smith
            id: 8e393b31-7dc1-4089-a3ff-3dbb4c5dbda9
            required: true
            helperText: You do not need to enter your middle name(s)
          - _bookshop_name: generic/form/emailInput
            label: Email
            id: 4035ba28-544a-48a0-8d29-094e82401aeb
            required: true
            placeholder: Jdoe@example.com
            helperText: I'll contact you at this email
          - _bookshop_name: generic/form/phoneInput
            label: Phone number
            id: fc428993-cdb7-499e-af48-4e592e97c2ff
            required: false
            placeholder: 123-456-1234
            helperText:
          - _bookshop_name: generic/form/sectionBreak
            line: false
          - _bookshop_name: generic/form/sectionHeading
            text: Service
          - _bookshop_name: generic/form/radioButtonGroup
            label: What plan are you interested in?
            id: e96c2875-302d-4896-8088-93298fc81d7f
            radioButtons:
              - label: Basic
                id: 2bdcecaa-231f-464e-9269-51f248ccff4a
                checked: true
                required: false
              - label: Premium
                id: 170f72a5-c5f1-4169-9688-0cb2eae87392
                checked: false
                required: false
              - label: Mega lux
                id: 3bed76e8-0ffa-4bf8-852c-257caba37c7a
                checked: false
                required: false
            arrangement: stacked
            helperText:
          - _bookshop_name: generic/form/checkBoxGroup
            label: Interested in any addons?
            id: 81d49f70-e9cb-4c90-9f45-b56f4d86a2ad
            checkboxes:
              - label: Blog
                id: 4d188e9a-5fb2-462e-bd76-7a716d210946
                checked: false
                required: false
              - label: Website setup up / rebuild
                id: a309adfc-fe0f-44de-accb-5641f90eec0e
                checked: false
                required: false
              - label: Done for you maintenance and updates
                id: 4f21b816-a46c-43e9-ba82-f05aa50809b8
                checked: false
                required: false
            arrangement: stacked
            helperText:
          - _bookshop_name: generic/form/radioButtonGroup
            label: Do you have more questions?
            id: 6dff3154-6a93-49dc-9504-10c755603c2d
            radioButtons:
              - label: I'm ready to get started
                id: 5f006762-fe07-4e88-a429-786b574fbe44
                checked: true
                required: false
              - label: I have questions
                id: 2122d090-b14e-4260-b589-d21d5b8d0e3b
                checked: false
                required: false
            arrangement: inline
            helperText:
          - _bookshop_name: generic/form/textAreaInput
            label: Message
            placeholder: I'm ready to get started!
            id: d2b09574-12f7-4ce4-b6ad-a8b073815ec6
            rows: 4
            required: false
            helperText: If you have any questions ask them here
        submitButton:
          text: Submit
          color_group: rose1
          ghostButton: true
          blackText: true
          formSubmit: true
    styles:
      color_group: rose1
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