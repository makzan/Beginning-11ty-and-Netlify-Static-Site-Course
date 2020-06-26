---
title: Lesson 8—Passthrough copy with .eleventy.js
previous: /lesson-7
next: /lesson-9
---

`.eleventy.js` file is the configuration file for eleventy. It is a JavaScript file becasue Eleventy is built on JavaScript.





## Configuring addPassthroughCopy


One common usage is to copy the `css` folder and the `images` folder to the eleventy output.

By default, Eleventy will parse all the known file format into the corresponding output folder. That’s why our `html` and `md` files are handled automatically. But for the images and CSS files, Eleventy will by-pass the files until we explicitly tell Eleventy to copy the files. That’s why we have the following configuration.

```js
module.exports = function(eleventyConfig) {

  // Folders to copy into output.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  // If we use Netlify and has the _redirects file.
  eleventyConfig.addPassthroughCopy("_redirects");

}
```

## Copying files from sub-directory to root folders


```js
// Folders to copy into output.
eleventyConfig.addPassthroughCopy("images");
eleventyConfig.addPassthroughCopy("css");
eleventyConfig.addPassthroughCopy("_redirects");
eleventyConfig.addPassthroughCopy("wp-content");
eleventyConfig.addPassthroughCopy({ "_misc_root_files": "/" });
```