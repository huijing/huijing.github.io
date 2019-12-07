---
layout: post
title: "Understanding positioning in CSS"
date: Dec 06, 2019
tags: [css]
---
I was at [JSConf China](https://2019.jsconfchina.com/) this year, which happened in Shanghai from 19–20 Oct. There was fairly decent representation from Singapore I would say. [Wei](https://uuei.io/) (whom I probably mention every second blog post I write) was the opening keynote for Day 2, and it was one of the best if not THE best talk of the conference IMHO.

We also had [Yong Jun](https://github.com/yongjun21/) (another good friend of mine), who gave a workshop on the rather interesting topic of [scrolly-telling](https://webflow.com/blog/scrollytelling-guide). He works in the graphics department for Singapore Press Holdings and has lots of experience creating interactive graphics and visualisations.

Yong Jun had developed an open-source scrolly-telling library that he used for a lot of his projects and it uses `position: sticky` for “snapping” content into place. During the workshop, he posed the question of why just applying `position: sticky` alone on an element doesn't work. And this gave me the idea to do another CSS property deep dive <span class="emoji" role="img" tabindex="0" aria-label="nerd face">&#x1F913;</span>.

## 