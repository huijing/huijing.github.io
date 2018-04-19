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

If you do require more control over your font sizes, then more variables need to be added to the equation. The concept of precise fluid font sizes was pioneered by Mike Riethmuller in his article, [Precise control over responsive typography](https://www.madebymike.com.au/writing/precise-control-responsive-typography/), and was an extension of the idea of [molten leading](http://nicewebtype.com/notes/2012/02/03/molten-leading-or-fluid-line-height/) by [Tim Brown](http://tbrown.org/). Mike Riethmuller's equation looks something like this:

<img src="{{ site.url }}/assets/images/posts/math-for-fed/fluid-typography.svg" alt="Fluid typography annotation" />

[Florens Verschelde](https://fvsch.com/) then did a deep dive into the mathematics behind CSS locks in his article [The math of CSS locks](https://fvsch.com/code/css-locks/), by expressing the font-size / line-height calculation as a linear function. Linear functions can be plotted on graphs, which makes it easier to visualise relationship between font-size / line-height with the viewport size.

<figure>
    <figcaption>Graph from <a href="https://fvsch.com/code/css-locks/">The math of CSS locks</a> by <a href="https://fvsch.com/">Florens Verschelde</a></figcaption>
    <img src="{{ site.url }}/assets/images/posts/math-for-fed/linear-function.png" srcset="{{ site.url }}/assets/images/posts/math-for-fed/linear-function@2x.png 2x" alt="Font-size against viewport size in pixels" />
</figure>

## Geometry

> Geometry is a branch of mathematics that is concerned with the properties of configurations of geometric objects - points, (straight) lines, and circles being the most basic of these.  
> —[Alexander Bogomolny](https://www.cut-the-knot.org/WhatIs/WhatIsGeometry.shtml)

### Drawing shapes with CSS

Geometry can help with understanding how to create shapes with just CSS. Let's take the simple `border-radius` property, for example, which is used to round the corners of an element's outside borders. Most of us just put in a single value and call it a day, but the `border-radius` property is a little more complicated than that.

`border-radius` is actually a shorthand for all 4 `border-*-radius` properties, where `*` refers to `top-left`, `top-right`, `bottom-left` or `bottom-right`. And it can take up to 2 values, separated with a `/`, where the first value is the horizontal radius, while the second value is the vertical radius. Here's a diagram to visualisation purposes:

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/math-for-fed/border-radius.svg" alt="Border radius values" />

And when we use percentages as values, the horizontal radius will be a percentage of the **width** of the border box while the vertical radius will be a percentage of the **height** of the border box. So that's why setting a `border-radius: 50%` gives us a perfect circle or ellipse.

Moving onto something more interesting, but also requires borders, we have triangles. Pure CSS triangles are made possible by “hacking” the borders of an element. When we create borders around an element, the edges of these borders meet diagonally, and we can see this if we apply a sufficiently thick border width to our element. They are trapeziums.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/math-for-fed/border-box.svg" alt="Thick border widths" />

If we set the width and height of the element to 0, the trapeziums then become triangles, and voila, we've got our pure CSS triangles.

<img style="max-width:3em" src="{{ site.url }}/assets/images/posts/math-for-fed/borders-only.svg" alt="CSS triangles from borders" />

So let's say we don't want the triangles in a set of four, which is probably the usual case, the other three borders should be made invisible, by setting the adjacent borders' colour to `transparent` and omitting the opposite border altogether.

<pre class="language-css"><code>.triangle-up {
  width: 0; 
  height: 0; 
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 30px solid gray;
}</code></pre>

<img src="{{ site.url }}/assets/images/posts/math-for-fed/border-colour.svg" alt="Single pure CSS triangle" />

And maybe we don't always want isosceles triangles (that's what you get by setting all the border widths to the same value), so some geometry comes into play. The handy [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem) can be used to calculate what the height of the triangle should be like so:

<img src="{{ site.url }}/assets/images/posts/math-for-fed/equilateral.svg" alt="Equilateral CSS triangle" />

<pre class="language-css"><code>.triangle-up {
  width: 0; 
  height: 0; 
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: calc(100px * 0.866) solid gray;
}</code></pre>

## Wrapping up

Mathematics may seem like something that is far from the creative visual aspect of web design and development but it does have a number of practical applications, so why not brush off that high school math textbook of yours and see if there is anything in there that can inspire you to explore CSS in ways you never thought of before?
