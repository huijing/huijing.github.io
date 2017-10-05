---
layout: post
title: "Building a CSS-only image gallery (with fallbacks)"
date: Oct 07, 2017
tags: [design, css]
---
Sometimes, we get handed a project in which we have almost complete creative control and free-reign to do pretty much whatever. I consider myself pretty lucky to have had 2 such projects since the start of my web development career. The latest one being the website for [Wismut Labs](https://www.wismutlabs.com).

I sort of talked about how the website itself got built, from the branding, to the design and actual code, [if you're interested](). To me, projects like these are like going on vacation, because a typical project involves a lot more stakeholders, more considerations and more compromise (on a myriad of things).

But I digress. The point today is to talk about building an experimental CSS-only image gallery, which doesn't break the experience even on older browsers. The point of an image gallery is to view images. How said images are displayed on every browser doesn't have to be identical.

## Feature queries...again?

Yes, my friend. Feature queries, all day, every day.  I'm going to keep talking about feature queries until the cows come home. At least till there's a better solution (but I think this is a pretty sweet solution already). 
