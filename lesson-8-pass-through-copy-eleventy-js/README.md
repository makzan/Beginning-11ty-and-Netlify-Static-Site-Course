---
title: Lesson 8—Passthrough copy with .eleventy.js
description: "11ty only process know file-type by default. We need to setup pass-through copy to copy asset folders and extra files into the _site output folder."
previous: /lesson-7
next: /lesson-9
---







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

We can configure the pass-through copy to copy files into a different path. For example, the following code snippet tells 11ty to copy all files inside `_misc_root_files` folder into the root `_site` output folder.

```js
eleventyConfig.addPassthroughCopy({ "_misc_root_files": "/" });
```

## Summary

In this lesson, we learnt that 11ty only process know file types. For example, `.html` and `.md` files. But for images and CSS files, 11ty won’t handle it by default and thus we won’t see those files in `_site` output folder.

`addPassthroughCopy` configuration function is designed for us to specific which folders or files we need 11ty to copy into the output folder.

