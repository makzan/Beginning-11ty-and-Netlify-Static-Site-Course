---
title: Lesson 8—Configuration with .eleventy.js
description: "We can configure 11ty with `.eleventy.js` file."
previous: /lesson-7
next: /lesson-9
---

## What is .eleventy.js file?

`.eleventy.js` file is the configuration file for eleventy. It is a JavaScript file becasue Eleventy is built on JavaScript.

To get started configuring eleventy, First we need to create a JavaScript file named `.eleventy.js` under the root project folder.

```js
module.exports = function(eleventyConfig) {
}
```



We will put all the configurations inside this function.

`.eleventy.js` is a JavaScript file becasue Eleventy is built on JavaScript.


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




## Adding filters to transform output rendering

Let’s say we have a collection of task data. We want to display the date and the title of the task. The date is a full date-time string which might be too long for display. We want the `YYYY-MM-DD` format. We can create a custom filter to transform the string via JavaScript.

```js
module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
  });

};
```

Here is how we use the `toISOString` when listing tasks.

```html
<h1>All Tasks</h1>
<ul>
{% for task in collections.task reversed %}
  <li class="is-done-{{task.data.is_done}}">
    <h2>
      {{ task.date toISOString }}
      {{ task.data.title }}
    </h2>
    {{ task.templateContent }}
  </li>
{% endfor %}
</ul>
```








## Summary

In this lesson, we learnt that 11ty only process know file types. For example, `.html` and `.md` files. But for images and CSS files, 11ty won’t handle it by default and thus we won’t see those files in `_site` output folder.

`addPassthroughCopy` configuration function is designed for us to specific which folders or files we need 11ty to copy into the output folder.

