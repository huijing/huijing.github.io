---
layout: post
title: "Diamond grid layout with Sass"
date: September 30, 2015
tags: [css]
---
Since I started my career on the web, I've been building websites that follow standard grid layouts. It got to a point where I was telling an intern at my company that developers think in rectangles. I mean, there's nothing wrong with rectangular layouts. They're like your mom's Volvo, steady and reliable. But sometimes, it's fun to try something different. I'm lucky enough to work with some awesome designers, and for a new project, they came up with a diamond-based grid layout. Well then, challenge accepted. (•̀o•́)ง 

##Attempt 1: Just rotate them divs
On the first pass, I hadn't gotten my hands on the actual design yet, but started experimenting with HTML and CSS first, just to try out a few ideas I had. The first thing that came to mind was using CSS transforms, considering I had already [written about it] earlier. Nothing a little `transform: rotate(45deg)` couldn't do, right? Unfortunately, things weren't all that straightforward. The general layout consisted of 2 small diamonds, 2 medium diamonds and 1 large diamond, all aligned to relative to each other on the grid. There would also be an alternate layout to switch things up a bit.

<div class="figure-wrapper">
<figure class="two-col">
<figcaption>Main layout</figcaption>
<img src="{{ site.url }}/images/posts/css-shapes/magazine-layout.jpg" alt="Magazine layout"/>
</figure>
<figure class="two-col">
<figcaption>Alternate layout</figcaption>
<img src="{{ site.url }}/images/posts/css-shapes/web-layout.jpg" alt="Web layout"/>
</figure>
</div>

The initial mark-up for the grid was pretty simple. A wrapper for the entire grid, individual wrappers for each diamond and some placeholder content.

<pre><code class="language-markup">&lt;div class="grid-wrapper layout-1">
    &lt;div class="grid-item diamond-small diamond-s1">
        &lt;div class="diamond__content">
            &lt;p>This is a small diamond.&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-med diamond-m1">
        &lt;div class="diamond__content">
            &lt;p>This is a medium diamond.&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-large">
        &lt;div class="diamond__content">
            &lt;p>This is a large diamond.&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-small diamond-s2">
        &lt;div class="diamond__content">
            &lt;p>This is a small diamond.&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-med diamond-m2">
        &lt;div class="diamond__content">
            &lt;p>This is a medium diamond.&lt;/p>
        &lt;/div>
    &lt;/div>
&lt;/div>
</code></pre>

<p class="no-margin">Sass variables came in very handy in this case as I could create a grid-unit to use as a base for calculating the widths of all the diamonds. I used an arbitrary number of <code class="language-css">95vw / 16</code> as the base unit just to see if it would work.</p>

<pre><code class="language-css">
$gridUnit: 95vw / 16;
$small: $gridUnit * 2;
$med: $gridUnit * 3;
$large: $gridUnit * 4;
</code></pre>

<p class="no-margin">Some of you who are much smarter than me would immediately recognise that this method would <strong>NOT</strong> work, because you can't just rotate a bunch of positioned squares and expect them to end up aligned just right.</p>

##Attempt 2: Clip off them divs
That didn't go so well. Next idea on the list, CSS clip-path. This CSS property allows us to define a specified clipping region to be displayed. Anything outside this region will 'clipped' and won't be seen. The clipping region can be a path specified as a URL referencing an inline SVG or an external SVG. It can also be a shape method, like those used for [CSS shapes]. Unfortunately, support for CSS clip-path is non-existent for any version of Internet Explorer. Firefox only supports the url() syntax, while Chrome supports shapes and only inline SVG for the url() syntax. 
