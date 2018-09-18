---
layout: post
title: "How would we check understanding of CSS layout?"
date: Sep 10, 2018
tags: [css, opinion]
---
Recently, I was asked to review/rework a front-end coding test for potential hires. A colleague of mine suggested using [HackerRank](https://www.hackerrank.com/), as he had reasonably good outcomes from his data science coding test, and it didn't take him too much effort to set up. Unfortunately, I realised that CSS isn't something that HackerRank caters for very well.

I don't see this as HackerRank's fault entirely, because it does really well for testing on algorithms, general programming concepts and test-driven development in general. Because the grading is done against a suite of test cases, as it should be in ideal real-world development scenarios.

The thing about HackerRank is that, firstly, CSS is not “supported” as a language option you can limit candidates to. There was one particular CSS layout question I thought was promising, but it seemed to imply the candidate ought to use Javascript for the solution.

<figure>
    <figcaption>Nooooooo…</figcaption>
    <img src="{{ site.url }}/assets/images/posts/fe-test/disaster.jpg" srcset="{{ site.url }}/assets/images/posts/fe-test/disaster@2x.jpg 2x" alt="Nuclear disaster (Simpsons-style)"/>
</figure>

## Disclosure: I'm not a fan of coding tests

Don't get me wrong, I understand why we have them, but it doesn't mean I like them. Though I suppose quite a lot predicates on how the test is administered and evaluated. Regardless, today, we're not going to talk about my opinion on coding tests.

Instead, I want to take you through my thought process of how I would check for an understanding of CSS layout. And initiate further conversation based on the proposed solution.

Those who know me well might immediately suspect whether this is just a ploy on my part to talk about CSS…

No comment.

## The setup

At first I thought maybe it would be better to pre-write the HTML and let the (I hate using this term but…) candidate fill in the styles, but I realised it would be even more telling if they wrote the HTML themselves.

What I've noticed among some developers who started out with frameworks like Bootstrap and kept at it, is they tend to nest `div`s more often. Some even don't realise that some styles can be applied on the same `div` without additional nesting.

So the setup became an image of what I'd like the end result to look like, with some descriptive textual instructions. This was actually adapted from one of the HackerRank as mentioned earlier that I felt was decent, but definitely could be improved upon.

