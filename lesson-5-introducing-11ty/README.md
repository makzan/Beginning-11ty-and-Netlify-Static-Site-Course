---
title: Lesson 5—Introducing 11ty
previous: /lesson-4
next: /lesson-6
---


- Build output to _site
- Netlify setting to build 11ty

<iframe src="https://slides.com/makzan/11ty-and-netlify-demo/embed?token=uBQ1Ocke&style=hidden" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Multiple files: Pain points



- Template code are duplicated.
- Template code changes requires repeated file update process.
- Difficult to ensure all files has latest template code changes.


## Solution: Static site generators

Solution: 11ty


- Able to define layout template in separated files.
- Able to include the layouts in content page.
- Template changes only happen in one place.


## Summary

Build command: **npx @11ty/eleventy**

Publish directory: **_site**

Layout file: **/_includes/layout.html**

Content block: **{{content}}**

Using layout:

```
---
layout: layout.html
---


Content goes here.

```


## Configuring 11ty with .eleventy.js file


To get started configuring eleventy, First we need to create a JavaScript file named `.eleventy.js` under the root project folder.

```js
module.exports = function(eleventyConfig) {
}
```