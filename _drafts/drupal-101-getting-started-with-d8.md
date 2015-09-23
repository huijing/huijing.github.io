---
layout: post
title: "Drupal 101: Getting started with Drupal 8"
date: September 6, 2015
tags: [drupal8, site-building]
category: planet-drupal
---

As of time of writing, Drupal 8 only has 6 critical issues outstanding. For people who may not be entirely familiar with the software development process, understand that it's not like we start off with a fixed pool of issues which gets smaller as issues are resolved. For a relatively large project like Drupal, on-going development will inevitably introduce new issues. But if you take a look at the issue logs, the issues have been steadily trending downward since we started, and we're really close to a release candidate already.

I first took a peek at Drupal 8 over a year ago when it was in ___ stage just out of curiosity. At that time in my career, I was barely getting the hang of Drupal 7, so I didn't really explore very much beyond clicking around the interface and trying to create some content. Right now, Drupal 8 is in beta-14, and looking pretty good to me. I figured it'd be a good time to go through the process of building a Drupal 8 site and documenting the experience. Because, why not?

###Installing Drupal 8
1. **Download the required Drupal 8 files**  
    There are two ways to do this. You can download the files from [Drupal.org](https://www.drupal.org/node/3060/release) and extract them into your local development manually. My preferred method is via Drush. If you're not using Drush, I highly suggest it. Instructions for getting up and running with Drush can be found [here]({{ site.url }}/blog/team-drupal-development#installing-drush). Make sure you're using at least version 7 as Drupal 8 doesn't work with earlier versions of Drush.

    <p class="no-margin">Navigate to wherever you store your local development sites and run the following:</p>
    <pre><code class="language-bash">drush dl drupal-8 --select</code></pre>
    I suppose you could go for the dev version, but the latest beta will be fine as well.
2. **Run the install script**  
    Navigate to the base url of your site and you should see something like this:

    <picture>
      <source media="(min-width: 720px)" srcset="{{ site.url }}/images/posts/drupal-8/install-lg-1248.jpg 2x, {{ site.url }}/images/posts/drupal-8/install-lg-640.jpg 1x" sizes="60vw">
      <source srcset="{{ site.url }}/images/posts/drupal-8/install-sm-766.jpg 2x, {{ site.url }}/images/posts/drupal-8/install-sm-480.jpg 1x" sizes="90vw">
      <img src="{{ site.url }}/images/posts/drupal-8/install-sm-480.jpg" alt="Install Drupal 8">
    </picture>

    The entire process doesn't deviate from Drupal 7 very much, and almost all the fields to be filled are exactly the same. It's just a slightly different look and feel in terms of UI. If you get a bunch of warnings at the *Verify requirements* screen because of permissions, you'll have to go through the next three steps.
3. **Adjust folder permissions for install**  
    Drupal needs to modify the `settings.php` and `services.yml` file during installation. It also needs to be able to create the `files` folder. Modify the permissions of the *sites > default* folder so Drupal can write to it:
    <pre><code class="language-bash">chmod a+w sites/default</code></pre>
    This command changes the permissions on that folder to allow everyone to write to it.
4. **Create the services.php and services.yml files**  
    According to the [official documentation](https://api.drupal.org/api/drupal/core!INSTALL.txt/8), Drupal should create these files but if it can't it will prompt you to do so. If you do get this prompt, make a copy of the `default.services.yml` and the `default.settings.php` file as follows (*assuming you're in the sites > default folder already*):
    <pre><code class="language-bash">cp default.services.yml services.yml</code></pre>
    <pre><code class="language-bash">cp default.settings.php settings.php</code></pre>
    <p class="no-margin">Modify the permissions of the settings.php file so Drupal can write to it during the setup process.</p>
    <pre><code class="language-bash">chmod a+w settings.php</code></pre>
5. **Adjust file and folder permissions**  
    If you had to go through steps 3 and 4, then when the site is done installing, you'll most likely get a warning message like so:

    <picture>
      <source media="(min-width: 720px)" srcset="{{ site.url }}/images/posts/drupal-8/permissions-lg-1280.jpg 2x, {{ site.url }}/images/posts/drupal-8/permissions-lg-640.jpg 1x" sizes="60vw">
      <source srcset="{{ site.url }}/images/posts/drupal-8/permissions-sm-738.jpg 2x, {{ site.url }}/images/posts/drupal-8/permissions-sm-480.jpg 1x" sizes="90vw">
      <img src="{{ site.url }}/images/posts/drupal-8/permissions-sm-480.jpg" alt="Permissions">
    </picture>

    Resolve the issue by changing the permissions on those files back to a secure state:
    <pre><code class="language-bash">chmod go-w sites/default/settings.php</code></pre>
    <pre><code class="language-bash">chmod go-w sites/default
6. **Optional setup for local development**  
    This is optional but it's really good practice to do so. You can make a local settings.php file to distinguish server configurations and other settings between your local development environment and your production environment. 
    Make a copy of the `settings.php` file and name it `settings.local.php`. On the `settings.php` file, uncomment these lines and move them to the bottom of the file:
    <pre><code class="language-php"> # if (file_exists(__DIR__ . '/settings.local.php')) {
    #   include __DIR__ . '/settings.local.php';
    # }</code></pre>
    <p class="no-margin">On the <code>settings.local.php</code> page, if your site is drupal8.dev, for example, set up your trusted host patterns.</p>
    <pre><code class="language-php">$settings['trusted_host_patterns'] = array(
      '^drupal8\.dev$',
      '^www\.drupal8\.dev$',
      '^localhost$',
    );</code></pre>

<p class="no-margin">Your new Drupal 8 site should be ready for tinkering. Just double check everything is set up correctly by reviewing the <em>Status report</em> page. There shouldn't be any warnings or errors. If so, you gotta resolve them. The good part about using Drush to install Drupal 8 is that you can update Drupal with this handy command:</p>
<pre><code class="language-bash">drush up drupal</code></pre>
<p class="no-margin">You can also check for updates for all modules, including core, with this command:</p>
<pre><code class="language-bash">drush pm-update</code></pre>
If you don't want to update everything at the same time, just cancel the command and update each module individually.

##UI differences from Drupal 7

