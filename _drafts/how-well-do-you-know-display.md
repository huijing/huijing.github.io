---
layout: post
title: "How well do you know the display property"
date: Jun 13, 2016
tags: [css]
---
The *display* property is one of the most important CSS properties we use for layout. Most of us would have used `block`, `inline` and `none`. `table` and `inline-block` are also quite common. The new darling is definitely `flex`, because it's a display property that was created specifically for layout. The upcoming `grid` (currently still being actively worked on) is another layout-specific property that we'll soon have in our arsenal as well.

Through my experience of building various responsive designs, I learnt a lot about the *display* and *position* properties, how they work and how they can be combined with media queries to achieve the desired layouts. I'll briefly cover each value, and also reminisce about a few responsive components I built previously that utilised *display* quite heavily.

We can't talk about *display* without mentioning something called a [box tree](https://drafts.csswg.org/css-display/#box-tree). Basically the browser parses CSS and renders it by generating a box tree, which represents the formatting structure of the rendered document. The *display* property defines the box's display type. 

The topic of how browsers render stuff on the screen is a really fascinating one and I highly suggest reading [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) by [Talia Garsiel](http://taligarsiel.com/). Another must-read is [Evolution of CSS Layout: 1990s to the Future](http://fantasai.inkedblade.net/weblog/2012/css-layout-evolution/) by [Fantasai](http://fantasai.inkedblade.net/), who works on CSS specifications at W3C. It's actually a talk she gave at the [Emerging Technologies for the Enterprise](http://2016.phillyemergingtech.com/2012/) conference, but there's a full transcript if video is not your thing.

## Those we know quite well already

Fun fact: the *display* values we use all the time are actually short-hand. For example, `block` is actually short-hand for `block flow`. Refer to [specification](https://drafts.csswg.org/css-display/#propdef-display) for full list.

All elements has a default *display* value, but they can be overridden by explicitly setting the *display* value to something else.

### display: none;

Removes the element and its children from the normal document flow. The document is rendered as if the element was never there to begin with, which means the space it occupied is collapsed. The content of the element is also ignored by screen readers.

### display: inline;

<img srcset="{{ site.url }}/images/posts/display/inline-480.jpg 480w, {{ site.url }}/images/posts/display/inline-640.jpg 640w, {{ site.url }}/images/posts/display/inline-960.jpg 960w, {{ site.url }}/images/posts/display/inline-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/display/inline-640.jpg" alt="Inline elements" />

The element generates one or more inline boxes. Inline-level elements take up, as the name suggests, as much space on the line as its tags define. Can be considered the complement to block-level elements.

### display: block;

<img srcset="{{ site.url }}/images/posts/display/block-480.jpg 480w, {{ site.url }}/images/posts/display/block-640.jpg 640w, {{ site.url }}/images/posts/display/block-960.jpg 960w, {{ site.url }}/images/posts/display/block-1080.jpg 1080w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 60vw, 25em" src="{{ site.url }}/images/posts/display/block-640.jpg" alt="Block elements" />

The element generates a block level box. All block-level elements start on a new line and, unless otherwise specified, stretches to width of its container. 

### display: list-item;

An element rendered as a list-item behaves exactly like that of a block-level element, but it also generates a marker box, which can be styled by the *list-style* property. Only `<li>` elements have the default value of `list-item`. Usually used to reset `<li>` elements back to their default behaviour.

### display: inline-block;

<p data-height="460" data-theme-id="9162" data-slug-hash="PNMxXL" data-default-tab="result" data-user="huijing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huijing/pen/PNMxXL/">CSS Display property</a> by Chen Hui Jing (<a href="http://codepen.io/huijing">@huijing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The element generates a block level box, but the entire box behaves like an inline element. Try it opening the above example on [CodePen](http://codepen.io/huijing/pen/PNMxXL/) and adjusting your window width, it'll make more sense that way.

### A responsive numeric stepper

One of the components I had to build was a numeric stepper for selecting different types of passengers. I got a static photoshop file with 1 mobile layout and 1 desktop layout. But there were all the in-between widths that weren't accounted for which "broke" the layout. 

It was mainly due to the text in parenthesis that didn't collapse nicely. So I had to toss in a bunch of media queries to adjust the width and display of the relevant elements at different widths. Check out [full-sized Codepen](http://codepen.io/huijing/full/LZPNYo/) to see how the component responds at different window widths.

<p data-height="320" data-theme-id="9162" data-slug-hash="LZPNYo" data-default-tab="result" data-user="huijing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huijing/pen/LZPNYo/">CSS Display example</a> by Chen Hui Jing (<a href="http://codepen.io/huijing">@huijing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Remember them table-based layouts?

There are a set of *display* values that allow your elements to behave just like HTML tables. My fellow Singapore-based developer [Colin Toh](https://twitter.com/p0larBoy) wrote [a great post on the display: table property](http://colintoh.com/blog/display-table-anti-hero), which you should really check out.

Although most of us no longer use table-based layouts, `display: table` is still pretty useful in certain cases. For example, if you wanted to have tables only on wider layouts, but retain a typical block layout on smaller widths. This can be achieved with a combination of media queries and *display* (with some pseudo-elements thrown in for good measure), just resize this window to see how it works.

<div class="table">
  <div class="tr">
    <div class="th td">table</div>
    <div class="td">Corresponds to the <code>&lt;table&gt;</code> HTML element. It defines a block-level box.</div>
  </div>
  <div class="tr">
    <div class="th td">table-header-group</div>
    <div class="td">Corresponds to the <code>&lt;thead&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-row</div>
    <div class="td">Corresponds to the <code>&lt;tr&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-cell</div>
    <div class="td">Corresponds to the <code>&lt;td&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-row-group</div>
    <div class="td">Corresponds to the <code>&lt;tbody&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-footer-group</div>
    <div class="td">Corresponds to the <code>&lt;tfoot&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-column-group</div>
    <div class="td">Corresponds to the <code>&lt;colgroup&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-column</div>
    <div class="td">Corresponds to the <code>&lt;col&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">table-caption</div>
    <div class="td">Corresponds to the <code>&lt;caption&gt;</code> HTML element.</div>
  </div>
  <div class="tr">
    <div class="th td">inline-table</div>
    <div class="td">This is the only value that does not have a direct mapping to a HTML element. The element will behave like a table HTML element but as an inline-block rather than a block-level element.</div>
  </div>
</div>

<pre><code class="language-css">@media screen and (min-width: 720px) {
  .table {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
}

.tr {
  margin-bottom: 1.6rem;
}

@media screen and (min-width: 720px) {
  .tr {
    display: table-row;
  }
}

@media screen and (min-width: 720px) {
  .td {
    display: table-cell;
    border: #f0f0f0 1px solid;
    padding: 0.4rem;
  }
  .td:first-child {
    width: 11em;
  }
}

.th {
  font-size: 1rem;
  line-height: 1.6rem;
  font-family: "Palo Alto";
}

@media screen and (min-width: 720px) {
  .th {
    font-size: 1.294rem;
    line-height: 1.6rem;
  }
}

@media screen and (min-width: 720px) {
  .th {
    font-size: 0.8rem;
    line-height: 1.6rem;
    font-family: "Roboto Slab", Rockwell, serif;
    font-weight: 700;
  }
}

@media screen and (min-width: 720px) and (min-width: 720px) {
  .th {
    font-size: 1rem;
    line-height: 1.6rem;
  }
}

.th::before {
  content: 'display: ';
}

@media screen and (min-width: 720px) {
  .th::before {
    content: '';
  }
}

.th::after {
  content: ';';
}

@media screen and (min-width: 720px) {
  .th::after {
    content: '';
  }
}</code></pre>

## New kids on the block

[Tab Atkins Jr.](), the primary author of the Flexbox and Grid specifications, made a salient point about these new layout-specific display modes.

> Flexbox is for one-dimensional layouts - anything that needs to be
laid out in a straight line (or in a broken line, which would be a
single straight line if they were joined back together).  
Grid is for two-dimensional layouts.  It can be used as a low-powered
flexbox substitute (we're trying to make sure that a single-column/row
grid acts very similar to a flexbox), but that's not using its full
power.  
- Tab Atkins Jr. to [www-style](https://lists.w3.org/Archives/Public/www-style/2013May/0114.html)

Something to keep in mind as you adopt these new CSS layouts in your work, and are confused about when to use which.

### display: flex;

The introduction of the flexbox layout mode, or CSS Flexible Box, marks the first time we have a specification that is really meant for laying out content in the browser. Laying out content on the web has evolved quite a bit since HTML was first introduced. When designers wanted to have some creative layout, the first technique used was nesting HTML tables, or what we refer to as table-based layouts.

And when CSS started to pick up, we moved over to float-based layouts, by nesting our content in different divs to float them around to get the desired effect. Float-based layouts are still very common but with flexbox being fully supported by all current browsers as of time of writing, I think it won't be too long before flexbox and grid, which will be covered later, become the prevailing method for layout.

I'm going to reference Scott Vandehey's article [What IS Flexbox?](http://spaceninja.com/2015/08/24/what-is-flexbox/), where he asks Tab Atkins Jr. about the history of Flexbox. The earliest draft for the specification is [dated July 23, 2009](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) but discussions started a few years before that. 

However, nothing was formally structured and the various browser vendors sort of implemented flexbox but didn't really follow the specification. Which is why the flexbox syntax became pretty messy (and still is when it comes to backward compatibility on older browsers).

<p class="no-margin">The flexbox model is very powerful, and because it can do a lot, some effort is required to fully understand how it works and how to use it. Both flexbox and grid require full-length articles to cover in depth, so I'll list my go-to resources for flexbox here:</p>

<ul>
  <li class="no-margin"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">A Complete Guide to Flexbox</a> by Chris Coyier</li>
  <li class="no-margin"><a href="https://philipwalton.github.io/solved-by-flexbox/">Solved by Flexbox</a> by <a href="http://philipwalton.com/">Philip Walton</a></li>
  <li class="no-margin"><a href="http://flexboxfroggy.com/">Flexbox Froggy</a> by <a href="http://thomaspark.co/">Thomas Spark</a></li>
  <li class="no-margin"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">Using CSS flexible boxes</a> by <a href="">Mozilla Developer Network</a></li>
  <li><a href="https://drafts.csswg.org/css-flexbox/">CSS Flexbox Specification (Editor’s Draft)</a></li>
</ul>

![Flexbox diagram]({{ site.url }}/images/posts/display/flex-diagram.svg "Flexbox diagram")

By declaring `display: flex` on an element, it becomes a flex container, and its child elements become flex items. This does not cascade further, meaning the flex properties do not extend to the element's grandchildren. Both the flex container and flex items have their own respective flex properties.

<p class="no-margin"><strong>Properties for flex container</strong></p>

<div class="table">
  <div class="tr">
    <div class="th td">flex-direction</div>
    <div class="td">Defines the main axis and direction of the flex items. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction">Full list of flex-direction values</a>.</div>
  </div>
  <div class="tr">
    <div class="th td">flex-wrap</div>
    <div class="td">Specifies if the flex items adjust to fit in a single row or be allowed to wrapped onto multiple rows. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap">Full list of flex-wrap values</a>.</div>
  </div>
  <div class="tr">
    <div class="th td">flex-flow</div>
    <div class="td">Short-hand property for flex-direction and flex-wrap. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow">Full list of flex-flow values</a></div>
  </div>
  <div class="tr">
    <div class="th td">justify-content</div>
    <div class="td">Defines how space between and around flex items are distributed along the main axis. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">Full list of justify-content values</a></div>
  </div>
  <div class="tr">
    <div class="th td">align-items</div>
    <div class="td">Defines how space between and around flex items are distributed perpendicular to the main axis. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">Full list of align-items values</a></div>
  </div>
  <div class="tr">
    <div class="th td">align-content</div>
    <div class="td">Specifies how lines of flex items are distributed within the flex container. Does not apply if flex items are on a single line only. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-content">Full list of align-content values</a></div>
  </div>
</div>

<p class="no-margin"><strong>Properties for flex items</strong></p>

<div class="table">
  <div class="tr">
    <div class="th td">order</div>
    <div class="td">Specifies the order of how flex items are laid out, in ascending order of the order value. Flex items with the same order value are laid out according to source order. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/order">Full list of order values</a></div>
  </div>
  <div class="tr">
    <div class="th td">flex-grow</div>
    <div class="td">Defines the ability for an element to grow if there is available space, with the value determining the proportion of space the element can grow into. (Told you this was sort of complicated). <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow">Full list of flex-grow values</a></div>
  </div>
  <div class="tr">
    <div class="th td">flex-shrink</div>
    <div class="td">Defines the ability for an element to shrink if there isn't enough space, with the value determining the proportion of space the element can shrink to. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink">Full list of flex-shrink values</a></div>
  </div>
  <div class="tr">
    <div class="th td">flex-basis</div>
    <div class="td">Defines the default size of an element before any available space is distributed among all the flex items. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis">Full list of flex-basis values</a></div>
  </div>
  <div class="tr">
    <div class="th td">flex</div>
    <div class="td">Short-hand for flex-grow, flex-shrink and flex-basis, in that order. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex">Full list of flex values</a></div>
  </div>
  <div class="tr">
    <div class="th td">align-self</div>
    <div class="td">Allows the alignment of a single flex-item to be overridden. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self">Full list of align-self values</a></div>
  </div>
</div>

Again, I highly recommend you check out the list of flexbox resources above, which are chock full of examples that help with the understanding of to use flexbox in your code.

### display: grid;

For anything related to the Grid layout, I always refer to [Rachel Andrew](https://rachelandrew.co.uk/), whom I regard as the guru of CSS grids. She has been spearheading the effort to increase awareness about this new display property through her [talks](https://rachelandrew.co.uk/presentations), [articles and tutorials](https://rachelandrew.co.uk/writing).

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) by [Chris House](http://chris.house/)
- [Grid by Example](http://gridbyexample.com/) by [Rachel Andrew](https://rachelandrew.co.uk/)

## The relatively obscure and experimental

### display: run-in;

Now this is a fun one I hadn't heard of until I started reading the CSS Display specification. Unfortunately, it seems that browser vendors are not fond of this specification at all, so you can think of this as an alternate reality specification <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

### display: ruby;

As a native Mandarin speaker, I can see the relevance of this property. If you have seen how East Asian glyphs are annotated with pronunciation guides, then this should be pretty familiar to you, if not, here's an image.

![Ruby diagram]({{ site.url }}/images/posts/display/display-ruby.gif "Ruby diagram")

According to [caniuse.com](http://caniuse.com/#feat=ruby), there is at least partial support for all major browsers, with Firefox fully supporting this property. No love from Opera Mini though. 

## Further reading

- [Evolution of CSS Layout: 1990s to the Future](http://fantasai.inkedblade.net/weblog/2012/css-layout-evolution/) by [Fantasai](http://fantasai.inkedblade.net/)
- [CSS Display Module Level 3](http://www.w3.org/TR/css-display-3/)
- [MDN CSS display reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [CSS Run-in Display Value](https://css-tricks.com/run-in/)
- [Vanishing boxes with display contents](https://rachelandrew.co.uk/archives/2016/01/29/vanishing-boxes-with-display-contents/) by [Rachel Andrew](https://rachelandrew.co.uk/)


<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
