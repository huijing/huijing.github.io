---
layout: post
title: "A beginner's guide to server-side web development with Node.js"
date: Jan 31, 2019
tags: [javascript, server-side]
external_site: bit
external_url: javascript:void(0)
---
For the bulk of my web career, I've worked exclusively on the client-side of things. Designing responsive layouts, creating visualisations from large amounts of data, building application dashboards etc. But I never really had to deal with routing or HTTP requests directly. Until recently.

This post is a write-up of how I learnt more about server-side web development with [Node.js](https://nodejs.org/en/), and a brief comparison of writing a simple HTTP server using 3 different frameworks, [Express](https://expressjs.com/), [Koa.js](https://koajs.com/) and [Hapi.js](https://hapijs.com/).

*Note: if you're an experienced Node.js developer, you're probably going to think what's in here is blindingly obvious/simple.* <span class="kaomoji">¯\\\_(ツ)_/¯</span>

## Some networking basics

When I was starting out in the web industry a couple years back, I stumbled upon a Computer Networks course by [Professor David Wetherall](https://djw.cs.washington.edu/) on Coursera. Unfortunately, it is no longer available but the lectures are still available [on the Pearson website](http://media.pearsoncmg.com/ph/streaming/esm/tanenbaum5e_videonotes/tanenbaum_videoNotes.html). 

I really liked this course because it explained what was happening under the hood in a digestible manner, so if you can get your hands on the textbook, [Computer Networks](https://www.pearson.com/us/higher-education/program/Tanenbaum-Computer-Networks-5th-Edition/PGM270019.html), give it a read for all the in-depth details of the wonders of networking.

<figure>
    <figcaption>Computer Networks 5th Edition</figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-side/textbook.jpg" srcset="{{ site.url }}/assets/images/posts/server-side/textbook@2x.jpg 2x" alt="">
</figure>

Over here though, I'm only going to cover a brief overview of things for context. [HTTP (Hypertext Transfer Protocol)](https://developer.mozilla.org/en-US/docs/Web/HTTP) is a communications protocol used in computer networks. The internet has plenty of them, like [SMTP (Simple Mail Transfer Protocol)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), [FTP (File Transfer Protocol)](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [POP3 (Post Office Protocol 3)](https://en.wikipedia.org/wiki/Post_Office_Protocol) and so on.

These protocols allow devices with vastly different hardware/software to communicate with each other because they provide well-defined message formats, rules, syntax and semantics etc. This means as long as the device supports a particular protocol, it can communicate with any other device on the network.

<figure>
    <figcaption>From <a href="https://community.fs.com/blog/tcpip-vs-osi-whats-the-difference-between-the-two-models.html">TCP/IP vs. OSI: What’s the Difference Between the Two Models?</a></figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-side/osi-model.png" srcset="{{ site.url }}/assets/images/posts/server-side/osi-model@2x.png 2x" alt="">
</figure>

Operating systems usually come with support for networking protocols, like HTTP, out-of-the-box, which explains why we don't have to explicitly install any additional software to access the web. Most networking protocols maintain an open connection between 2 devices, allowing them to transmit data back and forth.

HTTP, which is what the web runs on, is different. It is known as a connectionless protocol, because it is based on a request/response mode of operation. Web browsers make requests to the server for images, fonts, content etc. but once the request is fulfilled, the connection between the browser and server is severed.

<figure>
    <figcaption>Simplification of request/response</figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-side/req-res.png" srcset="{{ site.url }}/assets/images/posts/server-side/req-res@2x.png 2x" alt="">
</figure>

### Servers and Clients

The term server may be slightly confusing to people new to the industry because it can refer to both the hardware (physical computers that house all the files and software required by websites) or the software (program that allows users to access those files on the web).

Today, we'll be talking about the software side of things. But first, some definitions. URL stands for Universal Resource Locator, and consists of 3 parts: the **protocol**, the **server** and the **requested file**.

<figure>
    <figcaption>Anatomy of a URL</figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-side/url.svg" alt="" style="max-height:18em">
</figure>

The HTTP protocol defines several methods that the browser can use to ask the server to perform a bunch of different actions, the most common being `GET` and `POST`. When a user clicks a link or enters a URL in the address bar, the browser sends a `GET` request to the server to retrieve the resource defined in the URL.

The server needs to know how to process this HTTP request in order to retrieve the correct file then send it back to the browser who asked for it. The most popular web server software that handles this are [Apache](http://httpd.apache.org/) and [NGINX](https://www.nginx.com/).

<figure>
    <figcaption>Web servers handle incoming requests and respond to them accordingly</figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-side/server.png" srcset="{{ site.url }}/assets/images/posts/server-side/server@2x.png 2x" alt="">
</figure>

Both are full suite open-source software packages that include features like authentication schemes, URL rewriting, logging and proxying, just to name a few. Both Apache and NGINX are written in C. Technically, you could write a web server in any language. [Python](https://docs.python.org/3/library/http.server.html), [Go](https://golang.org/pkg/net/http/), [Ruby](https://blog.appsignal.com/2016/11/23/ruby-magic-building-a-30-line-http-server-in-ruby.html), this list can go on for quite a bit. It's just that some languages are better at doing certain things than others.

## Creating an HTTP server with Node.js

[Node.js](https://nodejs.org/en/about/) is a Javascript run-time environment built on [Chrome's V8 Javascript engine](https://v8.dev/docs). It comes with a [http module](https://nodejs.org/api/http.html) that provides a set of functions and classes for building a HTTP server.

For this basic HTTP server, we will also be using [file system](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html) and [url](https://nodejs.org/api/url.html), all of which are native Node.js modules.

Start off by importing the required modules.

```javascript
const http = require('http') // To use the HTTP interfaces in Node.js
const fs = require('fs') // For interacting with the file system
const path = require('path') // For working with file and directory paths
const url = require('url') // For URL resolution and parsing
```
We will also create a dictionary of MIME types so we can assign the appropriate MIME type to the requested resource based on its extension. A full list of MIME types can be found at the [Internet Assigned Numbers Authority](https://www.iana.org/assignments/media-types/media-types.xhtml).

```javascript
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}
```
Now we can create the HTTP server with `http.createServer()` function, which will return a new instance of `http.Server`.

```javascript
const server = http.createServer()
```
We will pass a request handler function into `createServer()` with the `request` and `response` objects. This function gets called once every time an HTTP request is made against the server.

```javascript
server.on('request', (req, res) => {
  // more stuff needs to be done here
})
```
The server is started by calling the `listen` method on the server object, with the port number we want the server to listen on, for example, `5000`.

```javascript
server.listen(5000)
```
The `request` object is an instance of [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage), and allows us to access all sorts of information about the request, like response status, headers and data.

The `response` object is an instance of [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse), which is a [writable stream](https://nodejs.org/api/stream.html#stream_class_stream_writable), and provides numerous methods for sending data back to the client.

Within the request handler, we want to do the following things:
- Parse the incoming request and handle those without extensions
    ```javascript
  const parsedUrl = new URL(req.url, 'https://node-http.glitch.me/')
  let pathName = parsedUrl.pathname
  let ext = path.extname(pathName)

  // To handle URLs with trailing '/' by removing aforementioned '/'
  // then redirecting the user to that URL using the 'Location' header
  if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
    res.writeHead(302, {'Location': pathName.slice(0, -1)})
    res.end()
    return
  }

  // If the request is for the root directory, return index.html
  // Otherwise, append '.html' to any other request without an extension
  if (pathName === '/') { 
    ext = '.html' 
    pathName = '/index.html'
  } else if (!ext) { 
    ext = '.html' 
    pathName += ext
  }
    ```
- Do some rudimentary checks to determine if the requested resource exists and respond accordingly
    ```javascript
  // Construct a valid file path so the relevant assets can be accessed
  const filePath = path.join(process.cwd(), '/public', pathName)
  // Check if the requested asset exists on the server
  fs.exists(filePath, function (exists, err) {
    // If the asset does not exist, respond with a 404 Not Found
    if (!exists || !mimeTypes[ext]) {
      console.log('File does not exist: ' + pathName)
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('404 Not Found')
      res.end()
      return
    }
    // Otherwise, respond with a 200 OK status, 
    // and add the correct content-type header
    res.writeHead(200, {'Content-Type': mimeTypes[ext]})
    // Read file from the computer and stream it to the response
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  })
    ```
All the code is hosted on [Glitch](https://glitch.com/) and you are free to remix the project if you wish.
<div style="height:385px;width:100%;margin-bottom:1em">
  <iframe
    src="https://glitch.com/embed/#!/embed/node-http?path=server.js&previewSize=0"
    alt="node-http on Glitch"
    style="height:100%;width:100%;border:0">
  </iframe>
</div>

## Creating a HTTP server with Node.js frameworks

Node.js frameworks like [Express](https://expressjs.com/), [Koa.js](https://koajs.com/) and [Hapi.js](https://hapijs.com/) come with various useful middleware functions, in addition to a host of other handy features that save developers the trouble of writing themselves.

Personally, I feel that it's good to learn the basics without frameworks first, just for understanding what goes on under the hood, then after that, go nuts with whatever framework you like.

[Express](https://expressjs.com/) has its own in-built middleware for serving static files, so the code required for doing the same thing as in native Node.js is much shorter.

```javascript
const express = require('express')
const app = express()

// Serve static files out of the 'public' folder
app.use(express.static('public'))

// Serve the index.html when users access the 
// root directory using res.sendFile()
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(5000)
```

[Koa.js](https://koajs.com/) does not bundle any middleware within its core, so any middleware required has to be installed separately. The latest version of Koa.js leverages async functions in favour of callbacks. To serve static files, you can use the `koa-static` middleware.

```javascript
const serve = require('koa-static')
const koa = require('koa')
const app = new koa()

// Serve static files out of the 'public' folder
// By default, koa-static will serve the index.html file on the root directory
app.use(serve(__dirname + '/public'))

app.listen(5000)
```
[Hapi.js](https://hapijs.com/) favours configuration, and revolves around configuring the `server` object. It utilises plugins for extending capabilities like routing, authentication and so on. To serve static files, we will need a plugin called `inert`.

```javascript
const path = require('path')
const hapi = require('hapi')
const inert = require('inert')

// Routes can be configured on the server object
const server = new hapi.Server({
  port: 5000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'public')
    }
  }
})

const init = async () => {
  // server.register() command adds the plugin to the application
  await server.register(inert)

  // inert adds a directory handler to 
  // specify a route for serving multiple files
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  })

  await server.start()
}

init()
```
Each of these frameworks have their own pros and cons, and these will be more evident for larger applications rather than simply serving a single HTML page. The choice of framework will depend heavily on the actual requirements of the project you're working on.

## Wrapping up

If the network side of things has always been a black box to you, hopefully this article can serve as a helpful introduction to the protocol that powers the web. I also highly recommend reading the [Node.js API documentation](https://nodejs.org/api/), which is very well-written and is a great help for anyone new to Node.js in general. 

- [HTTP by MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
- [HTTP Server: Everything you need to know to build a simple HTTP server from scratch](https://medium.com/from-the-scratch/http-server-what-do-you-need-to-know-to-build-a-simple-http-server-from-scratch-d1ef8945e4fa)