---
layout: post
title: "Learning CSS by reading specs"
date: Aug 06, 2019
tags: [css]
hastweet: true
image: read-specs
---
Recently I got the chance to do an interview with [Vitaly Friedman](https://twitter.com/smashingmag) as part of the run-up to [View Source Conference](https://2019.viewsourceconf.org/) taking place in September this year. One of the things we chatted about was around new CSS.

<iframe src="https://player.vimeo.com/video/353173490" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

My good friend, [Wei](https://uuei.io/), is an incredible technical writer who is very involved in documentation for open-source projects. She wrote most of the [React-Redux](https://react-redux.js.org/) documentation and is one of the core maintainers for [Docusaurus](https://docusaurus.io/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">.<a href="https://twitter.com/wgao19?ref_src=twsrc%5Etfw">@wgao19</a> wrote large sections of our new React-Redux docs, and has done a fantastic job (which I think is what got her involved with Docusaurus in the first place). She&#39;s worth following, and this umbrella issue on documenting Docusaurus v2 looks worth reading! <a href="https://t.co/oltj6XEgh2">https://t.co/oltj6XEgh2</a></p>&mdash; Mark Erikson (@acemarke) <a href="https://twitter.com/acemarke/status/1156012102114430981?ref_src=twsrc%5Etfw">July 30, 2019</a></blockquote>

Having a close friend so involved with documentation made me think a bit more about this aspect of software development that I personally feel is highly underrated.

*Note: after writing this whole thing I realised it went on longer than I expected, so the TL:DR of it is, don't be wary of reading CSS specifications. They help immensely in understanding CSS.  
Also, you, yes YOU, can contribute to the development of CSS as well.*

## Warning, story time…

I've worked at a variety of different organisations, from agencies to start-ups to larger enterprise companies, and have been part of teams that have very different attitudes toward documentation.

The most memorable experience I had was at a start-up which focused on applying machine learning techniques on large datasets from organisations who had troves of data but no expertise to do anything with them.

The team in Singapore had been working on a machine learning platform but never managed to see it through as our Singapore office was shut down.

<img src="{{ site.url }}/assets/images/posts/read-specs/team.jpg" srcset="{{ site.url }}/assets/images/posts/read-specs/team@2x.jpg 2x" alt="Deep Labs team at work back in 2017">

But that year of working with highly experienced and skilled senior engineers, each experts in their respective fields, taught me more about software engineering than my all prior work experience combined.

One common thread among all of them was their emphasis on clear and comprehensive documentation.

## CSS specifications are documentation, kinda

[Codrops](https://tympanus.net/codrops/) has a really nice [CSS reference](https://tympanus.net/codrops/css_reference/) section that was largely written by the indomitable [Sara Soueidan](https://www.sarasoueidan.com/). I had helped out with some of the later entries after Sara moved on to other projects. The reason I'm so familiar with CSS Grid is because I wrote [the entry for that](https://tympanus.net/codrops/css_reference/grid/).

Every entry that I wrote gave me reason to go through the relevant CSS specification with a fine-toothed comb, in addition to researching any tutorials and blog posts that covered the same thing, but in a different voice.

But the specification always remained my single source of truth, which gave me enough clarity to discern if information on an article or blog post wasn't entirely accurate. I now refer to the specification for every blog post I write about CSS, and more often than not, I'm discovering something I didn't know before.

<figure>
    <figcaption>Accurate depiction of me</figcaption>
    <video src="{{ site.url }}/assets/videos/amazing.mp4" controls autoplay loop></video>
</figure>

One of the things that Vitaly brought up during our interview is some people find the specification intimidating, that it seems like a really technical document with paragraphs and paragraphs of hard to decipher text.

To me, that is partly true, especially for specifications written [before CSS3](https://www.w3.org/Style/2011/CSS-process), when the decision was made to split up the specification into different modules to make it easier to develop and maintain. And I too have had the experience of reading the same paragraph multiple times and still being none the wiser.

I also have the advantage of being fluent in English, and hence am in a privileged position of being able to consume the information in the specification relatively quicker and easier than people for whom English is not their first language.

That being said, when Vitaly asked me if there was one thing I wished I knew when I started by career in web development, my answer was to have known to read the CSS specifications from day 1.

The [CSS Working Group](https://www.w3.org/Style/CSS/members) have poured in a significant amount of time and effort to be as comprehensive as possible in defining how CSS should behave.

To quote [Elika Etemad (AKA fantasai)](https://twitter.com/fantasai):

> You don't need to be a programmer or a CS major to understand the CSS specifications. You don't need to be over 18 or have a Bachelor's degree. You just need to be very pedantic, very persistent, and very thorough. 

## Getting started with specifications

Luckily for all of us, a number of articles and resources have been written specifically for the purpose of easing people into reading W3C specifications. If you've never visited the [W3C's CSS home page](https://www.w3.org/Style/CSS/), I recommend starting there.

It is constantly updated with what the CSS Working Group is up to, which specifications have been officially updated, as well as news on relevant events and conferences .

Knowing about the history of CSS is also beneficial because it sheds light on how CSS developed over the past two decades and why certain things are the way they are today.

December 17, 2016 was the 20th anniversary of CSS, and the W3C published a commemorative website, [20 Years of CSS](https://www.w3.org/Style/CSS20/),  to celebrate that milestone.

There is a full list of all completed specifications and drafts by the CSS Working Group, so that is the best place to keep abreast of all the latest developments. As for the actual reading of specifications, [How to Read W3C Specs](http://alistapart.com/article/readspec/) by [J. David Eisenberg](https://catcode.com/) is possibly the best place to start. 

[Understanding the CSS Specifications](https://www.w3.org/Style/CSS/read) by Elika provides a nice roadmap of which specifications to cover first and also highlights a number of projects we can get involved in if we're interested in contributing.

## Contributing to the development of CSS

One of the most fortunate things in my web development career is getting to know people who work on browsers, specifications and the web platform.

The amount of insight I received from them simply from casual conversation has been invaluable in shaping my view of this industry that I've chosen to make a career out of.

I first met [Rachel Andrew](https://rachelandrew.co.uk/) when she came over to Singapore for [CSSConf.Asia 2016](https://2016.cssconf.asia/), and she gamely agreed to participate in a panel for [Talk.CSS Anniversary Special](https://singaporecss.github.io/12/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6aWQ7h70rA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

She is someone who I consider a true CSS Advocate, and she has made it a point to encourage web developers like you and I to provide feedback to the specification writers and browser vendors and help contribute to the development of the web platform.

For me, CSS is and will always be my favourite open-source project.

### Writing/talking about CSS

Trying out CSS features, especially the newer ones, then writing or speaking about how it works, how it solves a particular use-case, or doesn't is very helpful, not only to other developers who might encounter similar situations, but also specification authors and browser vendors.

If we shy away from using newer features simply because they are not widely supported, we're initiating a negative cycle that ends up pushing that feature further away from broad browser support. Browser vendors do take note of buzz around CSS features when it comes to prioritisation.

Sometimes I wonder if developers forget that browsers are also software projects built by and maintained engineers like you and I. As with any software project, features and bugs have to get prioritised because even though companies like Google and Microsoft are huge, the teams working on browsers are not that big.

When CSS grid first came out back in 2017, it generated quite a lot of buzz and one particular tweet by [Patrick Kettner](https://twitter.com/patrickkettner) compelled me to write a [brief note about kindness]({{ site.url }}/blog/a-little-more-kindness) (and sometimes the lack thereof) in our industry.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/marcosc">@marcosc</a> <a href="https://twitter.com/jsscclr">@jsscclr</a> tons of thoughts, and not enough time to tweetstorm, so... <a href="https://t.co/KO4zAgk0Ot">pic.twitter.com/KO4zAgk0Ot</a></p>&mdash; Patrick Kettner (@patrickkettner) <a href="https://twitter.com/patrickkettner/status/843264670429409281">March 19, 2017</a></blockquote>

My point is, please try out as many new features as possible. You don't have to use them in production, a side project here or a CodePen there, just to see how it works, is good enough. And if you have some time, a short write-up, even in bullet form will do. Browser vendors are listening.

### Raising issues on the CSS working drafts repo

CSS specifications are not being developed in a deep underground cave by mysterious people in dark robes chanting around a bubbling cauldron. They are done in the open. Everybody can take part in the discussions the [mailing list, www-style@w3.org](https://lists.w3.org/Archives/Public/www-style/), and you can [subscribe here](https://lists.w3.org/Archives/Public/www-style/).

<img srcset="{{ site.url }}/assets/images/posts/read-specs/shield-480.jpg 480w, {{ site.url }}/assets/images/posts/read-specs/shield-640.jpg 640w, {{ site.url }}/assets/images/posts/read-specs/shield-960.jpg 960w, {{ site.url }}/assets/images/posts/read-specs/shield-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/read-specs/shield-640.jpg" alt="Scene with 3 robed figures from Marvel Agents of S.H.E.I.L.D.">

If mailing lists aren't your thing, then raising an issue on [GitHub](https://github.com/w3c/csswg-drafts) also works fine. All the CSS working drafts are being written and developed on GitHub, so it's really interesting to follow along and see how a specification evolves throughout its development.

Granted a lot of the discussion is taking place between specification authors, browser vendors and specialists in their respective fields (accessibility, internationalisation, typography etc.), but there are also developers like you and I inquiring about specific use cases and asking for clarification as well.

<figure>
    <figcaption>These are the fine folk from the CSSWG</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/read-specs/csswg-480.jpg 480w, {{ site.url }}/assets/images/posts/read-specs/csswg-640.jpg 640w, {{ site.url }}/assets/images/posts/read-specs/csswg-960.jpg 960w, {{ site.url }}/assets/images/posts/read-specs/csswg-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/read-specs/csswg-640.jpg" alt="Group photo of the CSSWG at San Francisco">
</figure>

Ideally, you'd want to be clear and specific about your use-case and provide a simplified test case that best illustrates the issue, if that's applicable. Most of the time, somebody will be able to help you out or tag someone who can.

For me, simply reading the issues I find interesting is fascinating enough, because usually they revolve around use-cases that I never even thought of, and I have developed a greater appreciation of the amount of thought put into the specifications from that.

### Logging bugs with respective browser vendors

One of the CSS properties I'm especially interested in is `writing-mode`. To be fair, it's probably most applicable to those of us who use East Asian languages like Chinese or Japanese. But that doesn't mean those of you who don't have to miss out on the fun.

Vertical text has been used in the world of graphic design for the longest time, and [Jen Simmons]() has lots of demos that show how vertical text can be used for art-directed layouts. But I digress. This section is about browser bugs.

Because vertical writing on the web is comparatively less used than some other CSS features, there were some bugs that didn't get flushed out. But I was doing quite a lot of experimentation with vertical layouts at the time and encountered a pretty trippy bug in Firefox.

<img srcset="{{ site.url }}/assets/images/posts/vertical-typesetting/whoa-480.jpg 480w, {{ site.url }}/assets/images/posts/vertical-typesetting/whoa-640.jpg 640w, {{ site.url }}/assets/images/posts/vertical-typesetting/whoa-960.jpg 960w, {{ site.url }}/assets/images/posts/vertical-typesetting/whoa-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/vertical-typesetting/whoa-640.jpg" alt="Flexbox issue with vertical writing-mode on Firefox">

Full details about that whole exercise in [this blog post]({{ site.url }}/blog/vertical-typesetting-revisited). I raised the bug on Firefox's issue log and by the next release, the bug had been resolved. THAT BLEW MY MIND. Though I've also had multiple friends mention to me that when they encounter odd behaviour, it doesn't occur to them that it might be a browser bug. 

So the point I want to make here is that, sometimes, when your CSS seems to be doing weird things, be open to the possibility that it might be a browser bug. Help out the browser vendors by checking if its an existing issue, and if not, raise one.

Here's a list of all the issue logs for the major browsers:

<ul>
  <li class="no-margin"><a href="https://bugzilla.mozilla.org/index.cgi">Firefox bug tracker</a></li>
  <li class="no-margin"><a href="https://bugs.chromium.org/p/chromium/issues/list">Chromium bug tracker</a></li>
  <li class="no-margin"><a href="https://bugs.webkit.org/query.cgi?format=specific&amp;product=WebKit">Webkit bug tracker</a></li>
  <li><a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/">EdgeHTML issue tracker</a></li>
</ul>

There is also a volunteer-led initiative called the [Web Compat](https://webcompat.com/) which helps facilitate the process of raising browser compatibility bugs.

### The Web Platform Tests project

I learned about the [Web Platform Tests](https://web-platform-tests.org/) project when I was the Mozilla All-Hands in Austin back in 2017 when I heard some people talk about it. Then, Rachel Andrew [wrote this article on 24ways](https://24ways.org/2017/testing-the-web-platform/) that provided a step-by-step guide to getting involved with the project by writing tests.

To quote her from the article:

> You need to really understand a feature to accurately come up with a method of testing if it works or not in the different engines. This is not glamorous work, it is however a very useful thing to be involved with. In addition to helping yourself, and developing the sort of deep knowledge of the platform that enables contribution, you will really help the progress of specifications.

This is something I have yet to start exploring, but it is definitely on my bucket list and hopefully I can start contributing in the future.

## Wrapping up

This went on for really long, but I hope it sheds some light onto why reading CSS specifications is immensely helpful to build a strong understanding of CSS, while also highlighting how developers who work on the web can contribute to shaping the web platform.

## Related reading and links

<ul>
  <li class="no-margin"><a href="https://www.w3.org/Style/CSS/">W3C: Cascading Stylesheets</a></li>
  <li class="no-margin"><a href="http://alistapart.com/article/readspec/">How to Read W3C Specs</a></li>
  <li class="no-margin"><a href="https://www.w3.org/Style/CSS/read">Understanding the CSS Specifications</a></li>
  <li class="no-margin"><a href="https://www.w3.org/Style/2011/CSS-process">CSS: Levels, snapshots, modules…</a></li>
  <li class="no-margin"><a href="https://github.com/w3c/csswg-drafts">CSS Working Group Editor Drafts</a></li>
  <li class="no-margin"><a href="https://web-platform-tests.org/">web-platform-tests documentation</a></li>
  <li class="no-margin"><a href="https://wpt.fyi/results/?label=master&amp;label=experimental">web-platform-tests dashboard</a></li>
  <li class="no-margin"><a href="https://github.com/web-platform-tests/wpt">Test suites for Web platform specs</a></li>
  <li class="no-margin"><a href="https://24ways.org/2017/testing-the-web-platform/">Christmas Gifts for Your Future Self: Testing the Web Platform</a></li>
  <li><a href="https://noti.st/rachelandrew/ClxWtN/making-things-better-redefining-the-technical-possibilities-of-css">Making Things Better: Redefining the Technical Possibilities of CSS</a></li>
</ul>