---
layout: post
title: "CSS exclusions with Queen Bey"
date: Jul 30, 2018
tags: [css]
hascaniuse: true
hascodepen: true
---
I recently came across a post by [Ben Frain](https://benfrain.com/the-frustrations-of-using-css-shapes-and-css-exclusions/) expressing his frustrations about CSS shapes and exclusions. And although I can see where he is coming from (he made that pretty clear in his examples), I would like to address the statement he made in his conclusion:

> I don’t know what’s going on here. As an outsider, coming to these features fresh in 2018 this situation seems like a bit of a car crash.

Now I am definitely not an insider in any sense of the word. I do not work for any browser vendors, nor am I part of the CSS working group. But I am lucky enough to know people who fall into either or both of these camps, and from conversations with them, gotten a better understanding of what goes on behind the scenes.

## It's not all unicorns and rainbows…

First of all, I do not disagree that the situation is not ideal. But I do disagree with the sentiment of “Why bother?”. In fact, let me share with you my thoughts on why bothering is a great thing. It is my sincere belief that a lot of frustration, sometimes amounting to anger, at CSS or browser behaviour in general, comes from a lack of understanding on how CSS features come into being.

So I would like everyone to indulge this request of mine, to watch [Rachel Andrew](https://rachelandrew.co.uk/)'s excellent talk from [CSSConf.EU 2017](https://2017.cssconf.eu/) on where CSS comes from.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cYGOv2ToZjY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

As Rachel says, it seems that there is an impression that browser vendors are locked in some battle about CSS. A legacy, from the days when browsers did compete on features. But today, all the browser vendors are in on it and working **together** on the specifications (and [documentation](https://blog.mozilla.org/blog/2017/10/18/mozilla-brings-microsoft-google-w3c-samsung-together-create-cross-browser-documentation-mdn/)).

Specifications can originate from browser vendors, other CSS user agents (e.g. ePUB), companies like Adobe or the CSS working group itself. A new feature may start off as a cool idea or a means to resolve an issue. Some of these ideas get consolidated into an editor's draft. 

If a browser vendor came up with the spec, often they would put out an experimental implementation in their own browser, like a proof-of-concept, for web developers to try it out, flesh out requirements and address overlooked issues. 

But the important thing to keep in mind is that browsers are just like any other software product. There are features to be added, bugs to be fixed. And guess who influences the priority of new features? Who do you think are the “clients” of browser vendors? 

That's right, YOU are. 

<figure>
    <figcaption>CSS needs YOU!</figcaption>
    <img src="{{ site.url }}/assets/images/posts/css-exclusions/css-poster.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/css-poster@2x.jpg 2x" alt="Join the force of developers who contribute to CSS"/>
</figure>

## …but you can do something about it

We shouldn't shy away from using newer CSS features simply because they are buggy or not fully supported. With the advent of evergreen browsers, features and bug fixes get released much faster these days. So a feature that you really wanted in browser X may end up getting shipped a month or two later. Sounds good? This can only happen if we signal to browser vendors which features we really want.

<p class="no-margin">Every browser engine has a pretty open process for raising bugs. I've linked the issue logs for the major browsers here:</p>
<ul>
  <li class="no-margin"><a href="https://bugs.chromium.org/p/chromium/issues/list">Chromium issue log</a></li>
  <li class="no-margin"><a href="https://bugzilla.mozilla.org/index.cgi">Firefox Bugzilla</a></li>
  <li class="no-margin"><a href="https://bugs.webkit.org/query.cgi?format=specific&amp;product=WebKit">Webkit Bugzilla</a></li>
  <li><a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/">Edge issue log</a></li>
</ul>

If something doesn't work the same across browsers, odds are, it may be a browser bug. Rather than stew in frustration and throw that feature out of your project, raise a bug. Take action! If developers don't use features simply because they are buggy or not well supported, we're signalling to browser vendors that this feature isn't in demand.

Conversely, if we raise bugs, tweet about our issues, write blog posts and code up demos, we are raising awareness of a particular feature. And signalling to browser vendors to prioritise this feature, fix its bugs, implement it correctly, because we WANT TO USE IT.

If something isn't in the CSS specification but you think it'd be useful, consider raising a GitHub issue in the [CSSWG repository](https://github.com/w3c/csswg-drafts), where all the working drafts are being developed. You can also get a better idea of how CSS specifications get hashed out by reading the various issue threads.

I'm glad Ben wrote out his frustrations about CSS shapes and exclusions. And I want more people to try it out and talk about how they would use shapes and exclusions in their projects if it worked properly across all browsers. The more use cases the better!

## Okay, now let's talk about exclusions

I apologise for being slightly click-baity with the title, but how else would I get my point about becoming more involved in the future of the web without mentioning Beyoncé in the title? It's not entirely click-bait, however, because we are going to explore CSS exclusions, WITH some help from Beyoncé, of course.

CSS exclusions define arbitrary areas around which inline content can flow, and can be defined on any CSS block-level element. Exclusions can be considered more “powerful” than CSS shapes because they are not limited to floats only.

<figure>
    <figcaption>Basic terminology</figcaption>
    <img src="{{ site.url }}/assets/images/posts/css-exclusions/terminology.png" srcset="{{ site.url }}/assets/images/posts/css-exclusions/terminology@2x.png 2x" alt="Exclusion terminology"/>
</figure>

An **exclusion element** is a *block-level* element which is *not a float*, and generates an exclusion box. An exclusion element establishes a *new block formatting context*.

An element becomes an exclusion when its `wrap-flow` property is computed to something other than its initial value of `auto`. When an element becomes an exclusion, inline content will wrap around the exclusion areas, but within their own formatting contexts.

Note that exclusions have to be positioned somehow, using any of the positioning schemes we currently have at our disposal. Except floats. IF you float an element, it will not become an exclusion. Otherwise, schemes like absolute positioning or CSS grid and so on, all work fine.

### The `wrap-flow` property

There are 7 values for the `wrap-flow` property available to us at the moment, and they determine the area which inline-content flows around.

<div class="table">
  <div class="tr">
    <div class="th td">auto</div>
    <div class="td">No exclusion created. Proceed with life as normal.</div>
  </div>
  <div class="tr">
    <div class="th td">both</div>
    <div class="td">
      <p>Inline flow content can flow on all sides of the exclusion.</p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-both.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-both@2x.jpg 2x" alt="wrap-flow:both example">
    </div>
  </div>
  <div class="tr">
    <div class="th td">start</div>
    <div class="td">
      <p>Inline flow content can only flow around the start edge of the exclusion area, but the end edge is a no-flow zone.</p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-start.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-start@2x.jpg 2x" alt="wrap-flow:start example">
    </div>
  </div>
  <div class="tr">
    <div class="th td">end</div>
    <div class="td">
      <p>Inline flow content can only flow around the end edge of the exclusion area, but the start edge is a no-flow zone.</p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-end.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-end@2x.jpg 2x" alt="wrap-flow:end example">
    </div>
  </div>
  <div class="tr">
    <div class="th td">minimum</div>
    <div class="td">
      <p>Inline flow content can only flow around the edge with less available space, and leave the other edge empty.</p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-min.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-min@2x.jpg 2x" alt="wrap-flow:minimum example">
    </div>
  </div>
  <div class="tr">
    <div class="th td">maximum</div>
    <div class="td">
      <p>Inline flow content can only flow around the edge with more available space, and leave the other edge empty.</p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-max.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-max@2x.jpg 2x" alt="wrap-flow:maximum example">
    </div>
  </div>
  <div class="tr">
    <div class="th td">clear</div>
    <div class="td">
      <p>Nothing flows along the start and end edge of the exclusion along the inline direction. <span class="kaomoji">¯\\\_(ツ)_/¯</span></p>
      <img src="{{ site.url }}/assets/images/posts/css-exclusions/wf-clear.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wf-clear@2x.jpg 2x" alt="wrap-flow:clear example">
    </div>
  </div>
</div>

### The `wrap-through` property

We can also control how the content which is supposed to flow around the exclusion behaves, with the `wrap-through` property. By setting a value of `none`, the content will flow through the exclusion, as if it wasn't there to begin with.

<figure>
  <figcaption>Green dashed line shows <code>wrap-through:none</code> while blue dashed line shows <code>wrap-through:wrap</code></figcaption> 
  <img src="{{ site.url }}/assets/images/posts/css-exclusions/wrap-through.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/wrap-through@2x.jpg 2x" alt="wrap-through example">
</figure>

Here's my attempt at demonstrating the different values of `wrap-flow` and `wrap-through` via a recreation of an interview Beyoncé did with ELLE back in 2016 when launching her Ivy Park line (I think). If you would like to try building something with exclusions, you'll have to use either Edge or Internet Explorer 10 and up, and prefix the properties with `-ms-`.

<p data-height="400" data-theme-id="9162" data-slug-hash="JBORXW" data-default-tab="result" data-user="huijing" data-pen-title="CSS exclusions demo" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/JBORXW/">CSS exclusions demo</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Also, here's the [standalone demo]({{ site.url }}/demos/exclusions/), and [source code on GitHub](https://github.com/huijing/demos/tree/master/exclusions).

## Support and fallbacks

If you had tried to view my CodePen or stand-alone demo in a browser other than Edge or Internet Explorer 10 and up, you'd have seen a little red message in the top right corner that said exclusions is not supported. And this was pretty much what Ben's frustrations were about.

I don't deny that this is a troublesome situation to be in, where you have Chrome, Safari and Opera supporting CSS shapes but not Exclusions, Edge supporting Exclusions but not CSS shapes, and Firefox which will only support CSS shapes after v62 comes out, but no Exclusions either.

<p class="ciu_embed" data-feature="css-exclusions" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=css-exclusions">Can I Use css-exclusions?</a> Data on support for the css-exclusions feature across the major browsers from caniuse.com.
</p>

And if you're thinking, why on earth are we in such an awkward position with regards to Shapes and Exclusions? Trust me, I get it. I want my text to flow around **BOTH** of Beyoncé's elbows too. But unfortunately, it seems like there's no way to do this. **YET**.

But there's nothing stopping us from tossing in some CSS exclusions in our code right now, even if only Edge and Internet Explorer 10 and up users can see it. We can still deliver a nice, working layout for the other browsers with [feature queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) AKA `@supports`.

Here's a general idea of how you could structure your exclusions code with feature queries:

<pre class="language-css"><code>/* Code that works in all browsers */
.element {
  /* Fallback to a float-based layout */
}

@supports (-ms-wrap-flow: both) {
  .element {
    /* Reset floats and margins */
    /* Exclusions and positioning */
  }
}</code></pre>

If you look through the code for my Beyoncé article above, you'll see how the feature query is structured.

### Tiny bit of history

As per my outsider understanding, CSS Shapes and Exclusions started out as a combined specification back in 2011. And back then the idea was to allow for CSS Exclusions and CSS Shapes to be used together to create sophisticated layouts, by letting content flow into and/or around shapes, even arbitrarily complex ones.

But the actual implementation of this idea is not straightforward at all. If you think about it, it's nice to have text flow within a shape, but what happens if the text is exceeds the amount of space available within the defined shape? Where would that extra content go?

I chatted with [Jen Simmons](http://jensimmons.com/) about this issue before, and learned that `shape-inside` can't be defined until someone comes up with a solution that solves the use cases which [CSS Regions](https://www.w3.org/TR/css-regions-1/) was attempting to solve. And the current proposal for CSS Regions is not ideal and requires reworking.

Eventually, CSS Shapes and CSS Exclusions got split up into their own specifications, with the scope of CSS Shapes pruned further so that at least `shape-outside` could be shipped first.

Maybe if more people start writing up use cases, or talk and tweet about this, we could get things moving. Because, come on, just look at the general sentiment about this feature.

<figure>
    <figcaption>OMG, what are these signals we're sending?</figcaption>
    <img src="{{ site.url }}/assets/images/posts/css-exclusions/users.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/users@2x.jpg 2x" alt="Chrome platform status: CSS exclusions"/>
</figure>

Public scepticism?? Sigh.

And again, it boils down to priorities for browser vendors, because there's so much to be done, features like subgrid, initial-letter, column-span, bug fixes for flexbox and grid, the list is almost endless. But if enough of us are excited about exclusions and shapes, it's definitely possible to push this up the priority list.

## Web standards need time

And when it comes to the specifications themselves, Bruce Lawson sums it up rather well in his article, [Why are web standards so slow](https://www.brucelawson.co.uk/2018/why-are-web-standards-so-slow/), when he says:

> But if the CSS Working Group get it wrong, it'll be on the web–and pissing off web developers–for ever.

If you're still not convinced, here's another video that illustrates the amount of consideration that goes into crafting a specification, by [Eric Meyer](https://meyerweb.com/) at [CSS Day 2018](https://cssday.nl/2018).

<iframe src="https://player.vimeo.com/video/279258468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

And once a specification is hashed out, browser vendors have to consider how to implement the specification in their respective engines, and whether it's worth the effort to do it sooner than later.

## Wrapping up

Long story short, try out all the new CSS features. Build demos, and play around with anything that seems remotely interesting. Even if that feature is in early stages, or only supported by 1 browser. And then talk about it, or write and tweet about your experience, your use cases, what you liked or disliked about it.

We can shape the web to what we want it to be, but only if we get involved. It takes all of us, from specification writers and the CSS working group, to all the browser vendors, to the rest of us who build stuff on the web.

Let's make this happen, my friends. <span class="emoji" role="img" tabindex="0" aria-label="flexed muscle">&#x1F4AA;</span>

## Relevant reading

<ul>
  <li class="no-margin"><a href="https://drafts.csswg.org/css-exclusions/">CSS Exclusions Module Level 1 Editor’s Draft</a></li>
  <li class="no-margin"><a href="https://rachelandrew.co.uk/archives/2016/03/16/css-exclusions-and-grid-layout/">CSS Exclusions and Grid Layout</a></li>
  <li class="no-margin"><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=234749">Chromium archived exclusions implementation issue</a></li>
  <li><a href="https://msdn.microsoft.com/en-us/ie/hh673558(v=vs.94)">Internet Explorer implementation</a></li>
</ul>

<em><small>Poster font is by Enemy Sub by <a href="https://zapatopi.net/fonts/">Lyle Zapato</a></small></em>
