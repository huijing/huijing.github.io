---
layout: post
title: "The one with lots of poultry"
date: Apr 13, 2016
project: Sadia Chicken
image: project-12.jpg
tags: [drupal7, client-work]
---
Most of the projects I worked on in 2015 were either Facebook applications (yes, somehow those are still being made) or based on the [Base Framework]({{ site.url }}/blog/intro-to-base-framework/). I didn't think there'd be much opportunity for me to work with Drupal for client sites moving forward but I was wrong. After almost 6 Drupal-free months, we got a client request to build their website in Drupal. Guess who was put in charge of that project? <span class="emoji">😎</span>

<img srcset="{{ site.url }}/images/posts/sadia/sadia-480.jpg 480w, {{ site.url }}/images/posts/sadia/sadia-640.jpg 640w, {{ site.url }}/images/posts/sadia/sadia-960.jpg 960w, {{ site.url }}/images/posts/sadia/sadia-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sadia/sadia-640.jpg" alt="Sadia chicken" />

Sadia is an international food company which specialises in chilled and frozen foods. We were engaged to create regional websites for Sadia Singapore and Sadia Hong Kong. On the surface this project didn't seem overly-complicated. Each site would have country-specific domain names. The Hong Kong site would be a multi-lingual implementation but the Singapore site would be single language. In the initial brief, both sites would have almost the same content, but as requirements were being clarified, it seemed that the amount of shared content was much less than initially expected.

## Technical architecture

Based on my prior experience with the [Xinmsn]({{ site.url }}/blog/the-one-on-the-tightest-of-deadlines/) project, I knew that it would be important to make the correct architectural call at the start of the project. And after thinking through the requirements, plus some discussion with the team, we decided to go with a multi-site implementation with separate databases but a single code-base.
