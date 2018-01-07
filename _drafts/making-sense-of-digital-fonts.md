---
layout: post
title: "Making sense of digital fonts"
date: Jan 07, 2018
tags: [design, typography]
---
My interest in language, writing systems and typography has led me to spend hours down a rabbit hole in search of answers to the plethora of “how/why did this come about?” questions that pop into my head at random. I may have an ”easily distracted” issue, but we're not talking about that today <span class="emoji" role="img" tabindex="0" aria-label="smiling face with horns">&#x1F608;</span>.

As I was polishing up my talk for [You Gotta Love Frontend](https://yougottalovefrontend.com/), I started digging into digital font formats. At the time, I was trying to come up with an easy-to-explain definition for fonts. And I came across some good ones, which often make the contrast between fonts and typefaces, from [this article](http://fontfeed.com/archives/font-or-typeface/) by [Yves Peters](https://twitter.com/baldcondensed).

> ...the physical embodiment of a collection of letters, numbers, symbols, etc. (whether it’s a case of metal pieces or a computer file) is a **font**.  
—[Mark Simonson](https://twitter.com/marksimonson)

> **font** is what you use, and **typeface** is what you see.  
-[Norbert Florendo](http://www.typophile.com/node/13593)

But after figuring out what fonts actually were, I wanted to know how digital fonts worked. I did eventually finish my talk, just that I got slightly sidetracked along the way. This is going to be another “brain dump” post. You have been warned.

## Increasing layers of abstraction

In my mind, digital is transient, it is an encoding and manipulation of electronic signals. And as digital technology continues to progress (at a breakneck speed, might I add), we see less and less of the actual physical manifestations of it.

<figure>
    <figcaption>Look at this glorious Colossus Mark 2 computer being operated by Wrens Dorothy Du Boisson (left) and Elsie Booker.</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/digital-fonts/colossus-480.jpg 480w, {{ site.url }}/assets/images/posts/digital-fonts/colossus-640.jpg 640w, {{ site.url }}/assets/images/posts/digital-fonts/colossus-960.jpg 960w, {{ site.url }}/assets/images/posts/digital-fonts/colossus-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/digital-fonts/colossus-640.jpg" alt="Colossus Mark 2" />
</figure>

As someone who is generally curious about how things work under the hood, and why things came to be a certain way, I found books like [The Dream Machine](http://www.worldcat.org/title/dream-machine-jcr-licklider-and-the-revolution-that-made-computing-personal/oclc/607060367&referer=brief_results), [Where Wizards Stay Up Late](http://www.worldcat.org/title/where-wizards-stay-up-late-the-origins-of-the-internet/oclc/34633443) and [When Computers Were Human](http://www.worldcat.org/title/when-computers-were-human/oclc/1014865831&referer=brief_results) as well as podcasts like the [Internet History Podcast](http://www.internethistorypodcast.com/), particularly interesting.

It wasn't that long ago when computers surrounded human beings (like the Colossus or the ENIAC) and the rate of computation, though fast, was still somewhat visible to the human eye.

In a couple of decades, processor sizes have shrunk exponentially, while their speeds have increased exponentially. It's gotten to a point whereby if you showed someone from the 19th century your smart phone, they might think it's magic (or call you a witch, I don't know, times were different).

And I don't think I'm wrong to say that about most of us these days either. Maybe we don't think it's magic per se, but most people don't know how their computers even work (and probably don't care as long as it does).

## Analogue fonts

Before digital, when we talked about fonts, we were usually referring to metal typesetting, where fonts were the complete set of metal types that were used to typeset entire pages of text. Those were in use for hundreds of years until today, for use in letterpress printing.

<div class="figure-wrapper">
    <figure class="multiple">
        <figcaption>Typesetting by Ri Xing foundry</figcaption>
        <img src="{{ site.url }}/assets/images/posts/digital-fonts/types.jpg" srcset="{{ site.url }}/assets/images/posts/digital-fonts/types@2x.jpg 2x" alt="Typesetting by Ri Xing foundry" />
    </figure>
    <figure class="multiple">
        <figcaption>Composing stick loaded with types</figcaption>
        <img src="{{ site.url }}/assets/images/posts/digital-fonts/types2.jpg" srcset="{{ site.url }}/assets/images/posts/digital-fonts/types2@2x.jpg 2x" alt="Composing stick loaded with types" />
    </figure>
</div>

We also have fonts that look like this:

<div class="figure-wrapper">
    <figure class="multiple">
        <figcaption>Bodoni Bold for Linofilm V-I-P</figcaption>
        <img src="{{ site.url }}/assets/images/posts/digital-fonts/bodoni.jpg" srcset="{{ site.url }}/assets/images/posts/digital-fonts/bodoni@2x.jpg 2x" alt="Bodoni Bold 12pt for the Linofilm V-I-P" />
    </figure>
    <figure class="multiple">
        <figcaption>Ben Franklin Bold for Linofilm V-I-P</figcaption>
        <img src="{{ site.url }}/assets/images/posts/digital-fonts/benfranklin.jpg" srcset="{{ site.url }}/assets/images/posts/digital-fonts/benfranklin@2x.jpg 2x" alt="Ben Franklin Bold for the Linofilm V-I-P" />
    </figure>
</div>

And these were used in phototypesetting. They served as a bridge between analogue and digital, because the fonts were, in a way, physical objects, but working with those fonts required a digital display.

So the question is, how did we get from fonts that we could hold in our hands, to fonts that only existed as bits and bytes?

## A bit about bits and bytes

Computers are so ubiquitous today that you don't have to be an engineer or a computer scientist to use one. There was a time when computers were a niche domain, of interest only to enthusiasts and hobbyists who possessed the technical knowledge to operate them. As such, many users of computers today may not know what goes on under the hood of their machines.

With GUIs becoming more prevalent and polished, it is totally possible to go about all tasks without knowing what a file system is or where data is stored. But let's examine the concept of digital data for a little bit. I thought the [Crash Course Computer Science series](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo) did a really good job explaining a lot of basic computing concepts, and I'll be referencing information from that video series.

If you think about it, what is a file, exactly, in digital terms? It helps to go back to a time when there were less layers of abstraction between the hardware and the user interfaces.

<figure>
    <figcaption>The Harvard Mark I by IBM</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/digital-fonts/mark1-480.jpg 480w, {{ site.url }}/assets/images/posts/digital-fonts/mark1-640.jpg 640w, {{ site.url }}/assets/images/posts/digital-fonts/mark1-960.jpg 960w, {{ site.url }}/assets/images/posts/digital-fonts/mark1-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/digital-fonts/mark1-640.jpg" alt="Harvard Mark I" />
</figure>

The Harvard Mark I was built by IBM for the Allies during World War II and it was made up of 765,000 components, 3,000,000 connections and 800 kilometres of wire. A 15-metre shaft driven by a 5 horsepower motor was used to keep its internal mechanics in sync. All computations were essentially controlled by mechanical switches, toggling between on and off states.

<figure>
    <figcaption>Very early experimental point contact transistors by IBM (image credit: American Computer Museum)</figcaption>
    <img src="{{ site.url }}/assets/images/posts/digital-fonts/point-contact.jpg" srcset="{{ site.url }}/assets/images/posts/digital-fonts/point-contact@2x.jpg 2x" alt="Earliest point contact transistors" />
</figure>

On and off. 1s and 0s. Bits and bytes. This is why binary is so important when it comes to electronics and computers. Computers runs on billions of electronic switches which store binary numbers when electric currents toggle them to either on or off states. Every single type of data format is stored and processed by a computer in the form of binary digits. Digital, get it? (*My brain replies, yes, got it.*)
    
<figure>
    <figcaption>AMD Zeppelin with 4,800,000,000 transistors</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/digital-fonts/amd-zen-480.png 480w, {{ site.url }}/assets/images/posts/digital-fonts/amd-zen-640.png 640w, {{ site.url }}/assets/images/posts/digital-fonts/amd-zen-960.jpg 960w, {{ site.url }}/assets/images/posts/digital-fonts/amd-zen-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/digital-fonts/amd-zen-640.png" alt="AMD Zeppelin (Octa-Core Die)" />
</figure>

File formats are a standard method of encoding information for storage. They usually come with detailed specifications that describe exactly how bits are used to encode information in an electronic medium. These specifications may be freely available (open-source) or proprietary, as sometimes they are considered trade secrets.

Encoding data is one thing, but rendering them on a graphical display is another animal altogether. The development of hardware like graphical terminals and printing devices went hand-in-hand with software advancements like rasterisation algorithms and page description languages.

Digital typography is really a cross-disciplinary field involving technical engineering, aesthetic design and mathematical precision.

## Understanding font formats

[Yannis Haralambous](http://perso.telecom-bretagne.eu/yannisharalambous/) wrote a very comprehensive book called [Fonts & encodings](http://www.worldcat.org/title/fonts-encodings/oclc/150365997), which was a great help in my understanding of digital fonts. The basic gist of digital font formats was explained as follows:

> A font is a container for glyphs. To set a sequence of glyphs, the software calls up a font through the operating system and asks for the glyphs that it needs. The way in which the glyphs are described depends on the font format: PostScript, TrueType, or any of a number of others, all of them quite different.

This then begs the question of what a glyph is. Luckily, the book includes these definitions as well:

> A glyph is the image of a symbol used in a writing system (in an alphabet, a syllabary, a set of ideographs, etc.) or in a notational system (like music, mathematics, cartog- raphy, etc.).

> A character is the simple description, primarily linguistic or logical, of an equivalence class of glyphs.

The issue of characters and glyphs is not as straight-forward as most people think, and this may seem more apparent you if you have an understanding of Asian languages. If this topic is of interest to you, I recommend reading [Surface or Essence: Beyond the Coded
Character Set Model](https://www.researchgate.net/publication/228985177_Surface_or_Essence_Beyond_the_Coded_Character_Set_Model) by [Shigeki Moro](https://hanazono.academia.edu/ShigekiMoro).

Font formats differ in the manner the glyphs for each character or symbol are stored in their respective font-resource files. A font incorporates character patterns and spacing information, and the contents of character patterns depend on the envisaged representation. (Kohen, 1989).

### Bitmap fonts

Bitmap fonts, or raster fonts, store each glyph as an array of pixels, or bitmap. They are collections of raster images of glyphs. These glyphs were described by black or white pixels, which worked fine for low resolution screens at the time, where each glyph would contain around a hundred pixels or so.

But for high resolution printing, such an approach would result in a single glyph requiring thousands of pixels to render clearly. Every new font size would call for a new set of character patterns, so it is relatively inflexible. The limitations of bitmap fonts triggered the development of outline fonts.

### Outline fonts

### Stroke-based fonts




## Further reading

- [Digital Formats for Typefaces](https://www.worldcat.org/title/digital-formats-for-typefaces/oclc/256540917&referer=brief_results)
- [Raster imaging and digital typography: Proceedings of the international conference](https://www.worldcat.org/title/raster-imaging-and-digital-typography-proceedings-of-the-international-conference/oclc/972530025&referer=brief_results)
- [Fonts & encoding](https://www.worldcat.org/title/fonts-et-encodings-translation-of-fontes-et-codages-title-from-title-screen-from-unicode-to-advanced-typography-and-everything-in-between-cover-covers-postscript-truetype-opentype-aat-metafont-and-more-cover/oclc/873851541&referer=brief_results)
- [Should the terms font and typeface be used interchangeably? ](https://typography.guru/journal/should-the-terms-font-and-typeface-be-used-interchangeably-r58/)
- [Raster, Vector, TrueType, and OpenType Fonts](https://msdn.microsoft.com/en-us/library/windows/desktop/dd162893%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396)
- [Early Digital Typography](http://www.designhistory.org/Digital_Revolution_pages/EarlyDigType.html)
- [Origins & Early Development of PostScript and Scalable Digital Type Fonts at Xerox PARC and Adobe Systems (1975 – 1989)](http://www.historyofinformation.com/expanded.php?id=1213#stq=&stp=0)
- [TEX and Metafont (1977 – 1979)](http://historyofinformation.com/expanded.php?id=3793)
