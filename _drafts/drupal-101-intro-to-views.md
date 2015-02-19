---
layout: post
title: "Drupal 101: Introduction to views"
date: February 19, 2015
tags: [drupal, site-building]
---
[Views](https://www.drupal.org/project/views) is an extremely popular Drupal module. As of time of writing, it has been downloaded 6,275,549 times and reported to be used in 876,607 sites. It's so popular, in fact, that it has been included in core for the Drupal 8. So why is Views such an essential module?

If you're not one of the 6,275,549 people who downloaded Views, or if you did but somehow just couldn't grok it and just uninstalled it again, you may be wondering what the fuss is all about. Fact is, I almost fell into the latter category. Even though using Views is pretty intuitive to me now, I can still remember when it felt as complicated as trying to land Curiosity on Mars.

My 3-word explanation of Views is: Views make lists. That's essentially what people use Views for. All the content created on Drupal is stored in a database, and Views allows us to filter and pull selected content from that database and display it in the form of a list.

Let's start off by installing this module. You can download it from the [Views project page](https://www.drupal.org/project/views) on Drupal.org. Refer to [Installing modules (Drupal 7)](https://www.drupal.org/documentation/install/modules-themes/modules-7) if you need help installing Drupal modules. As there is a dependency on the [Chaos Tools Suite](http://drupal.org/project/ctools) or CTools, you'll have to install that module too. You have to enable the following 3 modules to use Views:

- Views
- Views UI
- Chaos Tools Suite

If you use [Drush](https://github.com/drush-ops/drush), use the following command to download and enable Views:
<pre><code class="language-bash">
drush dl views
drush en views views_ui -y
</code></pre>
This will install and enable CTools for you automatically.

Go to the Views administration page and you will see a list of Views that come out of the box with the module. They will all be greyed out as they are disabled by default. The only one that I actually use is Taxonomy Term. Most of the time I create my own Views. 

