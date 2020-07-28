---
title: Lesson 5—Introducing 11ty
previous: /lesson-4
next: /lesson-6
---



<iframe src="https://slides.com/makzan/11ty-and-netlify-demo/embed?token=uBQ1Ocke&style=hidden" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Multiple files: Pain points



- Template code are duplicated.
- Template code changes requires repeated file update process.
- Difficult to ensure all files has latest template code changes.


## Solution: Static site generators

Static Site Generator, a.k.a.SSG, compiles the given files and templates into static outputs.

- Able to define layout template in separated files.
- Able to include the layouts in content page.
- Template changes only happen in one place.

## Choosing static site generators

There are many static site generators. Each comes with its own characteristics and pros & cons.

You can find a list of Static Site Generators in the [StaticGen.com](https://www.staticgen.com)

Here is a quick list of few popular SSGs:

- Next.js, written in JavaScript and based on React.
- Hugo, written in Go.
- Gatsby, written in JavaScript and based on React.
- Nuxt, written in JavaScript and based on Vue.
- 11ty, written in JavaScript.
- Jekyll, Written in Ruby, native support from Github pages.

Our choice here is 11ty. It is easy and flexible.


## Summary

Build command: **npx @11ty/eleventy**

Publish directory: **_site**

Layout file: **/_includes/layout.html**

Content block: **{{"{{content"}}}}**

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


We will put all the configurations inside this function.
