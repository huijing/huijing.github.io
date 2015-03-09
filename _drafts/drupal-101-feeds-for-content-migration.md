---
layout: post
title: "Drupal 101: Using feeds for importing content"
date: March 09, 2015
tags: [drupal, site-building]
category: planet-drupal
---
Feeds is a very useful module when it comes to importing content into your Drupal site. However, it's not very forgiving, in that your data has to be formatted just right for the feed to take. This post is not so much about how to set up and configure feeds, but rather, a checklist of things to take note, especially if you're dealing with multi-valued fields in your data set. Before I begin, I have a short rant on the importance of content. You could [skip to the checklist](#feeds-checklist) but then, it'll be less entertaining.

The heart of every website is its content. At least, most of the time. And as much as I love [cupcake ipsum](http://www.cupcakeipsum.com/), there's no substitute for actual content. At some point in time during the process of building a website, there will be a task known as content population.

If your content is still floating around in your headspace (or most likely, your client's headspace), STOP what you're doing. Shut it down. Now. As someone who's experienced the consequences of this first-hand, my takeaway is to avoid designing and building, especially building, a website until you have a good grasp of what the content will be. Even then, it's safer if you actually have the content in some form, even if it's a Word doc or a PDF file.

I've listened to every single episode of the [seanwes podcast](http://seanwes.com/podcast/), so I can attest to the tangible benefits of listening to this podcast. I highly suggest [episode 13](http://seanwes.com/podcast/013-you-design-the-content/), aptly titled *You Design The Content*. Here's a golden quote from the episode:

>You cannot design without content. You design the content. You don’t design websites. You design the content. Lines, boxes, colours, texture *et cetera* are all elements. They are tools with which you design. They are not design themselves. You cannot design without content, therefore it must be a requirement up front. You must have all the content at the start of the project.

There's plenty more good stuff where that came from, so follow [Sean McCabe](https://twitter.com/seanwes), subscribe to his podcast, , sign up for [the community](http://seanwes.com/community/), watch his [daily videos](http://seanwes.com/tv/). Just loads of valuable material.

Assuming you've got your hands on all that content, it still has to get onto the site you're building. Now, there are many ways you can do this. You could get someone to manually create each piece of content on the site. If you only have a handful of pages, this isn't a bad option. If you have hundreds of pages of content in almost as many fields, asking someone to do this manually could get you criminally charged for torture.

In all seriousness, one of the most commonly used methods to import large amounts of content is with the [Feeds](https://www.drupal.org/project/feeds) module. The [official documentation](https://www.drupal.org/node/622696) for Feeds is very good and comprehensive, but I still ran into some issues when I tried it for the first time (and subsequent times as well, to be honest). 

I attribute it to the complicated data sets I had to work with. Usually, for single value fields, the data import is pretty straight-forward. It's when you have to deal with multi-value fields when things start to get messy. Sometimes you'll find that the trickiest part of getting your feed to import successfully is mostly about massaging the data so it gets read correctly.

<a name="feeds-checklist"></a>


###CSV import

If you're doing a CSV import with multi-value fields, it really pays to be well-versed in the fine art of Excel-fu. That also means you should have access to Microsoft Excel, because personally, I have yet to find a spreadsheet software that can match the functionalities of Excel.



1. If the field is mapped on the importer, your csv file MUST have it as well, otherwise it will be EMPTY.

jsonpath parser comes from json field by blank source set as default from settings
