---
title: Lesson 7—Markdown, liquid and njk
previous: /lesson-6
next: /lesson-8
---

## Luquid

By default, in 11ty, the default `.html` extensions is parsed by Liquid tempalte engine.

Liquid template has either .liquid extension or reuse .html extension. 

## Njk template

Njk template has extension .njk

It is similar to Liquid. 


## Basic of Markdown

Markdown was first introduced by John Gruber to express content in plain text. It is an opposite of Markup language, that’s why it is called markdown. We can express headings, bold, emphasis, list in markdown. These are the common content structure when writing an article. 

Markdown has extension .md

Sometimes, we may find that markdown formatting is not enough. We can write HTML for those content. The purpose is markdown was not to replace HTML. It was to express common styles without the need to write Markup language. 

When we write in plain text, markdown formatting allows us to stay in the flow without distraction by the Markup syntax. 



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