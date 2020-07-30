---
title: Lesson 15—Netlify functions
previous: /lesson-14
---



## Background

[Netlify’s AWS Lambda functions bring the backend to your frontend workflow | Netlify](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/)

[Netlify Lambda Functions Tutorial](https://flaviocopes.com/netlify-functions/)

> Netlify gives us have a generous free tier limit, with up to 125.000 function invocations and a total of 100 hours of run time every month. Functions have 128MB of memory and each can execute for up to 10 seconds. For normal needs, this is more than enough.

> Internally, Netlify runs this function on **AWS Lambda**, abstracting away all the complexity of AWS for you.


```javascript
exports.handler = (event, context, callback) => {
  //functionality
}
```

* *event* is an object that contains data on the request
* *context* contains the user information when using Identity for user authentication
* *callback* is a function we can use to create a response

## Creating our first hello world lambda functions

A simple example

```javascript
exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: "Hello, World. This is from server-side."
    });
}
```



We can access the function via `/.netlify/functions/FUNCTION_FILE_NAME`. Our file is `hello.js` file.



```javascript
fetch('/.netlify/functions/hello')
.then(response => response.text())
.then(data => console.log(data));
```


## Using events

We can get the form data from the events.

```json
{
  "path": "Path parameter",
  "httpMethod": "Incoming request's method name"
  "headers": {Incoming request headers}
  "queryStringParameters": {query string parameters }
  "body": "A JSON string of the request payload."
  "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
}
```


We can inspect the events by creating a function that prints the output.

```javascript
exports.handler = (event, context, callback) => {
  // accesscode
  console.log("---Event---");
  console.log(event);

  console.log("---Context---");
  console.log(context);

  console.log("---Form Data---");
  console.log(event.body)

  callback(null, {
    statusCode: 200,
    body: "Response from login"
  });
}
```

Here is a sample event and context.

```json
4:58:03 PM: 2020-06-26T08:58:03.113Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO ---Event---
4:58:03 PM: 2020-06-26T08:58:03.116Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO {
path: '/.netlify/functions/login',
httpMethod: 'POST',
headers: {
accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
'accept-encoding': 'br, gzip',
'accept-language': 'en-US,en;q=0.5',
'cache-control': 'no-cache',
'client-ip': '205.215.28.95',
connection: 'keep-alive',
'content-length': '15',
'content-type': 'application/x-www-form-urlencoded',
origin: 'https://11ty-demo.netlify.app',
pragma: 'no-cache',
referer: 'https://11ty-demo.netlify.app/login/',
'upgrade-insecure-requests': '1',
'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0',
via: 'https/2 Netlify[eec88f0c-fdc7-4e25-80c4-4ee885567b1a] (ApacheTrafficServer/7.1.11)',
'x-bb-ab': '0.977694',
'x-bb-client-request-uuid': 'eec88f0c-fdc7-4e25-80c4-4ee885567b1a-1073900',
'x-bb-ip': '205.215.28.95',
'x-bb-loop': '1',
'x-cdn-domain': 'www.bitballoon.com',
'x-country': 'MO',
'x-datadog-parent-id': '3100576936310270153',
'x-datadog-sampling-priority': '0',
'x-datadog-trace-id': '8619131124679011560',
'x-forwarded-for': '205.215.28.95',
'x-forwarded-proto': 'https',
'x-language': 'en,en;q=0.5',
'x-nf-client-connection-ip': '205.215.28.95'
},
multiValueHeaders: {
Accept: [
'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
],
'Accept-Encoding': [ 'br, gzip' ],
'Accept-Language': [ 'en-US,en;q=0.5' ],
'Cache-Control': [ 'no-cache' ],
'Client-Ip': [ '205.215.28.95' ],
Connection: [ 'keep-alive' ],
'Content-Length': [ '15' ],
'Content-Type': [ 'application/x-www-form-urlencoded' ],
Origin: [ 'https://11ty-demo.netlify.app' ],
Pragma: [ 'no-cache' ],
Referer: [ 'https://11ty-demo.netlify.app/login/' ],
'Upgrade-Insecure-Requests': [ '1' ],
'User-Agent': [
'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0'
],
Via: [
'https/2 Netlify[eec88f0c-fdc7-4e25-80c4-4ee885567b1a] (ApacheTrafficServer/7.1.11)'
],
'X-Bb-Ab': [ '0.977694' ],
'X-Bb-Client-Request-Uuid': [ 'eec88f0c-fdc7-4e25-80c4-4ee885567b1a-1073900' ],
'X-Bb-Ip': [ '205.215.28.95' ],
'X-Bb-Loop': [ '1' ],
'X-Cdn-Domain': [ 'www.bitballoon.com' ],
'X-Country': [ 'MO' ],
'X-Datadog-Parent-Id': [ '3100576936310270153' ],
'X-Datadog-Sampling-Priority': [ '0' ],
'X-Datadog-Trace-Id': [ '8619131124679011560' ],
'X-Forwarded-For': [ '205.215.28.95' ],
'X-Forwarded-Proto': [ 'https' ],
'X-Language': [ 'en,en;q=0.5' ],
'X-Nf-Client-Connection-Ip': [ '205.215.28.95' ]
},
queryStringParameters: {},
multiValueQueryStringParameters: {},
body: 'accesscode=demo',
isBase64Encoded: false
}
4:58:03 PM: 2020-06-26T08:58:03.116Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO ---Context---
4:58:03 PM: 2020-06-26T08:58:03.116Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO {
callbackWaitsForEmptyEventLoop: [Getter/Setter],
succeed: [Function],
fail: [Function],
done: [Function],
functionVersion: '$LATEST',
functionName: '10f17193d13d181aecadf7700782cb9186b8b7b9c6fb271c00ae85bbc1d7c648',
memoryLimitInMB: '1024',
logGroupName: '/aws/lambda/10f17193d13d181aecadf7700782cb9186b8b7b9c6fb271c00ae85bbc1d7c648',
logStreamName: '2020/06/26/[$LATEST]5f371446a61f4d66a24eacaa2e81c7e4',
clientContext: {
custom: {
netlify: 'eyJzaXRlX3VybCI6Imh0dHBzOi8vMTF0eS1kZW1vLm5ldGxpZnkuYXBwIn0='
}
},
identity: undefined,
invokedFunctionArn: 'arn:aws:lambda:us-east-1:922855128030:function:10f17193d13d181aecadf7700782cb9186b8b7b9c6fb271c00ae85bbc1d7c648',
awsRequestId: 'ab2451c6-3ac5-4cc5-a8af-efe7141e1f42',
getRemainingTimeInMillis: [Function: getRemainingTimeInMillis]
}
4:58:03 PM: 2020-06-26T08:58:03.116Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO ---Form Data---
4:58:03 PM: 2020-06-26T08:58:03.116Z ab2451c6-3ac5-4cc5-a8af-efe7141e1f42 INFO accesscode=demo
```


```html
---
layout: layout
---

Please login to access gated content.

<form id="login" action="/.netlify/functions/login" method="POST">
  <input type="text" name="accesscode" id="accesscode">
  <input type="submit">
</form>

```

## Making the gated content work

```js
exports.handler = (event, context, callback) => {

  result = "/"

  if (event.body == "accesscode=demo") {
    result = "/super-long-url-here-to-hide-the-gated-content/"
  }

  callback(null, {
    statusCode: 200,
    body: result
  });
}
```

```html
---
layout: layout
---

Please login to access gated content.

<form id="login" action="/.netlify/functions/login" method="POST">
  <input type="text" name="accesscode" id="accesscode">
  <input type="submit">
</form>

<script>
let accessCode = document.getElementById("accesscode").value;
document.getElementById("login").addEventListener("submit", function(event) {
  fetch('/.netlify/functions/login', {method: "POST", body:"accesscode="+accessCode})
  .then(response => response.text())
  .then(data => location.href=data);
  event.preventDefault();
});

</script>
```


## A glimpse of what we can do with Netlify functions

[Netlify Function Examples](https://functions.netlify.com/examples/)
