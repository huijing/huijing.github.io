---
layout: post
title: "HTML and CSS are the language of web design"
date: April 20, 2016
tags: [opinion, design]
---
To start things off, let me state my position. This house proposes that because HTML and CSS are the language of the web, it is mandatory for anyone who wishes to design for the web to understand the relationship between HTML and CSS, and the browsers which render them.

There have been many opinion pieces written about whether designers need to learn to code or whether developers need to know design. Using the word "many" is probably understating the sheer volume of articles that have been published. Just google "Designers learn code". Go on, I'll wait. Check the timestamps on some of those results, you'll see that this debate has raged on for years and there seems to be no end in sight.

## Artisans and their media

Instead of jumping right into that controversial topic, let's talk about medium. For artists, medium is the material they use to create works of art. But medium is not only relevant for artists. Carpenters, bakers, chefs, architects too have specific media they work with. 

Think of all the different categories of designers out there, industrial designers, fashion designers, graphic designers, interior designers and so on. In order to do great work in their respective fields, all these professionals must have a deep and comprehensive understanding of the media they work with.

Industrial designers need to have a key understanding of materials and manufacturing processes. Fashion designers have an innate understanding of the characteristics of different fabrics and how they behave in various contexts. Artists learn pretty early on that although its theoretically possible to use any paint on any surface, there are preferred combinations of media simply because of their nature, and this will affect their choice of painting technique as well.

It's a pretty logical expectation to have, right? For the artisan in question to have extensive and thorough knowledge of their respective media. I think this can be said for most of the aforementioned professions. 

So what is the medium that web designers work with? That's simple, the browser! But what I find curious is, that for web design, it seems that some of us can get away with being unfamiliar with browser technology. And to me, this is unacceptable, and quite unbecoming, to be honest.

To be fair, the browser is a relatively young medium. Compared to all the other media out there, the browser is practically just a toddler. The very first web browser (called [WorldWideWeb](http://info.cern.ch/NextBrowser.html)) was invented in 1990 by [Sir Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/). So as of time of writing, that's only 26 years. I've lived longer than that. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

## Let's talk a bit about computers

So I have a hypothesis. Bear with me here while I take you through it. A browser is a piece of software that runs on a computer. A computer performs computations, hence the name. Fun fact, computers used to be people. Back in the 18th century, with the advent of the Industrial Age, being a human computer was a respectable profession that helped further humanity into the modern age we know today. 

But I digress, computers have evolved at an astonishing rate within the last 100 years, from behemoths spanning rooms running on vacuum tubes, then moving on to transistors, and now we have tiny devices running on microchips. 

It might be hard for some younger folk to imagine, but computers weren't all that common in the home as recently as 30 years ago. Most early home computers came as kits, requiring technical know-how to assemble and program. But as mass market computers started to take off, the level of technical knowledge required to operate and use a computer conversely went down. 

I suppose that's also a reason why personal computing became more ubiquitous. Fast-forward to today, it's not unreasonable to say that there are a large percentage of computer users who don't understand how computers work. It's almost seems like a magic box that does magical things.

I was lucky enough to be exposed to computers since the age of 5. The first computer I played around with ran on MS-DOS. To be honest, the only reason I learned to operate that machine was purely so I could play games. I think it's safe to say that it was easier to understand how computers worked then, simply because there was a lower level of abstraction than what we have now. I'm not saying it's a bad thing, it's just an observation.

<div class="figure-wrapper">
  <figure class="two-col">
    <figcaption>Does anyone remember this?</figcaption>
    <img src="{{ site.url }}/images/posts/code-design/da.jpg" srcset="{{ site.url }}/images/posts/code-design/da@2x.jpg 2x" alt="Direct Access splash screen"/>
  </figure>
  <figure class="two-col">
    <figcaption>Direct Access 5.0</figcaption>
    <img src="{{ site.url }}/images/posts/code-design/da2.jpg" srcset="{{ site.url }}/images/posts/code-design/da2@2x.jpg 2x" alt="Direct Access menu"/>
  </figure>
</div>

As computers became more widespread and popular among the general public, the demand for easy-to-use interfaces also ballooned. Graphical user interfaces (GUIs) had been around for the longest time though. Think Apple's iconic Macintosh desktop, and the still-going-strong X11. These interfaces were more intuitive for most common users with no formal technical training and really grew the industry as well. 

But everything has a down-side, and the down-side of this is that we now have quite a large proportion of users who really don't know how computers work. If you're the token IT guy among your friends or colleagues, I think you'll relate to this.

I'm using the word computer very broadly here, smartphones, tablets, laptops, they're all computers to me. Even though I sometimes think it'd be nice if the common user goes through some basic computer literacy course before being allowed to operate a computer, I guess that's pretty unrealistic. From the consumer's standpoint, we just want something that is easy to use and just works out the box.

## Browser is to web designer as canvas is to painter

A web designer's work lives in the browser. And the browser is a piece of software that requests web resources from servers connected to the internet, and displays them in the browser window. 

The World Wide Web is built on Hypertext Markup Language (HTML). Sure there are all kinds of media available online, but there is no web without HTML. Browsers render HTML according to the [HTML](https://www.w3.org/TR/html/) and [CSS specifications](https://www.w3.org/Style/CSS/specs.en.html), which are maintained by the [World Wide Web Consortium (W3C)](https://www.w3.org/).

The web introduced us to this canvas that was completely new. Browser windows and electronic screens are twenty-first century inventions. All other categories of design have had at least more than hundreds of years of history and established norms. 

What do we do when we encounter something new? We try to make sense of it by connecting it to something we are familiar with. The fact that we use the term "web pages", naturally led people to associate web design with print design.

Firstly, we cannot directly manipulate digital media. And the most key attribute that distinguishes the browser from any other media on the planet is that we have very limited control on how users consume the work we produce on the web.

> The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility. But first, we must “accept the ebb and flow of things.” - John Allsopp

John Allsopp wrote his seminal article [A Dao of Web Design](http://alistapart.com/article/dao) back in 2000 imploring web designers to move away from the rigidity of a printed page and embrace the flexibility of the browser as a medium. It's been 16 years since, but we're still working on that. 

I truly believe that web designers **must** understand browser technologies in order to design well. If you don't understand how your the browser renders stuff onto the screen, how can you design for it? It is so common to hear developers complaining about designers handing them "impossible designs".

Look, you can't carve a sculpture if your media are paint and canvas.

## But designers don't want to code

This is the part where everyone has an opinion. Some people argue HTML and CSS are not programming languages, some say they are. Some people think designers learning to code is a waste of time because left brain right brain. Some people think developers ought to learn design. Sure, why not?

Now I want to point out that my position did not state that web designers must know how to code. But I do think it's an extremely useful tool to have in your toolbox. And I'm not even talking about being able to handle all the different aspects of getting a website up and running. Just HTML and CSS.

> But front-end code (just HTML and CSS; let’s forget Javascript for now) is intrinsically linked to the design process. It’s a design tool just as much as Photoshop. - Elliot Jay Stocks

I find this quote by [Elliot Jay Stocks](http://www.elliotjaystocks.com/), former Creative Director of [Adobe Typekit](https://typekit.com/) and co-founder of [Lagom](http://www.readlagom.com/), really hits the point home. 

## Related resources

- [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) by [Tali Garsiel](http://taligarsiel.com/) (*The best primer on how browsers work*)
- [How browsers work internally](https://vimeo.com/44182484) by [Tali Garsiel](http://taligarsiel.com/) (*Conference talk at Front Trends 2012*)
- [CSS specifications](https://www.w3.org/Style/CSS/specs.en.html)
- [HTML5 specification](https://www.w3.org/TR/html/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

## Fun reads

- [The Human Computer and the Birth of the Information Age](http://www.philsoc.org/2001Spring/2132transcript.html) by [David Alan Grier](http://www.dagrier.net/) *Try to get your hands on the original paper* <span class="emoji">🤓</span>
- [A Dao of Web Design](http://alistapart.com/article/dao) by [John Allsopp](http://www.johnfallsopp.com/)
- [Responsive Web Design](http://alistapart.com/article/responsive-web-design) by [Ethan Marcotte](http://ethanmarcotte.com/)
- [Web designers who can't code](http://www.elliotjaystocks.com/blog/web-designers-who-cant-code/) by [Elliot Jay Stocks](http://www.elliotjaystocks.com/)
