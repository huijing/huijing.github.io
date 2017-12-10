---
layout: post
title: "Tim Brown on Shoptalk Ep. 218"
date: June 1, 2016
tags: [css, design, typography]
---
[Episode 218](http://shoptalkshow.com/episodes/218-rapidfire-60/) of [Shoptalk](http://shoptalkshow.com/) featured an audio clip by one of my favourite designers, [Tim Brown](http://tbrown.org/). It's a short clip, but it really resonated with me, and I thought I'd share it with everyone. You should really listen to the podcast in its entirety. In fact, subscribe to it in the pod-catcher of your choice, you have nothing to lose and everything to gain. Anyway, here's the full transcript of what he said.

---

Modular scales are like rulers. They help you measure, but you decide what your measuring. The real power of modular scales is that they anchor your measurements to something sturdy. Web layouts and viewport dimensions are fluid, of course, but a person's default font size, whatever that is, they have it. That is something you can count on. So it's smart to make that the basis of your measurement.

Relating various measurements by a ratio, in my experience, makes things look really good. Of course, I tweak things and eyeball things, I don't always stick to a scale. No one ratio is better than other ratios. Some people think that there's magical power in the golden section, but I think of it as a ratio that feels like some classic serifed typefaces feel. It lends that feeling to my work. That's really what I get out of ratios. It brings that certain feeling to the work in the same sort of indescribable way that using some fonts brings a feeling to the work.

At [that talk I gave at Build](https://vimeo.com/17079380), which was my first ever conference talk, I showed a couple things I would not recommend doing. One of them is I used pixels for measurement. I did that on purpose in that talk because I thought introducing modular scale math would be easier that way. I thought that showing ems, which at the time a lot of people were resistant would over-complicate the examples. I think that was a mistake because lots of people have watched the video and I don't want them to think pixels are a good thing to use for sizing.

The other thing I did was I picked a number from the modular scale for line height. That's problematic. I've come to think differently about line height. This gets to the vertical rhythm issue. This is a little tricky to explain but stay with me. Let's say you're type-setting a website. You have a font for your body text and that text is set at a specific font size, your next decisions should be about how narrow or wide the paragraphs of body text can be and still look good to you.

In a fluid layout, the width of a text block flexes within those limits. What you'll find is that wider text blocks look better with loose line spacing and narrow text blocks look better with tight line spacing. So what we really need is fluid line spacing, which i have dubbed Molten Leading.

You can pull this off with Javascript or with CSS calc() or viewport units. You see the problem here is that would interfere with vertical rhythm. I give a talk called [Universal Typography](http://universaltypography.com/), where I describe the relationship between font size, line height and width. Those 3 things are really important in combination.

Because of the way text moves in fluid compositions you almost never want to nail down your line height. It's possible that in the future, we could advance molten leading to be more like molten white-space, and that might help vertical rhythm stay intact better in a fluid composition.

But I think there's a bigger issue here, and that is that we seek definitive formulaic answers to aesthetic problems. We want rules to follow, that we feel like we did things right, so we have a defensive position when someone criticises our work. The thing is you can't prove design is good, you can only convince people. When you try to that by employing a method like vertical rhythm, which currently doesn't mesh well with the web's fluidity, you have a problem.

---

That last paragraph right there was what did it for me, reminding me that for all the rules and guidelines we try to follow, sometimes, a designer's intuition is really what makes a difference.

## Related links

<ul>
  <li class="no-margin"><a href="http://shoptalkshow.com/">Shoptalk</a></li>
  <li class="no-margin"><a href="http://tbrown.org/">Tim Brown</a></li>
  <li class="no-margin"><a href="https://vimeo.com/17079380">More Perfect Typography</a></li>
  <li><a href="http://universaltypography.com/">Universal Typography</a></li>
</ul>
