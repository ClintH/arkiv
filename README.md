# Arkixd

# Editing

## Create a Markdown file

File should be located: `pages\projects\[year-your-project].md`

Naming conventions:

- Use dashes to replace spaces
- Start with the year of production
- Don't use punctuation

Start with this project template:

```
---
templateKey: project-post
title: Rocket
subTitle: A rocket ship to the moon
course: Prototyping
creators: Ada
year: 2016
yearLevel: 3
tags:
  - outdoors
  - space
image: /images/uploads/rocket.jpg
contributions:
  - title: Fuelling
    creators:
      - Sara
    description: |-
      Fuelling the rocket is important.

      ![null](/images/uploads/fuel.jpg)
---

Lorem ipsum.
```

## Frontmatter

The top section, between the three dashes is the _frontmatter_. It contains metadata about the project and the contributions section. The remainder of the file (after the last triple-dash line) is Markdown text. It appears before listed contributions.

Don't edit 'templateKey'. The rest should be self-explanatory.

## Contributions

The contributions section of the frontmatter is a list, with each item containing `title`, `creators`, and `description` fields.

Eg:

```
contributions:
  - title: Mixing
    creators: Anna
    description: |-
      First mix the ingredients
  - title: Bake
    creators: Blake
    description: |-
      Then bake it in the oven
```

Note that the `description` field can contain multi-line Markdown when the special `|-` characters are added to the end.

# Development

Install pre-reqs

```
$ npm install
```

Develop with live reload

```
$ npm run develop
```

Generate static files

```
$ npm run build
$ npm run serve
```
