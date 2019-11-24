---
layout: post
title: "DevTools as the ultimate CSS advocate"
date: November 24, 2019
tags: [css, opinion]
---
I've just come off the [Mozilla Developer Roadshow](https://mozilla-tito-devr.netlify.com/), and it's the third one I've done so far. As a Mozilla volunteer, it has been quite a privilege to be part of such a meaningful event. I'm fairly fond of this style of event, where it's focused on local communities, on sharing knowledge and updates about Firefox and web technologies in a smaller, more intimate setting.

My involvement with the roadshow started in 2017, way before I knew what developer relations was. Now, in hindsight, I was probably doing devrel-like things but just not as a full-time job. My interest in tech stemmed from the web, and I genuinely love web technologies. Native web technologies. And the internet as an infrastructure that allowed the web to exist.

Browsers fascinate me to no end as well. Because the web is one of the only places where backwards compatibility is a hard requirement. Everyone involved in growing and advancing the web, from standards bodies, to browser vendors, to open-source contributors, are aware of the phrase “we can't break the web”. And I love that.

## So about DevTools and CSS

For the latter half of this year, I've been talking mainly about DevTools for CSS, because the more I thought about it, the more I realised that DevTools is more than just a debugging tool. The nature of how developers access and use DevTools gives it the potential to be much more.

Most web developers will open DevTools at some point in their process, often when things are not behaving as expected. This is an opportunity for DevTools to help with the understanding of what is going on with their CSS.

As of now, Firefox is the only browser that is focusing on moving in this direction. They ship their new CSS features and DevTools support for that feature at the same time. And this makes perfect sense. When developers encounter and try out a new CSS feature, it is inevitable that DevTools will be invoked.

CSS has a very visual output. The value that DevTools can provide is a visualisation of what CSS is doing to the elements on the page. Most browsers have rudimentary support for things like margins, borders and paddings on each element, but that's about it.

The newer CSS features, like Flexbox, Grid or Shapes, introduce new properties and behaviours that can sometimes be complicated to people who are encountering them for the first time. One of my not-so-secret agendas is to encourage developers to use as many new (and potentially unfamiliar) CSS properties as possible.

The browser landscape has changed since the early days of Mosaic, and the speed at which new features and bug fixes are shipped has increased dramatically. If DevTools can somehow make it easier to comprehend new CSS properties and behaviours, I'm convinced that more developers would be willing to try them out for themselves.

And that is why I think DevTools can become the ultimate CSS advocate, if browser vendors choose to push their respective DevTools functionality in that direction.

## Wrapping up

Anyway, these are just some thoughts about DevTools that I've had but never had the time to explicitly state them during the talks that I give. Largely because the focus of my talks was the CSS, and DevTools was a means to explain the CSS. Because DevTools can be ah-maz-ing at explaining CSS.