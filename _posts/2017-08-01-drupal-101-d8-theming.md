---
layout: post
title: "Drupal 101: Getting started with Drupal 8 theming"
date: August 1, 2017
tags: [drupal8, theming]
category: planet-drupal
---
Yes, I've finally got around to digging my mitts into Drupal 8, and building custom themes for Drupal 8. I have this bare-bones starter theme called [Clarus](https://www.drupal.org/sandbox/hj_chen/2345293) that I developed back in the day when I was theming Drupal 7 sites willy-nilly. I thought I'd keep it, and develop a Drupal 8 branch rather than start a new project.

Drupal 8 has undergone quite a significant revamp under-the-hood, and the folder structure has changed quite a bit. Instead of placing your themes in the *sites/all/themes* folder, all user-created themes go into the *themes* folder. Well, that's an upgrade on the intuitive-ness front.

The [documentation for theming Drupal 8](https://www.drupal.org/docs/8/theming) is really good, and you should read that before anything else if you're planning to do this custom theming thing. I generally follow whatever the guide says with a couple tweaks to suit my personal preferences.

## Folder structure

As mentioned, all non-core themes should be placed in the <en>themes</en> folder. Create a new folder with the name of your theme. The guide suggests you put all contrib themes in a subfolder and your custom themes in another, for organisational purposes.

<p class="no-margin">Speaking of organisation, it's best to create some subfolders inside your custom theme folder as well. I use Sass as part of my workflow, so I have an <en>scss</en> folder in there. It's not mandatory.</p>
<pre><code class="language-markup">godzilla/
|
|-- css/
|
|-- img/
|
|-- css/
|
|-- scss/
|
`-- templates/
</code></pre>

## The .info.yml file

A key difference from Drupal 7 is the extensive use of `.yml` for a lot of configuration. Instead of the `.info` file in Drupal 7, we now use a `.info.yml` file, which serves the same purpose, just in a different format. This file goes into the root of your theme folder.

The theme folder and this file should have the same name. Theme names have to be unique, so check that you don't clash with any modules you've installed. Theme names cannot have spaces in them. It's a PHP function thing.

I've used a LOT of Jekyll over the years, so YAML is not a problem for me. But if you're completely new to YAML, try reading some documentation first. Here's a [cheatsheet-style summary](https://learnxinyminutes.com/docs/yaml/) and [a basic introduction](https://github.com/Animosity/CraftIRC/wiki/Complete-idiot%27s-introduction-to-yaml). Remember that tabs are not allowed in YAML, only use spaces, and the rule of 2-space indentation must be strictly followed.

Every time you make a change to the `.info.yml` file, you must also clear your cache to see the changes. There are seventeen key/value pairs that can be used to provide information and configuration options for your theme. Only three are required, though some of the optional ones are very useful to include as well.

<p class="no-margin"><strong>name</strong> <em>(required)</em><br> 
Defines the human-readable version of your theme name. This is the name that shows up on the <em>Administration > Appearance</em> screen. Because this serves as a label for your theme, you're allowed to use spaces, but put them in quotes if you do.</p>
<pre><code class="language-yaml">name: 'Godzilla is rox'</code></pre>

<p class="no-margin"><strong>type</strong> <em>(required)</em><br>
For the purposes of theming, this should always be set to <em>theme</em>.</p>
<pre><code class="language-yaml">type: theme</code></pre>

<p class="no-margin"><strong>description</strong><br>
Optional but recommended to have. This is a brief description of your theme, which shows up below your theme name on the <em>Administration > Appearance</em> screen.</p>
<pre><code class="language-yaml">description: 'A custom responsive Godzilla-based theme'</code></pre>

<img srcset="{{ site.url }}/images/posts/d8-theming/info-480.jpg 480w, {{ site.url }}/images/posts/d8-theming/info-640.jpg 640w, {{ site.url }}/images/posts/d8-theming/info-960.jpg 960w, {{ site.url }}/images/posts/d8-theming/info-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/d8-theming/info-640.jpg" alt="Theme selection" />

<p class="no-margin"><strong>core</strong> <em>(required)</em><br>
Indicates what major version of Drupal the theme is compatible with. If this does not match the version of Drupal installed, the theme will be disabled.</p>
<pre><code class="language-yaml">core: 8.x</code></pre>

<p class="no-margin"><strong>libraries</strong><br>
I don't really understand why this is optional, because it seems quite mandatory to me. Anyway, instead of defining stylesheets and scripts like we did in Drupal 7, these assets are now defined in a separate <code>THEME_NAME.libraries.yml</code> file, and reference entries in that file here.</p>
<pre><code class="language-yaml">libraries:
  - godzilla/global-styling</code></pre>

This concept of an asset library is based on the premise that CSS and JS for modules and themes are all loaded via the same system. Part of improving the performance of Drupal 8 is to have assets load only if you tell them to, so not everything is loaded on every page. 

For this bit, I strongly recommend [reading the documentation](https://www.drupal.org/node/2216195), because it goes really in-depth on how this new asset library system works. Here's how a `THEME_NAME.libraries.yml` file looks like:
<pre><code class="language-yaml">global-styling:
  version: 1.x
  css:
    theme:
      css/styles.css: {}
  js:
    js/scripts.js: {}</code></pre>

<p class="no-margin"><strong>regions</strong><br>
Optional and will default to the list below if not specified. Regions are what shows up in the <em>Administration > Structure > Blocks</em> screen. Refer to the <a href="https://www.drupal.org/node/2469113">official documentation</a> for a comprehensive explanation on defining regions in your theme.</p>
<pre><code class="language-yaml">regions:
  sidebar_first: 'Left sidebar'
  sidebar_second: 'Right sidebar'
  content: 'Content'
  header: 'Header'
  primary_menu: 'Primary menu'
  secondary_menu: 'Secondary menu'
  footer: 'Footer'
  highlighted: 'Highlighted'
  help: 'Help'
  breadcrumb: 'Breadcrumb'</code></pre>

<p class="no-margin"><strong>base theme</strong><br>
The documentation recommends using <em>Classy</em> or <em>Stable</em> as a base theme because then you get all the pre-defined CSS classes written into those themes. If you're a sucker for punishment, like me, and just want to have absolute control over all your CSS classes, you can always set this to <code>false</code>, then your theme will have ZERO CSS classes. From there, you can add Twig templates to customise your CSS classes exactly the way you want to.</p>
<pre><code class="language-yaml">base theme: OTHER_THEME</code></pre>

The full list of all options available for the `.info.yml` file can be found [here](https://www.drupal.org/docs/8/theming-drupal-8/defining-a-theme-with-an-infoyml-file). A sample `.info.yml` file would look something like this:
<pre><code class="language-yaml">name: 'Godzilla is rox'
type: theme
description: 'A custom responsive Godzilla-based theme.'
core: 8.x
base theme: false
libraries:
  - godzilla/global-styling
regions:
  header: Header
  content: Content
  footer: Footer</code></pre>

## Twig template files

[PHPTemplate](https://web.archive.org/web/20150906003104/https://www.drupal.org/phptemplate) has now been replaced by [Twig](https://twig.symfony.com/), so instead of `*.tpl.php` template files, they are now all `*.html.twig` template files. But the underlying mechanism of overriding templates with increasing specificity (based on naming convention) still apply in the world of Drupal 8. How this works is [covered right here](https://www.drupal.org/docs/8/theming/twig/working-with-twig-templates).

I'm not going to repeat the documentation, but I have to mention the most useful feature my noob ass fell in love with. Twig debugging! But before that, I hope you have a `settings.local.php` file already, because that's good practice, folks. Drupal 8 has a pretty aggressive caching strategy, which is great for performance, but a bit of a hassle during development. But that's what development settings are for.

First of all, we need Drupal to recognise your local development settings file. Check your `settings.php` file for these lines, and make sure they are uncommented:
<pre><code class="language-php">if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}</code></pre>

Now, check in your `settings.local.php` file. If you made a copy from the `example.settings.local.php` file in the *sites* folder, then you should see this line somewhere in there:
<pre><code class="language-php">$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';</code></pre>

Make sure it's uncommented. This tells Drupal to recognise the development services configuration. If you can't find it, add it in there. The `development.services.yml` file comes by default and should be in your *sites* folder, you shouldn't have to create it.

The default `development.services.yml` file looks like this:
<pre><code class="language-yaml"># Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory</code></pre>

You need to add some twig configuration to the parameters block like so:
<pre><code class="language-yaml"># Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto-reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory</code></pre>

This has activated twig debug mode, which means that if you check DevTools, there will be a bunch of comments that tell you which template is loaded as well as the file name suggestions you can use. This is pretty helpful for when you realise you need to add or change classes during the course of developing your theme.

<img srcset="{{ site.url }}/images/posts/d8-theming/twigdebug-480.jpg 480w, {{ site.url }}/images/posts/d8-theming/twigdebug-640.jpg 640w, {{ site.url }}/images/posts/d8-theming/twigdebug-960.jpg 960w, {{ site.url }}/images/posts/d8-theming/twigdebug-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/d8-theming/twigdebug-640.jpg" alt="Theme selection" />

## Now you can start CSS-ing

Like I mentioned before, those of you who write plain vanilla CSS are free to start theming away. If you happen to use a workflow that involves Sass and gulp, I cover that bit on my updated [theming Drupal with gulp post]({{ site.url }}/blog/drupal-101-theming-with-gulp-again/). Oh, and don't forget to take a screenshot of your theme, name it `screenshot.png` and place it in the root of your theme folder. Just makes things look nicer. Happy Drupal-ing!
