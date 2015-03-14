---
layout: post
title: "The one I cut my teeth on"
date: October 04, 2014
tags: [drupal, projects]
---
My next assignment was to build a new website for the [Singapore Gastric Cancer Consortium](http://www.sgcc.sg). Their original site was static HTML site built years ago, with a design that was dated. As a research facility, they also had a large library of publications that they wanted users to be able to search through. The site was completely redesigned and rebuilt from scratch on the Drupal 7 platform, and this would be my first end-to-end development project.

Technically I had built sites on Drupal before, but given that was more than five years ago with nothing done since, I consider that experience moot. I had to relearn how to set up a Drupal site from scratch. The way I remember doing it was downloading the zip file from drupal.org, extracting it’s contents and pointing my WampServer to that folder. But now that I’m doing this as a profession, I learnt to do it via Git, which is a version control system that I managed to develop a love-hate relationship with (refer to [The epic git bomb]({{ site.url }}/blog/the-epic-git-bomb/)).

Aside from building up the site, I would also have to theme it to look like the new design that our web designer came up with. So the go-to starter theme template that was suggested to me was the [Zen theme](https://drupal.org/project/zen). It honestly felt like jumping straight into the deep end, but that's the best way to learn fast, right?

The extent of my Drupal knowledge was the creation of basic pages and I had no idea what views and content types were for. So if I had to go back in time and explain to my newbie self, I'd tell her to read [this post on content types]({{ site.url }}/blog/drupal-101-content-types/) and [this post on views]({{ site.url }}/blog/drupal-101-intro-to-views/). Once I managed to wrap my head around those concepts, I started building up the site. It seemed straightforward enough at first, a couple of basic pages, and a couple of view listings, pretty standard stuff. Upon closer scrutiny of the requirements and the approved visual design, I quickly learned that NOTHING is ever straightforward.

This was also my first taste of using feeds to import content. Let's just say it was an exercise in patience and persistence. Though I must say, all the time spent wrangling spreadsheets and levelling up my Excel-fu during my previous job came in very handy. I document my extensive feeds experience in [this post]({{ site.url }}/blog/drupal-101-what-i-learnt-from-hours-of-troubleshooting-feeds/).

This site also required [overriding the node template with panels](/placeholder-post.html), [content filtering with facets](/placeholder-post.html) and [a simple image gallery with lightbox](/placeholder-post.html). After all that came the custom theme, which was actually just a sub-theme off of Zen (eventually, I would come to a point when I decided to write my own base theme, but that's for a future post). 

<img src="{{ site.url }}/images/posts/sgcc-before.jpg" alt="SGCC homepage before theming"/>

I was not one of the golden generation of web developers who started out coding websites on Geocities, and I totally missed the table-based layout phase, so pardon my noob-ness when I say the best part of this project was seeing the un-themed site transform into the comp from my designer, except it's ALIVE! 

<img src="{{ site.url }}/images/posts/sgcc-after.jpg" alt="SGCC homepage after theming"/>

Another small step forward through the world of web development. I shall now end off with the cliche of a random quote by a famous person:

> A beef filet cooked for 15 hours by 30 cooks doesn't necessarily taste better than a cheeseburger. - Oliver Reichenstein
