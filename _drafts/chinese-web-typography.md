---
layout: post
title: "Chinese language on the web"
date: October 16, 2016
tags: [css, typography, design, i18n]
---
If you hadn't realised by now, I am Chinese. I was born in Malaysia, then studied and now work in Singapore. Like many others with similar backgrounds, we speak both English and Chinese with native fluency, plus a smattering of other languages and dialects here and there. 

A couple of months back, I went down a rabbit hole while researching my article on CSS display and discovered the HTML ruby element. There was also an article by [Ahmad Shadeed](https://ishadeed.com/) on [CSS Writing Mode](https://ishadeed.com/article/css-writing-mode/) that was making its rounds on the interwebs. And this got me thinking about Chinese typography on the web.

Again, this is one of those posts that grew from a cute little cub into a full fledged Giant Panda, sooo here's a content list. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

## Table of contents

<ul>
  <li><a href="#but-firsta-little-history">But first...a little history</a></li>
  <li><a href="#research-triggered-brain-dump">Research-triggered brain dump</a>
    <ul>
      <li class="no-margin"><a href="#do-you-au">Do you AU?</a></li>
      <li><a href="#punctuate-what">Punctuate what?</a></li>
    </ul>
  </li>
  <li><a href="#chinese-fonts-offline-and-online">Chinese fonts, offline and online</a></li>
  <li><a href="#laying-out-chinese-fonts-on-the-web">Laying out Chinese fonts on the web</a>
    <ul>
      <li class="no-margin"><a href="#basic-terminology">Basic terminology</a></li>
    </ul>
  </li>
  <li><a href="#lets-build-a-demo">Let's build a demo</a></li>
  <li><a href="#wrapping-up">Wrapping up</a></li>
  <li><a href="#further-reading">Further reading</a>
    <ul>
      <li class="no-margin"><a href="#for-historical-context">For historical context</a></li>
      <li class="no-margin"><a href="#on-specifications">On specifications</a></li>
      <li><a href="#on-design-and-typography">On design and typography</a></li>
    </ul>
  </li>
</ul>

## But first...a little history <small><a href="#research-triggered-brain-dump">(skip to next section)</a></small>

To be fair, Chinese history is too vast a subject for a blog post. It warrants an encyclopaedic series of tomes. Instead, let's talk a bit about Chinese characters. Chinese is a logographic writing system, whereby each character itself holds meaning, whether alone or as part of a phrase. Until I researched this topic, I didn't realise that Chinese is the only logographic writing system left that is widely used in the modern world.

A [common misconception about the origin of Chinese writing](http://www.comdesignlab.com/typochina/chinese/archives/98) is that 甲骨文 (literally translates to Oracle bone script) was the earliest form of Chinese characters. These characters were carved onto animal bones or turtle shells, and mainly used for divination during the Shang dynasty. However, given its level of sophistication, Professor Zheng Huisheng posited Chinese writing had its roots in an earlier form, 陶文 (script etched on ancient pottery). Regardless, Chinese script underwent thousands of years of evolution over the dynasties before maturing into the form we know and use today.

Besides the characters themselves, there's also the issue of how these characters were laid out into texts. Traditionally, Chinese characters were written from top to bottom, right to left. Nowadays, it is quite common to see Chinese texts being laid out in a typical Western horizontal layout, and read from left-to-right instead. The first known publication that utilised a horizontal layout was 《科学》, a science magazine which, in its inaugural issue on January 1915, attributed the choice of horizontal layout purely for the sake of convenience of printing formulae.

> 本雜誌印法，旁行上左，並用西文句讀點之，以便插寫算術及物理化學諸程式，非故好新奇，讀者諒之。

Although there wasn't a conclusive explanation (that I could find) on why Chinese script traditionally used the vertical right-to-left layout, the matter of fact is nowadays, most Chinese books now use the horizontal layout. This paradigm shift was largely attributed to the 新文化运动 (New Culture Movement) during the mid 1910s and 1920s, when several prominent scholars led a revolt against traditional Chinese culture and Confucianism.

Interesting fact, the founder of my alma mater, 陈嘉庚 (Tan Kah Kee), first proposed horizontal typesetting in June 1950 at the Second Session of the First Chinese People's Political Consultative Conference (CPPCC) National Committee. Following that, on 1 Jan 1955, 《光明日报》published its first left-to-right edition stating that the move to a horizontal layout is simply a step forward in development.

> 中国文字的横排横写，是发展趋势。

The 19th and 20th centuries was a tumultuous time for China, and the aforementioned New Cultural Movement not only triggered a pivot in text layout, it also saw the introduction of simplified glyphs. 钱玄同 (Qian Xuantong), who was one of the key figures of the New Cultural Movement, played a pivotal role in this endeavour. As a result, we now have 2 "versions" of Chinese glyphs, simplified and traditional. The former used widely in China and Singapore, while the latter is commonly used in Taiwan and somewhat in Malaysia.

## Research-triggered brain dump <small><a href="#chinese-fonts-offline-and-online">(skip to next section)</a></small>

As mentioned, I seem to be awfully fond of going down rabbit holes and often barely 20% of what I read and discover end up in the article. What started out as a brief foray into the history of Chinese writing ended up becoming a deep dive into how the world ended up the way it is. There are a lot of ideas that popped into my head during this process and I'm just going to dump them here. Feel free to skip forward (but <span class="emoji">😘</span> if you read through).

### Do you AU?

My understanding about the history of computing came from reading books and watching the odd documentary. Recently, Jen Simmons posted a tweet asking about graphic design resources from a non-American perspective. This got me thinking. I suppose the reason for vertical scrolling is because the Western world had a step up, a first-mover advantage, if you will, when it came to digital. But why was that? Why didn't the Industrial Revolution happen in China, given that it was comparably developed back during the 18th century. A couple papers I read proposed some theories I found pretty thought-provoking.

[Before the Great Divergence: The modernity of China at the onset of the industrial revolution](http://voxeu.org/article/why-china-missed-industrial-revolution) by [Jan Luiten van Zanden](http://www.uu.nl/staff/JLvanZanden/0) proposed that China didn't 'miss' the Industrial Revolution, rather it did not need it at the time. China was one of the most technologically advanced civilisations for a large swath of human history, and perhaps this may have been it's disadvantage as well. Innovation is often borne from necessity, and I'd like to think that the Chinese invention of printing was a prime example of that kind of innovation.

*FYI, printing was invented by 毕昇 (Bi Sheng) during the Song dynasty. Not much is known about the details of his life, but it seemed he worked at a print shop. It was there he created the first movable type system using clay types.*

Imagine an alternate universe where Eastern culture reigned supreme. How would we code if Chinese was the universally used language of choice. I find this almost as abstract as imagining higher dimensions. Because I'm already so anchored by code being written in alphabets, I wonder how code would have been written using a logographic writing system. Perhaps the keyboard wouldn't be the primary input mechanism at all. How differently would the world have developed?

### Punctuate what?

I also wandered down the rabbit hole of punctuation, largely because I often swap between Chinese and English when messaging my friends and punctuation using Chinese language input is mono-spaced. I use the ellipsis way too much than I should and end up switching inputs simply to type in 3 periods in my Chinese conversation. So I wondered if Chinese language originally had punctuation to begin with. As far as I knew, the ancient scrolls I saw in museum exhibits never had commas or periods.

Traditionally, Chinese was written in its classical form, known as 文言文 (possibly translated as Literary Chinese, I think). It's beauty is in that a lot of meaning can be expressed in very few words. Punctuation was generally not required as the necessary pauses could be inferred from standardised sentence structures and phrases used, giving a natural cadence when read.

As the language evolved, the spoken version of Chinese started to diverge from this classical style and eventually became quite distinct. Even though some well-known novels like were written in vernacular Chinese, formal texts were written in classical Chinese. Hence, a majority of the population who weren't educated in classical Chinese could not understand much of the printed texts.

Part of the New Cultural Movement also involved the spread of vernacular Chinese as the mainstream form of written Chinese, in a bid to increase literary rates among the people. As much of this linguistic development was modelled after Western doctrines, punctuation found its way into written Chinese texts.

## Chinese fonts offline and online <small><a href="#laying-out-chinese-fonts-on-the-web">(skip to next section)</a></small>

The details are fuzzy to me now, but I do recall hours spent troubleshooting why Chinese wouldn't display correctly on the various computers I was tasked to fix years ago. Text would appear as 乱码, each character displayed as a rectangular block instead of legible text. Chinese input was sketchy on Windows 95, so we used a software called Chinese Star instead. 

Chinese language support nowadays is pretty good IMHO, and I can't remember having to explicitly troubleshoot display issues in recent years. Although I read and write Chinese quite often on my PC, I don't actually use any Chinese software applications, so if you have issues with those, check out [Pinyin Joe's Chinese Computing Help Desk](http://www.pinyinjoe.com/windows-8/win8-chinese-intro.htm).

A common term when discussing Chinese fonts is CJK, which simply stands for Chinese/Japanese/Korean fonts. Adobe developed the CID-keyed font file format for fonts with large character sets, and CJK fonts were derived from this technology. A typical professional Chinese font has around 20,000 glyphs, give or take couple thousand, which explains why most Chinese font files measure in the megabyte range. This also makes using custom fonts online quite a challenge.

My go-to resource for all things Chinese fonts online is UI consultant, [Kendra Schaefer](http://www.kendraschaefer.com/). She wrote very comprehensive posts on [using Chinese web fonts on her own blog](http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/) and [a complete primer to Chinese typography for Sitepoint](https://webdesign.tutsplus.com/articles/the-complete-beginners-guide-to-chinese-fonts--cms-23444). You should really read them. If you want to use Chinese web fonts for your project, she's got you covered.

## Laying out Chinese fonts <small><a href="#lets-build-a-demo">(skip to next section)</a></small>

But we want to talk about layout for Chinese fonts, using CSS. The [CSS Writing Modes Level 3 module](https://drafts.csswg.org/css-writing-modes-3/) covers CSS support for various international writing modes, from left-to-right, right-to-left, bidirectional and vertical. The specification has some terminology that describes the flow of text for writing systems.

### Basic terminology

The **inline base direction** refers to the direction that content is ordered on a line, and defines where the line starts and ends. This post's inline base direction is left to right. The `direction` property, the `unicode-bidi` property (more on this later) and the inherent directionality of any text content will dictate the ordering of inline-level content within a line. 

The **block flow direction** refers to the direction block-level boxes stack and the direction of this stacking within their container. The `writing-mode` property dictates the block flow direction. So for this post, the block flow direction is top to bottom.

The **typographic mode** is applicable to vertical scripts (think traditional Chinese or Japanese), and dictates if the text should have typographic conventions for vertical flow, which is different from a rotated horizontal script.

There are 2 writing modes, **horizontal writing mode** has horizontal lines of text which flows from top to bottom, **vertical writing mode** has vertical lines of text which can flow from left to right or right to left.

### 

## Let's build a demo!

If you do not declare a Chinese font, punctuation may render oddly on Chrome and Safari
Simplified and Traditional chinese punctuation positions differ
Flexbox is great for centering images
No italics, and sometimes no bold, change font style instead?
ideal line length? no idea, took reference from print, commonly seen book heights and line lengths


## Wrapping up

What started out as an article to explore the CSS writing mode property grew into an exploration of Chinese history and the key circumstances that led to the China that we know of today. But it also made me realise that a lot of the articles and books I read are very skewed towards western and American perspectives (not that it's a bad thing, just an observation). 

I'm lucky enough to be fluent in Chinese, and hence there is a wealth of resources written from an Eastern perspective (okay, mainly Chinese) that are accessible to me. But this also made me realise that the onus is on me to seek out perspectives that are different from what I'm familiar with. Middle eastern design and typography is definitely something I'll be looking into moving forward. Fun times ahead, people.

## Further reading

### For historical context

<ul>
  <li><a href="http://www.shobserver.com/news/detail?id=1563">中文书啥时开始“变横”的？</a></li>
</ul>

### On specifications

<ul>
  <li class="no-margin"><a href="https://drafts.csswg.org/css-writing-modes-3/">CSS Writing Modes Level 3</a></li>
  <li class="no-margin"><a href="https://developer.mozilla.org/en/docs/Web/CSS/writing-mode">writing-mode on MDN</a></li>
  <li class="no-margin"><a href="http://unicode.org/reports/tr9/">Unicode Bidirectional Algorithm</a></li>
  <li class="no-margin"><a href="https://www.w3.org/International/articles/inline-bidi-markup/uba-basics">Unicode Bidirectional Algorithm basics</a></li>
  <li class="no-margin"><a href="https://w3c.github.io/typography/">Improving text layout and typography on the Web and in eBooks</a></li>
  <li><a href="https://www.w3.org/TR/clreq/#characters_and_the_principles_of_setting_them_for_chinese_composition">Requirements for Chinese Text Layout</a></li>
</ul>

### On design and typography

<ul>
  <li class="no-margin"><a href="https://medium.com/@bobtung/best-practice-in-chinese-layout-f933aff1728f#.yrd09wz1h">Best Practices for Chinese Layout</a></li>
  <li class="no-margin"><a href="https://hanzi.pro/manual/">汉字标准格式</a></li>
  <li class="no-margin"><a href="http://www.comdesignlab.com/typochina/chinese">Typochina</a></li>
  <li class="no-margin"><a href="http://blog.justfont.com/">JustFont Blog</a></li>
  <li class="no-margin"><a href="http://www.slideshare.net/cxpartners/chinese-web-design-patterns-how-and-why-theyre-different/">Chinese web design patterns</a></li>
  <li class="no-margin"><a href="http://daoinsights.com/chinese-user-experience-how-we-read-on-the-web/">CHINESE USER EXPERIENCE – How We Read On The Web</a></li>
  <li class="no-margin"><a href="https://www.smashingmagazine.com/author/kendraschaefer/?rel=author">On China’s Bleeding Edge: Web Design Trends 2015</a></li>
  <li><a href="http://dangrover.com/blog/2016/01/31/more-chinese-mobile-ui-trends.html">More Chinese Mobile UI Trends</a></li>
</ul>
