---
layout: post
title: "Examining ‘squishiness’ in Intrinsic Web Design"
date: Jan 09, 2019
tags: [css, design]
external_site: logrocket
external_url: https://blog.logrocket.com/examining-squishiness-in-intrinsic-web-design-1005d30dda0c
hascodepen: true
---
One of the highlights in the world of web design for 2018 was when [Jen Simmons](http://jensimmons.com/) came up with the term [Intrinsic Web Design](http://www.zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/), and shared it with the world. Intrinsic Web Design is not a framework. It isn't a set of rules to follow either. Rather, it is a collection of concepts that highlight what is now possible with modern CSS. How we choose to utilise these concepts for better art direction on the web, and to build better layouts, that's up to us.

Jen covered the following six major concepts when she talked about Intrinsic Web Design:
- combining both fluid and fixed
- stages of squishiness
- truly two-dimensional layouts
- nested contexts
- expanding and contracting content
- media queries, as needed.

You'll notice that none of those concepts pinpoint a specific CSS property or module. That is because CSS works best when various complementary properties are used together. Today, I want to talk about the concept of stages of squishiness, and how it is going to greatly enhance art direction of editorial content on the web.

## Sizing items with CSS

Let's start off with some basics. Browsers perform a lot of computations to ensure that every element gets rendered correctly on a web page. Each element has to have every possible CSS property value resolved and computed before it can be laid out on the page.

According to the visual formatting model, each element in the document tree generates zero or more boxes. And there are numerous factors that influence the dimensions of these boxes.

The CSS specification that covers this in detail is the [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/). *Extrinsic sizing* is based on the context of the element, without taking into account its contents, while *intrinsic sizing* is based on the contents of the element, without taking into account its context.

Most of us would be familiar with extrinsic sizing, because that's usually what we use to size items in our web pages. Almost every web developer I've met started off by doing things like setting `width` and `height` with fixed CSS units like `px`, or relative CSS units like percentages.

Then we'd learn about `rem` and `em` units, and gravitate towards those. Some of us start using viewport units as well, which were another type of relative unit. Sizing in this manner ignores the content in the element altogether, as illustrated in the following Codepens:

<p data-height="380" data-theme-id="9162" data-slug-hash="wRwYGg" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: Extrinsic fixed units" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/wRwYGg/">CSS sizing: Extrinsic fixed units</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

<p data-height="346" data-theme-id="9162" data-slug-hash="wRwYee" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: Extrinsic relative units" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/wRwYee/">CSS sizing: Extrinsic relative units</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

It's not that intrinsic sizing is a new thing, I think it's more that the usage of intrinsic sizing simply meant leaving things alone. The browser is doing the sizing for us based on the amount of content within the element.

There is quite a long rule set to determining an element's width and height, depending on its type (block or inline, replaced or not, positioning scheme etc.), which can be found from the [CSS2.1 specification](https://www.w3.org/TR/CSS2/visudet.html), if you're interested. And the [CSS Intrinsic & Extrinsic Sizing Module Level 3](https://www.w3.org/TR/css-sizing-3/) extends the specification further.

One thing I want to remind everyone when it comes to the `width` and `height` properties is that these 2 sizing properties do **not** apply to inline elements. The width of an inline element is determined by the width its rendered content, while the height of an inline element is determined by font size.

The Level 3 specification adds new content-based keywords to the `width` and `height` properties, namely: `min-content`, `max-content` and `fit-content()`, which allows non-inline elements to have more content-based sizing options.

All these values are supported when used in a Grid formatting context. However, your mileage may vary if you want to use them in sizing properties at the moment.

<p data-height="432" data-theme-id="9162" data-slug-hash="VqLqMz" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: content-based sizing" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/VqLqMz/">CSS sizing: content-based sizing</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Relative sizing of elements

A relatively common design pattern for responsive design on the web is having columns of content adjust to fit the viewport. Developers would code such layouts with numerous media queries, as the width of each column had to be specified at specific breakpoints. This approach would be achieved with either floats or inline-block, but the mechanism of using numerous media queries is the same.

<p data-height="444" data-theme-id="9162" data-slug-hash="BvNMZB" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: percentage columns" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/BvNMZB/">CSS sizing: percentage columns</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

As you resize the window and observe the columns growing and shrinking, notice that all the columns grow and shrink <em>at the same rate</em>. This is to be expected because each column is sized as a percentage of the viewport width.

A consequence of this behaviour  is that it becomes harder to build layouts that present different types of content at an optimum size across a broad spectrum of viewport sizes. Content with intrinsic aspect ratios, like images, would require more consideration as opposed to textual content, which can flow and adapt more easily.

## Sizing with variable rates of change

Let's take a look at situations where the size of columns grow and shrink at *different rates*. Such situations may arise when we are operating in a flex formatting context, a grid formatting context when certain track-sizes are applied, or when content-based sizing is used.

For this Flexbox example, I highly recommend reading Rachel Andrew's [step-by-step explanation](https://www.smashingmagazine.com/2018/09/flexbox-sizing-flexible-box/) of how the sizing algorithm works. Here you can see how when there is more content in the last column, Flexbox gives it more space and shrinks the second column “earlier” for the bottom example versus the top one.

<p data-height="309" data-theme-id="9162" data-slug-hash="xmZJMB" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: rate of change in Flexbox" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/xmZJMB/">CSS sizing: rate of change in Flexbox</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Grid introduces the `fr` unit, which is defined as the fraction of the leftover space in the grid container. It behaves similarly to how flex items fill up space within a flex container.

Once all non-flexible tracks have reached their maximum size, the total size of such rows or columns is subtracted from the available space, yielding the leftover space, which is then divided among the flex-sized rows and columns in proportion to their flex factor.

For this Grid-based example, columns are sized with a variety of values, and this affects their resultant behaviour when the viewport size changes. For the first example, the first column is sized with `1fr`, which means it takes up the amount of space required for the content plus any available free space. So it will keep growing if the viewport gets wider.

As the viewport shrinks, however, its behaviour is determined by how the other columns are sized. The other 2 columns are `auto` and `fit-content(400px)`, which, as space is taken away, behave similarly because `fit-content` resolves to `minmax(auto, max-content)`, except that it's clamped at the provided argument value.

<p data-height="494" data-theme-id="9162" data-slug-hash="VqeGba" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: rate of change with Grid" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/VqeGba/">CSS sizing: rate of change with Grid</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

For the second example, the last column is sized with `minmax(200px, 400px)`. Notice that this column holds its maximum size for as long as possible, while other columns shrink. The `fr` column shrinks first, followed by the `auto` column. But both the `auto` column and `minmax()` column reach their minimum size at the same time.

## Better responsive art-direction

Now let's apply this to an actual design. This example could be for a featured article on an editorial publication, with a large hero image, header and some opening text. Again, I highly recommend opening this demo in a separate window so behaviour across the full width of the viewport can be observed.

The first example is done with percentage sizing, and the limitation here is two-fold. Overlap of the header over the image is a little clunky because it's done with negative margins. Secondly, the image and text all shrink at the same rate so at the narrowest size, the image is a bit too small and the text is also a bit too squished.

<p data-height="541" data-theme-id="9162" data-slug-hash="YdXMPZ" data-default-tab="result" data-user="huijing" data-pen-title="CSS sizing: different content types" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/YdXMPZ/">CSS sizing: different content types</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

With Grid, overlap much easier to manage, as placing items within the grid is a matter of assigning them to the required rows and columns, and there is no limit against having multiple items taking up the same space on the grid.

If you have Firefox installed, open up DevTools and toggle on the Grid inspector, which will show you how the tracks are adjusting as the viewport size changes. In addition, use of `minmax()` for track sizing allows the content in the middle column to “hold“ its size as long as possible, while the tracks sized to `auto` shrink first.

<figure>
    <figcaption>Firefox has the best Grid inspector tool</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/variable-css-sizing/grid-inspector-480.jpg 480w, {{ site.url }}/assets/images/posts/variable-css-sizing/grid-inspector-640.jpg 640w, {{ site.url }}/assets/images/posts/variable-css-sizing/grid-inspector-960.jpg 960w, {{ site.url }}/assets/images/posts/variable-css-sizing/grid-inspector-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/variable-css-sizing/grid-inspector-640.jpg" alt="Grid inspector tool in Firefox">
</figure>

## Wrapping up

Such behaviour gives web designers and developers better options and greater flexibility in terms of art direction and ensures that the focus of the content is never lost regardless of the context in which it is viewed in. 

I highly encourage developers to try out these newer properties and techniques themselves, as it was through experimentation that I figured a lot of this stuff out. With more developers and designers using these new tools, we'll have a greater pool of ideas and inspiration for building designs that truly suit the nature of the web.

