---
layout: post
title: "DevTools as the ultimate CSS advocate"
date: November 24, 2019
tags: [css, opinion]
hastweet: true
---
I've just come off the [Mozilla Developer Roadshow](https://mozilla-tito-devr.netlify.com/), and it's the third one I've done so far. As a Mozilla volunteer, it has been quite a privilege to be part of such a meaningful event. I'm fairly fond of this style of event, where it's focused on local communities, on sharing knowledge and updates about Firefox and web technologies in a smaller, more intimate setting.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">📢 <a href="https://twitter.com/hj_chen?ref_src=twsrc%5Etfw">@hj_chen</a> is talking about all the awesome features of CSS Grid 🔥<a href="https://twitter.com/mozilla?ref_src=twsrc%5Etfw">@mozilla</a> <a href="https://twitter.com/hashtag/DevRoadshow?src=hash&amp;ref_src=twsrc%5Etfw">#DevRoadshow</a> 🇹🇭 <a href="https://t.co/yrCByTl7lF">pic.twitter.com/yrCByTl7lF</a></p>&mdash; Henry Lim ✈️ #DevFest 🇮🇩🇲🇾 (@henrylim96) <a href="https://twitter.com/henrylim96/status/1197146053176225793?ref_src=twsrc%5Etfw">November 20, 2019</a></blockquote>

My involvement with the roadshow started in 2017, way before I knew what developer relations was. Now, in hindsight, I was probably doing devrel-like things but just not as a full-time job. My interest in tech stemmed from the web, and I genuinely love web technologies. Native web technologies. And the internet as an infrastructure that allowed the web to exist.

Browsers fascinate me to no end as well. Because the web is one of the only places where backwards compatibility is a hard requirement. Everyone involved in growing and advancing the web, from standards bodies, to browser vendors, to open-source contributors, are aware of the phrase “we can't break the web”. And I love that.

## So about DevTools and CSS

For the latter half of this year, I've been talking mainly about DevTools for CSS, because the more I thought about it, the more I realised that DevTools is more than just a debugging tool. The nature of how developers access and use DevTools gives it the potential to be much more.

Most web developers will open DevTools at some point in their process, often when things are not behaving as expected. This is an opportunity for DevTools to help with the understanding of what is going on with their CSS.

As of now, Firefox is the only browser that is focusing on moving in this direction. They ship their new CSS features and DevTools support for that feature at the same time. And this makes perfect sense. When developers encounter and try out a new CSS feature, it is inevitable that DevTools will be invoked.

<img srcset="{{ site.url }}/assets/images/posts/devtools-css/browsers-480.jpg 480w, {{ site.url }}/assets/images/posts/devtools-css/browsers-640.jpg 640w, {{ site.url }}/assets/images/posts/devtools-css/browsers-960.jpg 960w, {{ site.url }}/assets/images/posts/devtools-css/browsers-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/devtools-css/browsers-640.jpg" alt="Devtools layout inspector">

CSS has a very visual output. The value that DevTools can provide is a visualisation of what CSS is doing to the elements on the page. Most browsers have rudimentary support for things like margins, borders and paddings on each element, but that's about it.

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">CSS GRID IS ANIMATABLE. WHAT?! 🤯<br><br>Did not know this. <br>Now I know this. <br>TIL!<br><br>Thanks, <a href="https://twitter.com/hj_chen?ref_src=twsrc%5Etfw">@hj_chen</a>! 😍<a href="https://twitter.com/hashtag/ViewSourceConf?src=hash&amp;ref_src=twsrc%5Etfw">#ViewSourceConf</a> <a href="https://t.co/m7GTtXWv0Q">pic.twitter.com/m7GTtXWv0Q</a></p>&mdash; Tejas Kumar (@TejasKumar_) <a href="https://twitter.com/TejasKumar_/status/1179012406418251776?ref_src=twsrc%5Etfw">October 1, 2019</a></blockquote>

The newer CSS features, like Flexbox, Grid or Shapes, introduce new properties and behaviours that can sometimes be complicated to people who are encountering them for the first time. One of my not-so-secret agendas is to encourage developers to use as many new (and potentially unfamiliar) CSS properties as possible.

The browser landscape has changed since the early days of Mosaic, and the speed at which new features and bug fixes are shipped has increased dramatically. If DevTools can somehow make it easier to comprehend new CSS properties and behaviours, I'm convinced that more developers would be willing to try them out for themselves.

And that is why I think DevTools can become the ultimate CSS advocate, if browser vendors choose to push their respective DevTools functionality in that direction.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">.<a href="https://twitter.com/hj_chen?ref_src=twsrc%5Etfw">@hj_chen</a>’s talk on layout logic is a reminder of how great the <a href="https://twitter.com/FirefoxDevTools?ref_src=twsrc%5Etfw">@FirefoxDevTools</a> are for CSS layout work <a href="https://twitter.com/hashtag/ViewSourceConf?src=hash&amp;ref_src=twsrc%5Etfw">#ViewSourceConf</a> <a href="https://t.co/YtG4N1dvVd">pic.twitter.com/YtG4N1dvVd</a></p>&mdash; Melanie Richards (@soMelanieSaid) <a href="https://twitter.com/soMelanieSaid/status/1179010663009718272?ref_src=twsrc%5Etfw">October 1, 2019</a></blockquote>

## Wrapping up

Anyway, these are just some thoughts about DevTools that I've had but never had the time to explicitly state them during the talks that I give. Largely because the focus of my talks was the CSS, and DevTools was a means to explain the CSS. Because DevTools can be ah-maz-ing at explaining CSS.