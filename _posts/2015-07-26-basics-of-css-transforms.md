---
layout: post
title: "The basics of CSS transforms: Part 1"
date: July 26, 2015
image: 2d-transforms.jpg
tags: [css, performance]
hascodepen: true
---
The specification for CSS transforms had been in the works since 2009. There were separate specifications for CSS 2D transformations, CSS 3D transformations and SVG transformations but they have all since converged into a single specification called the [CSS Transforms Module Level 1](http://www.w3.org/TR/css-transforms-1/). Browser support for 2D transforms is very good, with all major browsers fully supporting it at least two versions back (sorry, but IE8 is really old now). Browser support for 3D transforms is also reasonably robust. All major browsers, aside from Internet Explorer, fully support it at least two versions back. Internet Explorer 10 onwards supports everything except <code class="language-css">transform-style: preserve-3d</code>. So no nesting of 3D transformed elements, but other than that, all is good.

There's quite a lot to CSS transforms so there'll be multiple parts to this article. This part will cover the basics of why we should use CSS transforms as well as how 2D transforms work.

## It's all about performance

Performance has always been an aspect of web development (and design) that is very important to me. You know those developers who test sites on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), [Pingdom](http://tools.pingdom.com/fpt/), [GTMetrix](https://gtmetrix.com/) AND [WebPageTest](http://www.webpagetest.org/)? I'm one of those people (or maybe I'm the only weirdo who does that, please don't judge). But recently, I've become very interested in animation on the web, largely from the most recent [The Web Ahead](http://thewebahead.net/103) episode with [Rachel Nabors](http://rachelnabors.com/). It's a fascinating episode, especially the part which discusses the science behind how the human brain processes the animations we see.

The issue of [jank](http://jankfree.org/) was also discussed. If you've ever heard the term 60 frames per second (fps) being thrown around conversations between front-end developers, this is what we're talking about. Most devices today have a screen refresh rate of 60 frames per second. To have smooth motion on the screen, the browser should match that refresh rate. Jank is just a term we coined up to describe any stuttering during the animation, mostly because the animation can't keep up with the refresh rate of the screen.

## How browsers render stuff

What does this have to do with CSS transforms? Oh, everything. First, we need to have some understanding of how browser rendering works. The definitive primer on [how browsers work](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) by [Tali Garsiel](http://taligarsiel.com/) is required reading for all web developers, in my humble opinion. 

<p class="no-margin">Every browser has a rendering engine, which displays content onto the screen. Each of the major browsers use a different rendering engine. Firefox uses <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Gecko">Gecko</a>, Internet Explorer uses <a href="https://msdn.microsoft.com/en-us/library/aa741312(v=vs.85).aspx">Trident</a>, Safari uses <a href="https://www.webkit.org/">WebKit</a> and Chrome and Opera (from version 15 onwards) uses <a href="http://www.chromium.org/blink">Blink</a>, which is a fork of WebKit. In a very condensed nutshell, this is what happens:</p>
<ol>
  <li class="no-margin">Browser parses HTML elements into the DOM tree</li>
  <li class="no-margin">Browser parses style data to construct render tree</li>
  <li class="no-margin">Browser lays out the render tree by generating the geometry and position for each element</li>
  <li class="no-margin">Browser paints the render tree by filling out pixels for each element into layers</li>
  <li>Browser composites the layers, i.e. puts them together and draws them out to the screen</li>
</ol>

## Not all the things should be animated

Because this is a waterfall process, making changes to processes near the beginning make the browser work harder than those that come later. Different CSS properties trigger the browser differently. But those that affect layout are the most "expensive" and those that affect compositing are relatively much "cheaper". [Paul Irish](http://www.paulirish.com/) created [CSS Triggers](http://csstriggers.com/), which is a site that documents the behaviour of all the CSS properties. There are only two properties that trigger compositing alone when changed, <code class="language-css">opacity</code> and <code class="language-css">transform</code>, which is why the most performant animations are done using these two properties.

The good thing is that almost all animations on the web can be accomplished with these two properties alone. The meat of the animations would be covered with the <code class="language-css">transform</code> property so it's good to know exactly how it works and what it can do.

## Basic terminology for CSS transforms

One thing to note is that transforms **don't work on inline elements**. The [specification](http://www.w3.org/TR/css-transforms-1/) explains transformable elements as block and inline-block elements, as well as elements whose display property resolve to `table-row`, `table-row-group`, `table-header-group`, `table-footer-group`, `table-cell` or `table caption`. SVG elements can also be transformed. Transforms are also cumulative, meaning the element will aggregate all the transform properties of its ancestors and itself to define a current transformation matrix. The transformation matrix is computed from the `transform` and `transform-origin` properties.

Coordinate systems are how the browser knows where everything is supposed to be laid out. Every document viewport has its own coordinate system. The x-axis goes from left to right, while the y-axis goes from top to bottom. The top left corner is represented by (0, 0). There is also a z-axis, which goes into the screen from the perspective of the user. An element with a transform property establishes its own local coordinate system, with an origin point right on the centre of the element, (50%, 50%). 

<img srcset="{{ site.url }}/assets/images/posts/css-transforms/origin@2x.jpg 2x" src="{{ site.url }}/assets/images/posts/css-transforms/origin@1x.jpg" alt="Transform default origin" />

<p class="no-margin">You can change this origin point using the `transform-origin` property as follows:</p>
<pre><code class="language-css">.some-element {
  transform-origin: (100px 25px);
}</code></pre>
*Note: I use Autoprefixer when I compile my Sass files so my syntax will be prefix-free in all the examples.*

<img srcset="{{ site.url }}/assets/images/posts/css-transforms/origin2@2x.jpg 2x" src="{{ site.url }}/assets/images/posts/css-transforms/origin2@1x.jpg" alt="Transform origin at (70px 100px)" />

Any coordinates specified will be computed based on the transform origin at (100px 25px), as seen from the second point in the diagram.

## 2D transform functions

There are 4 types of 2D transform functions, <code class="language-css">translate()</code>, <code class="language-css">scale()</code>, <code class="language-css">rotate()</code> and <code class="language-css">skew()</code>. Every transform has an equivalent <code class="language-css">matrix()</code> function, which specifies a 2D transformation in the form of a transformation matrix of six values. Calculations for 2D transforms are made on a 3x3 matrix. For a full explanation of the math behind CSS transforms, check out [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/) by [Tiffany Brown](http://tiffanybbrown.com/). In a nutshell, the <code class="language-css">matrix()</code> function is shorthand for you want to apply multiple transforms on a single element.

### transform: rotate()

<code class="language-css">rotate()</code> allows you to rotate an element around its transform-origin by the angle specified in degrees. Positive values rotate the element in a clockwise direction and negative values rotate the element in an anti-clockwise direction. You can play around with the sliders below and see what happens if you change the transform-origin.

<p data-height="232" data-theme-id="9162" data-slug-hash="GJXLJw" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/GJXLJw/'>CSS transforms - rotate property</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### transform: scale()

<code class="language-css">scale()</code> allows you to grow or shrink an element from its transform-origin. It take in two parameters, [sx, sy], where sx scales the element along the x-axis and sy scales the element along the y-axis. If no value is supplied for sy, it will take a value equal to sx.

Any values greater than one will grow the element while values between zero and one will shrink it. Positive values transform from left to right and top to bottom, while negative values transform from right to left and bottom to top. This is easier to understand by adjusting the sliders below. You can also specify <code class="language-css">scaleX()</code> or <code class="language-css">scaleY()</code> which grow or shrink the element along the x-axis and y-axis respectively. For <code class="language-css">scaleX()</code>, only the *x-coordinate* of the transform origin is relevant, and for <code class="language-css">scaleY()</code>, only the *y-coordinate* is relevant.

<p data-height="268" data-theme-id="9162" data-slug-hash="mJGYzr" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/mJGYzr/'>CSS transforms - scale property</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### transform: translate()

<code class="language-css">translate()</code> allows you to move the element in any direction based on the x and y coordinates specified. It takes in two parameters, [tx, ty], where tx translates the element along the x-axis and ty translates the element along the y-axis. ty is an optional value, and if not supplied, will take the value of zero. For <code class="language-css">translateX()</code>, the translation only takes place on the x-axis and for <code class="language-css">translateY()</code>, the translation only takes place on the y-axis.

<p data-height="175" data-theme-id="9162" data-slug-hash="bdxyPL" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/bdxyPL/'>CSS transforms - translate property</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### transform: skew()

<code class="language-css">skew()</code> applies a 2D skew by the angle specified along the transform-origin point. It takes two parameters, [ax, ay], where ax skews the element along the x-axis and ay skews the element along the y-axis. The second parameter is optional, and if not specified, will default to zero. For <code class="language-css">skewX()</code>, the skew will take place along the x-axis, and only the y-coordinate of the transform-origin is relevant. For <code class="language-css">skewY()</code>, the skew will take place along the y-axis, and only the x-coordinate of the transform-origin is relevant.

<p data-height="260" data-theme-id="9162" data-slug-hash="QbZyqb" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/QbZyqb/'>CSS transforms - skew property</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

## Part 1 Wrap-up

That was a lot of the basics and simple 2D transforms. Hopefully this has convinced you that CSS transforms is something you should to your CSS toolkit. Of course, a lot of the exciting and fun stuff will be about 3D transforms and animation, which will be covered in the next part. Stay tuned, people <span class="emoji" role="img" tabindex="0" aria-label="grinning face with smiling eyes">&#x1F601;</span>.

