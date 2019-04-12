---
layout: post
title: "Building a check-in app with Nexmo's Verify API"
date: Apr 15, 2019
tags: [nodejs, javascript, nexmo]

---
Let's say you are running a game like [The Amazing Race](https://en.wikipedia.org/wiki/The_Amazing_Race), where there are multiple checkpoints that players have to physically reach before they can complete the game. This application is a way to track if a player has reached a checkpoint or not.

The idea is that a checkpoint administrator will have a list of all players and their corresponding phone numbers. When players reach the checkpoint, the administrator will trigger a verification code that is sent to the player's phone.

The player will then enter that verification code via an online web form or respond via SMS to confirm their presence at the checkpoint. In theory, because the administrator has no way to access the verification code, they will be unable to verify players who are not present at the checkpoint.

Before you raise the multitude of ways players can still collude with administrators, let me assure you that I am aware of them, but this is an MVP and we will revisit fraud prevention (and a myriad of other features) in future releases.

## A little bit about 2FA

A typical two-factor authentication flow involves only 1 party. They will enter their mobile phone number to receive an SMS with the verification code, then enter said code into the user interface to authenticate their identity. Easy-peasy-lemon-squeezy.

Now, this hare-brained scheme of mine proposes making this a 2 party affair, where the verification code is triggered by a “game master”, but sent to the player's mobile phone. The player then submits the verification code either via a web interface or SMS.

## Libraries used

<ul>
  <li class="no-margin">Nexmo’s <a href="https://developer.nexmo.com/verify/overview">Verify API</a></li>
  <li class="no-margin">Nexmo’s <a href="https://developer.nexmo.com/messages/overview">Messages API</a></li>
  <li class="no-margin"><a href="https://koajs.com/">Koa.js</a> (and relevant middleware)</li>
  <li class="no-margin"><a href="https://mozilla.github.io/nunjucks/">Nunjucks</a></li>
  <li><a href="https://github.com/typicode/lowdb">lowdb</a></li>
</ul>

Nexmo's [Verify API](https://developer.nexmo.com/verify/overview) is usually used for two-factor authentication, or for passwordless authentication. Rather than write a secure OTP generation functionality myself, I chose to use this for my verification codes instead.

The [Messages API](https://developer.nexmo.com/messages/overview) comes in because of the additional scenario I wanted to cater for, which was lack of data connection. Maybe your game is taking place in a fairly remote location, think [Pulau Perhentian](http://www.malaysia.travel/en/my/places/states-of-malaysia/terengganu/pulau-perhentian) (pictured below), or for some reason your players don't have mobile data. So instead of checking the code via a web interface, players can respond via SMS.

<figure>
  <figcaption>As a Malaysian, I have to promote our beautiful islands</figcaption>
  <img src="{{ site.url }}/assets/images/posts/progressive-enhancement/perhentian.jpg" srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/perhentian@2x.jpg 2x" alt="Pulau Perhentian">
</figure>

[Koa.js](https://koajs.com/) is the framework behind the application, for serving, routing, handling of API requests and responses etc. As the core Koa.js framework is rather barebones, various middlewares have to be added where needed.

[Nunjucks](https://mozilla.github.io/nunjucks/) is the templating engine for rendering data on the frontend, while [lowdb](https://github.com/typicode/lowdb) is a very simple JSON database, great for prototypes like this application. All the database related functions can be easily swapped out for another more “serious” database.

## A basic Koa.js application on Glitch

If you're already using [Glitch](https://glitch.com/), please [skip all this](#skip-glitch). For people who have yet to discover the amazing platform that is Glitch, when you first land, you can choose what type of project you want to build. There are 3 presets, a simple website (no backend), a Node application and a Node application with a SQlite database. I went with the second option.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch-640.jpg" alt="Starting a new Node project on Glitch">

If you'd like to make sure your project persists, it's a good idea to sign up for a Glitch account. Glitch has been making feature improvements fairly frequently, so this may change if you're reading far into the future, but as of time of writing, they support sign in via Facebook, GitHub, Email or sign-in code.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch2-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch2-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch2-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch2-640.jpg" alt="Sign in to a Glitch account">

By default, Node applications on Glitch run on Express, which is totally fine. I chose to use Koa.js for my project, so there are a couple more steps to go through for that.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch3-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch3-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch3-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch3-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch3-640.jpg" alt="Default package.json on a fresh Glitch Node project">

If you click on Tools at the bottom left of the screen, you will bring up some options, like Logs, Console, Container Stats and so on. 

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch4-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch4-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch4-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch4-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch4-640.jpg" alt="Tools options on Glitch">

Logs is great to have open when developing your application because everything you `console.log()` shows up here.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch5-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch5-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch5-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch5-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch5-640.jpg" alt="Viewing logs on Glitch">

To customise the npm modules you want to use in your project, you can access the command line as you would your local machine or remote server. One thing to note is that instead of `npm`, Glitch uses `pnpm` as the package manager.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch6-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch6-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch6-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch6-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch6-640.jpg" alt="Accessing the Glitch console">

Remove express by running the following:
```bash
pnpm uninstall express
```
Then, install Koa.js by running the following:
```bash
pnpm install koa --save
```
To verify the npm modules being used in your project, you'll have to refresh the environment:
```bash
refresh
```
Once you've done that, you should see an “Error” indicator next to Tools. That's fine because in the `server.js` file, we are requiring the Express framework which is no longer there. 

<p id="skip-glitch">The next thing to do is to rewrite basic server code to use Koa.js. You can do that yourself or paste the following code into your newly created file.</p>

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

If all went well, clicking on the Show button on the top nav bar should trigger your application in a new window with the text, “Hello Dinosaur 🦖”.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch7-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch7-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch7-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/glitch7-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/glitch7-640.jpg" alt="Check that Koa.js is running fine">

## The application structure

By right, there should be some proper user management for administrators, but given this is a simple prototype, I made do with a naive implementation of password protection on the main page, where the administrators enters player phone numbers. The prototype presents the idea of how the interface would work.

This meant the application would have 3 pages, the login page, the administrator page, the verification code entry page.

<img srcset="{{ site.url }}/assets/images/posts/progressive-enhancement/screens-480.jpg 480w, {{ site.url }}/assets/images/posts/progressive-enhancement/screens-640.jpg 640w, {{ site.url }}/assets/images/posts/progressive-enhancement/screens-960.jpg 960w, {{ site.url }}/assets/images/posts/progressive-enhancement/screens-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/progressive-enhancement/screens-640.jpg" alt="Rough screen sketches">

As mentioned earlier, some additional middlewares need to be installed. For this project, I added the following:
- `koa-static` for serving static assets
- `koa-bodyparser` for handling data sent over via POST requests
- `koa-router` for routing
- `koa-views` for rendering nunjucks templates (also requires nunjucks to be installed)
- `koa-session` for basic password protection (not for production)

## Serving static assets

```javascript
const serve = require('koa-static')
app.use(serve('./public'))
```
This is probably going to be the least complicated bit to cover, the serving of static assets like CSS and client-side Javascript from the */public* folder.

## Basic routing and rendering

The plan was to get everything working without any client-side Javascript. So user inputs were submitted via HTML forms, and if necessary, a redirect to the appropriate page after submission.

As such, I needed an additional *results* page to show if the code was successfully verified or not. Each page is its own HTML file and is rendered with `koa-views`, which provides a `render()` function.

```javascript
const Router = require('koa-router')
const views = require('koa-views')
const router = new Router()

app.use(views('./views', { map: { html: 'nunjucks' }}))

router.get('/login', (ctx, next) => {
  return ctx.render('./login')
})

router.get('/', (ctx, next) => {
  return ctx.render('./index')
})

router.get('/verify/:phone', (ctx, next) => {
  const phone = ctx.params.phone
  return ctx.render('./verify')
})

router.get('/result/:phone', (ctx, next) => {
  const phone = ctx.params.phone
  return ctx.render('./result')
})
```
`koa-router` also provides a way to access URL parameters via `ctx.params`, used for */verify/\** and */result/\**, which I used to match phone numbers to the generated verification code. This will make more sense when I briefly explain how the Verify API works.

## Verify API

There are 2 steps involved when using the Verify API. The first is to trigger an SMS containing the OTP to the target recipient's phone number.

```javascript
nexmo.verify.request({
  number: RECIPIENT_NUMBER,
  brand: NEXMO_BRAND_NAME
}, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    const verifyRequestId = result.request_id
    console.log('request_id', verifyRequestId)
  }
})
```
The HTTP response from the Verify API looks like this:
```javascript
{
  "request_id": "aaaaaaaa-bbbb-...",
  "status": "0",
  "error_text": "error"
}
```
If the `status` is anything other than `0`, the request was unsuccessful and details about why can be found in `error_text`. Otherwise, the target recipient should receive an OTP via SMS. They must then enter this OTP into your application, which can be verified against the original `request_id`.

```javascript
nexmo.verify.check({
  request_id: REQUEST_ID,
  code: CODE
}, (err, result) => {
  if (err) {
    console.error(err)
  } else {
    console.log(result)
  }
})
```
The most common way to collect the OTP from the target recipient is via a web form. A basic HTML form does not require client-side Javascript at all. We'll need to set up some `POST` routes on the server-side to handle this input.

```javascript
router.post('/verify/:phone', async (ctx, next) => {
  const phone = ctx.params.phone
  const payload = await ctx.request.body

  const result = await verify(phone)
  ctx.status = 200
  ctx.response.redirect('/')
})

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
