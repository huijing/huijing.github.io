---
layout: post
title: "Where did CSS named colours come from?"
date: Aug 31, 2019
tags: [design, css]
---
Talk.CSS, which is Singapore's monthly CSS meetup, has a segment called CSS colour of the month, where we mention 1 of the 148 named CSS colours. This works out to more than 12 years worth of meetups, and I figured we'd run out of meetups before we ran out of colours.

Since [Wei](https://uuei.io) became a co-organiser, we've each been taking turns picking the CSS colour of the month, and for the August edition, she picked `snow`. The hex code for `snow` is `#fffafa`, which works out to a RGB value of `rgb(255, 250, 250)`.

Some of you who are familiar with the notation may already have realised that this gives us a gentle tinge of red. Very, very slight, but still, red. And Wei wondered why `snow` was red(ish). I had no answer for that at the time, but I wanted to figure it out.

## What do the specifications say?

There is a specification called the [CSS Color Module Level 4](https://drafts.csswg.org/css-color/) that is currently in Editor's Draft status and it defines the colour-related properties and values that already exist in CSS1, CSS2 and CSS Color 3, plus new properties and values. So I thought that'd be a good place to start.

Scroll down to [section 6.1 on named colours](https://drafts.csswg.org/css-color/#color-keywords) and we find this:

> 16 of CSS’s named colors come from HTML originally: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow. Most of the rest come from one version of the X11 color system, used in Unix-derived systems to specify colors for the console.

Ah hah! The X11 colour system! The specification also points us to a talk on the history of the X11 colour system by [Alex Sexton](https://twitter.com/SlexAxton) in his talk entitled *Peachpuffs and Lemonchiffons* at [CSSConfUS 2014](https://2014.cssconf.com/):

<iframe width="560" height="315" src="https://www.youtube.com/embed/HmStJQzclHc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Another fun thing I discovered while reading the specification was that CSS defines a set of `<system-color>` values which allow us “to specify colours in a manner that integrate them into the users' graphic environment.”

There are security and privacy considerations to this particular feature because in theory, this exposes details of the user's OS settings, which could be used for [fingerprinting](https://en.wikipedia.org/wiki/Fingerprint_(computing)). Also, this may make it easier for malware site builders to create user interfaces that seamlessly correspond to an user's system.

The specification does state that several system colours are now defined to be “generic”, hence mitigating this risk. This makes me appreciate the many different angles that the CSS Working Group considers when authoring specifications.

I really quite like this specification, so do give it a read if you like colours as much as I do.

## So what's this X11 all about?

I messed around with Linux operating systems quite a bit before I even go into web development, so X11 isn't something that is foreign to me. X is a portable, network-transparent window system. X11 is version 11 of the X Window System.

X was built upon an idea developed by [Jim Gettys](https://twitter.com/jimgettys) and [Bob Scheifler](https://www.linkedin.com/in/bobscheifler/) from MIT. Why the name X? It is a derivation of a pre-1983 window system called W, which ran under the V operating system.

From [the documentation](https://www.x.org/releases/X11R7.7/doc/man/man7/X.7.xhtml):

> The X Window System is a network transparent window system which runs on a wide range of computing and graphics machines.

The documentation also contains a brief section about colour names, but it didn't go into the choice of colour names. It just mentions that X supports the use of abstract colour names and that the value for this abstract name is obtained by searching one or more colour name databases.

I came across this [excellent deep dive into colour-name dictionaries](https://people.csail.mit.edu/jaffer/Color/Dictionaries#Sinclair) by MIT alum, mathematician and free software developer, [Aubrey Jaffer](http://people.csail.mit.edu/jaffer/). From there, I found some links to early X11 colour dictionaries, and also learned about colour spaces and tuning.

The X server's database that contains all the colour names is commonly located at */usr/share/X11/rgb.txt*. Upon further digging into the version control logs, we can find the list of original colour names that were [checked into version control](https://cgit.freedesktop.org/~alanc/xc-historical/commit/xc/programs/rgb?id=0d0ad63237618270e48503a37ce542139d7abab5) on 19 August, 1985 by Jim Gettys.

2 files were added in that initial commit. *rgb.c* for parsing the colour list text file and *rgb.txt*, which contains a list of 68 colours, each with 2 formats of name, camelcase and lowercase with spaces.

The next update to *rgb.txt* was on 23 February, 1988. That added `brown`, `grey` and `gray` to the list. The RGB values for `white` were updated from `252, 252, 252` to `255, 255, 255` on 13 May, 1988. An entire grey scale consisting of 100 shades of grey were added to the list on 3 September, 1988, and `sandy brown` was added the next day.

I highly suggest taking a look at the commit log because amongst the standard messages like *added grey0-100*, there were fun ones like *removed blank line; boy, what a stupid program* and *made Keith happy* among other gems.

`snow` was added to the list on 26 October, 1989 when the list was expanded with colours which were tuned by Paul Raveling at the Information Sciences Institute (ISI) for the HP monitor. From his notes, we find:

> Light and off-white colors, copied from several Sinclair Paints color samples. The intent for adding these is to provide a better choice for light-colored window backgrounds. 

Ah hah! The next clue is Sinclair Paints. The Sinclair Paint Co. was a family business founded and run by 6 brothers in the 1930s. The company expanded into several different product divisions, and individual family members specialising in certain aspects of operations.

Unfortunately, the company is now defunct and not much can be found about their original paint swatches. A [couple](https://www.painttalk.com/f2/research-sinclair-paints-swatches-29863/) of [forum posts](https://www.painttalk.com/f2/sinclair-paint-24403/) on PaintTalk.com are all we have left.

### Segue into paint colour names

Perhaps we won't be able to figure out why `snow` has a red hue, but it does beg the question of how paint companies name their colours. British paint company, [Farrow & Ball](https://www.farrow-ball.com/), which has been around since 1946, is known for their creative colour names. 

[Slate.com](https://slate.com/human-interest/2013/10/farrow-ball-the-story-behind-the-paint-world-s-quirkiest-color-names.html) did some research into this and found that the quirkier names all have their own back stories, but to an extent, it can be considered a marketing thing.

[Behr Paint](https://www.behr.com/consumer) even put a job listing for the position of [Color Explorer](https://behr.wyng.com/5cae7a903b945305f1665cab), which has since been filled. For people who are interested, there was an [AMA on Reddit](https://www.reddit.com/r/IAmA/comments/3tyt69/we_create_the_names_of_paint_colors_for_a_living/) done in 2015 by the folk who name paint colours at [PPG Architectural Coatings](https://www.ppg.com/), where questions about naming colours were answered.

## Why did CSS use the X11 colours?

All the discussion around the development of CSS specifications takes place in the open, so it's possible, with some patience, to dig up the relevant discussion threads on the [www-style mailing list archives](https://lists.w3.org/Archives/Public/www-style/).

Much of the discussion took place during between 1996–1998 when CSS1 and CSS2 were released, then again between 2001–2002 when the CSS Color Module Level 3 was being released. Feel free to peruse the message threads if you would like to read some strongly worded opinions.

- [CNS colors](https://lists.w3.org/Archives/Public/www-style/1996Feb/0006.html)
- [Color Names ; was Re: New CSS1 draft -Reply -Reply](https://lists.w3.org/Archives/Public/www-style/1996Jul/0166.html)
- [Color Keywords (was RE: Cascading Style Sheets)](https://lists.w3.org/Archives/Public/www-style/1997Dec/0114.html)
- [Gray, color keywords](https://lists.w3.org/Archives/Public/www-style/1997Dec/0185.html)
- [What is VGA doing in CSS?](https://lists.w3.org/Archives/Public/www-style/1998Aug/0110.html)
- [color in CSS](https://lists.w3.org/Archives/Public/www-style/1998Nov/0071.html)
- [Re: New Working Draft published: CSS3 module: Color](https://lists.w3.org/Archives/Public/www-style/2001Mar/0074.html)
- [Last call comments on CSS3 module: color](https://lists.w3.org/Archives/Public/www-style/2002May/0122.html)

Of course, there were also some light-hearted moments in there. Tongue-in-cheek seems to be a popular style of humour on that mailing list.

- [Color Standards (Silly)](https://lists.w3.org/Archives/Public/www-style/1997Dec/0039.html)
- [what happened to the pantone colors?](https://lists.w3.org/Archives/Public/www-style/1997Dec/0038.html)
- [ChromaFuzz](https://lists.w3.org/Archives/Public/www-style/1997Dec/0040.html)

*add response from Eric and Chris, if possible*

## Relevant links

- [Wikipedia: X11 color names](https://en.wikipedia.org/wiki/X11_color_names)
- [Git log for rgb.txt on X11](https://cgit.freedesktop.org/~alanc/xc-historical/log/xc/programs/rgb/rgb.txt)
- [Color-Name Dictionaries](http://people.csail.mit.edu/jaffer/Color/Dictionaries)
- [Unix & Linux Stack Exchange: What are the origins of rgb.txt?](https://unix.stackexchange.com/a/75466)
- [“Tomato” versus “#FF6347”—the tragicomic history of CSS color names](https://arstechnica.com/information-technology/2015/10/tomato-versus-ff6347-the-tragicomic-history-of-css-color-names/)