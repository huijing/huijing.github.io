---
layout: post
title: "Diamond grid layout with Sass"
date: October 14, 2015
tags: [css]
---
Since I started my career on the web, I've been building websites that follow standard grid layouts. It got to a point where I was telling an intern at my company that developers think in rectangles. I mean, there's nothing wrong with rectangular layouts. They're like your mom's Volvo, steady and reliable. But sometimes, it's fun to try something different. I'm lucky enough to work with some awesome designers, and for a new project, they came up with a diamond-based grid layout. Well then, challenge accepted. (•̀o•́)ง 

##Attempt 1: Just rotate them divs
On the first pass, I hadn't gotten my hands on the actual design yet, but started experimenting with HTML and CSS first, just to try out a few ideas I had. The first thing that came to mind was using **CSS transforms**, considering I had already [written about it]({{ site.url }}/blog/basics-of-css-transforms/) earlier. Nothing a little `transform: rotate(45deg)` couldn't do, right? Unfortunately, things weren't all that straightforward. The general layout consisted of 2 small diamonds, 2 medium diamonds and 1 large diamond, all aligned to relative to each other on the grid. There would also be an alternate layout to switch things up a bit.

<div class="figure-wrapper">
    <figure class="two-col">
        <figcaption>Main layout</figcaption>
        <img src="{{ site.url }}/images/posts/diamond/layout-1.jpg" srcset="{{ site.url }}/images/posts/diamond/layout-1@2x.jpg 2x" alt="Layout 1"/>
    </figure>
    <figure class="two-col">
        <figcaption>Alternate layout</figcaption>
        <img src="{{ site.url }}/images/posts/diamond/layout-2.jpg" srcset="{{ site.url }}/images/posts/diamond/layout-2@2x.jpg 2x" alt="Layout 2"/>
    </figure>
</div>

The initial mark-up for the grid was pretty simple. A wrapper for the entire grid, individual wrappers for each diamond and some placeholder content.

<pre><code class="language-markup">&lt;div class="grid-wrapper layout-1">
    &lt;div class="grid-item diamond-small diamond-s1">
        &lt;div class="diamond__content">
            &lt;p>small diamond&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-med diamond-m1">
        &lt;div class="diamond__content">
            &lt;p>medium diamond&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-large">
        &lt;div class="diamond__content">
            &lt;p>large diamond&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-small diamond-s2">
        &lt;div class="diamond__content">
            &lt;p>small diamond&lt;/p>
        &lt;/div>
    &lt;/div>
    &lt;div class="grid-item diamond-med diamond-m2">
        &lt;div class="diamond__content">
            &lt;p>medium diamond&lt;/p>
        &lt;/div>
    &lt;/div>
&lt;/div>
</code></pre>

Sass variables came in very handy in this case as I could create a grid-unit to use as a base for calculating the widths of all the diamonds. I used an arbitrary number of <code class="language-css">95vw / 16</code> as the base unit just to see if it would work.

<pre><code class="language-scss">
$gridUnit: 95vw / 16;
$small: $gridUnit * 2;
$med: $gridUnit * 3;
$large: $gridUnit * 4;
</code></pre>

Some of you who are much smarter than me would immediately recognise that this method would <strong>NOT</strong> work, at least not without some trigonometry, because you can't just rotate a bunch of positioned squares and expect them to end up aligned just right.

<div class="figure-wrapper">
    <figure class="two-col">
        <figcaption>Piece of cake, just apply rotation...</figcaption>
        <img src="{{ site.url }}/images/posts/diamond/attempt1a.jpg" srcset="{{ site.url }}/images/posts/diamond/attempt1a@2x.jpg 2x" alt="Attempt 1"/>
    </figure>
    <figure class="two-col">
        <figcaption>Crap... ಠ_ಠ</figcaption>
        <img src="{{ site.url }}/images/posts/diamond/attempt1b.jpg" srcset="{{ site.url }}/images/posts/diamond/attempt1b@2x.jpg 2x" alt="Attempt 1 fail"/>
    </figure>
</div>

##Attempt 2: Clip off them divs
That didn't go so well. Next idea on the list, **CSS clip-path**. This CSS property allows us to define a specified clipping region to be displayed. Anything outside this region will 'clipped' and won't be seen. The clipping region can be a path specified as a URL referencing an inline SVG or an external SVG. It can also be a shape method, like those used for [CSS shapes]({{ site.url }}/blog/why-you-should-be-excited-about-css-shapes/). Unfortunately, support for CSS clip-path is non-existent for any version of Internet Explorer. Firefox only supports the url() syntax, while Chrome supports shapes and inline SVG for the url() syntax, but not external SVG. I managed to find a cross-browser [polyfill for CSS clip-path](https://github.com/AlfonsoFilho/ClipPath), which should help.

The idea is that each diamond is actually just a square unit with its corners clipped off, so the length of one square is the diagonal of the diamond. Tweak the variables a little bit, and voila:

<p data-height="425" data-theme-id="9162" data-slug-hash="gaxbJX" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/gaxbJX/'>Diamond grid with Sass (Clip-path)</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

At this point, it seemed that I'd cracked the diamond-grid layout my designer wanted, but I hadn't looked closely at the actual visuals and art direction. I just assumed it was a grid of diamonds in the background, something I could probably do with CSS. It would also make things easier to line up as they would be using the same base units. I came up with something like this:

<p data-height="268" data-theme-id="9162" data-slug-hash="JYRVjr" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/JYRVjr/'>CSS diamond background</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

And then I saw the actual hi-fidelity design. In a nutshell, this grid layout was meant for an image heavy site, essentially serving as a gallery of sorts. The background was made up of tiles of textured diamonds. And there would be highlights on some of the corners of the display diamonds to make them pop. Oh, and also, let's have some box shadows inside each display diamond as well, but only for those displays that contain images. ༼⊙_⊙༽

Okay, back to the drawing board.

##Attempt 3: High school math to the rescue
My third attempt was actually just a reboot of the first attempt. These diamonds are simply squares that got rotated, so I had the benefit of working with isosceles right triangles, which made calculations much neater.

<img srcset="{{ site.url }}/images/posts/diamond/trigonometry@2x.jpg 2x" src="{{ site.url }}/images/posts/diamond/trigonometry.jpg" alt="Isosceles right triangle" />

Since the adjacent and opposite sides of the triangle were equal, the width of each diamond would be the length of the hypotenuse (or the side of the square) divided by the square root of 2. Now here's the tricky part, there is no direct way to calculate the square root of a number using CSS or Sass. Sorry, no `Math.sqrt()` for you.  ¯\\_(ツ)_/¯ 

<p class="no-margin">The good thing about Sass is you can write your own functions and I, admittedly, being too lazy to write my own, just sourced for a <a href="http://www.antimath.info/css/sass-sqrt-function/">square root function</a> created by <a href="http://www.antimath.info/about/">Mihai Vaduva</a>:</p>

<pre><code class="language-scss">@function sqrt($r) {
    $x0: 1;
    $x1: $x0;
    @for $i from 1 through 10 {
        $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
        $x0: $x1;
    }
    @return $x1;
}
</code></pre>

<p class="no-margin">Now my Sass variables for calculating the grid layout looked like this:</p>
<pre><code class="language-scss">
$gridUnit: (100vw / 8);
$transformUnit: $gridUnit / sqrt(2);
$small: $transformUnit * 2;
$med: $transformUnit * 3;
$large: $transformUnit * 4;
</code></pre>

There was no way around positioning each display diamond absolutely, at least, I couldn't think of an alternate way (suggestions are welcome). I tried to structure my classes as efficiently as I could. If history is anything to go by, I'll probably look back at this and nitpick how I would have written it differently. For now, it's a long chunk of sizing and positioning based off the base units I established as variables. Couldn't possibly do this without Sass though.

<p data-height="375" data-theme-id="9162" data-slug-hash="pjrWaz" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/pjrWaz/'>Diamond grid with Sass (Transform)</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##Visual styles and art-direction
Using CSS to rotate the divs solved the problem of having inner shadows on the diamond displays that were to contain images. As for the background, I ended up tiling a pattern image, then aligning my divs to match up with the pattern. Using viewport widths (vw) as the basis for my grid units meant the layout would respond to screen size. Hence, my background image pattern would also have to grow and shrink according to the viewport width as well.

The problem with this approach is, unless your background image is sized very precisely, it is almost impossible to match the browser-calculated divs with the grid on the image exactly over a large range of screen sizes. A tiny 1 pixel misalignment at a small width usually became very evident at large widths. As the project I was working on wasn't exactly a fully responsive design, I could get away with it within a smaller range of screen widths.

<pre><code class="language-scss">body {
    @media screen and (min-width: 1000px) and (max-width: 1919px) {
        background: url('../img/bg-tile.jpg') repeat-y;
        background-size: contain;
    }
}</code></pre>

The trick was to use `background-size: contain` for the background image. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size), the browser will scale the image as large as it can while maintaining aspect ratio. This coupled with repeat-y gave me a background image that scaled with the viewport width. I tried to make the background tiles the same size as my Sass grid units but I'm pretty sure they were 1 or 2 pixels off. The discrepancy wasn't very obvious within the constraints of my media query though, so I was fine with that.

The highlights at certain corners of the display divs were added using the `:before` and `:after` pseudo-elements on the display divs themselves. These highlights were also were positioned absolutely, and I used the same Sass grid unit values to position them in the correct spots.

##Wrapping up
This was a very interesting project to work on and really stretched my knowledge and skills as a developer. There was a lot more to this project than just layout, but it was the base off of which the rest of the design was built upon. CSS properties like clip-path, transforms and my personal favourite, CSS shapes, provide us a lot of flexibility to explore different layouts. While starting out research for this project, I came across [this article](https://viget.com/inspire/who-says-the-web-is-just-for-squares) by [Trevor Davis](http://trevordavis.net/) who also had to build a diamond grid for his project. It seems that we're starting to break out of the constraints of rectangular layouts, and I'm confident that as CSS becomes more robust, we'll be able to pull off more creative designs in the future.
