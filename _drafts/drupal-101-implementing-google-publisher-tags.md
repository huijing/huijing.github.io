---
layout: post
title: "Drupal 101: Implementing Google Publisher Tags"
date: March 09, 2015
tags: [drupal, site-building]
category: planet-drupal
---
Ads are an inevitable part of the web. I've been listening to the [Internet History Podcast](http://www.internethistorypodcast.com/) by [Brian McCullough](https://twitter.com/brianmcc) a lot lately and there's an entire chapter (the podcast is divided into chapters each covering a theme) dedicated to search engines and advertising. Make sure to catch the supplemental interview episodes of Chapter 4, as those shed a lot of light about why the web turned out the way it did (with so many ads). 

At some point, somebody is going to ask you to integrate ads into the site you're building. There are plenty of ways to do this, and what I'm going to cover is just one of those methods. My use case is for ads which are served using [Google Publisher Tags (GPT)](https://support.google.com/dfp_sb/answer/1649768?hl=en&ref_topic=4409239). Now, Drupal has a [Google Publisher Tags](https://www.drupal.org/project/gpt) module, but as our goal was to replace an existing ad integration to use GPT, we did not use that module.

What we had to work with was a custom ad script given to us by a third-party agency responsible for handling the ad implementation. The client's requirement was to have responsive ads displayed according to the screen size of the device being viewed on.

The use case here involved creating custom blocks for each of our three ad types, so they could be easily placed anywhere on the site. Each block could then be styled as necessary (for positioning and stuff). This functionality would be written in a custom module.



###Creating the custom module
Here's the [official documentation](https://www.drupal.org/node/1074360), which is very comprehensive might I add, for creating your own module. This is the condensed version specific to this use case.

1. Create a new folder in the modules folder of your Drupal installation folder like so: <code class="language-bash">sites/all/modules/gptad</code>.
2. <p class="no-margin">Create the file <code class="language-bash">gptad.info</code> in the <code class="language-bash">gptad</code> folder.</p>  
    <pre><code class="language-clike">
name = GPT ads
description = Custom module for implementing GPT ads as blocks.
core = 7.x</code></pre>

    <ul>
    <li class="no-margin"><strong>name:</strong> This identifies your module on the modules administration page.</li>
    <li class="no-margin"><strong>description:</strong> This explains what your module does, viewable on the modules administration page as well.</li>
    <li><strong>core:</strong> This is the version of Drupal your module works with. Use 7.x for Drupal 7.</li>
    </ul>
    Refer to [Writing module .info files](https://www.drupal.org/node/542202) for all the additional properties you can include in this file. 
3. <p class="no-margin">Create the file <code class="language-bash">gptad.module</code> in the <code class="language-bash">gptad</code> folder.</p>
    <pre><code class="language-php">
&lt;?php</code></pre>
    The functionality of the module will be defined in this file.

###Creating the ad blocks
If you use [Sublime Text](http://www.sublimetext.com/), I highly suggest installing the [Drupal Sublime Text](https://github.com/robballou/drupal-sublimetext) plugin. It provides autocompletion for Drupal snippets.

1. Define the block on the block administration interface.
    We can define the block's properties with the [hook_block_info](https://api.drupal.org/api/drupal/modules%21block%21block.api.php/function/hook_block_info/7) function.
    <pre><code class="language-php"> /**
 &ast;  Implements hook_block_info
 */
function gptad_block_info() {
  // Define blocks for each ad type
  $custom_blocks = array(
      'ad_01' => 'Banner (728x90) Ad Block',
      'ad_02' => 'Sidebar (300x250) Ad Block',
      'ad_03' => 'Mobile (320x100) Ad Block',
  );&NewLine;
  // All blocks will be initially hidden but can be enabled through panels or context
  foreach ($custom_blocks as $name => $title) {
       $blocks[$name] = array(
         'info' => t($title),
         'status' => TRUE,
         'region' => -1,
         'weight' => 0,
         'visibility' => BLOCK_VISIBILITY_NOTLISTED,
       );
  }
  return $blocks;
}</code></pre>
2. Adding configuration options to your block
    We are going to add a *feed code* field which allows



###Add the GPT script to the head of your webpage

<pre><code class="language-javascript">
&lt;!-- Begin GPT --&gt;
  &lt;script type='text/javascript'&gt;
    var gptadslots=[];
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    (function(){ var gads = document.createElement('script');
      gads.async = true; gads.type = 'text/javascript';
      var useSSL = 'https:' == document.location.protocol;
      gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(gads, node);
    })()
  &lt;/script&gt;
  &lt;!-- End: GPT --&gt;</code></pre>
