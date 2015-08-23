---
layout: post
title: "New stuff in Drupal 8"
date: February 11, 2014
tags: [drupal8, podcasts]
---
One of the podcasts I listen to these days is [Modules Unraveled](https://modulesunraveled.com/podcast) by [Brian Lewis](https://twitter.com/modsunraveled). The most recent episode was a conversation with [Théodore Biadala](https://twitter.com/nod_), who is the Javascript maintainer for Drupal 7 and 8. 

I consider myself a Drupal toddler at this point in time, but from what I understand, although Drupal 8 will generally look similar to Drupal 7 from a site builder’s perspective, there are a significant number of changes in terms of the backend and APIs. Who better to talk about API changes other than the maintainer for Javascript himself?

So in a nutshell, Drupal 8 will have significantly reduced usage of jQuery, mainly to improve loading time, but also minimise the issue of conflicting jQuery versions. If, like me, you have had experienced the pain of trying to get multiple versions of jQuery to play nice with each other on your Drupal site, this should feel like a cool drink in the desert. 

Drupal 8 will also ship with the latest version of jQuery AND Javascript libraries in Drupal will also be updated with every minor core update. Another cool thing mentioned was that the Drupal Javascript team is also trying to make it possible to use custom builds of jQuery in Drupal (FYI, as of jQuery 1.8, it is possible to build your custom jQuery library). 

Something significant for module creators in Drupal 8 is that you can no longer call Javascript or CSS files from your module.info file anymore. You will have to attach your scripts to the particular render array declared by your module. These files can still be added in the theme.info file though.

There was also a call to the community to help out with testing and documentation. It’s a big chunk of work to be done, so if anybody is able to help, please do. 

This podcast is extremely informative for everyone who uses Drupal, so I recommend subscribing to Modules Unraveled on your pod-catcher of choice. 
