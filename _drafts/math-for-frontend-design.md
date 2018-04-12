---
layout: post
title: "Math for front-end design"
date: Apr 16, 2018
tags: [css, html, javascript]
---
If you were one of those kids that wondered why you had to attend all those math classes and learn about angles and algebra, well, so was I. I'll admit, I was too restless and easily bored to be a good student in a classroom setting. But as I got older, I realised that certain mathematical principles actually had practical applications in my day-to-day work (Not calculus though, I mean, I'm not an engineer or rocket scientist).

## Arithmetic

> Arithmetic is a branch of mathematics that deals with properties of the counting (and also whole) numbers and fractions and the basic operations applied to these numbers.  
> —[Alexander Bogomolny](https://www.cut-the-knot.org/WhatIs/WhatIsArithmetic.shtml)

This seems unremarkably basic, but if you're doing any type of responsive design, and let's be honest, responsive design IS the norm nowadays, arithmetic is totally relevant to you. What does arithmetic have to do with design, you may ask? Plenty. But before that, let's talk about CSS units and values, because that's what we're going to be counting.

Numbers feature quite heavily in CSS, as property values, mostly. And the specification that covers this is the [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/). The key function behind the arithmetic of CSS is the `calc()` function, which supports the four basic operations of addition, subtraction, multiplication and division.

Back in the day when web design was mostly fixed width, designers and developers would produce pixel-perfect designs that only worked when viewed at specific viewport widths. But as the number of different screen sizes that users would use to browse the web grew exponentially, fixed width designs didn't really fit the bill any more.

It made a lot more sense to let the browser figure out the sizing of elements on the page depending on the viewport size instead, using percentages, font-relative units like `em`s or `ch`s, and more recently, viewport units. The `calc` function works with combinations of CSS values of different units, handling the tricky computation for us so we can focus on designing and building the layouts and components we want.

### The floating footer problem

A common requirement in many designs is to make sure the footer is “stuck” to the bottom of the viewport even if there isn't enough content to fill the height of the viewport. Now, there are several different ways to achieve such an effect, but using `calc` is elegant enough to ensure that the footer never ends up floating when there isn't enough content, yet still remain within the document flow.

Here's some very basic markup, consisting of a `header`, `main` and `footer` elements.

<pre class="language-markup"><code>&lt;header&gt;Header&lt;/header&gt;
&lt;main&gt;Main&lt;/main&gt;
&lt;footer&gt;Footer</footer&gt;</code></pre>

To make sure the footer stays at the bottom of the page regardless of the amount of content within the `main` element, the `main` element needs to have a minimum height of 100% of the viewport height less the height of the header and footer, or:

<pre class="language-markup"><code>100% viewport height – ( height of header + height of footer)</code></pre>

Translating that into CSS (this assumes browser styles have been reset):

<pre class="language-css"><code>main {
  min-height: calc(100vh - 2em);
}</code></pre>

Without additional styling, the height of the header and footer should both be `1em` due to the text within them. Using `min-height` instead of `height` ensures that if there is more content than the height of the viewport, it will flow as per normal.

<figure>
    <figcaption>The <code>footer</code> is always at the bottom.</figcaption>
    <video src="{{ site.url }}/assets/videos/calc-minheight.mp4" loop autoplay controls></video>
</figure>

### Fluid typography

While we're on the topic of responsive design, let's also use some math to figure out our font sizes for different viewport widths. Font sizes can take more than just px or em units, we can use viewport units to define font sizes as well. A problem with this approach is that if the viewport gets too small, your font could potentially shrink to an illegible size.

To combat this, we can use `calc` to provide a minimum font-size like the example below:
<pre class="language-css"><code>body { font-size: calc(1em + 1vw); }</code></pre>

If you do require more control over your font sizes, then more variables need to be added to the equation. The concept of precise fluid font sizes was pioneered by Mike Riethmuller in his article, [Precise control over responsive typography](https://www.madebymike.com.au/writing/precise-control-responsive-typography/), and was an extension of the idea of [molten leading](http://nicewebtype.com/notes/2012/02/03/molten-leading-or-fluid-line-height/) by [Tim Brown](http://tbrown.org/). Mike Riethmuller's equation looks like this:

font-size: calc( 12px + (24 - 12) * ( (100vw - 400px) / ( 800 - 400) ));

[Florens Verschelde](https://fvsch.com/) then did a deep dive into the mathematics behind CSS locks in his article [The math of CSS locks](https://fvsch.com/code/css-locks/). 

### Calculating shapes with Sass

### Creating complex layouts with CSS grid

### Colour ranges with hsl

### Aspect ratios

