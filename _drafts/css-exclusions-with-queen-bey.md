---
layout: post
title: "CSS exclusions with Queen Bey"
date: Jul 30, 2018
tags: [css]
---
I recently came across a post by [Ben Frain](https://benfrain.com/the-frustrations-of-using-css-shapes-and-css-exclusions/) expressing his frustrations about CSS shapes and exclusions. And although I can see where he is coming from (he made that pretty clear in his examples), I would like to address the statement he made in his conclusion:

> I don’t know what’s going on here. As an outsider, coming to these features fresh in 2018 this situation seems like a bit of a car crash.

Now I am definitely not an insider in any sense of the word. I do not work for any browser vendors, nor am I part of the CSS working group. But I am lucky enough to know people who fall into either or both of these camps, and from conversations with them, gotten a better understanding of what goes on behind the scenes.

## It's not all unicorns and rainbows…

First of all, I do not disagree that the situation is not ideal. But I do disagree with the sentiment of “Why bother?”. In fact, let me share with you my thoughts on why bothering is a great thing. It is my sincere belief that a lot of frustration, sometimes amounting to anger, at CSS or browser behaviour in general, comes from a lack of understanding about how CSS features come into being.

So I would like everyone to indulge this request of mine, to watch [Rachel Andrew](https://rachelandrew.co.uk/)'s excellent talk from [CSSConf.EU 2017](https://2017.cssconf.eu/) on where CSS comes from.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cYGOv2ToZjY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

As Rachel says, it seems that there is an impression that browser vendors are locked in some battle about CSS. A legacy from the days where browsers did compete on features. But today, all the browser vendors are in on it and working **together** on the specifications (and [documentation](https://blog.mozilla.org/blog/2017/10/18/mozilla-brings-microsoft-google-w3c-samsung-together-create-cross-browser-documentation-mdn/)).

Specifications can originate from browser vendors, other CSS user agents (e.g. ePUB), companies like Adobe and the CSS working group itself. A new feature starts off as a cool idea or a means to resolve an issue. Some of these get consolidated into an editor's draft. 

If a browser vendor came up with the spec, often they will put out an experimental implementation in their own browser, like a proof-of-concept, for other developers to try it out, flesh out requirements and address overlooked issues and so on. 

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
  <li class="no-margin"><a href="https://bugs.chromium.org/p/chromium/issues/list">Chromium</a></li>
  <li class="no-margin"><a href="https://bugzilla.mozilla.org/index.cgi">Firefox</a></li>
  <li class="no-margin"><a href="https://bugs.webkit.org/query.cgi?format=specific&amp;product=WebKit">Webkit</a></li>
  <li><a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/">Edge</a></li>
</ul>

If something doesn't work the same across browsers, odds are it may be a browser bug. Rather than stew in frustration and throw that feature out of your project, raise a bug. Take action! If developers don't use features simply because they are buggy or not supported, we're signalling to browser vendors that this feature isn't in demand.

Conversely, if we raise bugs, tweet about our issues, write blog posts and code up demos, we are raising awareness of a particular feature. And signalling to browser vendors to prioritise this feature, fix its bugs, implement it correctly, because we WANT TO USE IT.

If something isn't in the CSS specification but you think it'd be useful, consider raising a GitHub issue in the [CSSWG repository](https://github.com/w3c/csswg-drafts), where all the working drafts are being developed. You can also get a better idea of how CSS specifications get hashed out by reading the various issue threads.

I'm glad Ben wrote out his frustrations about CSS shapes and exclusions. And I want more people to try it out and talk about how they would use shapes and exclusions in their projects if it worked properly across all browsers. The more use cases the better!

## Okay, now let's talk about exclusions

I apologise for being slightly click-baity with the title, but how else would I get my point about becoming more involved in the future of the web without mentioning Beyoncé in the title? It's not entirely click-bait, however, because we are going to explore CSS exclusions, WITH some help from Beyoncé, of course.

CSS exclusions define arbitrary areas around which inline content can flow, and can be defined on any CSS block-level element. Exclusions can be considered more “powerful” than CSS shapes because they are not limited to floats only.

<figure>
    <figcaption>OMG, what are these signals we're sending?</figcaption>
    <img src="{{ site.url }}/assets/images/posts/css-exclusions/users.jpg" srcset="{{ site.url }}/assets/images/posts/css-exclusions/users@2x.jpg 2x" alt="Chrome platform status: CSS exclusions"/>
</figure>

## Web standards need time

Bruce Lawson sums it up rather well in his article, [Why are web standards so slow](https://www.brucelawson.co.uk/2018/why-are-web-standards-so-slow/), when he says:

> But if the CSS Working Group get it wrong, it'll be on the web–and pissing off web developers–for ever.

If you're still not convinced, here's another video that illustrates the amount of consideration that goes into crafting a specification, by [Eric Meyer](https://meyerweb.com/) at [CSS Day 2018](https://cssday.nl/2018).

<iframe src="https://player.vimeo.com/video/279258468" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Relevant reading

- [CSS Exclusions Module Level 1 Editor's Draft](https://drafts.csswg.org/css-exclusions/)
- [CSS Exclusions and Grid Layout](https://rachelandrew.co.uk/archives/2016/03/16/css-exclusions-and-grid-layout/)
- [Chrome platform status: CSS Exclusions](https://www.chromestatus.com/feature/6296903092273152)
- [Internet Explorer implementation](https://msdn.microsoft.com/en-us/ie/hh673558(v=vs.94))

<em><small>Poster font is by Enemy Sub by <a href="https://zapatopi.net/fonts/">Lyle Zapato</a></small></em>

