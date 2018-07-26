---
layout: post
title: "Refactoring an inherited codebase"
date: Jul 20, 2018
tags: [css, html, javascript]
---
So for 2018, I got myself some gainful employment doing full-time frontend development work. You know, the kind where you go to an office, and have colleagues and bosses? Also, pay cheques and CPF (that's the Singapore equivalent of a retirement fund), love those.

Anyhow, one of my responsibilities was to refactor and clean-up the frontend codebase for the company's existing products. It's not that I've never refactored codebases before, half my career was built on refactoring legacy projects, but these were a bit larger and messier than my previous projects. And note that I used the word products, with an ‘s’.

But first, some back-story.

<ol>
  <li class="no-margin">Start-up founder has great idea.</li>
  <li class="no-margin">Start-up founder throws together prototype with some interns to show potential clients</li>
  <li class="no-margin">Potential clients become actual clients</li>
  <li class="no-margin">Actual clients make feature requests</li>
  <li class="no-margin">Interns add features the best they can</li>
  <li class="no-margin">Product</li>
</ol>

I believe such a situation is far from uncommon, and pretty much every start-up you throw a stone at has some similar history. So I'm not throwing shade at my employer at all. In fact, I admire the fact that they executed a great idea with limited resources, and managed to on-board actual paying clients. Much kudos for that.

## Assessing the situation

To be fair, I was informed before joining the organisation, that the code base needed work. Things worked, but under the hood, it was getting unmanageably messy with increased throughput and piling feature requests. I dove right into one of the products that was built on [Flask](http://flask.pocoo.org/).

I hadn't had much experience with Python applications prior to this, but I've come to realise that certain patterns are prevalent when it comes to web applications. Anyhoo, since I was hired for a frontend role, almost all my work took place exclusively in the `static` and `templates` folders. Almost.

Given that I was the first dedicated frontend role they ever hired, it was no surprise that the state of the project's frontend was, how shall we put this, left wanting. Apparently, the backend of things wasn't much prettier, but again, I doubt most start-ups have well-architected codebases until later on in their lifespan.

### Preliminary site assessment

Before diving into the code proper, I did a basic click-around, to get an idea of the look and feel of the site, and what it did. To me, this is a pretty important step, because you can only encounter a site *for the first time*, once in your life. And I took notes. Notes on things that took me a while to figure out, places where I had to ask “hmmm, now what does this even mean?”, functionality that required extra cognitive effort to comprehend.

As someone who has been building interfaces for a living for the past 5 years, believe me when I say, people who work on the product itself on a daily basis are the worst group to do user testing with. Because we interact with the product, bugs and all, way more frequently than normal users.

Hence, we inadvertently become blind to numerous usability issues simply because whatever we do to workaround the issue, has been committed to muscle memory. Even if it's something unintuitive, like having to click certain things in a specific sequence for it to work.

All of this was documented into a trusty spreadsheet. I don't know about you, but I'm rather fond of spreadsheets as an organisational tool. To me, it's the easiest way to organise data into useful, information. But that's just me. You do you.

### Site analysis with tools

I read Don Norman's *The Design of Everyday Things* quite early on in my career, and there was a particular sentence in that book which stood out to me.

> When people have trouble using technology, especially when they perceive (usually incorrectly) that nobody else is having the same problems, they tend to blame themselves.

