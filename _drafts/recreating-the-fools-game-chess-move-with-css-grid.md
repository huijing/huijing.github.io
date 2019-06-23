---
layout: post
title: "Recreating the Fool's Game chess move with CSS Grid"
date: Jun 23, 2019
tags: [html, css]
hascodepen: true
---
When Firefox 66 was released, one of the features that got myself and a couple other layout enthusiasts really excited was the ability to animate grid rows and columns (in addition to grid gaps) when using CSS Grid. It had always been written in the specification, but it took some time for browsers to implement it.

I wrote an [introductory post on the Bits blog](https://blog.bitsrc.io/animating-css-grid-rows-and-columns-4b3b0997d06a) earlier but still had more to explore. That article links to as many animation demos as I could find, but the one that I kept thinking about was the DVD logo by Andrew Harvard.

<p class="codepen" data-height="450" data-theme-id="9162" data-default-tab="result" data-user="aharvard" data-slug-hash="roPvmG" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="The DVD Logo (css grid animation)">
  <span>See the Pen <a href="https://codepen.io/aharvard/pen/roPvmG/">
  The DVD Logo (css grid animation)</a> by Andrew Harvard (<a href="https://codepen.io/aharvard">@aharvard</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

My preferred method of figuring out exactly how the demo worked was to observe it with Firefox DevTools. 