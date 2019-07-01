---
layout: post
title: "Internet Explorer 3, an adventure in building blind"
date: Jul 1, 2019
tags: [html, css, design, retrotech]
---
Some of you might know that I run the [CSS meetup, Talk.CSS](https://singaporecss.github.io) in Singapore together with my best mate, [Wei](https://twitter.com/wgao19). If you didn't, you do now. Perhaps you have inferred that I really do love CSS. But you know what else I love? The 90s. More specifically, computing in the 90s.

I [wrote about this before]({{ site.url }}/blog/reminiscing-the-90s), on how the first computer I remember was a 486 in my living room and how I spent hours playing computer games running on MS-DOS and Windows 3.1. So it was inevitable that I would get on real well with [Kheng Meng](http://yeokhengmeng.com/), retro computing enthusiast and co-organiser of the [Hackware meetup](http://www.meetup.com/Hackware/).

We had worked together before at the inaugural [Super Silly Hackathon](https://supersillyhackathon.sg/) back in 2017 and found out that we [made a pretty good team]({{ site.url }}/blog/hardware-hacks-super-silly-hackathon). Being a hardware man and not really a web developer, I've never had good reason to get Kheng Meng to come for Talk.CSS.

<img srcset="{{ site.url }}/assets/images/posts/ie3-challenge/ie3b-480.jpg 480w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3b-640.jpg 640w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3b-960.jpg 960w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3b-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/ie3-challenge/ie3b-640.jpg" alt="Kheng Meng and I at Super Silly Hackathon 2017">

That changed when I had another one of my many hare-brained schemes. Knowing that Kheng Meng was fully capable to setting up a working version of Windows 3.1, complete with networking capabilities and whatever applicable software I wanted, I asked him to set me up with an original version of Internet Explorer 3.

## Why Internet Explorer 3

[Internet Explorer 3](http://www.kompx.com/en/internet-explorer-3.htm) was released on August 13, 1996 and shipped with [Windows 95 OSR 2](https://winworldpc.com/product/windows-95/osr-2). This was pretty much the era of the first browser wars. IE3 is notable for being the first commercial browser that supported Cascading Stylesheets (CSS).

It was also a major upgrade from IE2, which was essentially [built on the Spyglass Mosaic source code](https://ericsink.com/Browser_Wars.html). There were still portions of Spyglass code in Internet Explorer at this point. This was also when [JScript](https://en.wikipedia.org/wiki/JScript) (Microsoft's implementation of Javascript) was first supported.

<figure>
    <figcaption>Source: <a href="https://web.archive.org/web/20190630101029/http://royalmulti.blogspot.com/2012/07/holy-browser-wars.html">Holy Browser Wars! </a></figcaption>
    <img src="{{ site.url }}/assets/images/posts/ie3-challenge/ie-vs-netscape.jpg" alt="IE versus Netscape">
</figure>

Of course, the term “supports“ is a fairly subjective term as I would soon learn. I don't actually use any JScript or Javascript in this experiment, but maybe a future iteration will, though I'm not sure if it'll be quite as fun for me.

## Self-imposed requirements

The point of this experiment was to build a website on a *single codebase* that still looks decent on any browser. To be fair, “any“ is a pretty tall order, and so is “decent”, so I put out the disclaimer that this experiment would either end up being spectacular, or fail spectacularly.

Regardless of end result, I figured it'd be a relatively amusing talk to do at [Talk.CSS #39](https://singaporecss.github.io/39/), and the only shot I had of getting a non-web developer, hardware guy like Kheng Meng to come to the CSS meetup.

<img src="{{ site.url }}/assets/images/posts/ie3-challenge/ie3e.jpg" srcset="{{ site.url }}/assets/images/posts/ie3-challenge/ie3e@2x.jpg 2x" alt="Kheng Meng making sure all his hardware is A-OK">

Note that there is no desire to make the website look the same in every browser, because that's missing the point. Personally, I find it fascinating that a single codebase can give you different results in different browsers. I can literally feel the disdain from functional programming aficionados everywhere.

You say bug, I say feature. Be like water, as Bruce Lee says. [Applies to web design]({{ site.url }}/slides/43-view-source-2018/), IMHO.

## Hardware and sysadmin stuff

Kheng Meng had [done this back in 2016](http://yeokhengmeng.com/2016/09/windows-for-workgroups-3-11-on-vintage-and-modern-hardware-in-2016/) for the Hackware meetup, and that's where I met him properly for the first time. So I was certain that I'd have a working copy of the original Windows 3.11 with networking capabilities on hand. 

All I needed was for him to install me a copy of Internet Explorer 3. He also never thought he'd see the words “very advanced” used when referring to Internet Explorer 5 in 2019.

<img src="{{ site.url }}/assets/images/posts/ie3-challenge/ie3a.png" srcset="{{ site.url }}/assets/images/posts/ie3-challenge/ie3a@2x.png 2x" alt="Conversation between Kheng Meng and I on IE3 versus IE5">

Given that we were presenting at Talk.CSS, where all talks would be recorded, the AV setup was a tad more complicated than normal. Just a tad. What's a few more machines and cables, right?

<img srcset="{{ site.url }}/assets/images/posts/ie3-challenge/ie3d-480.jpg 480w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3d-640.jpg 640w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3d-960.jpg 960w, {{ site.url }}/assets/images/posts/ie3-challenge/ie3d-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/ie3-challenge/ie3d-640.jpg" alt="Recording setup involving 3 computers and an excessive amount of cables">

## The process

To be fair, Kheng Meng did offer to loan me the actual machine for testing purposes but because I specialise in doing things that sound like a good idea at the time (except they're really not), I turned him down. It would be like a [Code in the Dark](http://codeinthedark.com/), except without the shitty EDM music and the stress of a countdown.

As aside, little did I know I would end up hosting the Code in the Dark session for JSConf.Asia. It had been a long day, I got snarky near the end. Ask me about it, if you want.

Remember that I wanted a single codebase that would function for the latest Nightly builds all the way back to the browsers of '96. So there was some planning involved, for the design and the resultant markup. I was thinking, nothing too fancy, just a single web page about the project and Internet Explorer 3.

But I also wanted to use modern CSS effects for the new browsers, like gradients, blend modes and layout models like grid. The challenge was to spruce up the IE3 version as much as I could with what limited CSS was available. 