---
layout: post
title: "Understanding grid placement"
date: May 01, 2019
tags: [design, css]
hastweet: true
---
I've been using CSS grid to build layouts for quite a while now, and all my designs to date involved either a handful of explicitly placed individual grid items, or 100% automatic placement. I hadn't had to design the gaps between the grid before, but then one fine day in March, I found a HTML periodical table on [WebsiteSetupOrg](https://websitesetup.org/html5-periodical-table/).

It looks different now than when I first saw it, because the version I saw spelt out HTML and I was totally into that. Upon my usual right-click inspect, I noticed that the layout wasn't using Grid, but my Grid-infused brain thought it could, so I decided to recreate the design using a Grid layout.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I had plans today, but then I got distracted and made a periodic table of HTML elements. <br>Inspiration from @RobMening&#39;s project, based on idea by <a href="https://twitter.com/joshduck?ref_src=twsrc%5Etfw">@joshduck</a>. Also referenced a lot from <a href="https://twitter.com/MikeRiethmuller?ref_src=twsrc%5Etfw">@MikeRiethmuller</a>&#39;s implementation<a href="https://twitter.com/hashtag/css?src=hash&amp;ref_src=twsrc%5Etfw">#css</a><a href="https://t.co/lkcXrzIU75">https://t.co/lkcXrzIU75</a> via <a href="https://twitter.com/CodePen?ref_src=twsrc%5Etfw">@CodePen</a></p>&mdash; HJ Chen @ ImageCon 🇺🇲 (@hj_chen) <a href="https://twitter.com/hj_chen/status/1107574073041645568?ref_src=twsrc%5Etfw">March 18, 2019</a></blockquote>

## Grid manual placement

One of the best parts of using Grid for layout is the ability to place grid items exactly where you want on the grid you designed. Most of the planning for such designs would go into the actual grid itself.

But as a quick recap to how this works, let's look at a relatively simple 3x3 grid, with 3 grid items on it. The Firefox grid inspector is turned on so we know which lines to assign our pieces to.

<figure>
  <figcaption>Like chess pieces on a chessboard</figcaption>
  <img src="{{ site.url }}/assets/images/posts/grid-placement/manual.png" srcset="{{ site.url }}/assets/images/posts/grid-placement/manual@2x.png 2x" alt="Screenshot of a 3x3 grid with 3 grid items styled like a chessboard and pieces">
</figure>

Actual visual styling aside, this is how the grid code looks like:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 24vmin);
  grid-template-rows: repeat(3, 24vmin);
}

.grid__item:first-child {
  grid-row: 3;
}

.grid__item:nth-child(2) {
  grid-row: 2;
  grid-column: 2;
}

.grid__item:nth-child(3) {
  grid-row: 3;
  grid-column: 3;
}
```
`grid-row` and `grid-column` are shorthands to set the start and end line their respective dimensions. Grid items by default will only take up a single grid cell, so it works fine even though I only specify the start line without the end line for either property.

The concept behind manual placement of grid items is that you can position your item on the grid based on row and column numbers. No need for overly complicated positioning rules and calculations.

## Grid automatic placement

If we have a large number of grid items and we don't really want to explicitly place them all, there is [a 5-step algorithm](https://www.w3.org/TR/css-grid-1/#auto-placement-algo) browsers use to determine how to place grid items that do not have an explicit grid position defined. Assume flow direction is `row` for the following explanation.

**Step 0: Generate anonymous grid items**  
If there any contiguous sequence of child text runs, which means a bunch of text without any tags around them, the browser will wrap it up in an *anonymous block container grid item*.

Let's talk a bit about anonymous items here. Everything on a web page is a box. There are many different types of boxes, but a box is still a box. So if you have some stuff that isn't associated with any element, like a run of text, the browser will generate anonymous boxes for them.

From the specification, it says:

> Anonymous boxes are generated in certain circumstances to fix up the box tree when it requires a particular nested structure that is not provided by the boxes generated from the element tree.

Below, we have an example of a `p` block element containing anonymous text interspersed with `em` and `strong`:

<img srcset="{{ site.url }}/assets/images/posts/grid-placement/anonymous-480.png 480w, {{ site.url }}/assets/images/posts/grid-placement/anonymous-640.png 640w, {{ site.url }}/assets/images/posts/grid-placement/anonymous-960.png 960w, {{ site.url }}/assets/images/posts/grid-placement/anonymous-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/grid-placement/anonymous-640.png" alt="Inline box construction showing 3 anonymous line boxes and 2 element line boxes">

The browser will establish the `p` element as the containing block for the 5 inline boxes, of which 3 of them are anonymous. Anonymous boxes only exist in the box tree and inherit properties through their box tree parentage.

**Step 1: Position anything that’s not auto-positioned.**

**Step 2: Process items locked to a given row.**  
For each grid item with an explicit `grid-row-start` and `grid-row-end` value, put the item on the earliest column-start line which:
1. doesn't cause overlap with any occupied grid cells
2. and is past the previous grid item placed this way. 

If the packing is set to `dense`, then ignore the second bit.

**Step 3: Determine the columns in the implicit grid.**  
To create columns of the implicit grid, the browser will start off from the explicit grid columns. Then, for all items with a defined column position, add implicit columns to the start and end of the implicit grid to accommodate them.

If the largest column span among all items *without* a defined column position exceeds the column count of the implicit grid, add more columns to the end to accommodate that column span.

<img srcset="{{ site.url }}/assets/images/posts/grid-placement/implicit-grid-480.png 480w, {{ site.url }}/assets/images/posts/grid-placement/implicit-grid-640.png 640w, {{ site.url }}/assets/images/posts/grid-placement/implicit-grid-960.png 960w, {{ site.url }}/assets/images/posts/grid-placement/implicit-grid-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/grid-placement/implicit-grid-640.png" alt="Box placed outside the explicit grid, causing the generation of implicit grid columns to accommodate it">

**Step 4: Position the remaining items.**  
There is something called an *auto-placement cursor*, which we don't see, but it determines the current “insertion point” in the grid. This point is specified as a pair of row and column grid lines. 

## Building the layout

The target design I had in mind looked like this when plotted onto a 20x10 grid:

<img src="{{ site.url }}/assets/images/posts/grid-placement/html-grid.svg" alt="Mock-up of the letters HTML in a 20x10 grid">

But wait, if you look a little closer, you'll notice something is not quite aligned properly.

<img src="{{ site.url }}/assets/images/posts/grid-placement/html-grid2.svg" alt="Diagram showing misaligned tiles in the letter M">

You know what this means? More columns, that's what. This is the part of the design phase I call grid planning. For something like that, you can either go analogue (which is how I like to do it), or import the image into any program that lets you draw lines over it.

From there, you can figure out the least possible number of rows and columns that you can get away with, while still having your every one of your grid items aligned to a grid line.

<img src="{{ site.url }}/assets/images/posts/grid-placement/html-grid3.svg" alt="Mock-up of the letters HTML in a 40x10 grid">

So 40x10 it is.