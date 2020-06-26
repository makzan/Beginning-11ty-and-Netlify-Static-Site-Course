---
title: Lesson 6—Layouts template in 11ty
previous: /lesson-5
next: /lesson-7
---


- Meta data
- {{"{{content"}}}}
- Layout chain



```html
<html lang='en'>
<head>
  <title>A blog built by 11ty</title>
  <meta name='viewport' content='width=device-width'>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      max-width: 700px;
      margin: auto;
      padding: 1em;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <span>A sample blog</span>
      <a href='/'>Home</a>
    </nav>
  </header>
  {{content}}
</body>
</html>
```