---
layout: post
title: "The one where I grok MVC"
date: Feb 19, 2016
project: SG50 Time Machine
image: project-11.jpg
tags: [kohana, client-work]
---

Earlier this year, I mentioned that I was starting out with the [Kohana](https://kohanaframework.org/) framework. Actually, my team uses a heavily modified version of the Kohana framework as a starter for all our projects. In addition to the Kohana base architecture, our framework had a bunch of goodies built in, like lazy-loading, a run-time Sass compiler and so on. But I digress. We had been tasked to build the website for Audi's SG50 Time Machine campaign. 

<img srcset="{{ site.url }}/images/posts/sg50/sg50-480.jpg 480w, {{ site.url }}/images/posts/sg50/sg50-640.jpg 640w, {{ site.url }}/images/posts/sg50/sg50-960.jpg 960w, {{ site.url }}/images/posts/sg50/sg50-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/sg50-640.jpg" alt="A Drive Back in Time" />

## Building the website

The front-facing site itself wasn't too complicated. And this was the first project I kick-started, i.e. clone the framework, set it up and configure it etc. And hence came the post [Introduction to the Base Framework]({{ site.url }}/blog/intro-to-base-framework/). It contains my noob explanation of MVC as well as covers how Base Framework (a modified version of [Kohana](https://kohanaframework.org/)) is used by front-end developers (me, actually <span class="emoji">🤓</span>).

The bulk of the content was on the home page itself, with some sub-pages for additional secondary information. It was going to be a (in my own words) a pseudo-single page website. There would be four sections, the introduction, a map of the event, an accompanying video and a registration form. The navigation links would be a combination of anchor links that scrolled down to each respective position, as well as links to the aforementioned sub-pages. Probably not the best design pattern around, but, circumstances.

### Introduction section

Our designers came up with the idea to have the background transform from modern day back to 1965, in line with the "back-in-time" theme. My initial idea was very simple, just two images, with the modern day version superimposed on the 1965 version, and animating the opacity to fade out. If you read my [post about diamond grids]({{ site.url }}/blog/diamond-grid-using-sass/), you'll realise that my initial simple ideas don't fly very well with designers. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

<figure>
    <p data-height="385" data-theme-id="9162" data-slug-hash="vLMyax" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/vLMyax/'>Background fade demo</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
    <figcaption>Simple is sometimes not good enough. Life.</figcaption>
</figure>

Turns out the requirement is for the scene to gradually transition back to the past, with different buildings and details fading out one by one. Did I mention the site is supposed to be responsive? After going through the over-engineering thought process of slicing each building and positioning them absolutely, then applying the fade-out effect with animation delays... Okay, it sounds ridiculous now I put it into words. I settled on making it a background video instead.

So the key now was to optimise the *\*bleep\** out of that video. I used a program called [Handbrake](https://handbrake.fr/), which provides some presets for web-optimisation already. After tweaking the frame-rate and some back-and-forth with the designer in terms of discernible quality issues, I managed to get the file size down to 1.1mb (I know that's still huge, and it still makes me <span class="emoji">😭</span>). One of my favourite web tutorial sites, [thenewcode.com](http://thenewcode.com) by [Dudley Storey](https://twitter.com/dudleystorey) had an article on [full screen background videos](http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video), which I highly suggest you read. In fact, read all you can from that site, immediate skills level-up.


### Navigation

The navigation looks sinisterly simple at first glance, but from a code stand-point, it is anything but straightforward. In fact, it warranted its [own blog post]({{ site.url }}/blog/that-navigation-bar-design/) of more than 2000 words. Feel free to skip to that post and experience the trials and tribulations of someone trying to comprehend the [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).

<figure>
    <img srcset="{{ site.url }}/images/posts/sg50/navbar-480.jpeg 480w, {{ site.url }}/images/posts/sg50/navbar-640.jpeg 640w, {{ site.url }}/images/posts/sg50/navbar-960.jpeg 960w, {{ site.url }}/images/posts/sg50/navbar-1280.jpeg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/navbar-640.jpeg" alt="Site navigation" />
    <figcaption>Simple is not easy.</figcaption>
</figure>

### Full page scrolling

Now I'm pretty opinionated about scroll-jacking. My opinion is **just don't**. The design team was pretty adamant about implementing a full page scroll though. My next best option was to provide both a full-page scroll trigger but still allowing users to scroll as per normal. Civility and compromise are the keys to a lasting relationship, people. Seriously, IMHO, designers and developers should be best of friends. I didn't have the time or technical skill to write a full-page scroll plugin on my own so I chose to use [fullPage.js](http://alvarotrigo.com/fullPage/) by [Álvaro Trigo](http://alvarotrigo.com/), which had the option of keeping native scroll behaviour in addition to full page scrolling.

My designer wanted to have some sort of animation on the scroll trigger and tried to give me a GIF file of what she wanted. Me being me, I couldn't just take the GIF and use it, like a normal person. No no no. I told her I'd make an SVG and animate it, and we wouldn't have to worry about pixelation! She gave a look like <span class="emoji">🙄</span> and told me to knock myself out.

It was a good thing the design was reasonably simple. But I'm barely an intermediate vector wrangler, so creating the vector file itself took a bit longer than I initially expected. After a couple iterations of tweaking timings and keyframes in [Codepen](http://codepen.io/huijing/pen/EjOrOe), I got it to look presentable.

<p data-height="151" data-theme-id="9162" data-slug-hash="EjOrOe" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/EjOrOe/'>Animated scroll-down icon</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The scroll icon shouldn't be displayed when the page scrolled down to the last section, so it needed to be hidden. I could handle that function just fine.

<pre><code class="language-javascript">function detectScroll() {
    var scrollPos = $(window).scrollTop() + $(window).height();
    var scrollHeight = $(document).height();
    $('#fpScroll').addClass('transparent');
    clearTimeout($.data(this, 'scrollTimer'));
    if (scrollHeight - scrollPos > 800) {
        $.data(this, 'scrollTimer', setTimeout(function() {
            $('#fpScroll').removeClass('transparent');
        }, 250));
    }
}</code></pre>

### Fixed background performance

The background image was fixed to give some semi-parallax kind of effect. But I remembered reading an article about how that impacted scrolling performance. Turns out the `background-attachment: fixed` triggers a paint operation during scrolling, because the browser needs to recalculate the fixed background image's location relative to the DOM elements around it. The solution is to make use of a pseudo-element and the `will-change` property to indicate to the browser that my fixed background ought to be rendered in its own layer. I've linked the article below and highly recommend you read it.

## Wrapping up

This was definitely not the most technically challenging project I worked on, but as with most agency projects, technical issues are usually not the major pain points. The campaign did win the agency [a bunch of awards](http://www.marketing-interactive.com/events/audi-and-publicis-secure-top-spots-at-mob-ex-2016/), so that's always good. It's also good to be constantly reminded that writing good code is only part of what contributes to a project's success. There are many non-technical factors that play a key role as well.

## Further reading / resources

<ul>
  <li class="no-margin"><a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video">Create Fullscreen HTML5 Page Background Video</a> by <a href="https://twitter.com/dudleystorey">Dudley Storey</a></li>
  <li class="no-margin"><a href="http://alvarotrigo.com/fullPage/">fullPage.js</a> by <a href="http://alvarotrigo.com/">Álvaro Trigo</a></li>
  <li><a href="http://fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property">Fix scrolling performance with CSS will-change property</a> by <a href="https://chrisruppel.com/">Chris Ruppel</a></li>
</ul>
