---
layout: post
title: "Add Two-Factor Authentication to Node.js Web Apps"
date: Apr 12, 2019
tags: [nodejs, javascript, nexmo]
noindex: true
external_site: nexmo
external_url: javascript:void(0)
---
Two-factor authentication (2FA) gets its name from the fact that you require two things to verify your identity. Something you know, like a password, and something you have, like the verification code from your mobile device or physical token.

Adding 2FA to your application does not have to be a difficult chore. This tutorial will cover how to implement 2FA for your web applications and services for an additional layer of security with the help of the Nexmo Verify API. We will be building a simple Koa.js application to understand how the underlying mechanism works. This will make it easier to see how this will fit into your own existing projects, even if you are not using Koa.js.

You would start off with a login page that asks your user for a mobile phone number. Upon submission, they would be asked to input a verification code that gets sent to their mobile phone number via SMS. Once that's sorted, they can access the application.

## Prerequisites

- A basic understanding of Javascript
- [Node.js](https://nodejs.org/en/download/) installed on your machine
- A [Nexmo](https://dashboard.nexmo.com/sign-up) account (for your API credentials)

This tutorial will take you through the process from scratch. If you'd like to see the finished code, you can clone the [git repository](https://github.com/nexmo-community/verify-2fa-koa) for this project. We also have a Glitch version, which has a more over-the-top design, and you can [remix](https://glitch.com/edit/#!/remix/verify-2fa-koa) it as well. Note that they are slight differences for the Glitch implementation to cater for how projects are hosted on the platform.

![Glitch version of demo](https://cdn.glitch.com/e53b88bf-b990-43c3-8efd-a5141145a96c%2Fglitch.png?1554816007328)

## Starting a Koa.js project from scratch

Create a project folder on your local machine, then run the following command to set up a new Node.js project.

```bash
npm init
```

This will trigger a series of prompts that will generate your `package.json` file. You can choose to leave the answers blank to use the default values if you wish.

![Configuring package.json](https://cdn.glitch.com/e53b88bf-b990-43c3-8efd-a5141145a96c%2Fnpm-init.png?1554655286468)

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
  ctx.body = 'Hello Unicorn 🦄'
})

const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
```

Run the `server.js` file.

```bash
node server.js
```

If you navigate to `http://localhost:3000` from your browser, you should see an empty page with the text, “Hello Unicorn 🦄”.

![Check that server is running](https://cdn.glitch.com/e53b88bf-b990-43c3-8efd-a5141145a96c%2Fkoa-server.png?1554656108532)

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

## Project structure

Right now, your project would probably only have a `package.json`, a `server.js` file and a `.env` file. Let's set up the project structure so you can have a basic frontend for users to interact with.

```
PROJECT_NAME/               
    |-- public/             
    |   |-- client.js
    |   `-- style.css
    |-- views/
    |   `-- index.html
    |-- .env
    |-- package.json
    `-- server.js
```

With that, you'll have to make some tweaks to the `server.js` file to serve the `index.html` file and related assets, instead of simply a line of text. Koa.js is a fairly barebones framework, so any additional functionalities for routing or serving static assets need to be installed separately. Here is the list of additional modules and their uses:
- `koa-static` for serving static assets
- `koa-bodyparser` for handling data sent over via POST requests
- `koa-router` for routing
- `koa-views` to render templates

This example also makes use of [Nunjucks](https://mozilla.github.io/nunjucks/) to render template files. The Nexmo Verify API will be used to trigger the verification code via SMS, so you will need to install Nexmo's Node.js client library as well.

```bash
npm install koa-static koa-bodyparser koa-router koa-views nunjucks nexmo --save
```

## Serving static assets and HTML files

To allow the application to serve static assets. like stylesheets and client-side Javascript, out of the */public* folder, you can add the following to the `server.js` file:

```javascript
const serve = require('koa-static')
app.use(serve('./public'))
```
To serve HTML files out of the */views* folder, you can make use of `koa-views`, which provides a `render()` function. The templating engine used in this example is Nunjucks, but you are free to choose whichever templating engine works best for you.

```javascript
const views = require('koa-views')
app.use(views('./views', { map: { html: 'nunjucks' }}))
```

The next thing to set up would be some basic routes for serving your application pages.
```javascript
const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx, next) => {
  return ctx.render('./index')
})

app.use(router.routes()).use(router.allowedMethods())
```

For this example, you will need 3 pages, the `index.html` as the main landing page, `verify.html` for users to input their verification code and `result.html` to show if the verification was successful or not.

The structure of the web form is fairly straightforward, and you are free to spruce it up with CSS however you wish.

```html
<form method="post" action="verify">
  <input name="phone" type="tel" placeholder="+6588888888">
  <button>Get OTP</button>
</form>
```
This form will post the user inputs to the `/verify` route and you can use the phone number in the input to trigger the verification code request. A similar form can be used for the other 2 routes for `/check` and `/cancel` as well.

```html
<form method="post" action="check">
  <input name="pin" placeholder="Enter PIN">
  <input name="reqId" type="hidden" value="{{ reqId }}">
  <button>Verify</button>
</form>
```

```html
<form method="post" action="cancel">
  <input name="reqId" type="hidden" value="{{ reqId }}">
  <button class="inline">Cancel verification</button>
</form>
```

## Handling user inputs

Then, for handling user inputs via web forms, you will need some routes to handle `POST` requests as well. Do make sure to declare `bodyparser()` before any of the routes.

```javascript
const bodyParser = require('koa-bodyparser')

/* This should appear before any routes */
app.use(bodyParser())

router.post('/verify/', async (ctx, next) => {
  const payload = await ctx.request.body
  /* Function to trigger verification code here */
})

router.post('/check/', async (ctx, next) => {
  const payload = await ctx.request.body
  /* Function to check verification code here */
})

router.post('/cancel/', async (ctx, next) => {
  const payload = await ctx.request.body
  /* Function to cancel verification code here */
})
```
Now that you're able to receive your user's phone number, you will need to use the Verify API to send a PIN code to it. Initialise a new Nexmo instance with your credentials. 

```javascript
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: YOUR_API_KEY,
  apiSecret: YOUR_API_SECRET
});
```
There are 3 functions we need to take care of. The first one is to trigger the verification code with the `nexmo.verify.request()` function. It involves the user's phone number, and a string for the brand name which will be displayed to the user as the sender.

```javascript
async function verify(number) {
  return new Promise(function(resolve, reject) {
    nexmo.verify.request({
      number: number,
      brand: process.env.NEXMO_BRAND_NAME
    }, (err, result) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
```
Once your user received the PIN code via SMS, they will have to submit it to the `nexmo.verify.check()` function, so it can be verified. You will notice a `request_id` parameter. This value is obtained when the PIN code was successfully triggered. There are a number of ways to pass the request ID into the `nexmo.verify.check()` function, and this example makes use of a hidden field in the *check* form.
 
```javascript
async function check(reqId, code) {
  return new Promise(function(resolve, reject) {
    nexmo.verify.check({
      request_id: reqId,
      code: code
    }, (err, result) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
```
The last function gives your user the option to cancel the verification if they changed their mind. It uses the `nexmo.verify.control()` function, and again, requires the request ID generated from triggering the PIN code and a string value of `cancel`.

```javascript
async function cancel(reqId) {
  return new Promise(function(resolve, reject) {
    nexmo.verify.control({
      request_id: reqId,
      cmd: 'cancel'
    }, (err, result) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
```

![Landing page for demo](https://cdn.glitch.com/e53b88bf-b990-43c3-8efd-a5141145a96c%2Flanding.png?1554815323752)

## Additional things to take care of

This tutorial is a stripped down version, highlighting only the bits necessary for implementing two-factor authentication. But there are numerous things that have to be taken care of in an actual application. One of the most important is error handling. The Verify API returns a status value of `0` for successful queries, but any other value indicates an error.

These errors should be handled and the user interface on the frontend should reflect any potential errors preventing sucessful verification. It might also be a good idea to implement some sort of frontend validation, or even utilise Nexmo's [Number Insight API](https://developer.nexmo.com/number-insight/overview) to ensure only valid phone numbers are passed to the Verify API.

## Where Next?

If you are keen to do more with these APIs, here are some links that might be helpful to you:

- [Documentation](https://developer.nexmo.com/verify/overview) for the Verify API on the developer portal
- Series of [tutorials](https://www.nexmo.com/blog/category/developer/tutorial/) for various Nexmo APIs
- If you need us, try the [Nexmo Community Slack channel](https://developer.nexmo.com/community/slack)
- Let us know what you think by tweeting at [@NexmoDev](https://twitter.com/nexmodev)
