---
title: Lesson 10—Categories and Pagination
previous: /lesson-9
next: /lesson-11
---




## Code example of tagList collection


```js
eleventyConfig.addCollection("tagList", function(collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
});
```

## HTML to list all tags


```markdown
---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
permalink: /category/{{ tag }}/
eleventyComputed:
  title: "{{ tag }}"
---

# {{tag}}

Posts in <a href='/category/{{tag}}'>{{tag}}</a> category. List [all categories](/categories/) or [all posts](/archives).

<ul class="post-list">
{% for post in collections[tag] reversed %}
  <li>
    {{post.date toISOFormat}}
    <br>
    <a href={{post.url}}>
      {{post.data.title}}
    </a>
  </li>
{% endfor %}
</ul>
```