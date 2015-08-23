---
layout: post
title: "The one where people get a say"
date: March 23, 2015
project: DrupalCamp Singapore 2014
image: project-5.jpg
tags: [drupal7, projects]
---
As awesome as Drupal is, you may be surprised to find that over in my part of the world, there are still people who are in the dark about that fact. Hence, it is our duty as Drupalists to help bolster the community and spread the word about Drupal. What better way to do that than through DrupalCamp? My company was the organiser for [DrupalCamp Singapore 2014](http://www.drupalcamp.sg/), thus my next project was building the event website.

<img src="{{ site.url }}/images/posts/dcsg/dcsg.jpg" alt="DrupalCamp Singapore 2014 website"/>

The format for talks at this DrupalCamp was different from years past. The plan was to put out a call for speakers to submit their talks, then let the attendees vote on the topics. There were less than two months before the start of the event, so the website had to be up as soon as possible. I took a quick look at the [Conference Organizing Distribution (COD)](https://groups.drupal.org/conference-organizing-distribution) but it seemed too heavy for our needs and made the decision to build the site from scratch with a vanilla Drupal 7 install.

Regardless of functionality, the website itself needed to be live so people would now that there was such an event happening. After a quick discussion with my fellow designers, we decided to go with a temporary single-page-site style implementation for the homepage while the rest of the site was being built out behind the scenes. [Here's]({{ site.url }}/blog/drupal-101-creating-custom-content-with-panels/) how it was done.

With the homepage up and running, I went on a mad scramble to build out the rest of the site because lead time was required for people to submit talks as well as vote on them. After some googling (I honestly don't know what I would do without Google), I settled on using the [Flag](https://www.drupal.org/project/flag) module to handle voting.

There was a pretty good number of talks submitted, so the event was split into two tracks: Technical and Business. As the site was responsive, our team had to take into consideration how the schedule would look on a small screen. We considered displaying both tracks stacked on top of one another, but resulted in a very long page on mobile.

In the end, I decided to implement a solution with [Quicktabs](https://www.drupal.org/project/quicktabs) so users could easily switch between schedules for both tracks on the same page. Quicktabs works reasonably well on simple implementations like this one, but more complex use-cases requiring multiple Quicktabs instances on the same page tends to get buggy.

Regardless, the website achieved its intended purpose and DrupalCamp Singapore 2014 proceeded quite smoothly with quite a reasonable turnout.


 
