---
layout: post
title: "Where did CSS named colours come from?"
date: Aug 09, 2019
tags: [design, css]
---
Talk.CSS, which is Singapore's monthly CSS meetup, has a segment called CSS colour of the month, where we mention 1 of the 148 named CSS colours. This works out to more than 12 years worth of meetups, and I figured we'd run out of meetups before we ran out of colours.

Since [Wei](https://uuei.io) became a co-organiser, we've each been taking turns picking the CSS colour of the month, and for the August edition, she picked `snow`. The hex code for `snow` is `#fffafa`, which works out to a RGB value of `rgb(255, 250, 250)`.

Some of you who are familiar with the notation may already have realised that this gives us a gentle tinge of red. Very, very slight, but still, red. And Wei wondered why `snow` was red(ish). I had no answer for that at the time, but I wanted to figure it out.

## What do the specifications say?

There is a specification called the [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) that is currently in Editor's Draft status and it defines the colour-related properties and values that already exist in CSS1, CSS2 and CSS Color 3, plus new properties and values. So I thought that'd be a good place to start.

Scroll down to [section 6.1 on named colours](https://drafts.csswg.org/css-color/#color-keywords) and we find this:

> 16 of CSS’s named colors come from HTML originally: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow. Most of the rest come from one version of the X11 color system, used in Unix-derived systems to specify colors for the console.

Ah hah! The X11 colour system! The specification also points us to a talk on the history of the X11 colour system by [Alex Sexton](https://twitter.com/SlexAxton) in his talk entitled *Peachpuffs and Lemonchiffons* at [CSSConfUS 2014](https://2014.cssconf.com/) (click the image to play the video):

<iframe
  width="560"
  height="315"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}img{width:100%}</style><a href=https://www.youtube.com/embed/HmStJQzclHc?autoplay=1><img src=https://img.youtube.com/vi/HmStJQzclHc/maxresdefault.jpg></a>"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
></iframe>

Another fun thing I discovered while reading the specification was that CSS defines a set of `<system-color>` values which allow us “to specify colours in a manner that integrate them into the users' graphic environment.”

There are security and privacy considerations to this particular feature because in theory, this exposes details of the user's OS settings, which could be used for [fingerprinting](). Also, this may make it easier for malware site builders to create user interfaces that seamlessly correspond to an user's system.

The spec states that, however, several system colours are now defined to be “generic”, hence mitigating this risk. This does make me appreciate the many different angles that the CSS Working Group consider when authoring specifications.

I really quite like this specification, so do give it a read if you like colours as much as I do.

## So what's this X11 all about?

I messed around with Linux operating systems quite a bit before I even go into web development, so X11 isn't something that is foreign to me. X is a portable, network-transparent window system. X11 is version 11 of the X Window System.

From [the documentation](https://www.x.org/releases/X11R7.7/doc/man/man7/X.7.xhtml):

> The X Window System is a network transparent window system which runs on a wide range of computing and graphics machines.

The documentation also contains a brief section about colour names, but it didn't go into the choice of colour names. It just mentions that X supports the use of abstract colour names and that the value for this abstract name is obtained by searching one or more colour name databases.

The X server's database that contains all the colour names is commonly located at */usr/share/X11/rgb.txt*.