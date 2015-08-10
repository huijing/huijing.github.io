---
layout: post
title: "Drupal 101: Getting started with Drupal 7 theming"
date: August 10, 2015
tags: [theming, drupal]
---
I still remember the first Drupal theme I built. It was for the [Singapore Gastric Cancer Consortium website]({{ site.url }}/blog/the-one-i-cut-my-teeth-on/), and at the time I barely knew my way around HTML and CSS. I used the [Zen](https://www.drupal.org/project/zen) theme as my starter theme, and unknowingly wrote my CSS in `.scss` files without realising the distinction. I was a little bit confused to why I needed to install a software called Codekit to make everything work but was too busy trying to get the theme up and running to worry about it at the time.

##Let's talk about that thing called Sass
After I finished up with that project, I took the time to understand exactly what was going on. That's when I learned what Sass was. Sass, like CSS, is a stylesheet language. It was developed as part of the HAML markup language, but has since grown into its own. Sass was invented by [Hampton Catlin](http://www.hamptoncatlin.com/) in 2006. [Natalie Weizenbaum](https://twitter.com/nex3/), the primary designer and developer of Sass, and [Chris Eppstein](http://chriseppstein.github.io/) are the main contributors to the Sass language. The full Sass documentation can be found [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

Sass extends what CSS can do, by introducing useful features such as variables, nesting, mixins and so on. Browsers, however, only understand CSS so the Sass files have to be compiled into CSS for it to serve its purpose. Sass files come in two different syntaxes, Sass and <abbr title="Sassy CSS">SCSS</abbr>, both are currently supported but SCSS is the primary syntax. SCSS is exactly the same as CSS, so renaming any `.css` file to `.scss` works perfectly fine.

Sass originated as an open-source project built in Ruby. You can check out the source code [here](https://github.com/sass/sass). There are many ways you can get up and running with Sass, either from a GUI application or simply the command line. The official documentation for [installing Sass](http://sass-lang.com/install) is pretty comprehensive. The gist of all this is, in order to use Sass in your projects, the Sass files have to be compiled into CSS files first. [Dan Cederholm](http://simplebits.com/) wrote a great article about [Why Sass](http://alistapart.com/article/why-sass) on A List Apart. He describes how Sass simplifies and streamlines the stylesheet authoring process. Personally, the Sass functionality I make use of most are variables and mixins. As well as the occasional for-loop. If you want to see a true Sass pro, [Hugo Giraudel](http://hugogiraudel.com/) is your man. He does a lot of amazing things with Sass and you should check out his [blog](http://hugogiraudel.com/blog/) and all his various [projects](http://hugogiraudel.com/projects/).

##And some basics about Drupal theming
A theme is like the skin for your website. Drupal theming may seem complicated at first. Peeking into a theme folder reveals a bunch of folders littered with PHP files, stylesheets and who knows what else. The easiest way to wrap your head around things is to try and create a theme from scratch. Drupal.org has a pretty good set of documentation for [theming Drupal 7](https://www.drupal.org/node/337173) so that should be your starting point.

###Folder structure
<p class="no-margin">All non-core themes should be placed in the <code>sites/all/themes</code> folder. Start off by creating a new folder here and name it whatever you like. I’m going to be using my <a href="https://www.drupal.org/sandbox/hj_chen/2345293">own starter theme</a> as the example here, so my folder is called <code>clarus</code>. To make things a bit more organised, create three sub-folders, <code>css</code>, <code>js</code> and <code>img</code>, inside your new theme folder. This looks like any other HTML project, doesn’t it?</p>
<pre><code class="language-markup">
clarus/
|
|-- css/
|
|-- img/
|
`-- js/
</code></pre>

###The .info file
The only required file for a Drupal 7 theme is the `.info` file. This file contains all the information about your theme. One thing to note is that your theme name **cannot** contain hypens, spaces or punctuation. Underscores are acceptable. So if you name this file `godzilla.info`, then Drupal will label your theme *godzilla*. Every time you make a change to the `.info` file, you must also clear your cache in order to see the changes.




install browsersync module

