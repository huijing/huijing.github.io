---
layout: post
title: "Drupal 101: Improving the content authoring experience"
date: August 30, 2015
tags: [design, drupal7]
category: planet-drupal
---
Episode 101 of [Jen Simmons'](http://jensimmons.com/) wonderful podcast [The Web Ahead](http://thewebahead.net/101) featured content strategist [Eileen Webb](http://webmeadow.com/). Good stuff from start to finish, you should really check it out. There was one particular point that resonated with me, when they talked about user experience of people whose job is to add content to the website.

>Not to get super philosophical, but capitalism isn't really keen on improving working conditions for employees. It's not super excited about spending money and energy on making things nicer for the people who you are paying.  
― Eileen Webb on The Web Ahead

Drupal comes with a lot of out-of-the-box functionality that can help make the content editing experience less confusing, provided we, as developers, use them. Placing an emphasis on the content authoring experience will undoubtedly impact the way we build our sites, but I believe this is for the better. And I'm not the only one, which is why Drupal 8 will be shipping with a [plethora of improvements](http://wimleers.com/article/drupal-8-structured-content-authoring-experience) on the content authoring front.

But let's talk about Drupal 7 for now. I am definitely guilty of occasionally building functionality in a way that made things easy for me as a developer but complicated things for the content editor. In hindsight, I've realised that such decisions were short-sighted and usually came back to bite me later on. If I can help make the content editors' lives easier, they're more willing to use and explore the system on their own. It also means less support tickets for me to resolve.

If the content creation process is harder than navigating a labyrinth, then we're doing something wrong. This is where some user research would be helpful. The users, in this case, are the content editors. Often, the user research focuses heavily on the end-user, the people who visit the website, but I found that the most effective solution marries the needs of the visitors with those of the content editors.

Once we find out the type of content that is most relevant and useful to the visitor, we need to build the site in such a way that makes it easy for the content editors to create such content. 

## Take time to plan the site architecture

A well-designed site architecture takes more effort than most people think. The point of using a content management system is to simplify the process of managing content on the site. Create once, use everywhere. Often, we design and build sites based on the content we already have. But we also have to take into consideration the type of content that will be created in the future. This means catering for the post-launch content creation process as well.

What type of content will be generated moving forward? The business goals of the website must be clear to everybody involved and should be the guiding principle behind design and implementation decisions. There are many different field types that can be used in Drupal. By planning out the site architecture properly, we can make better choices on the type of fields to use in our content types. Everything can be a text field, but not everything should. Drupal's Field API, makes it one of the best content management systems which handle structured data really well.

Putting content in properly formatted fields allows us to manipulate the data for filtering and sorting. For example, putting a date in a date field rather than a text field gives us a lot more flexibility when it comes to extending site functionality that requires use of this data. 

## Be consistent in implementation

There are many different ways to achieve the same result in Drupal. For example, say you want to create a listing of recipes which show the title, an image and a short description for each recipe. You could create a view and display individual fields in that view. You could use display suite to create a view mode for use in your view. You could create a custom template file for your view. 

There is no one right way to doing things, but consistency goes a long way for the content creators. If you have various listings but all of them are rendered differently, content editors end up wondering why their content doesn't display the way they expect it to. If you find that you have to explain to your content editor that for articles, the thumbnail image uses the first image in the multi-value images field but for events, you need to upload the thumbnail in the thumbnail field instead. But the events in the newsfeed actually use the image from the image field... (╯°□°）╯︵ ┻━┻ You get the picture.

## Provide clear instructions in the help text

I, like many other developers, have found myself assuming the content editors or users of the website know exactly what I know in terms of the site's functionality and navigation. To be fair, if we built the site, we're not exactly the best people to judge how usable the site is. Which is why it is important to ask someone who is unfamiliar with the site to try it out. The actual content editors would be nice. They will often provide the best insight on how to improve the usability of your site. I understand that sometimes we are reluctant to show clients work in progress, that we have a fear that the client will fire us for wasting their time on half-finished work. I feel that if we explain our rationale for asking them to test early, in fact, put it up front during the requirements gathering stage that this is part of the development process, most clients are on-board with it.

Drupal already has the structure in place to be user-friendly from a content creator's perspective. Every field we create in Drupal comes with a help text section. Some developers fill in this field a brief instruction, some even leave it blank. I say, FILL IT UP PROPERLY! To me, this is a task that is almost effortless if you do it while building out your content types' fields but a gargantuan one if you leave it till the end of the project to implement. If your test users are asking, what does this field mean? You probably need to structure your help text better, or even rename your fields. 

## Education and awareness among users

No matter how much effort you put into designing and planning your site architecture, it won't mean much if your users don't fully understand how to use it. I'm pretty sure most of us have had the experience of checking in on a website we handed over to our clients a few months later only to find inconsistent formatting, the odd font being used, data in the wrong fields and other things that make us go ᕙ(⇀‸↼‶)ᕗ

But I realised that the responsibility lay with me, as the web professional, to educate the users on best practice. I was guilty of assuming that users would use the system the way I wanted them to without spending the time and effort to teach them how to. Of course, if you need to run a week-long training session just to enter content, the site may have some usability issues you may want to address. But users need to know that the point of using a system is to ensure consistency in terms of design and data presentation. Users need to understand the flow of the content creation process and use each field for its intended purpose. They also need to understand exactly how and where the content they create will be displayed on different parts of the site.

## Wrapping-up

Content structure is something that all of us need to pay more attention to, and I feel that there has been an increase in awareness of the importance of content strategy in recent years, but it isn't enough. The web is an informational medium where content is king. Sites that do well are those which can present the information that people need in the best way possible. Hence it makes sense that we create a content authoring experience that can facilitate the creation of quality content on the web.
