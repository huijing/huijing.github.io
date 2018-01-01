---
layout: post
title: "Managing data with Jekyll"
date: Jan 01, 2018
tags: [jekyll]
---
I use [Jekyll](https://jekyllrb.com/) quite a bit, for this site, for the [SingaporeCSS](https://singaporecss.github.io/) site, for my [Penang Hokkien](http://penang-hokkien.gitlab.io/) site, you get the picture. In case you've never heard of Jekyll, it is a static site generator. And there are quite a lot of static site generators out there, popular ones (that I've personally heard of) being [Hugo](http://gohugo.io/), [Gatsby](https://www.gatsbyjs.org/) and [Metalsmith](http://www.metalsmith.io/). In fact, [Netlify](https://www.netlify.com/) maintains a list of open source static sites generators called [StaticGen](https://www.staticgen.com/). It's a really long list.

Some people even build their own, like my good friend, [Zell Liew](https://zellwk.com/), who [spoke about the experience](https://www.youtube.com/watch?v=fAASq3U_cAU). I'm not one of those people. I discovered Jekyll when I first heard [Anna Debenham](http://www.maban.co.uk/) talk about it on [Episode 72](http://thewebahead.net/72) of [The Web Ahead podcast](http://thewebahead.net/). I had been only using [Drupal](https://www.drupal.org/) at work and was intrigued by the idea of a flat file CMS.

## Using data files in Jekyll

Cut to 3 years later and Jekyll is now on version version 3.6.2 as of time of writing, and things have changed quite a bit from June 2014, just look at their [change log over the years](https://jekyllrb.com/docs/history/). The ability to store data in files was first introduced in 2013 for the 1.3.0 release. So it was already a feature by the time I picked up Jekyll.

The first time I used it was to implement tags on this blog of mine. The resource I referenced was written by [Stephan Groß](http://www.minddust.com/) because my broke ass hosted (and still hosts) this site on [GitHub Pages](https://pages.github.com/) and I needed a solution that didn't rely on plugins. Stephan's post was literally the perfect answer to my question, namely [How To Use Tags And Categories On GitHub Pages Without Plugins](http://www.minddust.com/post/tags-and-categories-on-github-pages/).

The documentation on Jekyll's site is pretty well-written and [for basic use cases](https://jekyllrb.com/docs/datafiles/), they've got you covered. Jeykll supports data contained in YAML, JSON and CSV files which are stored in a `_data` directory in your root Jekyll project. In their words, Jeykll is a text transformation engine, so most of it's functionality is predicated on the project's [directory structure](https://jekyllrb.com/docs/structure/).

## Liquid template language

Jekyll uses [Liquid](https://shopify.github.io/liquid/) as it's templating language, so it does require Ruby to run, and this may put some people off. But like I said, the choices for static site generators are more than you can shake a stick at, so you do you and I'll use Jekyll.

There are basic logic operators for control flow, `if`, `elsif/else`, `case/when` and one that I hadn't seen before, `unless`, which is the opposite of `if` where a code block is executed only if a certain condition isn't met. Liquid doesn't have a `not` operator, so `unless` is the closest equivalent. It does make for some interesting control statements.

We also have a couple of iterators to work with, `for`, `cycle` and `tablerow`, and they come with parameters like `limit`, `offset` and `range` that can be combined in different ways to make Jekyll quite flexible (at least for my use cases thus far). The [Liquid documentation](https://shopify.github.io/liquid/) is an useful reference as all of their standard tags and filters are supported in Jekyll.

It is possible to create variables with the `assign` tag and this becomes useful when you want to do things like access nested data in your convoluted data files (nah, that's just me, I'm sure your files look great). There's also a `capture` tag, which I don't usually use, but it allows you to create complex strings with other variables created from `assign`. Read the docs <span class="emoji" role="img" tabindex="0" aria-label="face with stuck-out tongue">&#x1F61B;</span>.

## Reworking the SingaporeCSS website

The [SingaporeCSS](https://singaporecss.github.io/) website has always been a pet project of mine, even though I don't think anyone really visits the site, it's my baby and I love it regardless. SingaporeCSS organises Talk.CSS, which is the only CSS-centric meetup in Singapore, and sister meet-up to [Talk.JS](https://www.meetup.com/Singapore-JS), our Javascript-centric counterpart. 

We've been around for 2 years now and will soon be having our 24th meetup, not too bad for something that started off as a [random chat in the KopiJS slack channel](https://singaporecss.github.io/about/). As the online presence of a CSS meetup, I figured it'd be a good chance to try out ALL THE THINGS. Specifically all the CSS things. #personalplayground

As the site grew, it didn't make sense to keep writing the markup by hand, especially since every post was generally using a similar format. But I was lazy, so lazy. Until I finally decided to stop procrastinating and resolve this technical debt. Actually, I had wanted to create a page to list all past speakers but soon found the existing implementation made this idea infeasible.

Each post has a section on videos, and a section on speakers. This has been standard from day 1. Along the way, I added a few segments, a HTML and CSS news for the month bit, a CSS colour of the month bit, and a soon-to-be-revived CSS grid demo of the month bit. The thing about the news segment is that sometimes it gets recorded as video, and sometimes it doesn't. There is always a write-up accessible from the GitHub repo though. 

Here's where Jekyll's truthy and falsy comes in really handy. Most of my conditionals involve checking if something exists or not, so my template will render only what shows up in the data entry. I ended up having 3 separate data files for my intents and purposes. One for speaker data, one for video data and one for meetup data.

<pre><code class="language-yaml">shiawuen:
  name: "Tan Shiaw Uen"
  twitter: "shiawuen"
  shortcode: "shiawuen"
  bio: "Shiaw Uen is a developer. He occasionally plants vegetables and makes soap."</code></pre>

<pre><code class="language-yaml">s303:
  title: "CSS whack-a-mole"
  link: "https://youtu.be/7Nyi3Iwa4s4"
  shortcode: "s303"
  description: "Creating a game in pure CSS? Shiaw Uen schools us in the dark arts of the CSS checkbox hack."</code></pre>

<pre><code class="language-yaml">3:
  videos:
    - ref: s301
    - ref: s302
    - ref: s303
  speakers:
    - ref: sayanee
    - ref: yongjun
    - ref: shiawuen</code></pre>

The meetup entry eventually expanded to (or could be expanded to) something like this:

<pre><code class="language-yaml">15:
  colour:
    name: chartreuse
    hex: "#7fff00"
    rgba: rgba(127,255,0,1)
  videos:
    - ref: s1501
    - ref: s1502
    - ref: s1503
    - ref: s1504
  codepen:
    description: "This particular demo by <a href='http://jensimmons.com/'>Jen Simmons</a> is best viewed if you open it in another browser and resize to your heart's content. <a href='http://labs.jensimmons.com/2016/examples/mondrian-2.html'>View it full page.</a>"
    embed: "<p data-height='500' data-theme-id='9162' data-slug-hash='mrNvPZ' data-default-tab='html,result' data-user='jensimmons' data-embed-version='2' data-pen-title='Responsive Mondrian' class='codepen'>See the Pen <a href='https://codepen.io/jensimmons/pen/mrNvPZ/'>Responsive Mondrian</a> by Jen Simmons (<a href='http://codepen.io/jensimmons'>@jensimmons</a>) on <a href='http://codepen.io'>CodePen</a>.</p>"
  speakers:
    - ref: sayanee
    - ref: cheeaun
    - ref: chris
    - ref: zell
    - ref: thomas</code></pre>

I'm sure there's a better way to do the CodePen embed, but I need some time to think it through. So the strategy here was to reference videos and speakers from the meetup data through their keys.

We access the data from the files in the `_data` folder using the syntax `site.data.FILENAME[key]`, and to make things neater, I put this into a variable with the `assign` tag.

<pre><code class="language-markup">&lcub;% assign meetup = site.data.meetups[page.meetup] %&rcub;</code></pre>

We can then loop through the video entries in the meetup data file and use those values as keys in the videos data file like so:

<pre><code class="language-markup">&lcub; for videos in meetup.videos %&rcub;
&lcub;% assign video = site.data.videos[videos.ref] %&rcub;</code></pre>

Within the loop, I ported in the original structure of each video entry. When this was done, I was kicking myself for not getting a move on and doing this sooner. Oh well, that's what laziness will do to you. Better late than never.

<pre><code class="language-markup">&lt;div class="c-video"&gt;
  &lt;a class="c-video__link" href="&lcub;&lcub; video.link &rcub;&rcub;"&gt;
    &lt;img class="c-video__img" src="&lcub;&lcub; site.url &rcub;&rcub;/assets/img/videos/talk-&lcub;&lcub; page.meetup &rcub;&rcub;/&lcub;&lcub; video.shortcode &rcub;&rcub;.jpg" srcset="&lcub;&lcub; site.url &rcub;&rcub;/assets/img/videos/talk-&lcub;&lcub; page.meetup &rcub;&rcub;/&lcub;&lcub; video.shortcode &rcub;&rcub;@2x.jpg 2x" alt="Link to &lcub;&lcub; video.title &rcub;&rcub; video"/&gt;
  &lt;/a&gt;
  &lt;p class="c-video__desc"&gt;&lcub;&lcub; video.description &rcub;&rcub;&lt;/p&gt;
&lt;/div&gt;</code></pre>

For the remaining sections, it was a matter of checking if the meetup entry contained the relevant key, for either CSS news, CSS colour or a CodePen embed using the `if` tag. For example, the CSS colour section looks like this:

<pre><code class="language-markup">&lcub;% if meetup.colour %&rcub;
&lcub;% assign colour = meetup.colour %&rcub;
&lt;div class="c-colour"&gt;
&lcub;% if colour.text %&rcub;
&lt;div class="c-swatch" style="background-color:&lcub;&lcub; colour.hex &rcub;&rcub;;color:&lcub;&lcub; colour.text &rcub;&rcub;"&gt;
&lcub;% else %&rcub;
&lt;div class="c-swatch" style="background-color:&lcub;&lcub; colour.hex &rcub;&rcub;"&gt;
&lcub;% endif %&rcub;
  &lt;div class="c-swatch__txt"&gt;
    &lt;p&gt;&lcub;&lcub; colour.name &rcub;&rcub;&lt;/p&gt;
    &lt;p&gt;&lcub;&lcub; colour.hex &rcub;&rcub;&lt;/p&gt;
    &lt;p&gt;&lcub;&lcub; colour.rgba &rcub;&rcub;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;h4&gt;CSS colour of the month&lt;/h4&gt;
&lt;/div&gt;
&lcub;% endif %&rcub;</code></pre>

## Gotchas and TILs

Amidst the trial and error, and largely due to my lack of familiarity with the YAML format, I learnt that indentation and dash notation in the data files do make a significant interest. When I had multiple videos nested within a meetup entry, each video entry had the same key, and those had to be prepended with a dash, however, different keys did not need the dash.

So in a nutshell, this works:

<pre><code class="language-yaml">13:
  videos:
    - ref: s1301
    - ref: s1302</code></pre>

But this does not:

<pre><code class="language-yaml">13:
  videos:
    ref: s1301
    ref: s1302</code></pre>

There are also a number of useful helper variables for loops that help inject more logic into my templates. I'm using grid for the speakers section, and the fallback utilises flexbox. When there are less than 3 speakers, the alignment is `flex-start`, but when there are 3 or more speakers, the alignment is `space-between`. And this is applied with a CSS class.

The logic behind this is to catch the last iteration and count it, if that value is less than 3, there will be an extra alignment class like so:

<pre><code class="language-markup">&lcub;% if forloop.index > 2 and forloop.last %&rcub;
&lt;div class="l-speakers c-speakers"&gt;
&lcub;% endif %&rcub;
&lcub;% if forloop.index &lt; 3 and forloop.last %&rcub;
&lt;div class="l-speakers c-speakers u-align-start"&gt;
&lcub;% endif %&rcub;</code></pre>

## Wrapping up

The [SingaporeCSS](https://singaporecss.github.io/) website is totally open source and [hosted on GitHub](https://github.com/SingaporeCSS/singaporecss.github.io) so you can check it out if you are interested. And if you see something that can be improved on, pull requests are always welcome.

Have a great 2018, everyone! <span class="emoji" role="img" tabindex="0" aria-label="person dancing">&#x1F483;</span>
