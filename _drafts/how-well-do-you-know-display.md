---
layout: post
title: "How well do you know the display property"
date: May 20, 2016
tags: [css]
---
The *display* property is one of the most important CSS properties we use for layout. Most of us would have used `block`, `inline` and `none`. `table` and `inline-block` are also quite common. The new darling is definitely `flex`, because it's a display property that was created specifically for layout. The upcoming `grid` (currently still being actively worked on) is another layout-specific property that we'll soon have in our arsenal as well.

Through my experience of building various responsive designs, I learnt a lot about the *display* and *position* properties, how they work and how they can be combined with media queries to achieve the desired layouts. I'll briefly cover each value, then reminisce about a few responsive components I built previously that utilised *display* quite heavily.

We can't talk about *display* without mentioning something called a [box tree](https://drafts.csswg.org/css-display/#box-tree). Basically the browser parses CSS and renders it by generating a box tree, which represents the formatting structure of the rendered document. The *display* property defines the box's display type. 

The topic of how browsers render stuff on the screen is a really fascinating one and I highly suggest reading [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) by [Talia Garsiel](http://taligarsiel.com/).

## Those we know quite well already

Fun fact: the display values we use all the time are actually short-hand. For example, `block` is actually short-hand for `block flow`. Refer to [specification](https://drafts.csswg.org/css-display/#propdef-display) for full list.

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

<p data-height="488" data-theme-id="9162" data-slug-hash="PNMxXL" data-default-tab="result" data-user="huijing" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huijing/pen/PNMxXL/">CSS Display property</a> by Chen Hui Jing (<a href="http://codepen.io/huijing">@huijing</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The element generates a block level box, but the entire box behaves like an inline element.

## Further reading

[CSS Display Module Level 3](http://www.w3.org/TR/css-display-3/)

[Vanishing boxes with display contents](https://rachelandrew.co.uk/archives/2016/01/29/vanishing-boxes-with-display-contents/) by [Rachel Andrew](https://rachelandrew.co.uk/)

[CSS Run-in Display Value](https://css-tricks.com/run-in/)

[MDN CSS display reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
