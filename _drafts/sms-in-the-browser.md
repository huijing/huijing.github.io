---
layout: post
title: "SMS in the browser: an adventure in WebSockets (and Nexmo Messages API)"
date: Jan 31, 2019
tags: [javascript, server-side]
external_site: nexmo
external_url: javascript:void(0)
---
A lot of the heavy lifting done by the Nexmo Messages API happens on the server-side. Messages are sent, received, processed and so on but usually all this activity is hidden away from end users of many of the applications that utilise the API.

For the most part, the display of these messages to the end user is handled by their respective applications. There is also the option of displaying these messages in a browser, but for that, we'll need some way of pushing the messages from the server to the browser. And we can do that with the help of the WebSockets API.

This is a pretty long tutorial which assumes no prior knowledge aside from a basic understanding of HTML, CSS, Javascript, and [Node.js](https://nodejs.org/en/). Feel free to skip past any of the sections if you already know what's what.

We will walk through the process of building a “virtual” phone in the browser that can send and receive SMS. We'll use [Glitch](https://glitch.com/) to host the application, so some of the setup instructions are geared toward Glitch.

Glitch is an online developer environment that allows developers to get up and running with building and deploying their apps without the hassle of server setup. All apps on the platform can be remixed and personalised, making it a perfect place to share code and figure out how things work.

You can also use any environment with Node.js installed, if that's what you prefer. All the dependencies for this project are handled via [npm](https://www.npmjs.com/).

## Initial Setup and Configuration

### Starting a Koa.js App on Glitch

Glitch is constantly improving its interface and features, so as of time of writing, you can create a new account on Glitch by clicking on the *Sign in* button in the top right corner of the page, and login via GitHub or Facebook, or sign up with your email address.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Faccount.png?1545642908364)

After that, you can click on the *New Project* button to get started. There are 3 choices, *hello-webpage*, *hello-express* and *hello-sqlite*. For the purposes of this tutorial, go with *hello-express* as this gives you an environment with Node.js and npm already installed.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fglitch.png?1545642459768)

To install additional node packages, you can access the command line by clicking on the *Console* button in the logs window.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fconsole.gif?1545642352092)

You can toggle the logs window by clicking on the *Logs* button near the top of the sidebar. From there, you can use all the standard CLI commands in a bash environment. The only difference is that on Glitch, you would use `pnpm` instead of `npm`.

Glitch uses [Express](https://expressjs.com/) as its default Node.js framework, but converting the app to [Koa.js](https://koajs.com/) is not too complicated. Do note that Koa requires node v7.6.0 or higher for ES2015 and async function support.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fdependencies.png?1545643102776)

Remove `express` and `body-parser` from the project with the following command:

```bash
pnpm uninstall express body-parser
```

Install Koa.js and koa-bodyparser with the following command:

```bash
pnpm install koa koa-bodyparser --save
```

The console and the editor do not automatically sync, so run the `refresh` command to update the `package.json` file in the editor.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fkoa.png?1545643400488)

You'll also notice that the status of your application shows an error. This is expected because the default `server.js` file still references `express`.

To fix this, replace the contents of `server.js` with the following code:

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Dinosaur';
});

app.listen(3000);
```

Now, when you try to view your application, it should show a blank page with the words *Hello Dinosaur*.

### Serving Static Files with Koa.js

We would need to serve up a basic HTML page with input fields so users can enter relevant information for sending an SMS, like the phone number of the recipient, and the message itself.

[koa-static](https://github.com/koajs/static) is a static file serving middleware for Koa. Install it into your project via the console with the following command:

```bash
pnpm install koa-static --save
```

To make things less complicated, place all the required files for the landing page into the `public` folder. You can move the `index.html` file from the `views` folder to the `public` folder by renaming the file path on the sidebar. 

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Frename-file.gif?1545644005719)

You can also do it via command line through the console.

Once that's done, modify the `server.js` file to use koa-static and serve files out of the `public` folder as follows:

```javascript
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve('./public'));

app.listen(3000);

console.log('listening on port 3000');
```

Now, instead of *hello world*, your app should be serving the default Glitch `index.html` file. We will modify this file to mimic a phone interface later on in the tutorial.

### Getting tarted with Nexmo APIs

If you are new to Nexmo, start off by signing up for [a Nexmo account](https://dashboard.nexmo.com/sign-up) to get access to your API key and secret, which are required to use the Nexmo REST API client. Once you sign in to your account, you will be able to see your API credentials right on the dashboard.

![](https://cdn.glitch.com/df802ecc-0da6-4e3b-adb3-740a4b639b86%2F01.jpg?1543233501145)

Go back to your Glitch app and install the [Nexmo REST API client for Node.js](https://github.com/Nexmo/nexmo-node) with the following command:

```bash
pnpm install nexmo@beta --save
```

We're using the beta version as the Messages API is currently still in beta. And if you refresh your project, your `package.json` should now look like this:

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fnexmo-node.png?1545644494250)

And now we're done with the basic setup. This can be the starting point for any number of Koa applications that utilise Nexmo's APIs, so you can always keep this project as a starter-kit on Glitch and remix from it.

## What are WebSockets?

The [WebSocket protocol](https://tools.ietf.org/html/rfc6455) was developed by the Internet Engineering Task Force (IETF) to enable 2-way communications between a client and a remote host. 

It is a type of communications protocol, like [HTTP (Hypertext transfer protocol)](https://tools.ietf.org/html/rfc2616), [FTP (File transfer protocol)](https://tools.ietf.org/html/rfc959) or [SMTP (Simple mail transfer protocol)](https://tools.ietf.org/html/rfc5321). Communications protocols allow machines to communicate with each other. Most communications protocols maintain an open connection between 2 machines across the internet.

HTTP, which is what the web runs on, is different. It is known as a connectionless protocol, because it is based on a request/response mode of operation. Web browsers make requests to the server for images, fonts, content etc. but once the request is fulfilled, the connection between the browser and server is severed.

It is possible to upgrade an existing HTTP connection to a new, incompatible protocol using the HTTP upgrade header. Connection requests are **always** initiated by the client, although the server may enforce an upgrade by responding with a `426 Upgrade Required` HTTP response to the client.

An HTTP/1.1 connection may be upgraded to a TLS connection (not a recommended approach), an HTTP/2 connection or a WebSocket connection, which is the most common use-case for an upgrade. Establishing a WebSocket connection between the client and the server involves an intial HTTP/1.1 request that includes the upgrade headers.

A simplified version of the initial header looks something like this:

```
GET /chat HTTP/1.1
Host: server.example.com
Origin: http://example.com
Upgrade: websocket
Connection: Upgrade
```

If the server supports the WebSocket protocol, it would agree with the upgrade request and respond to the handshake with a `101` status code:

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

Anything other than a `101` indicates the WebSocket handshake has not completed. Once the handshake is completed, the initial HTTP/1.1 connection is switched to a WebSocket connection and data can now be sent back and forth between the 2 machines.

The [WebSockets API](https://html.spec.whatwg.org/multipage/web-sockets.html#network) is an interface which allows web applications to *use* the WebSocket protocol for maintaining bidirectional communications with server-side processes. Most browsers released after 2012 support the WebSockets API, so support is reasonably good.

The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection. We can create a new WebSocket object with the WebSocket constructor, `WebSocket(url[, protocols])`. The URL passed into the WebSocket constructor must be of the `ws` or `wss` scheme for things to work.

```javascript
const socket = new WebSocket('ws://localhost:8080')
```

The WebSocket object dispatches 4 events, which we can listen to and handle accordingly:
- `open`
- `error`
- `message`
- `close` 

Once a WebSocket connection is established, the `open` event is fired. With reference to the WebSocket object created in the earlier block of code, the corresponding event handler would look something like this:

```javascript
socket.onopen = function(evt) {
  // do something
}
```

We can use the `error` event to log any errors to the console for debugging purposes, and maybe add an error event handler as well:

```javascript
socket.onerror = function(evt) {
  console.log('WebSocket error: ', evt)
  // include an error event handler here
}
```

Most typically, we would be utilising the `message` event, which fires when messages from the server are received. For example, if you had a text message sent from the server, you could log it to the console like so:

```javascript
socket.onmessage = function(evt) {
  console.log('Message: ', evt.data)
}
```

Finally, the `close` event fires when the WebSocket connection is closed. Once this happens, the client and server can no longer send messages to each other until a new connection is established.

```javascript
socket.onclose = function(evt) {
  console.log('WebSocket connection closed. ', evt)
}
```

There are also 2 methods associated with the WebSocket object, `send()` for send data to the server and `close()` for terminating an existing WebSocket connection.

The `send()` method only works while the connection is open, which seems obvious, but if the code is structured incorrectly, could end up being triggered before the connection is open or after the connection is closed.

```javascript
// Listen for the open event before triggering the sendMsg() function
socket.onopen = function(evt) {
  console.log('Connection established')
  sendMsg('Hello Nexmo!')
}

// Send a message through the WebSocket connection
function sendMsg(data) {
  socket.send(data)
}
```

Now that we have a better understanding of what WebSockets are and how the WebSocket API works, we are ready to utilise this knowledge to create a basic application for sending and receiving SMS directly via the browser with the [Nexmo Messages API](https://developer.nexmo.com/messages/overview).

## Receiving SMS in the Browser with Nexmo

### Getting a Virtual Phone Number

To send and receive SMS via the Messages API, you will need a [virtual phone number](https://www.nexmo.com/products/phone-numbers), which is like any standard phone number, except they are not tied down to any physical phone line or device.

You can buy a virtual number from the *Numbers* section on the sidebar by selecting *Buy numbers*. You can choose a number local to a country of your choice, features supported and type of number, be it mobile, land-line or toll-free.

![](https://cdn.glitch.com/df802ecc-0da6-4e3b-adb3-740a4b639b86%2F07.jpg?1543289564135)

Once you have your number, it will show up in the *Your numbers* section. Click on the Pencil icon under the rightmost *Manage* column to configure your inbound webhook URL. This is required for receiving SMS. When an SMS is sent to your number, a `POST` request is sent to this URL with the message payload.

![](https://cdn.glitch.com/df802ecc-0da6-4e3b-adb3-740a4b639b86%2F08.jpg?1543290832091)

If you're using Glitch, your webhook URL would look something like *https://boom-meal.glitch.me/inbound-sms*. I suggest using `inbound-sms` as the route, but you can use anything you like, as long as that route is valid in your application. Adjust the webhook URL accordingly depending on where your application is hosted.

One more thing to check is that the default SMS setting on your acccount is set to `POST` under HTTP method.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fsettings.png?1545664156069)

### Receiving an Inbound SMS

To receive an inbound SMS, you'll need to add a route in your application to handle the incoming `POST` request that is triggered when somebody sends an SMS to your virtual number. Unlike other popular Node.js frameworks like Express or Hapi.js, routing is handled by a separate module, so we'll need to install it first.

```bash
pnpm install koa-router --save
```

Add the following to your `server.js` file:

```javascript
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const router = new Router();

app.use(bodyParser());

// Make sure this is the route you configured for your virtual number
router.post('/inbound-sms', async (ctx, next) => {
  const payload = ctx.request.body;
  console.log(payload);
  ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());
```

If you followed the setup instructions earlier in this tutorial, `koa-bodyparser` should have already been installed. A body parser is needed to handle the request body. To check that everything is hooked up correctly, send an SMS to your virtual number. The message payload should be logged to the console.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fsms-payload.png?1545665264026)

### Creating a WebSocket Server

Now that we've verified things are working, instead of logging the message payload to the console, let's use WebSockets to send the relevant information to the browser.

But first, let's install a Node.js WebSocket helper library called `ws`.

```bash
pnpm install ws --save
```

Once that's done, we can use `ws` in our `server.js` file as follows to create a web socket server:

```javascript
const http = require('http');
const WebSocket = require('ws');

// Create a web socket server on top of a regular http server
const server = http.createServer(app.callback());
const wsserver = new WebSocket.Server({ server: server });
```

Replace the original `app.listen(3000)` with `server.listen(3000)`.

Let's also add a function to handle the incoming message payload, then send this data over to the browser.

```javascript
function receiveSms(payload) {
  const phone = payload.msisdn;
  const msg = payload.text;
  const timestamp = payload['message-timestamp'];
  
  const smsData = JSON.stringify({ 
    phone: phone,
    msg: msg,
    timestamp: timestamp
  });

  // Broadcast the message to all open clients
  wsserver.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(smsData);
    }
  });
}
```
Your entire `server.js` file up to this point in the tutorial should look something like this:

```javascript
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const serve = require('koa-static');

const http = require('http');
const WebSocket = require('ws');

const app = new Koa();
const router = new Router();
const server = http.createServer(app.callback());
const wsserver = new WebSocket.Server({ server: server });

app.use(serve('./public'));
app.use(bodyParser());

router.post('/inbound-sms', async (ctx, next) => {
  const payload = ctx.request.body;
  receiveSms(payload);
  ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());

server.listen(3000);
console.log('listening on port 3000');

function receiveSms(payload) {
  const phone = payload.msisdn;
  const msg = payload.text;
  const timestamp = payload['message-timestamp'];
  
  const smsData = JSON.stringify({ 
    phone: phone,
    msg: msg,
    timestamp: timestamp
  });

  // Broadcast the message to all open clients
  wsserver.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(smsData);
    }
  });
}
```

### Displaying Inbound SMS in the Browser

The next step is to ensure the browser is ready to receive this data from the server, so it's time to set up the front-end of things.

Clear out the default contents in the `client.js` file Glitch provides, and replace its contents with the following:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  let socket = null;
  let connected = false;
  
  function start() {
    socket = new WebSocket('wss://' + location.host);
    
    socket.onopen = function(evt) {
      connected = true;
      console.log('open')
    }
    
    socket.onmessage = function(evt) {
      const reply = JSON.parse(evt.data);
      console.log(reply);
      addMsg(reply.phone, reply.msg, reply.timestamp, 'messages');
    }
    
    socket.onclose = function(evt) {
      connected = false;
      console.log('closed')
      check();
    }
  }

  function check() {
    if(!socket || socket.readyState == 3) start();
  }

  start();
  setInterval(check, 5000);
});
```
There are 2 functions here, `start()` to establish a new WebSocket connection and the corresponding event handlers, and `check()` to check if the status of the connection and reconnect if disconnected. 

Now, if you open the browser console on your application and leave it alone for a while, you should see a series of `open` and `close` being logged to the console.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fcheck.png?1545670192708)

Replace the default markup of the `` element the `index.html` file with the following instead:

```html
<main>
  <h1>V-mobile</h1>
  <ul id="messages"></ul>
</main>
```

We can add more elements and styles to make it look more like a mobile phone later. For now, let's get all the data displaying in the correct place first. We'll add 2 more functions to the `client.js` file that will parse the data sent over from the server and append them to the DOM.

```javascript
function addMsg(sender, content, time, parent) {
  const messages = document.getElementById(parent); 
  const newMsg = document.createElement('li');
  messages.appendChild(newMsg);
  
  appendData(newMsg, sender);
  appendData(newMsg, content);
  appendData(newMsg, time);
}

function appendData(newMsg, data) {
  const textSpan = document.createElement('span');
  const textContent = document.createTextNode(data);
  textSpan.appendChild(textContent);
  newMsg.appendChild(textSpan);
}
```

Add this new function to the `onmessage` event handler and when you send an SMS to your virtual number, that SMS should display on your page, albeit slightly unstyled and not looking too pretty.

```javascript
socket.onmessage = function(evt) {
  const reply = JSON.parse(evt.data);
  console.log(reply);
  addMsg(reply.phone, reply.msg, reply.timestamp, 'messages');
}
```

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Ffirst-inbound.png?1545705618197)

## Sending SMS From the Browser With Nexmo's Messages API

### Creating a Messages Application

Next, go back to your Nexmo dashboard and navigate to the *Create an application* page under the *Messages and Dispatch* section on the sidebar. Fill in your application name, and the webhook URLs with your Glitch app URL as the host. You will also need to generate a public/private key pair, which will prompt you to download the `private.key` file.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fgenerate-key.png?1545658727093)

It is important that both the webhook URLs are configured, and your application has routes set up for both these endpoints to accept `POST` requests in order to prevent an unwanted message queue build-up.

Then, click on the orange *Create application* button. The next screen will allow you to link your virtual number to your application by clicking the *Link* button under the *Manage* column.

![](https://cdn.glitch.com/df802ecc-0da6-4e3b-adb3-740a4b639b86%2F12.jpg?1543306036765)

Finally, you will be asked if you would like to link any external accounts, but you can leave this for now.

![](https://cdn.glitch.com/df802ecc-0da6-4e3b-adb3-740a4b639b86%2F13.jpg?1543306033533)

To upload the `private.key` file to Glitch and keep it secret, you can create the file in a `.data` folder. The contents of this folder will only be visible to you and any trusted collaborators you add to the project. Copy the contents of the `private.key` you downloaded earlier into this new file.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fprivate-key.gif?1545657133495)

### Credentials Setup

Glitch supports [environment variables](http://help-center.glitch.me/help/env/) via the `.env` file, which is a secure way to store your API credentials and other private data for your project. Set up your API key, secret, Nexmo virtual number, Messages application ID and private key path in the `.env` file.

Be sure to enclose them in quotes as each value needs to be a string. We will be referencing them for initialising a new Nexmo instance, which we use to send SMS messages.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fenv.png?1545657287095)

Add your API credentials to the `server.js` file and initialise a new Nexmo instance.

```javascript
const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;
const NEXMO_APPLICATION_PRIVATE_KEY_PATH = process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH;
const NEXMO_NUMBER = process.env.NEXMO_NUMBER;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH
});
```

### Sending an SMS From Your Browser

We'll need some way for users to enter the recipient's phone number and the message they want to send, so let's add some input fields for them to do that.

```html
<input type="tel" name="phone" placeholder="Send SMS to…?" required>
<input type="text" name="msg">
<button id="send" type="button">Send</button>
```

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Finputs.png?1545720614585)

To handle user inputs, add the following to your `client.js` file:

```javascript
const msgField = document.querySelector('input[name="msg"]');
const phoneField = document.querySelector('input[name="phone"]');
const sendBtn = document.getElementById('send');

msgField.addEventListener('keypress', (evt) => {
  if (evt.keyCode === 13) {
    const passed = phoneCheck(phoneField);

    if (passed) {
      send(socket, phoneField, msgField);
    } else {
      console.log('Phone field was not filled. To do: add error handling UI here.');
    }
  }
}, false);

sendBtn.addEventListener('click', (evt) => {
  const passed = phoneCheck(phoneField);

  if (passed) {
    send(socket, phoneField, msgField);
  } else {
    console.log('Phone field was not filled. To do: add error handling UI here.');
  }
}, false);

function phoneCheck(phoneField) {
  return phoneField.value !== '' && /^\d+$/.test(phoneField.value);
}

function send(socket, phoneField, msgField) {
  const phone = phoneField.value.replace(/\D/g,'');
  const msg = msgField.value;
  const payload = JSON.stringify({
    phone: phone,
    message: msg
  });

  socket.send(payload);

  const date = new Date();
  const time = date.toLocaleTimeString();

  addMsg('YOUR_APP_NAME', msg, time, 'messages');
  msgField.value= '';
}
```

What we're doing here is triggering the `send()` function when the user clicks on the *Send* button or the *Enter* key. There is also a very rudimentary check on the phone number field, to make sure only digits are entered. The message will also be displayed on the browser, like a typical messaging application.

There is a **lot** more to be done for field validation from a security and UX standpoint which is out of scope for this tutorial, but validation is important and it is always best practice to devote effort and testing to make sure it's done right.

On the server-side of things, we need to take the data sent through from the browser and forward the message to the recipient's phone number.

Add the following routes to your `server.js` file:

```javascript
router.post('/webhooks/inbound-message', async (ctx, next) => {
  ctx.status = 200;
});

router.post('/webhooks/message-status', async (ctx, next) => {
  ctx.status = 200;
});
```

This is to make sure `POST` requests from Nexmo have proper endpoints to be sent to and receive `200` responses upon successful delivery.

We'll add a message handler and a `forwardSMS()` function which will utilise Nexmo's Messages API to send an SMS to the target recipient once data from the browser is received.

```javascript
wsserver.on('connection', function connection(socket) {
  socket.on('message', data => {
    forwardSms(JSON.parse(data));
  });
});

function forwardSms(payload) {
  const phone = payload.phone;
  const msg = payload.message;

  nexmo.channel.send(
    { "type": "sms", "number": phone },
    { "type": "sms", "number": NEXMO_NUMBER },
    {
      "content": {
        "type": "text",
        "text": msg
      }
    },
    (err, data) => {
      if (err) { console.log(err) }
      if (data) { console.log('Outbound message successful: ', data.message_uuid) }
    }
  )
}
```

To test that everything works as expected, enter the phone number of a mobile phone which you have access to and send a test message. Your target recipient should receive the SMS within a few seconds.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fforward-sms.jpg?1545723715931)

If your target recipient replies to the SMS thread, then the message will be sent back through to the browser.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Freply.jpg?1545724011673)

Now that the underlying system is up and running, there are several things you can do if you want to continue this project, like making the interface prettier, adding stronger validation checks on both the client and server, edge case handling, etc.

My version of this project is called V-mobile and you can [check it out on Glitch](https://v-mobile.glitch.me/). If you like how it looks, feel free to remix my project and make it your own.

![](https://cdn.glitch.com/03f552cb-b122-492c-94c5-0802f09a5185%2Fend-result.jpg?1545709825668)

## Where Next?

If you are keen to do more with these APIs, here are some links that might be helpful to you:

- [Documentation](https://developer.nexmo.com/messages/overview) for the Messages API on the developer portal
- Series of [tutorials](https://www.nexmo.com/blog/category/developer/tutorial/) for various Nexmo APIs
- If you need us, try the [Nexmo Community Slack channel](https://developer.nexmo.com/community/slack)
- Let us know what you think by tweeting at [@NexmoDev](https://twitter.com/nexmodev)