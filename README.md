# Editing

## Create a Markdown file

File should be located: `pages\projects\[year-your-project].md`

Naming conventions:

- Use dashes to replace spaces
- Start with the year of production
- Don't use punctuation

Use an existing Markdown file as a template.

## Frontmatter

The top section, between the three dashes is the _frontmatter_. It contains metadata about the project and the contributions section. The remainder of the file (after the last triple-dash line) is Markdown text. It appears before listed contributions.

Don't edit 'templateKey'. The rest should be self-explanatory.

## Images

Images can be referenced with Markdown: `!()[url 'title']`, where `url` is the path to your image, and `title` is a caption for the image. Make sure it's enclosed in quote marks and that quote marks aren't inside it. The `title` is optional but encouraged.

You must upload your image in the format of `year-lastname-number`, eg `2018-jensen-fig1.jpg`.

Example:

```
![](/images/uploads/2018-hakansson-fig10.jpg 'Testers found that ...')
```

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
