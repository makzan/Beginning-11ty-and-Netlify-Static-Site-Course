---
title: Lesson 11—Using _redirects
previous: /lesson-10
next: /lesson-12
---


- One to one
- Many to many
- Many to one
- Pass through copy


Here is an example to redirects all parts to index.html with 200 success status. The success status will keep the pa try so that we can further process it with JavaScript. This is also how the inQRCode.com works. 

__redirects_ file:
```
/* /index.html 200
```

## Passthrough copy

_redirects file is configuration file from Netlify, but we are using 11ty to build our files into _site outputs. 11ty will ignore files that it doesn’t recognize the file format. 

_redirects file is a file that obviously 11ty won’t recognize. So we need to tell 11ty generator to copy this file to the output folder for us. 

That’s why we need to configure addPassthroughCopy in the `.eleventy.js` file. 


```js
module.exports = function(eleventyConfig) {


  // If we use Netlify and has the _redirects file.
  eleventyConfig.addPassthroughCopy("_redirects");
};
```


