---
layout: post
title: "A beginner's guide to server-side web development with Node.js"
date: Jan 31, 2019
tags: [javascript, server-side]
external_site: bit
external_url: javascript:void(0)
---
For the bulk of my web career, I've worked exclusively on the client-side of things. Designing responsive layouts, creating visualisations from large amounts of data, building application dashboards etc. But I never really had to deal with routing or HTTP requests directly. Until recently. This post is a write-up of how I learnt more about server-side web development in Node.js, and a brief comparison of 3 popular Node.js frameworks.

*Note: if you're an experienced Node.js developer, you're probably going to think what's in here is blindingly obvious/simple.* <span class="kaomoji">¯\\\_(ツ)_/¯</span>

## Some networking basics

When I was starting out in the web industry a couple years back, I stumbled upon a Computer Networks course by [Professor David Wetherall](https://djw.cs.washington.edu/) on Coursera. Unfortunately, it is no longer available but the lectures are still available [on the Pearson website](http://media.pearsoncmg.com/ph/streaming/esm/tanenbaum5e_videonotes/tanenbaum_videoNotes.html). 

I really liked this course because it explained what was happening under the hood in a digestible manner, so if you can get your hands on the textbook, [Computer Networks](https://www.pearson.com/us/higher-education/program/Tanenbaum-Computer-Networks-5th-Edition/PGM270019.html), give it a read for all the in-depth details of the wonders of networking.

Over here though, I'm only going to cover a brief overview of things for context. [HTTP (Hypertext Transfer Protocol)](https://developer.mozilla.org/en-US/docs/Web/HTTP) is a communications protocol used in computer networks. The internet has plenty of them, like [SMTP (Simple Mail Transfer Protocol)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), [FTP (File Transfer Protocol)](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [POP3 (Post Office Protocol 3)](https://en.wikipedia.org/wiki/Post_Office_Protocol) and so on.

These protocols allow devices with vastly different hardware/software to communicate with each other because they provide well-defined message formats, rules, syntax and semantics etc. This means as long as the device supports a particular protocol, it can communicate with any other device on the network.

Operating systems usually come with support for networking protocols like HTTP out-of-the-box, which explains why we don't have to explicitly install any additional software to access the web. Most networking protocols maintain an open connection between 2 devices, allowing them to transmit data back and forth.

HTTP, which is what the web runs on, is different. It is known as a connectionless protocol, because it is based on a request/response mode of operation. Web browsers make requests to the server for images, fonts, content etc. but once the request is fulfilled, the connection between the browser and server is severed.