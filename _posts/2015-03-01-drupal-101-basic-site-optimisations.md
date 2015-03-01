---
layout: post
title: "Drupal 101: Basic site optimisations"
date: March 1, 2015
tags: [drupal, performance]
category: planet-drupal
---
It has been [statistically proven](https://blog.kissmetrics.com/loading-time/?wide=1) that nobody likes a slow website. We have all moved on from the days when you'd patiently wait for a page to load over that lovely dial-up modem. Nowadays, people want their pretty content, and they want it loaded instantaneously (or at most by 2 blinks).

One very basic concept I learnt about website performance is: minimise requests to your server. This makes perfect sense to me. Say I had a shopping list with 12 items. If I went to the general store and asked the shopkeeper for each item separately, he'd have to make 12 trips and most likely end up being very pissed at me. It's much more efficient and faster to get all my stuff in a single trip. So we want the server to send over everything the browser needs to display your website in its full glory in as few trips as possible.

Your new favourite word for today is cache. For users to see one of your pages on their browsers, the browser has to ask the server hosting your website for it. Caching just tells the browser to hold onto their copy of their asset for a while instead of asking for it every time it's required. Loading from cache doesn't require a request to the server. Less requests to the server equals faster page load.

There are a myriad of tools and checklists out there that can point you in the right direction when it comes to optimising your Drupal site. [Tim Millwood's](https://twitter.com/timmillwood) article on the [Top 15 Drupal performance tips](http://www.creativebloq.com/web-design/drupal-performance-tips-9122837) is a good one. I followed most of them to optimise my sites but always wondered how these actions actually worked. So here goes, the newbie's guide to Drupal site optimisation.

###General good practices
- **Keep core and modules up-to-date**
    + Although this seems like a no-brainer, I also understand that sometimes updating a module may OCCASIONALLY break something (trust me, I've been there). My advice? Always test on your local development environment before deploying.
- **Always disable and uninstall modules before removing them**
    + A lot modules do write to the database so if you remove the module files without properly disabling and uninstalling the module first, your site has a very high chance of crashing.
    + It's really not hard. You can disable modules from <code class="language-bash">admin/modules</code> and uninstall them from <code class="language-bash">admin/modules/uninstall</code>.
    + You can also use drush (my preferred method)
        <pre><code class="language-markup">drush dis [MODULE_NAME] -y
drush pm-uninstall [MODULE_NAME] -y</code></pre>
    + If you did remove your module files without disabling them first, AND your website didn't crash, well, you got lucky. But we still have to fix things. [Clean missing modules](https://www.drupal.org/project/clean_missing_modules) provides a drush command to clean up your mess.

###Drupal performance options
This is available out-of-the-box with any Drupal installation. Go to <code class="language-bash">admin/config/development/performance</code> and you will see these options.

<img src="{{ site.url }}/images/posts/drupal-performance.jpg" alt="Drupal performance settings"/>

- **Cache pages for anonymous users**
    - When an anonymous user visits the site, the generated HTML will be stored in the cache table of the Drupal database.
    - This data will be displayed to all other anonymous users.
    - The page caches will not be cleared unless you say so.
    - This will override any block cache settings for anonymous users, which brings us to the next point.
- **Cache blocks**
    - The default block behaviour in Drupal is no cache, so enabling this will cache blocks for both authenticated and anonymous users.
    - If block caching is enabled without enabling page cache, then the block cache settings will be used.
    - Given the default is none, you can use the [Block Cache Alter](https://www.drupal.org/project/blockcache_alter) module to change this to something more sensible.

*Disclosure note: I had a hard time finding documentation on exactly how block caching works in Drupal 7 so please let me know if I'm wrong*

- **Minimum cache lifetime**
    - This value applies for all cached objects.
    - It tells the system to show cached content for the designated amount of time.
    -  If this value is set to ten minutes, the new content you create on your site will not appear until ten minutes later.
    -  For new content to appear, the set amount of time must have elapsed and a cache clearing function must be run.
    -  If traffic on your site is not high, it's better to leave it as none.
- **Expiration of cached pages**  
    - This sets the header Cache Control to <code class="language-bash">public</code> and the maximum age value in the header to the value selected in the dropdown.
    - This header will tell the caching system to serve their copy of the pages until maximum age, after which, the caching system will check back with the server to see if anything has changed.
- **Aggregate and compress CSS files**
    + There are numerous CSS files in a working Drupal site, be it from themes, from modules etc. and this option combines all of them into one single file with white spaces removed.
    + Remember the general store example? One request is faster than many requests.
    + Point to note is that if your CSS contains absolute URLs, this may break your site as the URL will not be handled correctly in the combined file. Use relative URLs to be safe.
- **Aggregate Javascript files**
    + Similar to aggregation for CSS, this option combines all the Javascript files from your theme and modules, again, to reduce the number of requests to the server.

Usually, it's best to just check everything here. 

###Core modules to avoid
- Database logging (dblog)
    + dblog will write all log messages to the database. Keyword here is all. Error messages, write. Debugging information, write. Module generated log messages, write. You get the picture.
    + This results in lots of database entries every time a page loads. The busier the database is, the slower your site will be.
    + This module is enabled by default for Drupal 7. Disable it and use syslog instead. 
- Statistics (statistics)
    + This module tracks site statistics on page views and site usage.
    + Unfortunately, it writes all these statistics to the database, and again, results in performance taking a hit.
    + Even Mr Millwood (mentioned at the very top of this post), the maintainer of this module, suggests you use Google Analytics instead.
    + This module is NOT enabled by default, and so just leave it be.
- PHP filter (php)
    + Although there may be certain occasions when you need to have PHP code in your content, most of the time (if not all), you can put that code in a custom module.
    + Putting PHP code in your content means it has to be retrieved from the database before it can be executed, so it makes more sense to bypass this step by writing that code to a custom module. 
    + Your database has better things to do than to fetch PHP code for execution.

That about covers all the low hanging fruit for improving the performance of your site. There is definitely more that can be done, but even if you stop here, you should be able to see performance improvements already. 
