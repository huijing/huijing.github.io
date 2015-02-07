---
layout: post
title: "Drupal 101: Optimising site performance"
date: February 06, 2015
tags: [drupal, performance]
---
It has been statistically proven that nobody likes a slow website. We have all moved on from the days when you'd patiently wait for a page to load over that lovely dial-up modem. Nowadays, people want their pretty content, and they want it loaded instantaneously (or at most by 2 blinks). 

There are a myriad of tools and checklists out there that can point you in the right direction when it comes to optimising your Drupal site. I followed most of them to optimise my sites but always wondered how these actions actually worked. So here goes, the newbie's guide to Drupal site optimisation.

###Drupal performance options
This is available out-of-the-box with any Drupal installation. Go to <code class="language-bash">admin/config/development/performance</code> and you will see these options.

<img src="/images/posts/drupal-performance.jpg" alt="Drupal performance settings"/>

You'll see a lot of instances of the word cache. For users to see one your pages on their browsers, the browser has to ask the server hosting your website for it. Caching just tells the requester to hold onto their copy of their asset for a while instead of asking for it every time it's required.

- Cache Pages for anonymous users
    - When an anonymous user visits the site, the generated HTML will be stored in the cache table of the Drupal database.
    - This data will be displayed to all other anonymous users.
    - The page caches will not be cleared unless you say so.
    
- Expiration of cached pages  
    - This sets the header Cache Control to <code class="language-bash">public</code> and the maximum age value in the header to the value selected in the dropdown.
    - This header will tell the caching system to serve their copy of the pages until maximum age, after which, the caching system will check back with the server to see if anything has changed.

- Minimum cache lifetime
    - This value applies for all cached objects.
    - It tells the system to show cached content for the designated amount of time.
    -  If this value is set to ten minutes, the new content you create on your site will not appear until ten minutes later.
    -  For new content to appear, the set amount of time must have elapsed and a cache clearing function must be run
    -  As such, if traffic on your site is not high, it's better to leave it as none.


If you know for a certainty that the website will be low trafficked, by all means remain in MyISAM.

However, should that pattern ever change and you become high traffic again, you could configure everything into InnoDB for two major reasons

REASON #1 : InnoDB does row level locking. As for MyISAM, any INSERT, UPDATE, or DELETE query executed will cause a full table lock. Even in a low trafficked website, the possiblility exists of two or more DB Connections Locking the Same Table. With InnoDB, that possibility is totally eliminated.

REASON #2 : InnoDB Caches Data and Indexes. MyISAM only caches Index Pages.

The key cache (sized by key_buffer_size) hold index pages for MyISAM tables. There is always disk I/O to read data from a MyISAM. A record read for the first time will cache the Index Pages used to find the row in to key cache. Subsequent lookups will find the key needed in the key cache, but there will always be mandatory disk I/O to get the data. With InnoDB, both Data and Index Pages Reside in the InnoDB Buffer Pool (size by innodb_buffer_pool_size). Disk I/O is dramatically reduced with everything cached in the Buffer Pool.

I have always recommended Drupal databases using InnoDB instead of MyISAM. It is actually easy to convert using straight MySQL.

Until then, MyISAM is all the firepower you need, especially on servers with modest RAM.
