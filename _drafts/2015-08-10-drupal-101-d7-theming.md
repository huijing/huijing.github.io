---
layout: post
title: "Drupal 101: Getting started with Drupal 7 theming"
date: August 10, 2015
tags: [theming, drupal]
---
With Drupal 8 just around the corner, it may seem odd that I would write a post about Drupal 7 theming, but I figured it would take some time for Drupal 8 to really become mainstream. Also, when I do write that Drupal 8 theming post (coming soon), we can do some one to one comparisons on the things that have changed. Trust me, there are a lot of differences between the two.

I still remember the first Drupal 7 theme I built. It was for the [Singapore Gastric Cancer Consortium website]({{ site.url }}/blog/the-one-i-cut-my-teeth-on/), and at the time I barely knew my way around HTML and CSS. I used the [Zen](https://www.drupal.org/project/zen) theme as my starter theme, and unknowingly wrote my CSS in `.scss` files without realising the distinction. I was a little bit confused to why I needed to install a software called Codekit to make everything work but was too busy trying to get the theme up and running to worry about it at the time.

##Let's talk about that thing called Sass
After I finished up with that project, I took the time to understand exactly what was going on. That's when I learned what Sass was. Sass, like CSS, is a stylesheet language. It was developed as part of the HAML markup language, but has since grown into its own. Sass was invented by [Hampton Catlin](http://www.hamptoncatlin.com/) in 2006. [Natalie Weizenbaum](https://twitter.com/nex3/), the primary designer and developer of Sass, and [Chris Eppstein](http://chriseppstein.github.io/) are the main contributors to the Sass language. The full Sass documentation can be found [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

Sass extends what CSS can do, by introducing useful features such as variables, nesting, mixins and so on. Browsers, however, only understand CSS so the Sass files have to be compiled into CSS for it to serve its purpose. Sass files come in two different syntaxes, Sass and <abbr title="Sassy CSS">SCSS</abbr>, both are currently supported but SCSS is the primary syntax. SCSS is exactly the same as CSS, so renaming any `.css` file to `.scss` works perfectly fine.

Sass originated as an open-source project built in Ruby. You can check out the source code [here](https://github.com/sass/sass). There are many ways you can get up and running with Sass, either from a GUI application or simply the command line. The official documentation for [installing Sass](http://sass-lang.com/install) is pretty comprehensive. The gist of all this is, in order to use Sass in your projects, the Sass files have to be compiled into CSS files first. [Dan Cederholm](http://simplebits.com/) wrote a great article about [Why Sass](http://alistapart.com/article/why-sass) on A List Apart. He describes how Sass simplifies and streamlines the stylesheet authoring process. 

Personally, the Sass functionalities I make use of most are variables and mixins. As well as the occasional for-loop. If you want to see a true Sass pro, [Hugo Giraudel](http://hugogiraudel.com/) is your man. He does a lot of amazing things with Sass and you should check out his [blog](http://hugogiraudel.com/blog/) and all his various [projects](http://hugogiraudel.com/projects/).

##And some basics about Drupal 7 theming
A theme is like the skin for your website. Drupal 7 theming may seem complicated at first. Peeking into a theme folder reveals a bunch of folders littered with PHP files, stylesheets and who knows what else. The easiest way to wrap your head around things is to try and create a theme from scratch. Drupal.org has a pretty good set of documentation for [theming Drupal 7](https://www.drupal.org/node/337173) so that should be your starting point.

###Folder structure
<p class="no-margin">All non-core themes should be placed in the <code>sites/all/themes</code> folder. Start off by creating a new folder here and name it whatever you like. To make things a bit more organised, create three sub-folders, <code>css</code>, <code>js</code> and <code>img</code>, inside your new theme folder. This looks like any other HTML project, doesn’t it?</p>
<pre><code class="language-markup">
godzilla/
|
|-- css/
|
|-- img/
|
`-- js/
</code></pre>

###The .info file
The only required file for a Drupal 7 theme is the `.info` file. This file contains all the information, as well as configuration options for your theme. One thing to note is that your theme name **cannot** contain hypens, spaces or punctuation. This is because Drupal uses this name in PHP functions so the same limitations for name-spacing apply. Numbers and underscores are acceptable though. If you name this file `godzilla.info`, then Drupal will recognise your theme as *godzilla*. Every time you make a change to the `.info` file, you must also clear your cache in order to see the changes. There are thirteen values that can be used in the `.info` file but not all of them are required. Drupal will just use default values for those not defined. But there are a couple others that we should include as well.

<p class="no-margin"><strong>name</strong> <em>(required)</em><br> 
Defines the human-readable version of your theme name. This is the name that shows up on the <em>Administration > Appearance</em> screen. Because this serves as a label for your theme, you're allowed to use spaces.</p>
<pre><code class="language-markup">
name = Godzilla is rox
</code></pre>

<p class="no-margin"><strong>description</strong><br>
Optional but recommended to have. This is a brief description of your theme, which shows up below your theme name on the <em>Administration > Appearance</em> screen.</p>
<pre><code class="language-markup">
description = A custom responsive Godzilla-based theme
</code></pre>

<p class="no-margin"><strong>core</strong> <em>(required)</em><br>
Indicates what major version of Drupal the theme is compatible with. If this does not match the version of Drupal installed, the theme will be disabled.</p>
<pre><code class="language-markup">
core = 7.x
</code></pre>

<p class="no-margin"><strong>stylesheets</strong> <em>(required)</em><br>
Allows you to define which stylesheets gets loaded when you enable your theme. Although it's not labeled as required in the official documentation, I would consider it to be because, unless you declare this, Drupal 7 doesn't load any of your stylesheets by default. It will use the default Drupal `style.css`. You can actually specify stylesheets for different media types and media queries, if you need to. Although stylesheets can be placed in sub-directories, it's recommended to keep that to one level only. The file paths are relative to the theme directory. Also, the order which you list the stylesheets here will be the order that they will be loaded in the head of your HTML document.</p>
<pre><code class="language-markup">
stylesheets[all][] = css/styles.css
stylesheets[print][] = css/print.css
stylesheets[screen and (max-width: 480px)][] = css/mobile.css
</code></pre>

<p class="no-margin"><strong>scripts</strong><br>
Define any Javascript files used in your theme. Similar to stylesheets, they are relative to the theme folder as well. FYI, Drupal already comes with jQuery, so no need to add it again here.</p>
<pre><code class="language-markup">
scripts[] = js/scripts.js
</code></pre>

<p class="no-margin"><strong>regions</strong><br>
Optional and will default to the list below if not specified. Regions are what shows up in the <em>Administration > Structure > Blocks</em> screen. If you want to define your own regions, keep in mind that <code>regions[content] = Content</code> <strong>must</strong> be present. Using standard Drupal names for the sidebar regions lets Drupal add sidebar classes to the <code>&lt;body&gt;</code> tag. You can go nuts with naming any other custom regions you want.</p>
<pre><code class="language-markup">
regions[header] = Header
regions[highlighted] = Highlighted
regions[help] = Help
regions[content] = Content
regions[sidebar_first] = Left sidebar
regions[sidebar_second] = Right sidebar
regions[footer] = Footer
</code></pre>

The full list of all options available for the `.info` file can be found [here](https://www.drupal.org/node/171205). A sample `.info` file would look something like this:
<pre><code class="language-markup">
name        = Godzilla is rox
description = A custom responsive Godzilla-based theme
core        = 7.x

stylesheets[all][] = css/styles.css

scripts[] = js/scripts.js

regions[header] = Header
regions[content] = Content
regions[sidebar_first] = Left sidebar
regions[sidebar_second] = Right sidebar
regions[footer] = Footer
</code></pre>

###Template files
<p class="no-margin">The markup of your site is controlled by template files, which use the <code>.tpl.php</code> extension. The way Drupal works is, unless you need something custom, Drupal will load its default templates to generate the HTML mark-up for your site. Most modules comes with their own <code>tpl.php</code> file, which can be overridden by making a copy of it and placing it in a <code>templates</code> folder in your <code>theme</code> folder. Remember folks, <strong>never hack core</strong>. At this point, your theme folder would probably look something like this:</p>
<pre><code class="language-markup">
godzilla/
|
|-- css/
|
|-- godzilla.info
|
|-- img/
|
|-- js/
|
`-- templates/
</code></pre>

The default theme engine for Drupal 7 is [PHPTemplate](https://www.drupal.org/phptemplate), written by [Adrian Rossouw](http://daemon.co.za/). Although the template files are recognised as PHP, they are actually a HTML scaffold that utilise PHP statements and variables to pull dynamic data from the database. So if you're familiar with HTML, you'll be just fine, don't be intimidated by all the `<?php ?>` stuff in there. 

I personally chose to override two template files for my theme, the `html.tpl.php` and the `page.tpl.php`. Quick aside, in order to learn all this, I built my own starter theme called [Clarus](https://www.drupal.org/sandbox/hj_chen/2345293) and now use it to start all my custom Drupal 7 themes. But anyway, as their names suggest, the `html.tpl.php` file serves as the scaffold for the whole HTML document, everything between the `<html>` and `</html>` tags. The `page.tpl.php` controls the markup for the content in the `<body>` of your page. Again, you don't have to rewrite any of these template files if you don't want to, you can just theme using CSS, but then you'll have to follow the default Drupal mark-up structure.

<p class="no-margin">My <code>html.tpl.php</code> file is relatively small. I rewrote this file because I wanted my theme to be HTML5. Drupal provides a lot of variables that you can just call on with a simple <code class="language-php">&lt;?php print $VARIABLE_NAME ?&gt;</code>. No need to write those by hand. Click <a href="https://www.drupal.org/node/1728208">here</a> for the list of all the variables available for use.</p>
<pre class="line-numbers"><code class="language-php">
&lt;?php
/**
 * @file
 * Return the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?>&lt;!DOCTYPE html&gt;
&lt;!--[if lt IE 9]&gt;&lt;script src="&lt;?= base_path().path_to_theme(); ?&gt;/js/html5shiv.js"&gt;&lt;/script&gt;&lt;![endif]--&gt;
&lt;html lang="&lt;?php print $language-&gt;language; ?&gt;" dir="&lt;?php print $language-&gt;dir; ?&gt;"&lt;?php print $rdf_namespaces; ?&gt;&gt;

&lt;head&gt;
  &lt;?php print $head; ?&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;&lt;?php print $head_title; ?&gt;&lt;/title&gt;
  &lt;?php print $styles; ?&gt;
  &lt;?php print $scripts; ?&gt;
&lt;/head&gt;

&lt;body class="&lt;?php print $classes; ?&gt;" &lt;?php print $attributes;?&gt;&gt;
  &lt;div id="skip-link"&gt;
    &lt;a href="#main-content" class="element-invisible element-focusable"&gt;&lt;?php print t('Skip to main content'); ?&gt;&lt;/a&gt;
  &lt;/div&gt;
  &lt;?php print $page_top; ?&gt;
  &lt;?php print $page; ?&gt;
  &lt;?php print $page_bottom; ?&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

If you look at line 26 of my <code>html.tpl.php</code> file, that line <code class="language-php">&lt;?php print $page; ?&gt;</code>, calls the contents of the <code>page.tpl.php</code> file. There are also many variables available for use in this file, and they can be found <a href="https://www.drupal.org/node/1728148">here</a>. For something simple, you can start off with just the page structure.

<pre class="line-numbers"><code class="language-php">
&lt;header class="site-header"&gt;

&lt;/header&gt;

&lt;div class="wrapper"&gt;

  &lt;main class="main" role="main"&gt;
      
  &lt;/main&gt;

  &lt;aside class="sidebar"&gt;

  &lt;/aside&gt;

&lt;/div&gt;

&lt;footer class="site-footer"&gt;

&lt;/footer&gt;</code></pre>

To add content to your page via the Blocks interface, we need to declare regions in the `page.tpl.php` file. Drupal utilises something called [Render Arrays](https://www.drupal.org/node/930760) to output content on your page. Before printing anything to the region, we need to check if there's any content in it at all, so the variable is wrapped in an if statement. Each region is identified by its machine name, which is defined in the `.info` file. I usually wrap the conditional outside the containing element because I don't want empty mark-up if nothing is there.

For page elements that don't belong in any region, they also can be added to the `page.tpl.php` file using the Render API. 

<pre class="line-numbers"><code class="language-php">
&lt;header class="site-header"&gt;

&lt;/header&gt;

&lt;div class="wrapper"&gt;

  &lt;main class="main" role="main"&gt;
    &lt;a id="main-content"&gt;&lt;/a&gt;
    &lt;?php print render($page['content']); ?&gt;
  &lt;/main&gt;

  &lt;?php if ($page['sidebar_first']): ?&gt;
  &lt;aside class="sidebar"&gt;
    &lt;?php print render($page['sidebar_first']); ?&gt;
  &lt;/aside&gt;
  &lt;?php endif; ?&gt;

&lt;/div&gt;

&lt;?php if ($page['footer']): ?&gt;
  &lt;footer class="site-footer"&gt;
    &lt;?php print render($page['footer']); ?&gt;
  &lt;/aside&gt;
&lt;?php endif; ?&gt;</code></pre>
