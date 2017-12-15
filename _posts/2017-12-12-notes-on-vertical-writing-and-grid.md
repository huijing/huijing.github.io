---
layout: post
title: "Notes on vertical writing and CSS grid"
date: Dec 11, 2017
tags: [css]
---
When I was [working out the kinks]({{ site.url }}/blog/vertical-typesetting-revisited/) in my year-old vertical typesetting demo, I attempted to use CSS grid as one of the options for handling layout, but didn't get very far, because at that point, my brain had pretty much melted down <span class="emoji" role="img" tabindex="0" aria-label="confused face">&#x1F615;</span>. But I'm on a plane now, surrounded by people who are staring at code, so I felt sort of motivated to do something useful as well.

The thing I want to work out is how CSS grid works when the writing mode is vertical, and how that affects Firefox's Grid Inspector as well. Since I wrote a reasonably in-depth post on the Firefox Grid Inspector, I figured I'd better understand it as thoroughly as I could.

Demo and observation time!

## Basic setup

I started off with the most basic of markup structures. Because reduced test case. My original intention was to use grid for laying out a figure with multiple images and a caption.

<pre><code class="language-markup">&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;!-- Stuff that goes in &lt;head&gt; --&gt;
  &lt;/head&gt;
  
  &lt;body&gt;
    &lt;figure&gt;
      &lt;img src="img/listen.svg"&gt;
      &lt;img src="img/read.svg"&gt;
      &lt;figcaption&gt;This is a test&lt;/figcaption&gt;
    &lt;/figure&gt;
  &lt;/body&gt;

&lt;/html&gt;
</code></pre>

<figure>
    <figcaption>Basic markup structure (vertical-rl on html element)</figcaption>
    <img srcset="{{ site.url }}/images/posts/grid-vertical/markup-480.jpg 480w, {{ site.url }}/images/posts/grid-vertical/markup-640.jpg 640w, {{ site.url }}/images/posts/grid-vertical/markup-960.jpg 960w, {{ site.url }}/images/posts/grid-vertical/markup-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/grid-vertical/markup-640.jpg" alt="Basic markup structure" />
</figure>

I didn't know how grid rows and grid columns would work in vertical mode, so let's take a look at the specification.

> There are two sets of grid lines: one set defining columns that run along the block axis (the column axis), and an orthogonal set defining rows along the inline axis (the row axis).

I interpret this as, when the document has been set to `vertical-rl`, grid columns run top-to-bottom while grid rows run right-to-left like so:

<img style="max-height:15em;" src="{{ site.url }}/images/posts/grid-vertical/grid-lines.svg" alt="Vertical writing-mode grid lines" />

Let's see if that's the case by creating a layout with the `figure` element as the grid container. I want the 2 images to stack on top of each other, and the caption to stretch the length below (i.e. to the left) both images.

<pre><code class="language-css">html {
  writing-mode: vertical-rl;
}

figure {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content min-content;
}</code></pre>

Let's visualise my target end-result and their corresponding line numbers.

<img style="max-height:15em;" src="{{ site.url }}/images/posts/grid-vertical/simple.svg" alt="Basic grid layout" />

There seems to be some issues with the Grid Inspector tool here. I guess we'll be flying blind from here on out.

<figure>
    <figcaption>Something doesn't seem quite right here...</figcaption>
    <img srcset="{{ site.url }}/images/posts/grid-vertical/problem-480.jpg 480w, {{ site.url }}/images/posts/grid-vertical/problem-640.jpg 640w, {{ site.url }}/images/posts/grid-vertical/problem-960.jpg 960w, {{ site.url }}/images/posts/grid-vertical/problem-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/grid-vertical/problem-640.jpg" alt="Grid inspector tool issue" />
</figure>

Before I started using the Grid Inspector tool, I would apply borders to the grid items. It wasn't the best solution, because I couldn't actually see the grid tracks, but it'd have to do for now.

<figure>
    <figcaption>Borders, borders everywhere!</figcaption>
    <img srcset="{{ site.url }}/images/posts/grid-vertical/borders-480.jpg 480w, {{ site.url }}/images/posts/grid-vertical/borders-640.jpg 640w, {{ site.url }}/images/posts/grid-vertical/borders-960.jpg 960w, {{ site.url }}/images/posts/grid-vertical/borders-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/grid-vertical/borders-640.jpg" alt="Borders around grid items" />
</figure>

Okay, this reduced test case looks like Grid is working just fine in vertical writing-mode. So this is the code that will give me the layout I wanted in my earlier write-up (ignore the `border` code).

<pre><code class="language-css">figure {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content min-content;
  justify-items: center;
  border: 2px dashed green;
}

img {
  border: 2px dashed blue;
}

figcaption {
  border: 2px dashed red;
  grid-column: span 2;
}</code></pre>

<figure>
    <figcaption>Here we go</figcaption>
    <img srcset="{{ site.url }}/images/posts/grid-vertical/aligned-480.png 480w, {{ site.url }}/images/posts/grid-vertical/aligned-640.png 640w, {{ site.url }}/images/posts/grid-vertical/aligned-960.png 960w, {{ site.url }}/images/posts/grid-vertical/aligned-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/grid-vertical/aligned-640.png" alt="Aligned grid items" />
</figure>

## Expanded test case

Now, to see if this plays nice with nested `writing-mode`. Like I mentioned in the earlier post, I seem to be quite the stickler for punishment <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>. *Spoiler alert: it wasn't painful at all.*

I copied over the content from that demo, and rewrote the markup to make the figures flatten out. So the markup for each figure was changed like so:

<pre><code class="language-markup">&lt;!-- Non-grid version --&gt;
&lt;figure&gt;
  &lt;figcaption&gt;最早的視覺傳達方式基本都是利用圖形進行的。這是北美印地安在史前的岩洞壁畫&lt;/figcaption&gt;
  &lt;div class="img-wrapper img-double"&gt;
    &lt;img src="img/pictograms-1.jpg"&gt;
    &lt;img src="img/pictograms-1.jpg"&gt;
  &lt;/div&gt;
&lt;/figure&gt;

&lt;!-- Grid version --&gt;
&lt;figure class="img-double"&gt;
  &lt;figcaption&gt;最早的視覺傳達方式基本都是利用圖形進行的。這是北美印地安在史前的岩洞壁畫&lt;/figcaption&gt;
  &lt;img src="img/pictograms-1.jpg"&gt;
  &lt;img src="img/pictograms-1.jpg"&gt;
&lt;/figure&gt;</code></pre>

Grid rows and grid columns do respect the writing mode of the document, even if the writing mode is nested to high heaven. Which meant that I could make the layout code apply to the relevant elements generally, and adjust for direction (left/right, width versus top/bottom, height) when those states were toggled.

In fact, I'm thinking that once we have [CSS logical properties](https://www.w3.org/TR/css-logical-1/), I won't even have to have two sets of directional properties. That would be awesome!

The classes on each figure were to deal with if the figure had 1 image or 2 images. So for single image figures, the image just spanned 2 columns instead. The layout code for each figure looks like this:

<pre><code class="language-css">figure {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content max-content;
  justify-items: center;
  align-items: center;
}

figcaption {
  grid-column: span 2;
}

.img-single img {
  grid-column: span 2;
}</code></pre>

And the toggled versus un-toggled states looked like this:

<pre><code class="language-css">.c-switcher__checkbox:checked ~ main {
  figure {
    margin-left: 1em;
    max-height: 30em;
    margin-top: auto;
    margin-bottom: auto;
  }

  .img-single img {
    max-height: 20em;
  }
}

.c-switcher__checkbox:not(:checked) ~ main {
  figure {
    margin-bottom: 1em;
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
  }

  .img-single img {
    max-width: 20em;
  }
}</code></pre>

I kinda like it. So TIL, the issue isn't with writing-mode, it's with the Grid Inspector tool, but knowing Mozilla, the team is already working on the problem. Source code for the grid version of the demo [on GitHub](https://github.com/huijing/demos/tree/master/grids-vertical), and [live version viewable here](https://www.chenhuijing.com/demos/grids-vertical/).

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">YES! I wish I were there with you. Tomorrow. :D <br><br>We *have* to sit around and hack on demos this week. :D <br><br>Also, our Grid Inspector doesn’t properly work w/ non-horizontal LTR writing modes yet, but the team is on it. We should track down the engineers working on it this week.</p>&mdash; Jen Simmons (@jensimmons) <a href="https://twitter.com/jensimmons/status/940455924111630336?ref_src=twsrc%5Etfw">12 December 2017</a></blockquote>

If you were wondering (probably not, but still), I am currently at Mozilla All Hands in Austin, Texas and I'm super excited, but also super jet-lagged, which is why this post is being written at 4am. Does anyone care about this vertical writing mode stuff? I don't know, but I sure do.

Breakfast time! Until the next one.

