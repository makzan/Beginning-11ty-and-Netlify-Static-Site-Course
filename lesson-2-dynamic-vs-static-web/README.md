---
title: Lesson 2—Dynamic vs. Static web
previous: /lesson-1
next: /lesson-3
---




## What are clients and servers?




<div class="action callout">

  Read: <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works' target='_blank'>How the Web works by MDN</a>

</div>



Web browsers and our devices are client-side.
The data center/computers that process our request and serve the web content are the servers.

<div class="question callout">

Which of the following is typically client?

1. Computers in the data center
2. Computers that store the whole website
3. Computers in classrooms
4. Computers that allow others to download files

<details>
<summary>Answer</summary>

_Computers in classrooms_. They are for consumers to use.

The followings are servers that usually consumers cannot reach.

- Computers in the data center
- Computers that store the whole website
- Computers that allow others to download files

</details>
</div>

<div class="question callout">

Which of the following is NOT client typically?

1. Mobile phones
1. Laptop computers
1. Computers in data center
1. Tablets at home

<details>
<summary>Answer</summary>

_Computers in data center_ is not client. Those computers are servers because they serve the content to consumers.

</details>

</div>

<div class="question callout">

Which of the following is server typically?

1. Laptop computers in company
1. Mobile phones that data center staffs bring
1. Computers that serve web site content
1. Web browsers such as Firefox and Google Chrome

<details>
<summary>Answer</summary>

_Computers that serve web site content_ is server typically.

</details>

</div>


## Web server that serves static files

Files that don’t need to be processed before sending back. For example, images files, HTML files, CSS files.

Static site is fast because:

It is just file passing, no intensive computation power required. The process time in server is minimal.
Static files can be distributed into different data centers all over the world, so that we can serve the content from the closes server to the visitors.

CDN
Please read the following introduction about Content Delivery Network.

https://www.cloudflare.com/learning/cdn/what-is-a-cdn/


9 reasons your site should be static

Please read the following link with the benefits of creating static websites.

https://www.netlify.com/blog/2016/05/18/9-reasons-your-site-should-be-static/


<div class="question callout">

From the above link, which is not listed as one of the reasons to creating static websites?

1. Static websites are more secure
1. Static websites cost more hosting money
1. Static websites create a smaller footprint
1. Static websites have fewer chances of database error

<details>
<summary>Answer</summary>

_Static websites cost more hosting money._

</details>

</div>


## What needs to be server-side processed?

Logic that needs to be calculated, for example, login logic, personalized information such as email inbox and social network feed, or simply database operations that allows storing and updating web site content.

These logics can be done via server aide programming languages, such as PHP, Ruby, Python or even server-side JavaScript (NodeJS).

Please read the following link that compares static website and dynamic website.

https://www.geeksforgeeks.org/static-vs-dynamic-website/


<div class="question callout">

What is true about dynamic website?

1. Serving dynamic website is faster than static website.
1. Content is rendered in run time by server.
1. Both dynamic website and static website has similar functionalities.
1. Usually, static website has more functionalities than dynamic websites.

<details>
<summary>Answer</summary>

_Content is rendered in run time by server._

</details>
</div>

## How about Wordpress?

WordPress is one of the most used web content manage system.

While there are benefits of static websites, traditional server-side rendered websites still take an important role in nowadays web sites. That’s because creating static sites needs a new mindset of planning. Traditional web site framework, such as WordPress, provides out of the box solution with plenty of plugins to fit every need.

Wordpress powers 36% of all websites, according to the w3techs.

Sometimes, we can take benefits from both. For example, we can manage the website content by using Wordpress and then generate the static sites to serve. Whenever we change something, we generate a new version of static website.

https://wordpress.org/plugins/static-html-output-plugin/

Some static site generators also allows working together with Wordpress. Gatsby is one of them:

https://www.gatsbyjs.com/guides/wordpress/


<div class="question callout">

Which of the following is true about Wordpress?

1. WordPress requires database to work
1. WordPress is used in around 36% of websites.
1. Wordpress provides plenty of plugins to do many different functionalities.
1. All of the choices.

<details>
<summary>Answer</summary>

_All of the choices._

</details>

</div>

<div class="checkpoint callout">

  Now that we have learned what is server-side and client-side. We also learned how traditional web server works. Next, we explore how we can pre-build the web site into static files outputs.

</div>


## One page, two pages, many pages with Static Site generators

Static websites don’t need to be single paged. Static is the outcome of the files. The creation process can be as dynamic as needed. We can then use program to process the files into static files for static hosting.

https://www.staticgen.com/


What is the top 8 static site generators according to staticgen.com?



---


## Server-less website


What if we need some server functionalities while serving the website statically?

Take Netlify as an example, they provide logins, forms, and functions,

https://www.netlify.com/products/forms/
https://www.netlify.com/products/functions/
https://docs.netlify.com/visitor-access/identity/
Optional: The deep technical way to create forms Amazon Web Service.

<div class="question callout">

Do we need server logic to process submitted forms from a web page?

- Yes
- No

<details>
<summary>Answer</summary>

_Yes._

</details>


</div>


<div class="question callout">

Do we need server logic to process login and authentication?

- Yes
- No

<details>
<summary>Answer</summary>

_Yes._

</details>


</div>


## Google Sheets and Static Sites

By using some creativities, we can even use Google Sheets, TableTopJS and Eleventy site generator to create a static site with content powered from Google Sheet.

https://css-tricks.com/creating-an-editable-site-with-google-sheets-and-eleventy/

The TableTop.js converts a published Google Sheet into JSON API for the website to fetch.


## JAM Stack

We call this new kind of static website with functionaries JAM Stack, which stands for JavaScript, API, and Markup.

https://jamstack.org/

Also the JAMStack introduction by Netlify.

https://www.netlify.com/jamstack/