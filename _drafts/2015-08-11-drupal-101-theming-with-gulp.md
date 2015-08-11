---
layout: post
title: "Drupal 101: Theming Drupal with Gulp"
date: August 11, 2015
tags: [theming, drupal, workflow]
category: planet-drupal
---
I still remember the first Drupal 7 theme I built. It was for the [Singapore Gastric Cancer Consortium website]({{ site.url }}/blog/the-one-i-cut-my-teeth-on/), and at the time I barely knew my way around HTML and CSS. I used the [Zen](https://www.drupal.org/project/zen) theme as my starter theme, and unknowingly wrote my CSS in `.scss` files without realising the distinction. I was a little bit confused to why I needed to install a software called Codekit to make everything work but was too busy trying to get the theme up and running to worry about it at the time.

##Let's talk about that thing called Sass
After I finished up with that project, I took the time to understand exactly what was going on. That's when I learned what Sass was. Sass, like CSS, is a stylesheet language. It was developed as part of the HAML markup language, but has since grown into its own. Sass was invented by [Hampton Catlin](http://www.hamptoncatlin.com/) in 2006. [Natalie Weizenbaum](https://twitter.com/nex3/), the primary designer and developer of Sass, and [Chris Eppstein](http://chriseppstein.github.io/) are the main contributors to the Sass language. The full Sass documentation can be found [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

Sass extends what CSS can do, by introducing useful features such as variables, nesting, mixins and so on. Browsers, however, only understand CSS so the Sass files have to be compiled into CSS for it to serve its purpose. Sass files come in two different syntaxes, Sass and <abbr title="Sassy CSS">SCSS</abbr>, both are currently supported but SCSS is the primary syntax. SCSS is exactly the same as CSS, so renaming any `.css` file to `.scss` works perfectly fine.

Sass originated as an open-source project built in Ruby. You can check out the source code [here](https://github.com/sass/sass). There are many ways you can get up and running with Sass, either from a GUI application or simply the command line. The official documentation for [installing Sass](http://sass-lang.com/install) is pretty comprehensive. The gist of all this is, in order to use Sass in your projects, the Sass files have to be compiled into CSS files first. [Dan Cederholm](http://simplebits.com/) wrote a great article about [Why Sass](http://alistapart.com/article/why-sass) on A List Apart. He describes how Sass simplifies and streamlines the stylesheet authoring process. 

Personally, the Sass functionalities I make use of most are variables and mixins. As well as the occasional for-loop. If you want to see a true Sass pro, [Hugo Giraudel](http://hugogiraudel.com/) is your man. He does a lot of amazing things with Sass and you should check out his [blog](http://hugogiraudel.com/blog/) and all his various [projects](http://hugogiraudel.com/projects/).
