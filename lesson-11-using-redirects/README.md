---
title: Lesson 11—Using _redirects
previous: /lesson-10
next: /lesson-12
---


- One to one
- Many to many
- Many to one
- Pass through copy

__redirects_ file:
```
/* /index.html 200
```


```js
module.exports = function(eleventyConfig) {

  // Allow data cascading instead of replacing. Mainly for post tags.
  eleventyConfig.setDataDeepMerge(true);

  // Folders to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  // If we use Netlify and has the _redirects file.
  eleventyConfig.addPassthroughCopy("_redirects");
};
```


