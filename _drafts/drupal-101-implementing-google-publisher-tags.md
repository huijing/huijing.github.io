---
layout: post
title: "Drupal 101: Implementing Google Publisher Tags"
date: March 09, 2015
tags: [drupal, site-building]
category: planet-drupal
---
Ads are an inevitable part of the web. I've been listening to the [Internet History Podcast](http://www.internethistorypodcast.com/) by [Brian McCullough](https://twitter.com/brianmcc) a lot lately and there's an entire chapter (the podcast is divided into chapters each covering a theme) dedicated to search engines and advertising. Make sure to catch the supplemental interview episodes of Chapter 4, as those shed a lot of light about why the web turned out the way it did (with so many ads). 

At some point, somebody is going to ask you to integrate ads into the site you're building. There are plenty of ways to do this, and what I'm going to cover is just one of those methods. My use case is for ads which are served using [Google Publisher Tags (GPT)](https://support.google.com/dfp_sb/answer/1649768?hl=en&ref_topic=4409239). Now, Drupal has a [Google Publisher Tags](https://www.drupal.org/project/gpt) module, but as our goal was to replace an existing ad integration to use GPT, we did not use that module. 


