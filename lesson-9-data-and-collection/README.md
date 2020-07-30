---
title: Lesson 9—Data and Collection
previous: /lesson-8
next: /lesson-10
---


- Tag
- Data merge
- Custom collections


## Collection

`_includes/layout.html` file:

```html
<ul>
{{"{% for post in collections.post reversed %} "}}
  <li>
    <a href="{{post.url}}">
      {{ "{{ post.data.title " }}}}
    </a>
  </li>
{{"{% endfor %} "}}
</ul>
```



`_includes/post.html` file:

```html
---
layout: layout
---
<h1>{{title}}</h1>
<p>Published at {{page.date}}</p>
{{content}}
```


## Deep merge

![deep merge explain](/lesson-9-data-and-collection/deep-merge.png)

We can have default data defined in a folder via `folder_name.json`. Depending on the characteristics of the data type in the folder, we may either want an individual item to replace this default data or merge the data set.

```js
module.exports = function(eleventyConfig) {

  // Allow data cascading instead of replacing. Mainly for post tags.
  eleventyConfig.setDataDeepMerge(true);

};
```



## Using custom collection to get latest 3 items

In this example, we create a custom collection to fetch the latest 3 items via JavaScript.

```js
module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("lastThreeTasks", function(collection) {
    return collection.getFilteredByTag('task').slice(-3).reverse()
  });

};
```

Now we can use the collection, which is an array of items.


```html
<h2>Latest 3 Tasks</h2>
<ul>
{{"{% for task in collections.lastThreeTasks %}"}}
  <li class="is-done-{{task.data.is_done}}">
    {{ "{{ task.date toISOString " }}}}
    {{ "{{ task.data.title " }}}}
  </li>
{{"{% endfor %}"}}
</ul>
```




## Adding shortcode

Shortcode is a JavaScript code snippet to return a new output from the given input.

For example, the following shortcode get the last post title from the given collection.

```js
module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode("lastPostTitle", function(collection) {
    return collection[collection.length-1].data.title
  });

}
```

Now we can use the code in our HTML or Markdown content:


```html
<p>My latest post is {{"{% lastPostTitle collections.post %}"}}.</p>
```