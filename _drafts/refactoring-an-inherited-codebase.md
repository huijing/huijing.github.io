---
layout: post
title: "Refactoring an inherited codebase"
date: Jul 30, 2018
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

The most basic analysis can be done via DevTools in any of the major browsers from the *Network* tab. It's more of a personal preference, but I prefer how Chrome and Firefox do it, where both of them tell you the number of requests, size of transfer, time it takes to finish loading, and when `DOMContentLoaded` is fired.

After working through the entire product, I came up to a total of 24 different pages, some ranging from pure textual content to some with a whole lot of business logic for creating complex rules and conditions. I tossed my findings into the aforementioned spreadsheet and ended up with the following statistics:
- Average number of requests: 79
- Average page weight: 6.6mb
- Time to load:
- `DOMContentLoaded` fired at:

Chrome also has a nifty code coverage tool 

A count of the number of libraries

### Evaluating audit results

It became clear that any attempt to refactor the code would take significantly more time and effort than I could afford with my one-woman team. I call this the *one-brain-two-hands* problem, i.e. Hui Jing only has 1 brain and 2 hands.

Data from the backend was being passed to the frontend via Jinja variables. However, the variables sometimes were not simply raw data, but contained preformatted strings and values that made it tricky to change the way things were implemented.

There was a large amount of inline Javascript in the template files themselves which used Jinja variables as part of the Javascript functions. That was a hard no for me, and I insisted on extracting all Javascript into separate `.js` files and keeping the templates clean of inline styles and scripts.



## Burn it down, build it up

To be honest, I wouldn't recommend this approach lightly. But given the circumstances, that A) it wasn't too large an application, B) there was no proper HTML structure at all, C) external libraries were outdated and installed inconsistently, D) the code was a hodgepodge of Jinja variables in inline scripts and inline styles and E) the fact that *my youth was slipping away*, I decided to rip out all the styles and scripts and rewrite them from scratch.

Keeping in mind that I had a team of 1, I was reasonably confident I could pull this off because I can CSS faster than most developers I know, so the look-and-feel wouldn't take long. From a functionality perspective, the application was too complicated, and most of the Javascript was to handle hiding and showing (or so it seemed, more details to come).

Even so, it probably took 5 full man-months worth of effort to finish up the initial rewrite, housekeeping and documentation work. In the meantime, there were also demos to be built (for tradeshows and the like), as well as my own non-employer related commitments. So it's safe to say I kept busy for the past 8 months. 

### Remove unneeded libraries



### Function matching

I'd like to say there were functional requirements that I could refer to when doing the rewrite, unfortunately, there were none. Or at least none that was updated to reflect what the product was currently. But if all was well, I wouldn't have gotten the job now, would I?

Plan B: run an instance of the application that tracked the current master release and match all observable functionality as I rewrote every page of the application. I would like to reiterate that this worked only because the application was of a manageable size to begin with.

Earlier when I mentioned that Javascript was used for seemingly straightforward purposes, I hadn't yet encountered **THE RULES MONSTER** (henceforth referred to as TRM). For every other page I encountered, it was possible to unravel the 

