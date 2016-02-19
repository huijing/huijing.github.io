---
layout: post
title: "The one where I grok MVC"
date: Feb 16, 2016
project: SG50 Time Machine
image: project-11.jpg
tags: [kohana, projects]
---

Earlier this year, I mentioned that I was starting out with the [Kohana](https://kohanaframework.org/) framework. Actually, my team uses a heavily modified version of the Kohana framework as a starter for all our projects. In addition to the Kohana base architecture, our framework had a bunch of goodies built in, like lazy-loading, a run-time Sass compiler and so on. But I digress. We had been tasked to build the website for Audi's SG50 Time Machine campaign. 

<img srcset="{{ site.url }}/images/posts/sg50/sg50-480.jpg 480w, {{ site.url }}/images/posts/sg50/sg50-640.jpg 640w, {{ site.url }}/images/posts/sg50/sg50-960.jpg 960w, {{ site.url }}/images/posts/sg50/sg50-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/sg50-640.jpg" alt="A Drive Back in Time" />

## Building the website

The front-facing site itself wasn't too complicated. And this was the first project I kick-started, i.e. clone the framework, set it up and configure it etc. And hence came the post [Introduction to the Base Framework]({{ site.url }}/blog/intro-to-base-framework/). It contains my noob explanation of MVC as well as covers how Base Framework (a modified version of [Kohana](https://kohanaframework.org/)) is used by front-end developers (me, actually 🤓).

The bulk of the content was on the home page itself, with some sub-pages for additional secondary information. It was going to be a (in my own words) a pseudo-single page website. There would be four sections, the introduction, a map of the event, an accompanying video and a registration form. The navigation links would be a combination of anchor links that scrolled down to each respective position, as well as links to the aforementioned sub-pages. Probably not the best design pattern around, but, circumstances.

### Introduction section

Our designers came up with the idea to have the background transform from modern day back to 1965, in line with the "back-in-time" theme. My initial idea was very simple, just two images, with the modern day version superimposed on the 1965 version, and animating the opacity to fade out. If you read my [post about diamond grids]({{ site.url }}/blog/diamond-grid-using-sass/), you'll realise that my initial simple ideas don't fly very well with designers. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

<figure>
    <p data-height="385" data-theme-id="9162" data-slug-hash="vLMyax" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/vLMyax/'>Background fade demo</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
    <figcaption>Simple is sometimes not good enough. Life.</figcaption>
</figure>

Turns out the requirement is for the scene to gradually transition back to the past, with different buildings and details fading out one by one. Did I mention the site is supposed to be responsive? After going through the over-engineering thought process of slicing each building and positioning them absolutely, then applying the fade-out effect with animation delays... Okay, it sounds ridiculous now I put it into words. I settled on making it a background video instead.

So the key now was to optimise the *\*bleep\** out of that video. I used a program called [Handbrake](https://handbrake.fr/), which provides some presets for web-optimisation already. After tweaking the frame-rate and some back-and-forth with the designer in terms of discernible quality issues, I managed to get the file size down to 1.1mb (I know that's still huge, and it still makes me 😭). One of my favourite web tutorial sites, [thenewcode.com](http://thenewcode.com) by [Dudley Storey](https://twitter.com/dudleystorey) had an article on [full screen background videos](http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video), which I highly suggest you read. In fact, read all you can from that site, immediate skills level-up.


### Navigation



## Further reading / resources

- [Create Fullscreen HTML5 Page Background Video](http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video) by [Dudley Storey](https://twitter.com/dudleystorey)
- [fullPage.js](http://alvarotrigo.com/fullPage/) by [Álvaro Trigo](http://alvarotrigo.com/)
