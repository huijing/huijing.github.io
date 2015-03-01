---
layout: post
title: "Drupal 101: More site optimisations"
date: March 1, 2015
tags: [drupal, performance]
category: planet-drupal
---

If you know for a certainty that the website will be low trafficked, by all means remain in MyISAM.

However, should that pattern ever change and you become high traffic again, you could configure everything into InnoDB for two major reasons

REASON #1 : InnoDB does row level locking. As for MyISAM, any INSERT, UPDATE, or DELETE query executed will cause a full table lock. Even in a low trafficked website, the possiblility exists of two or more DB Connections Locking the Same Table. With InnoDB, that possibility is totally eliminated.

REASON #2 : InnoDB Caches Data and Indexes. MyISAM only caches Index Pages.

The key cache (sized by key_buffer_size) hold index pages for MyISAM tables. There is always disk I/O to read data from a MyISAM. A record read for the first time will cache the Index Pages used to find the row in to key cache. Subsequent lookups will find the key needed in the key cache, but there will always be mandatory disk I/O to get the data. With InnoDB, both Data and Index Pages Reside in the InnoDB Buffer Pool (size by innodb_buffer_pool_size). Disk I/O is dramatically reduced with everything cached in the Buffer Pool.

I have always recommended Drupal databases using InnoDB instead of MyISAM. It is actually easy to convert using straight MySQL.

Until then, MyISAM is all the firepower you need, especially on servers with modest RAM.
