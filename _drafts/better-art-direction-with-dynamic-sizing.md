---
layout: post
title: "Better art direction with dynamic sizing"
date: Dec 24, 2018
tags: [css, design]
hascodepen: true
---
One of the highlights in the world of web design for 2018 was when [Jen Simmons]() came up with the term [Intrinsic Web Design](), and shared it with the world. Intrinsic Web Design is not a framework. It isn't a set of rules to follow either. Rather, it is a collection of concepts that highlight what is now possible with modern CSS. How we choose to utilise these concepts for better art direction on the web, and to build better layouts, that's up to us.

Jen covered the following six major concepts when she talked about Intrinsic Web Design:
- combining both fluid and fixed
- stages of squishiness
- truly two-dimensional layouts
- nested contexts
- expanding and contracting content
- media queries, as needed.

You'll notice that none of those concepts pinpoint a specific CSS property or module. That is because CSS works best when various complementary properties are used together. Today, I want to talk about the concept of stages of squishiness, and how it is going to greatly enhance art direction of editorial content on the web.

## Sizing items with CSS

Let's start off with some basics. Browsers perform a lot of computations to ensure that every element gets rendered correctly on a web page. Each element has to have every possible CSS property value resolved and computed before it can be laid out on the page. According to the visual formatting model, each element in the document tree generates zero or more boxes. And there are numerous factors that influence the dimensions of these boxes.

The CSS specification that covers this in detail is the [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/). *Extrinsic sizing* is based on the context of the element, without taking into account its contents, while *intrinsic sizing* is based on the contents of the element, without taking into account its context.

Most of us would be familiar with extrinsic sizing, because that's usually what we use to size items in our web pages. Almost every web developer I've met started off by doing things like setting `width` and `height` with fixed CSS units like `px`, or relative CSS units like percentages.

Then we'd learn about `rem` and `em` units, and gravitate towards those. Some of us start using viewport units as well, which were another type of relative unit. Sizing in this manner ignores the content in the element altogether, as illustrated in the following Codepens:

<p data-height="380" data-theme-id="9162" data-slug-hash="wRwYGg" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: Extrinsic fixed units" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/wRwYGg/">CSS sizing: Extrinsic fixed units</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<p data-height="346" data-theme-id="9162" data-slug-hash="wRwYee" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: Extrinsic relative units" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/wRwYee/">CSS sizing: Extrinsic relative units</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

It's not that intrinsic sizing is a new thing, I think it's more that the usage of intrinsic sizing simply meant leaving things alone. The browser is doing the sizing for us based on the amount of content within the element.

There is quite a long rule set to determining an element's width and height, depending on its type (block or inline, replaced or not, positioning scheme etc.), which can be found from the [CSS2.1 specification](https://www.w3.org/TR/CSS2/visudet.html), if you're interested. And the [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/) extends the specification further.

One thing I want to remind everyone when it comes to the `width` and `height` properties is that these 2 sizing properties do **not** apply to inline elements. The width of an inline element is determined by the width its rendered content, while the height of an inline element is determined by font size.

The Level 3 specification adds new content-based keywords to the `width` and `height` properties, namely: `min-content`, `max-content` and `fit-content()`. 

I highly encourage developers to try out these newer properties and techniques themselves, as it was through experimentation that I figured a lot of this stuff out. For example, one key thing that I highlight when teaching Grid these days is that we are now able to vary the rate of expansion and contraction of items with the various sizing values Grid offers.

Such behaviour gives web designers and developers better options and greater flexibility in terms of art direction and ensures that the focus of the content is never lost regardless of the context in which it is viewed in. With more developers and designers using these new tools, we'll have a greater pool of ideas and inspiration for building designs that truly suit the nature of the web.

