---
layout: post
title: "The one where I grok MVC"
date: Feb 15, 2016
project: SG50 Time Machine
image: project-11.jpg
tags: [kohana, projects]
---

Earlier this year, I mentioned that I was starting out with the [Kohana](https://kohanaframework.org/) framework. Actually, my team uses a heavily modified version of the Kohana framework as a starter for all our projects. In addition to the Kohana base architecture, our framework had a bunch of goodies built in, like lazy-loading, a run-time Sass compiler and so on. But I digress. We had been tasked to build the website for Audi's SG50 Time Machine campaign. 

<img srcset="{{ site.url }}/images/posts/sg50/sg50-480.jpg 480w, {{ site.url }}/images/posts/sg50/sg50-640.jpg 640w, {{ site.url }}/images/posts/sg50/sg50-960.jpg 960w, {{ site.url }}/images/posts/sg50/sg50-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/sg50-640.jpg" alt="A Drive Back in Time" />

## Building the website

The front-facing site itself wasn't too complicated. The bulk of the content was on the home page itself, with some sub-pages for additional secondary information. Our designers came up with the idea to have the background transform from modern day back to 1965, in line with the "back-in-time" theme.

