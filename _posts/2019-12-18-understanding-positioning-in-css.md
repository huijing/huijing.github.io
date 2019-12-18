---
layout: post
title: "Understanding positioning in CSS"
date: Dec 18, 2019
tags: [css]
image: css-positioning
hascodepen: true
hastweet: true
---
I was at [JSConf China](https://2019.jsconfchina.com/) earlier this year, which happened in Shanghai from 19–20 Oct. There was fairly decent representation from Singapore I would say. 

[Wei](https://uuei.io/) (whom I probably mention every second blog post I write) was the opening keynote for Day 2, and it was one of the best if not THE best talk of the conference IMHO.

<img srcset="{{ site.url }}/assets/images/posts/css-positioning/wei-480.jpg 480w, {{ site.url }}/assets/images/posts/css-positioning/wei-640.jpg 640w, {{ site.url }}/assets/images/posts/css-positioning/wei-960.jpg 960w, {{ site.url }}/assets/images/posts/css-positioning/wei-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/css-positioning/wei-640.jpg" alt="Wei on stage at JSConf China">

<iframe width="560" height="315" src="https://www.youtube.com/embed/9M6wDie0YKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We also had [Yong Jun](https://github.com/yongjun21/) (another good friend of mine), who gave a workshop on the rather interesting topic of [scrolly-telling](https://webflow.com/blog/scrollytelling-guide). He works in the graphics department for Singapore Press Holdings and has lots of experience creating interactive graphics and visualisations.

<img srcset="{{ site.url }}/assets/images/posts/css-positioning/yongjun-480.jpg 480w, {{ site.url }}/assets/images/posts/css-positioning/yongjun-640.jpg 640w, {{ site.url }}/assets/images/posts/css-positioning/yongjun-960.jpg 960w, {{ site.url }}/assets/images/posts/css-positioning/yongjun-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/css-positioning/yongjun-640.jpg" alt="Yong Jun running workshop at JSConf China">

Yong Jun had developed an [open-source scrolly-telling library](https://github.com/yongjun21/st-scrolly) that he used for a lot of his projects and it uses `position: sticky` for “snapping” content into place.

During the workshop, he posed the question of why just applying `position: sticky` alone on an element doesn't work. And this gave me the idea to do another CSS property deep dive <span class="emoji" role="img" tabindex="0" aria-label="nerd face">&#x1F913;</span>.

## CSS is a team sport

<p class="no-margin">CSS layout is not just one individual CSS property or even module. Everything on the web <a href="https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#visual-model-intro">is a box</a>. And the layout of these boxes are determined the following:</p>

<ul>
  <li class="no-margin">box dimensions and type</li>
  <li class="no-margin">positioning scheme (normal flow, float, and absolute positioning)</li>
  <li class="no-margin">relationships between elements in the document tree</li>
  <li>external information (e.g., viewport size, intrinsic dimensions of images, etc.)</li>
</ul>

<p class="no-margin">From this bit of information alone, we can pick out the following CSS modules (including those in draft status):</p>

<ul>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-display-3/">CSS Display Module Level 3</a> (CR)</li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-box-3/">CSS Box Model Module Level 3</a> (WD)</li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-position-3/">CSS Positioned Layout Module Level 3</a> (WD)</li>
  <li><a href="https://www.w3.org/TR/CSS21/visuren.html#floats">CSS2.1 section 9.5 Floats</a> (REC)</li>
</ul>

The point I'm making here is, if you'd like to be fully equipped to build any layout you can imagine with CSS, I suggest understanding these different CSS modules and how they interact with each other. It definitely helped me out when I did so.

In all fairness, I really dug into all of it when I was preparing for my CSS Day talk back in 2018, which was pretty much 45 minutes about boxes. All [talk details on Notist](https://noti.st/huijing/B3BMi1/box-alignment).

## Positioning schemes

<p class="no-margin">After boxes are generated, the way they are laid out depends on which positioning scheme they fall into:</p>
<ul>
  <li class="no-margin">Normal flow</li>
  <li class="no-margin">Floats</li>
  <li>Absolute positioning</li>
</ul>

<img style="max-width:15em" src="{{ site.url }}/assets/images/posts/css-positioning/normal.svg" alt="Boxies in normal flow">

Normal flow is the default, where boxes are laid out one after another, and will not overlap or intrude into each others' space. All boxes will be on the same stacking context as well.

<img style="max-width:15em" src="{{ site.url }}/assets/images/posts/css-positioning/float.svg" alt="Boxies with a floated friend">

Boxes that are floated are considered *out-of-flow*. When a box is floated, it is first laid out according to normal flow, but then is taken out the flow and shifted as far to the left or right as possible (depending on the float value).

Content will then flow along the side of the floated box. But the floated boxes still remain on the same stacking context as the non-floated ones.

<img style="max-width:12.5em" src="{{ site.url }}/assets/images/posts/css-positioning/absolute.svg" alt="Boxies with an absolutely positioned friend">

An absolutely positioned box is completely removed from normal flow altogether, and its position is assigned with respect to its containing block.

The positioning algorithms used to calculate the position of a box on the page is determined by the `position` and `float` properties. I'll try my best to explain this in a way that makes sense. But first, let's look at them individually.

## The `position` property

There are several values for this property, with `sticky` being added in Level 3 of the Positioned Layout Module, and currently supported in most major browsers even though it is still in a working draft status.

### `position: static`

The default position value of any box. This results in the box being laid out in normal flow and the properties of `top`, `bottom`, `left` and `right` (also known as box offset values) will have no effect because the box is considered **not positioned**.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-static.svg" alt="Default layout of unpositioned boxes">

### `position: relative`

Applying a `position` of `relative` to a box makes it **positioned**, and now the `top`, `bottom`, `left` and `right` values will have some effect.

The box will initially be laid out according to normal flow, then depending on the aforementioned box offset values, will be offset relative to its normal position.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-relative.svg" alt="Relatively positioned box with top and left offsets">

If there are other non-positioned boxes next to this positioned box, they will **not** be affected even if offset values are present. This means there may be the possibility of overlap. 

Also, if the offset causes the box to have overflow, this may result in scrolling, which would affect layout. When a box becomes relatively positioned, it becomes the new containing block for its children.

### `position: sticky`

A sticky positioned box works similarly to that of a relatively positioned box. The difference is that the offset is computed to the nearest ancestor with a **scrolling box**, or the viewport if none such ancestor exists.

This ties in to Yong Jun's original question of why applying `position: sticky` alone on a box is insufficient to achieve the sticky effect. The box, without any offsets, behaves as though it was in normal flow, because it is.

Only when the offset values are something other than `auto` will the box start to behave differently from a relatively positioned box. The wording in the specification comes across slightly cryptic to me, but my understanding is that there is an intersection between the sticky box and its containing box when you apply a box offset value.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-sticky1.svg" alt="Initial position of sticky positioned box">

This intersection is called a *sticky-constraint rectangle* and is used to contain the location of the sticky box. The specification uses the term “projects above/below/outside” but I'm not sure if my understanding is the same as what the specification authors intended.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-sticky2.svg" alt="Position of sticky positioned box after scrolling takes place">

What I do know is that when you define an offset value, the offset will never push the sticky box outside its containing block, but the sticky box is free to move within the containing block as the page is scrolled, hence the perception of it being pinned to the relevant edges.

### `position: absolute`

An absolutely positioned box is explicitly offset with respect to its containing block, and the box does not participate in the normal flow at all. Its later siblings will not know about its existence in the greater layout.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-absolute.svg" alt="Position of absolutely positioned box">

Contents of an absolutely positioned box do not flow around any other boxes and may overlap other boxes, and depending on the stack level of the boxes, content may be obscured by the overlap.

### `position: fixed`

A fixed position box behaves similarly to an absolutely positioned box. The key distinction is that the containing block is always the viewport.

<img style="max-width:20em" src="{{ site.url }}/assets/images/posts/css-positioning/position-fixed.svg" alt="Position of fixed positioned box">

## Box offset values

Traditionally, the box offset values most developers are familiar with are `top`, `bottom`, `left` and `right`. And I don't think it's a generalisation to say that most developers from the West don't give a second thought to writing modes that are anything other than horizontal top-to-bottom.

But when you use a writing mode that is right-to-left, for example, or vertical writing, then these physical values of `top`, `bottom`, `left` and `right` make less sense. For example, the top of your content may not be the physical top of the browser viewport.

As someone who grew up exposed to writing systems in different directions from the Western default, this was not hard for me to wrap my head around, but that may not be the case for many folks from the West.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Naming is always hard, especially when it does not exactly correlate with real life / usage expectations / metaphors. At least the terms used are consistent with other CSS properties. You need to know how block and inline behave and have some imagination.</p>&mdash; Ecaterina Moraru (@evalica) <a href="https://twitter.com/evalica/status/1192315547335180288?ref_src=twsrc%5Etfw">November 7, 2019</a></blockquote>

This is why I appreciate it when influential folks in our industry start talking about these lesser known aspects of web development, especially on the internationalisation side of things, because they have a wider reach and can help something considered obscure become more mainstream.

### Logical box offset values

<div class="note">Because the specification is still in Editor's Draft status, the syntax may change moving forward. Even now, the current browser implementation is different from what is in the specification, so be sure to double-check with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties">MDN: CSS Logical Properties and Values</a> on the most updated syntax.</div>

The matrix of writing directions and their corresponding values for a box's physical sides and logical sides are as follows (the table has been lifted from the specification as of time of writing):

<div style="overflow-x:scroll;margin-bottom:1rem">
  <table style="font-size:80%;border-collapse:collapse;text-align:center;width:100%">
    <thead style="background-color:#3d3d3e;color:white;font-weight:bold">
      <tr>
        <th style="border:1px solid white" colspan="2" rowspan="3"></th>
        <td style="border:1px solid white" colspan="6">writing-mode / direction</td>
      </tr>
      <tr>
        <td style="border:1px solid white" colspan="2">horizontal-tb</td>
        <td style="border:1px solid white" colspan="2">vertical-rl</td>
        <td style="border:1px solid white" colspan="2">vertical-lr</td>
      </tr>
      <tr>
        <td style="border:1px solid white">ltr</td>
        <td style="border:1px solid white">rtl</td>
        <td style="border:1px solid white">ltr</td>
        <td style="border:1px solid white">rtl</td>
        <td style="border:1px solid white">ltr</td>
        <td style="border:1px solid white">rtl</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid" rowspan="4"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:bold">Edge</div></td>
        <td style="border:1px solid"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:bold;padding:0.5em 0">top</div></td>
        <td style="border:1px solid">inset-before</td>
        <td style="border:1px solid">inset-before</td>
        <td style="border:1px solid">inset-start</td>
        <td style="border:1px solid">inset-end</td>
        <td style="border:1px solid">inset-start</td>
        <td style="border:1px solid">inset-end</td>
      </tr>
      <tr>
        <td><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:bold;padding:0.5em 0">right</div></td>
        <td style="border:1px solid">inset-end</td>
        <td style="border:1px solid">inset-start</td>
        <td style="border:1px solid">inset-before</td>
        <td style="border:1px solid">inset-before</td>
        <td style="border:1px solid">inset-after</td>
        <td style="border:1px solid">inset-after</td>
      </tr>
      <tr>
        <td style="border:1px solid"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:bold;padding:0.5em 0">bottom</div></td>
        <td style="border:1px solid">inset-after</td>
        <td style="border:1px solid">inset-after</td>
        <td style="border:1px solid">inset-end</td>
        <td style="border:1px solid">inset-start</td>
        <td style="border:1px solid">inset-end</td>
        <td style="border:1px solid">inset-start</td>
      </tr>
      <tr>
        <td style="border:1px solid"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:bold;padding:0.5em 0">left</div></td>
        <td style="border:1px solid">inset-start</td>
        <td style="border:1px solid">inset-end</td>
        <td style="border:1px solid">inset-after</td>
        <td style="border:1px solid">inset-after</td>
        <td style="border:1px solid">inset-before</td>
        <td style="border:1px solid">inset-before</td>
      </tr>
    </tbody>
  </table>
</div>

The logical top of a container uses `inset-before`, while the logical bottom of a container uses `inset-after`. The logical left of a container uses `inset-start`, while the logical right of a container uses `inset-end`.

This is probably easier to visualise with a diagram (or live code if your browser supports it). The following is for `horizontal-tb`:

<figure>
  <figcaption>Mapping for horizontal-tb</figcaption>
  <div class="double">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/tb-ltr.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/tb-ltr@2x.png 2x" alt="Logical box offset values for horizontal-tb with ltr">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/tb-rtl.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/tb-rtl@2x.png 2x" alt="Logical box offset values for horizontal-tb with rtl">
  </div>
</figure>

The following is for `vertical-rl`:

<figure>
  <figcaption>Mapping for vertical-rl</figcaption>
  <div class="double">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/rl-ltr.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/rl-ltr@2x.png 2x" alt="Logical box offset values for vertical-rl with ltr">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/rl-rtl.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/rl-rtl@2x.png 2x" alt="Logical box offset values for vertical-rl with ltr">
  </div>
</figure>

The following is for `vertical-lr`:

<figure>
  <figcaption>Mapping for vertical-lr</figcaption>
  <div class="double">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/lr-ltr.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/lr-ltr@2x.png 2x" alt="Logical box offset values for vertical-lr with ltr">
    <img src="{{ site.url }}/assets/images/posts/css-positioning/lr-rtl.png" srcset="{{ site.url }}/assets/images/posts/css-positioning/lr-rtl@2x.png 2x" alt="Logical box offset values for vertical-lr with ltr">
  </div>
</figure>

## Wrapping up

I suggest opening this CodePen in a full browser window and playing around with the examples and CSS values to get a feel of how everything fits together (or you could select the 0.5x option in the embed).

<p class="codepen" data-height="480" data-theme-id="9162" data-default-tab="result" data-user="huijing" data-slug-hash="PowbeXJ" style="height: 461px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Understanding CSS positioning">
  <span>See the Pen <a href="https://codepen.io/huijing/pen/PowbeXJ">
  Understanding CSS positioning</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>