---
layout: post
title: "Making sense of digital fonts"
date: Dec 24, 2017
tags: [design, typography]
---
My interest in language, writing systems and typography has led me to spend hours down a rabbit hole in search of answers to the plethora of “how/why did this come about?” questions that pop into my head at random. I may have an ”easily distracted” issue, but we're not talking about that today <span class="emoji" role="img" tabindex="0" aria-label="smiling face with horns">&#x1F608;</span>.

As I was polishing up my talk for [You Gotta Love Frontend](https://yougottalovefrontend.com/), I started digging into digital font formats. At the time, I was trying to come up with an easy-to-explain definition for fonts. And I came across some good ones, which often make the contrast between fonts and typefaces, from [this article](http://fontfeed.com/archives/font-or-typeface/) by [Yves Peters](https://twitter.com/baldcondensed).

> ...the physical embodiment of a collection of letters, numbers, symbols, etc. (whether it’s a case of metal pieces or a computer file) is a **font**.  
—[Mark Simonson](https://twitter.com/marksimonson)

> **font** is what you use, and **typeface** is what you see.  
-[Norbert Florendo](http://www.typophile.com/node/13593)

But after figuring out what fonts actually were, I wanted to know how digital fonts worked. I did eventually finish my talk, just that I got slightly sidetracked along the way.

## Increasing layers of abstraction

In my mind, digital is transient, it is an encoding and manipulation of electronic signals. And as digital technology continues to progress (at a breakneck speed, might I add), we see less and less of the actual physical manifestations of it.

<figure>
    <figcaption>Look at this glorious Colossus Mark 2 computer being operated by Wrens Dorothy Du Boisson (left) and Elsie Booker.</figcaption>
    <img srcset="{{ site.url }}/images/posts/digital-fonts/colossus-480.jpg 480w, {{ site.url }}/images/posts/digital-fonts/colossus-640.jpg 640w, {{ site.url }}/images/posts/digital-fonts/colossus-960.jpg 960w, {{ site.url }}/images/posts/digital-fonts/colossus-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/digital-fonts/colossus-640.jpg" alt="Colossus Mark 2" />
</figure>

As someone who is generally curious about how things work under the hood, and why things came to be a certain way, I found books like xx and xx, as well as podcasts like the Internet History Podcast, particularly interesting.

It wasn't that long ago when computers surrounded human beings (like the Colossus or the ENIAC) and the rate of computation, though fast, was still somewhat visible to the human eye.

In a couple of decades, processor sizes have shrunk exponentially, while their speeds have increased exponentially. It's gotten to a point whereby if you showed someone from 19xx your smart phone, they might think it's magic.

And I don't think I'm wrong to say that about most of us these days either. Maybe we don't think it's magic per se, but most people don't know how their computers even work (and probably don't care as long as it does).

## Analogue fonts

Before digital, when we talked about fonts,

Those were in use for hundreds of years until today, for use in letterpress printing. We also have fonts that look like this:

And these were used in photo. They serve as a bridge between analogue and digital, because the fonts were, in a way, physical objects, but working with those fonts required a digital display.

So the question is, how did we get from fonts that we could hold in our hands, to fonts that only existed as bits and bytes?

## Understanding font formats

