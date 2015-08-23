---
layout: post
title: "Drupal 101: Improving the content authoring experience"
date: April 10, 2015
tags: [drupal7, design]
category: planet-drupal
---
Episode 101 of [Jen Simmons'](http://jensimmons.com/) wonderful podcast [The Web Ahead](http://thewebahead.net/101) featured content strategist [Eileen Webb](http://webmeadow.com/). Good stuff from start to finish, you should really check it out. There was one particular point that resonated with me, when they talked about user experience of people whose job is to add content to the website.

>Not to get super philosophical, but capitalism isn't really keen on improving working conditions for employees. It's not super excited about spending money and energy on making things nicer for the people who you are paying.  
― Eileen Webb on The Web Ahead

Drupal comes with a lot of out-of-the-box functionality that can help make the content editing experience less confusing, provided we, as developers, use them. Placing an emphasis on the content authoring experience will undoubtedly impact the way we build our sites, but I believe this is for the better. And I'm not the only one, which is why Drupal 8 will be shipping with a [plethora of improvements](http://wimleers.com/article/drupal-8-structured-content-authoring-experience) on the content authoring front.

But let's talk about Drupal 7 for now. I am definitely guilty of occasionally building functionality in a way that made things easy for me as a developer but complicated things for the content editor. In hindsight, I've realised that such decisions were short-sighted and usually came back to bite me later on. If I can help make the content editors' lives easier, they're more willing to use and explore the system on their own. It also means less support tickets for me to resolve.

If the content creation process is harder than navigating a labyrinth, then we're doing something wrong. This is where some user research would be helpful. The users, in this case, are the content editors. Often, the user research focuses heavily on the end-user, the people who visit the website, but I found that the most effective solution marries the needs of the visitors with those of the content editors.

Once we find out the type of content that is most relevant and useful to the visitor, we need to build the site in such a way that makes it easy for the content editors to create such content. 

###Take time to plan the site architecture
A well-designed site architecture takes more effort than most people think. The point of using a content management system is to simplify the process of managing content on the site. Create once, use everywhere. Often, we design and build sites based on the content we already have. But we also have to take into consideration the type of content that will be created in the future. This means catering for the post-launch content creation process as well.

What type of content will be generated moving forward? The business goals of the website must be clear to everybody involved

###Be consistent in implementation
There are many different ways to achieve the same result in Drupal. For example, say you want to create a listing of recipes which show the title, an image and a short description for each recipe. You could create a view and display individual fields in that view. You could use display suite to create a view mode for use in your view. You could create a custom template file for your view. 

There is no one right way to doing things, but consistency goes a long way for the content creators. If you have various listings but all of them are rendered differently, 

###Provide clear instructions in the help text
Drupal already has the structure in place to be user-friendly from a content creator's perspective. Every field we create in Drupal comes with a help text section. Some developers fill in this field a brief instruction, some even leave it blank.
