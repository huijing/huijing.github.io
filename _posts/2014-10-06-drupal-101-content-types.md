---
layout: post
title: "Drupal 101: Content types"
date: October 06, 2014
tags: [drupal, site-building]
---
Content types are just a means of providing more structure to the data being used on your website. Drupal 7 comes by default with two content types, page and article. But you can create additional content types to suit the needs of your website.

For example, if you were creating a site for a research centre, odds are it would have content like publications, investigators, research areas and so on. Each of these types of content can have their own distinct fields. For example, every publication would have authors, a publication date and the journal in which it was published. 

Rather than dumping all this data into a single body field, having different fields allow us to organise this data to make it more useful to the user. By entering the relevant data into their respective fields, we can then filter this data based on author, publication date and journal. 

Drupal also allows existing fields to be re-used across content types. Say you created an image field one of your content types. You can re-use this image field in another content type. Now there is some contention on whether you should re-use fields or not and you should read [this excellent article](https://www.ostraining.com/blog/drupal/re-using-drupal-fields/) by [OSTraining](https://www.ostraining.com/) which covers both sides of the argument. I'm just here to tell you that you can re-use existing fields if you want to.

So you may be thinking, what's the point of all this, these content types with their fancy fields. Well, at the heart of it, Drupal is a content management system. For the uninitiated, that just means it's a piece of computer software that manages digital content. 

When you don't have a large amount of content, you can probably get away with very little planning or thinking about how your content is going to be structured. But if you're going to add more content to your site (and odds are you will), things will start to get messy. Stay with me while I go meta for a bit. Let's talk about data. 

Data is simply just individual bits of information, things like facts and figures. Raw data is like a pile of bricks, not particularly useful on it's own. The bricks may even by slightly more useful, seeing as you could throw a brick at something. Data has to be processed, organised and analysed before it can become useful information that has practical applications. Think data is to information as brick is to house.

So back to Drupal. By organising the data through the use of fields, we are providing structure to the data, allowing it to be used in meaningful ways. Maybe you want to know how many authors published in 1994, or perhaps how many publications a particular author has in total. All this can be done easily if the data has been structured into their respective fields. Organising your data into structured content types sets the foundation on which future functionalities, like faceted search, specialised view displays and so on, can be built on top of. 

Hopefully this post has helped you grok the concept of content types and how they can help you build a better website.
