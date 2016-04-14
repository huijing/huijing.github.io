---
layout: post
title: "Drupal 101: Setting up i18n"
date: Apr 13, 2016
tags: [drupal7, i18n, site-building]
category: planet-drupal
---
One of the best things about Drupal is its robust multilingual support. If you need to build a website that supports multiple languages, Drupal should definitely be an option to consider.

<p class="no-margin"><strong>Required modules</strong></p>
<ul>
<li class="no-margin">Locale <em>(core module)</em></li>
<li class="no-margin">Content translation <em>(core module)</em></li>
<li class="no-margin"><a href="https://www.drupal.org/project/i18n">Internationalization</a></li>
<li><a href="https://www.drupal.org/project/variable">Variable</a><em> (dependency for Internationalization)</em></li>
</ul>

###Making your site multi-lingual
1. Install and enable the required modules.
    <pre><code class="language-bash">drush en i18n i18n_node -y</code></pre>
    This will enable i18n and its dependencies. The i18n module comes with a number of sub-modules, which you can enable based on your requirements. For now, just enable `i18n_node` for content translation. Go [here](http://evolvingweb.ca/story/drupal-7-multilingual-whats-new-i18n) for a comprehensive write-up of all the sub-modules.

2. Go to `admin/config/regional/language` and add the languages you want to support. You can select from a list of predefined languages as well as add your own custom language.
    <img src="{{ site.url }}/images/posts/sfo/add-language.jpg" alt="Add language"/>


###Further reading
<ul>
<li class="no-margin"><a href="http://evolvingweb.ca/story/drupal-7-multilingual-whats-new-i18n">Drupal 7 Multilingual: What's new in i18n</a></li>
<li><a href="http://www.garfieldtech.com/blog/mvc-vs-pac">MVC vs. PAC</a></li>
</ul>
