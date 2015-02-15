---
layout: post
title: "Why you should be excited about CSS shapes"
date: February 14, 2015
tags: [css, podcasts]
---
So I just listened to the [Jen Simmons' interview](https://boagworld.com/season/11/episode/1105/) on the Boagworld podcast about CSS shapes and although I've heard about CSS shapes for a while now, I never really tried it out for myself. But for some reason, this interview just compelled me to sit myself down and really understand what the excitement is all about. (Ok, it could largely be because [Jen Simmons](http://jensimmons.com/) is awesome and I've been listening to her fantastic podcast, [The Web Ahead](http://thewebahead.net/) for more than a year now)

The first thing I did was to read the [W3C spec](http://thewebahead.net/) for the CSS shapes module. Yes, the spec does read a bit like some legal document in the beginning, but the fun starts from section 2 where all the cool stuff is. In a nutshell, CSS shapes allows us to wrap text around more than just rectangular boxes. You can now wrap your text around circles, ellipses and polygons and even images.

Before CSS shapes came along, we were more or less locked into standard layouts of rectangular columns. We had to explain to designers who came from print design that no, we can't make the text flow around your beautifully cropped image of Beyoncé.

<div class="figure-wrapper">
<figure class="two-col">
<figcaption>You want this?</figcaption>
<img src="/images/posts/magazine-layout.jpg" alt="Magazine layout"/>
</figure>
<figure class="two-col">
<figcaption>Sorry, you get this.</figcaption>
<img src="/images/posts/web-layout.jpg" alt="Web layout"/>
</figure>
</div>

CSS shapes is being developed by the [Adobe Web Platform team](http://blogs.adobe.com/webplatform/) and they have [blogged](http://blogs.adobe.com/webplatform/category/features/css-shapes) about how this spec has been developing since 2012. Check out the cool demo the team built, based on [Alice in Wonderland](http://webplatform.adobe.com/Demo-for-Alice-s-Adventures-in-Wonderland/), to showcase CSS shapes' capabilities. Point is, with CSS shapes, it's totally possible to have text wrap around Beyoncé's elbow.

<img class="shape" src="/images/posts/beyonce.png" alt="Beyoncé"/>
To be honest, the W3C spec is not that easy to understand, so here's my attempt at explaining it in plain English. A prerequisite for applying a CSS shape property to an element is that the element must be floated. It doesn't work on non-floated elements.

If the browser you're using right now support CSS shapes, you should see text wrapping nicely around the image of Beyoncé, otherwise you'll just see the standard rectangular column of text. (Hint: Try using Chrome or Safari)

There are 4 basic shape functions you can use to define an element's shape, in other words, how you want the text to flow around your element. In addition to that, you can also extract a shape from images with an alpha channel. 

The browser identifies the required shape from the <code class="language-css">shape-image-threshold</code> property. Pixels which have a higher alpha value than the threshold will make up the shape, so it's value must be between 0.0 (transparent) to 1.0 (opaque). If, for some reason, your image doesn't load, there will be no shape to speak of.

For now, text can only flow on the opposite side of the float declared on the element, meaning if it's floated left, then the text will flow on the right, and vice versa. In the future, it will be possible to make text flow all around an element with something called [CSS exclusions](http://dev.w3.org/csswg/css-exclusions/).

There are two types of shape properties:

- <code class="language-css">shape-outside</code> which flows the text around a shape. This goes with the <code class="language-css">shape-margin</code> property.
- <code class="language-css">shape-inside</code> which wraps text inside a shape. This goes with the <code class="language-css">shape-padding</code> property.

<pre><code class="language-css">
.element {
  shape-outside: url("path/to/nicely-cropped-image.png");
  shape-image-threshold: 0.5;
  shape-margin: 10px;
  float: left;
}
</code></pre>


CSS shapes has been available for Chrome since the 37 release, while Safari support came along at 7.1. Here's a look at the browser support for CSS shapes as of 11 Feb 2015.
<img src="/images/posts/css-shapes.jpg" alt="Can I use CSS shapes"/>

The unfortunate thing here is, neither Firefox nor Internet Explorer supports CSS shapes right now. But this is a feature that we should all keep an eye on, and get ourselves ready for, because this could potentially change the way we design websites altogether.
