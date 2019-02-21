---
layout: post
title: "Getting started with Nexmo's Number Insight APIs on Koa.js"
date: Feb 21, 2019
tags: [javascript, server-side, nexmo]
noindex: true
nofeed: true
external_site: nexmo
external_url: https://www.nexmo.com/blog/2019/02/21/getting-started-with-nexmos-number-insight-apis-on-koa-js-dr/
---
Nexmo's [Number Insight API](https://developer.nexmo.com/number-insight/overview) delivers real-time intelligence about the validity, reachability and roaming status of a phone number and tells you how to format the number correctly in your application.

There are three levels of Number Insight API available: **Basic**, **Standard** and **Advanced**, each returning an increasing amount of information about the queried phone number. The advanced API is available asynchronously as well as synchronously.

## Prerequisites

- A basic understanding of Javascript
- [Node.js](https://nodejs.org/en/download/) installed on your machine
- A [Nexmo](https://dashboard.nexmo.com/sign-up) account (for your API credentials)

This tutorial will take you through the process from scratch. If you'd like to see the finished code, you can clone the [git repository](https://github.com/nexmo-community/number-insight-koa) for this project or [remix it on Glitch](https://glitch.com/edit/#!/remix/number-insight-koa). Note that they are slight differences for the Glitch implementation to cater for how projects are hosted on the platform.

## Starting a Koa.js project from scratch

Create a project folder on your local machine, then run the following command to set up a new Node.js project.


```bash
npm init
```

This will trigger a series of prompts that will generate your `package.json` file. You can choose to leave the answers blank to use the default values if you wish.

![Configuring package.json](https://cdn.glitch.com/0d1dc72c-27cc-4eff-9bcd-e771759caed1%2Fnpm-init.png?1549339410355)


Next, install [Koa.js](https://koajs.com/). Do note that Koa requires node v7.6.0 or higher for ES2015 and async function support.

```bash
npm install koa --save
```

Create a `server.js` file in your project folder.

```bash
touch server.js
```

Paste the following code into your newly created file.

```javascript
const Koa = require('koa')

const port = process.env.PORT || 3000
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello Dinosaur 🦖'
})

const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
```

Run the `server.js` file.

```bash
node server.js
```

If you navigate to `http://localhost:3000` from your browser, you should see an empty page with the text, “Hello Dinosaur 🦖”.

![Check that server is running](https://cdn.glitch.com/0d1dc72c-27cc-4eff-9bcd-e771759caed1%2Fkoa-init.png?1549340244854)

You should also install [dotenv](https://www.npmjs.com/package/dotenv), which allows you to load environment variables stored in a `.env` file into `process.env`.

```bash
npm install dotenv --save
```

And now you can create the `.env` file and it should contain at least the following variables:

```
NEXMO_API_KEY=''
NEXMO_API_SECRET=''
```

To access environment variables, you'll have to require it, ideally at the top of your `server.js` file.

```javascript
require('dotenv').config()
```

If you haven't [signed up for a Nexmo account](https://dashboard.nexmo.com/sign-up) yet, now is a pretty good time to do it. Once you've logged into the dashboard, your API credentials should be the first thing you see. Be sure to enclose both your key and secret with quotes.

## Getting to know the Number Insights API

First off, install the [Nexmo REST API client for Node.js](https://github.com/Nexmo/nexmo-node):

```bash
npm install nexmo --save
```

Next, initialise a new Nexmo instance.

```javascript
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
})
```
As mentioned earlier, there are three levels for the Number Insight API, and you can pick one depending on the type of information you require. This is how the API is structured.

```javascript
nexmo.numberInsight.get({
  level: 'basic | standard | advancedSync', // set Number Insight level here
  number: INSIGHT_NUMBER // phone number to be queried
}, (error, result) => {
  if (error) {
    console.error(error)
  }
  else {
    console.log(result)
  }
})
```
You can refer to our [API reference](https://developer.nexmo.com/api/number-insight) to see how the response JSON is structured.

## Obtaining Number Insights

You will need some way to input the phone number to be queried, so let's create a basic web page to do that.

Create a `public` folder in your project and add an `index.html`, `styles.css` and `scripts.js` to the folder. Your project structure should now look something like this:

```bash
PROJECT_FOLDER/
|-- public/
|   |-- index.html
|   |-- scripts.js
|   `-- styles.css
|-- .env
`-- server.js
```
Add the following your `index.html` page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Number Insight API</title>
    <meta name="description" content="Exploring Nexmo's Number Insight API">
    <link id="favicon" rel="icon" href="https://www.nexmo.com/favicon.ico" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
  </head>

  <body>
    <main>
      <h1>Retrieve Number Insights</h1>
      <form>
        <input type="tel" placeholder="Enter phone number">
        <button type="button">Submit</button>
      </form>
      <hr>
      <pre><code>Awaiting results…</code></pre>
    </main>
  </body>
</html>

```

You can also add some basic styles to the page by adding the following to the `styles.css` file:

```css
@import url('https://fonts.googleapis.com/css?family=Gudea:400,700');

html {
  box-sizing: border-box;
  height: 100%;
  font-size: calc(1vmin + 1em);
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Gudea', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 15em;
  background-color: gainsboro;
}

main {
  flex: 1;
  margin: auto;
  padding: 1em;
}

h1 {
  margin-bottom: 0.5em;
}

form {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 10em;
}

input {
  font-size: inherit;
  padding: 0.5em;
  border: 0;
  flex: 1;
}

button {
  font-size: inherit;
  height: 100%;
  background-color: #2e689b;
  color: #fff;
  padding: 0.5em 0.75em;
  border: 0;
}

hr {
  margin: 1em 0;
}

pre {
  background-color: #333;
  padding: 0.5em;
  border-radius: 0.5em;
  color: lightblue;
  white-space: pre-wrap;
}
```
The next step is to send the input to the server so you can plug it into the Number Insight API and check it. To do that, trigger a `POST` request to a route that will handle the form content. The sample code below uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for this.

```javascript
const phone = document.querySelector('input')
const submit = document.querySelector('button')
const insights = document.querySelector('code')

submit.addEventListener('click', send, false)

function send(event) {
  fetch('/submit', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone: phone.value
    })
  })
  .then(function(res){ return res.json() })
  .then(function(insight){ parseInsight(insight) })
  .catch(function(error){ console.log(error) })
}

function parseInsight(data) {
  insights.innerHTML = JSON.stringify(data, null, 2)
}
```
You will need to handle this `POST` request on the server side. Unlike other popular Node.js frameworks like Express or Hapi.js, Koa.js is much more modular. Features like routing or serving static files are supported, but in seperate modules, which need to be installed:

```javascript
npm install koa-router koa-bodyparser koa-static --save
```
Update your `server.js` file to use these new dependencies. First, instead of serving up a “Hello Dinosaur! 🦖“ message, modify your `server.js` file to use the `index.html` file instead by replacing

```javascript
app.use(async ctx => {
  ctx.body = 'Hello Dinosaur 🦖'
})
```
with

```javascript
const serve = require('koa-static')
app.use(serve('./public'))
```
Next, set up the route for incoming POST requests to `/submit`.

```javascript
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const router = new Router()

app.use(bodyParser())

router.post('/submit', async (ctx, next) => {
  const payload = await ctx.request.body
  const number = await payload.phone
  const insight = await getInsight(number)
  ctx.status = 200
  ctx.body = insight
})

async function getInsight(number) {
  return new Promise(function(resolve, reject){
    nexmo.numberInsight.get({
      level: 'basic', 
      number: number
    }, (error, result) => {
      if (error) {
        console.error(error)
        reject(error)
      }  
      else {
        resolve(result)
      }
    })
  })
}

app.use(router.routes()).use(router.allowedMethods())
```
### Basic API

If everything is set up correctly, you should be able to enter a phone number and get the resulting information about that number on your web page. With the Basic API, you can determine:

- The country where a number is registered
- The local and international representation of that number

With such information, you could discover which country a number belongs to and using the information to format the number correctly.

![Basic Number API](https://cdn.glitch.com/0d1dc72c-27cc-4eff-9bcd-e771759caed1%2Fresult.gif?1549545606840)

### Standard API

The Number Insight Standard API provides all the information from the Number Insight Basic API together with the following additional data:

- The line type (mobile/landline/virtual number/premium/toll-free)
- The Mobile Country Code (MCC) and Mobile Network Code (MNC)
- The name of the caller (USA only)

A common use-case for this would be to determine the best type of communication for a number (SMS or voice) and block virtual numbers.

![Standard Number API](https://cdn.glitch.com/0d1dc72c-27cc-4eff-9bcd-e771759caed1%2Fstandard.gif?1549547118621)

### Advanced API

Finally, the Number Insight Advanced API provides all the data from the Number Insight Standard API together with the following additional information:

- If the number is likely to be valid
- If the number is ported
- If the number is reachable
- If the number is roaming and, if so, the carrier and country

Often, such information is used to determine the risk associated with a number.

![Advanced Number API](https://cdn.glitch.com/0d1dc72c-27cc-4eff-9bcd-e771759caed1%2Fadvanced.gif?1549547775312)

The Advanced Number API can also be [used asychronously](https://developer.nexmo.com/number-insight/building-blocks/number-insight-advanced-async) to return the insight data when it becomes available, via a webhook. Note that this feature is not available for the Basic and Standard APIs.

## Where Next?

If you are keen to do more with these APIs, here are some links that might be helpful to you:

- [Documentation](https://developer.nexmo.com/number-insight/overview) for the Number Insight API on the developer portal
- Series of [tutorials](https://www.nexmo.com/blog/category/developer/tutorial/) for various Nexmo APIs
- If you need us, try the [Nexmo Community Slack channel](https://developer.nexmo.com/community/slack)
- Let us know what you think by tweeting at [@NexmoDev](https://twitter.com/nexmodev)

