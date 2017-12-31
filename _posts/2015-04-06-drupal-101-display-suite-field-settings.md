---
layout: post
title: "Drupal 101: Customising field markup with Display Suite"
date: April 06, 2015
tags: [drupal7, site-building]
category: planet-drupal
---
A minor complaint I often have about Drupal is the mess of markup it generates. Don't get me wrong, there are times when all those default classes help when it comes to styling, but there are also times when there is so much nesting it puts Inception to shame. (This is a repeat joke, excuse me if you've heard me mention it before.)

This post actually came about because I was trying to include using Display Suite to set up fields as an optional step in the [alternative method for accordions]({{ site.url }}/assets/blog/drupal-101-alternative-accordion/) post. However, that step ended up being so ridiculously long it warranted its own post.

1. Install Display suite.
    <pre><code class="language-bash">drush dl ds -y</code></pre>
2. Enable Display Suite, Display Suite Extras and Display Suite UI.
    <pre><code class="language-bash">drush en ds ds_extras ds_ui -y</code></pre>
3. Enabling Display Suite Extras allows you to customise field displays. If you go to <code class="language-bash">admin/structure/ds</code>, you should see an *Extras* section in the top right corner. Click on that, and check *Enable Field Templates*. 
    
    You can set the default field template for all fields on all your content types using Display Suite here. Unless you're certain you don't want any of Drupal's default markup, I recommend sticking to *Drupal defaults* here and customising each field when you need to.
    <img src="{{ site.url }}/assets/images/posts/field-template/ds-extras.jpg" alt="Turn on display suite"/>
4. Navigate to the *Manage display* tab of a content type you want to use Display Suite with. Activate the display suite settings for your content type by choosing a layout and click Save. I'm using <em>One column</em> for this example.
    <img src="{{ site.url }}/assets/images/posts/maps/display-suite.jpg" alt="Turn on display suite"/>
5. Upon saving, you should now see *Field template* options for your fields.
    <img src="{{ site.url }}/assets/images/posts/field-template/ds-field-settings.jpg" alt="DS field template"/>
6. Click on the gear icon to reveal the field template settings. You have four options here, and all of them come with the option to hide the label colon:
    - Drupal default: The classic Drupal markup, deep and nested, just the way it's always been.
    <img src="{{ site.url }}/assets/images/posts/field-template/drupal-default.jpg" alt="Drupal default"/>
    - Full reset: For people who hate wrappers.
    <img src="{{ site.url }}/assets/images/posts/field-template/full-reset.jpg" alt="Full reset"/>
    - Minimal: Gives you one neat wrapper. I kind of like this option.
    <img src="{{ site.url }}/assets/images/posts/field-template/minimal.jpg" alt="Minimal"/>
    - Expert: For people who know exactly what they want. Has all the options from Drupal defaults for you to tweak.
    <img src="{{ site.url }}/assets/images/posts/field-template/expert.jpg" alt="Expert options"/>

    So many options available! If you require your field to be of a certain HTML class, or if you want full control over additional HTML wrappers, this is your option. Prefix and suffix options included.
    <img src="{{ site.url }}/assets/images/posts/field-template/expert-2.jpg" alt="Expert"/>

As someone who builds a lot of custom Drupal 7 themes, the Display Suite field template customisation options have proven extremely valuable to my styling efforts. Much better than filling up your *templates* folder with field.tpl.php files (please don't do that, just...don't.)
