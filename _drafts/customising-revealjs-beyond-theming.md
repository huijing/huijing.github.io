---
layout: post
title: "Customising Reveal.js beyond creating a personalised theme"
date: Jan 23, 2019
tags: [design, css]
---
As I start preparing for a couple talks I will be giving for 2019, I realised that my first talk for 2019 (at CSSConf China) will end up being my 50<sup>th</sup> slidedeck built with Reveal.js. I'd used Reveal.js since I started giving talks, and [wrote about the basics back then]({{ site.url }}/blog/revealjs-and-github-pages/).

After 50 iterations, my slides these days are pretty heavily customised so I thought it'd be nice to write up some of the things I do to them. With them. Whatever.

In that earlier article, I included a very brief paragraph on creating your own theme. Although Reveal.js has been updated multiple times over the past 3 years, the basic gist of things remain the same. I still stand by my original suggestion to delete the bundled themes, and customise off `simple.scss`.

As of v3.7.0, the `css` folder looks something like this:

<pre><code class="language-markup">css/
|-- print/
|   `-- …
|-- theme/
|   |-- source/
|   |   `-- …
|   `-- template/
|       |-- mixins.scss
|       |-- settings.scss
|       `-- theme.scss
`-- reveal.scss</code></pre>

There are a number of preset theme files and I suggest using `simple.scss` as the base for your custom theme. Within the `template` folder there are 3 `scss` files contain base styles and variables that are imported into the theme stylesheets in the `source` folder.

Note that what I'm describing is the structure that this framework provides out the box. You are completely free to change things up but you *may* need to modify the `Gruntfile.js` because that's what handles the compilation of source files.

This is what my custom theme file looks like:

```css
/**
 * Custom theme for Reveal.js presentations.
 * Copyright (C) 2018 Chen Hui Jing, https://www.chenhuijing.com/
 */

// Default mixins and settings -----------------
@import '../template/mixins';
@import '../template/settings';
// ---------------------------------------------

// Include theme-specific fonts
@import url('../../lib/font/magnetic-pro/magnetic-pro.css');
@import url('../../lib/font/magnetic-pro-black/magnetic-pro-black.css');

// Theme template ------------------------------
@import '../template/theme';

// ---------------------------------------------
// Customised styles for this presentation
.reveal {
  …
}
```

The presentation itself by default loads 2 stylesheets, `reveal.css` and `THEME.css`, the latter being a customised theme file generated from `.scss` files from the `source` folder. These stylesheets are referenced in the `index.html` file like so:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Your awesome presentation</title>
    <meta name="description" content="A short description of what the talk is about">

    <link rel="stylesheet" href="css/reveal.css">
    <link rel="stylesheet" href="css/theme/jing.css">
    <link rel="stylesheet" href="lib/css/zenburn.css">
```

If Sass is not your thing, then you can add your own custom CSS file and reference it directly as well. Reveal.js is highly customisable.

## Creating custom layouts

Now that basic setup is somewhat covered, I'm moving on to some of the fun stuff I tend to do with my presentations. By default, the content on the slides are centred on the page, but now that we have Grid, placing items on the page has become much easier.

Taking a cue from presentation software which generally offers a number of templates to choose from for laying out different types of slides, we can create several layouts that we apply via CSS classes instead. For example, I have a layout class for a 2-column layout that looks like this:

```css
.l-double {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

## Live coding CSS

One of the advantages of using an HTML framework for the presentation is the ability to add some live-coding to the slides themselves. I “borrowed” this technique from [Una Kravets](https://una.im/) after seeing her slides from [The Power of CSS Talk](https://codepen.io/una/pen/Wjvdqm).

  