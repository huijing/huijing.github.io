---
layout: post
title: "The one where I learn responsive"
date: October 06, 2014
project: Pixel Onion Pte Ltd
image: project-4@2x
description: You really can't be serious about building websites these days they're not optimised for mobile so it was high time I grok-ed the key concepts of responsive design. 
tags: [drupal7, client-work]
---
The [Pixel Onion](http://pixelonion.com/) website was a project that had languished in a corner for months. The team had been swamped with client project after client project, but this was fast becoming ridiculous. It is simply unbecoming for a web agency not to have their own website up and running. We made a decision to whip up a simple website, built on Drupal (obviously), to be launched by Valentine’s Day 2014.

<img src="{{ site.url }}/images/posts/pixel-onion.jpg" alt="Pixel Onion homepage"/>

It took us about an hour to come with the information architecture of the site, as well as the general structure and content of the site. After working on consecutive projects involving a slew of tiresome back-and-forths with clients (an inevitable part of EVERY job, might I add), this personal project of ours was a breath of fresh air. 

Our party consisted of a UX designer, a visual designer, a back-end developer and a front-end developer (me). Our site would be simple, but with some little tweaks to give it some flavour, like animated navigation icons. And of course, the site would have to be fully responsive from day one. IE8 support, on the other hand, would come eventually, if not at all.

Now, in my prior two projects, I was playing the back-end site builder role, so this was my first foray into the world of responsive front-end development. Fun times. (Technically, I did create a custom theme for the [Singapore Gastric Cancer Consortium](http://www.sgcc.sg) site, but it wasn't responsive.) But in all seriousness, I realised I was the kind of person who retained knowledge if I had hands-on experience. All the reading and watching tutorial videos in the world never did much for me if there wasn't a real world task for me to get my hands dirty with.

Once again, I leveraged on the [Zen theme](https://www.drupal.org/project/zen) as the base theme for this site. I had also levelled up on Sass since my last theming project, thanks to the experience of working with a brilliant front-end developer and all-round good guy, [Zell Liew](http://zell-weekeat.com/). Plus, I'd also read a number of very useful articles on Sass and those I referred to most for this project were:

- [Architecture for a Sass Project](http://www.sitepoint.com/architecture-sass-project/) by [Hugo Giraudel](http://hugogiraudel.com/)
- [When to use Sass mixins, extends and variables](https://coderwall.com/p/7p7w2a) by [Rachel Nabors](http://rachelnabors.com/)

At the time, my knowledge of responsive was akin to my knowledge of Saturn: I know it exists, I know what it is (it's the sixth planet in the solar system!) and...I guess that's it. So I knew responsive was apparently the best thing since sliced bread, and I also knew it had something to do with how the website morphed as I changed my browser width. Cue [Zell](https://twitter.com/zellwk) to the picture as he gave me the ultimate newbie's run-down to responsive development. The magic ingredient is: Media queries.

Here's what the official definition of a media query is:

> A media query consists of a media type and zero or more expressions that check for the conditions of particular media features. Among the media features that can be used in media queries are ‘width’, ‘height’, and ‘color’. By using media queries, presentations can be tailored to a specific range of output devices without changing the content itself.

That's pretty human-readable for a specification, if you ask me. For responsive development, the key media feature used is <code class="language-css">width</code>. Because we want the content to be displayed in the best possible way depending on the width of the device it's being viewed on. Maybe on a small mobile screen, you'd want the content to be displayed in a single column with an off-canvas navigation menu, but on a large desktop screen with lots of real-estate, you'd want the content to spread across the whole screen. With media queries and the magic of CSS, both layouts can be achieved on a single site. You don't have to maintain a separate site for mobile (unless that's your thing, in that case, carry on if it makes you happy).

Media queries just tell the browser to display the site's content in a particular way, on certain types of media, when certain conditions are met. And these conditions are boolean in nature, meaning that the browser will trigger your styles only if those conditions are true.

The basic syntax for media queries is:
<pre><code class="language-css">@media &lt;media-type&gt; (&lt;media-feature&gt;);</code></pre>
There are quite a number of media-types that can be used, but the most common are <code class="language-css">screen</code> and <code class="language-css">print</code>. There is also a long list of media-features that can be used as conditions, but for responsive design, our go-to condition is always <code class="language-css">width</code>. For the inquisitive mind, feel free to refer to the [W3C specification](http://www.w3.org/TR/css3-mediaqueries/) for the full list of media types and features. 

A key concept introduced to me was to structure my media queries in a mobile-first manner, which meant that I went with <code class="language-css">min-width</code> rather than <code class="language-css">max-width</code> when structuring my breakpoints. At the time, I used a very basic break-point mixin to help with writing media queries:
<pre><code class="language-css">
@mixin bp($point) {
  @if $point == large {
    @media (min-width: 1050px) {
      @content;
    }
  }
  @else if $point == med-large {
   @media (min-width: 900px) {
      @content;
    }
  }
  @else if $point == med {
   @media (min-width: 600px) {
      @content;
    }
  }
  @else if $point == small {
   @media (min-width: 480px) {
      @content;
    }
  }
}
</code></pre>
*Full disclosure: both of us have since moved on and are no longer using the above mixin.*

What this implies is that, your site will take the CSS styles defined for the smallest breakpoint by default, and if you want a different style (most likely, layout) for a larger screen, you call the media query and define your style within the query. As I'm writing this, I can feel the confusion emanating all around me. Maybe an example will help.

Let's say we have two blocks of content, `main` and `sidebar`. On a narrow mobile display, both blocks will be displayed on a single column stacked on top of each other. But when we expand to a larger width, we want the blocks to display in two columns, with `main` taking up 3/4 of the screen on the left and `sidebar` taking up 1/4 of the screen on the right. If we use 540px as the breakpoint, it should look something like this:

<p data-height="268" data-theme-id="9162" data-slug-hash="ivzgm" data-default-tab="result" data-user="huijing" class='codepen'>See the Pen <a href='http://codepen.io/huijing/pen/ivzgm/'>Blog example #1</a> by Chen Hui Jing (<a href='http://codepen.io/huijing'>@huijing</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
Resize the browser and the content should "break" at when it hits 540px. A mobile-first approach simply means that CSS styles are applied to widths at specified-breakpoint-and-above, rather than at specified-breakpoint-and-below.

Honestly, this concept is easier to grok once you've written some code yourself. Thanks to this project, I had the chance to write lots of it. It also helped that I was pretty familiar with Drupal, so I could change the markup to cater to the CSS I was writing. But I always enjoy an all-round team effort, and we launched the site as scheduled, to minimal fanfare but much internal satisfaction.
