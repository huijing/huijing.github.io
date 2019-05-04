---
layout: post
title: "CSS variables for fun and no profit"
date: Mar 28, 2019
tags: [javascript, css]
---
I run a [little monthly CSS meet-up](https://singaporecss.github.io) called Talk.CSS, and the man who founded this endeavour with me one fine October morning back in 2015, had moved back to Melbourne. That man is [Chris Lienert](https://twitter.com/cliener), and below is his handsome profile. So handsome that he is sometimes mistaken for Hawkeye. <span class="kaomoji">¯\\\_(ツ)_/¯</span>

<figure>
  <figcaption>Uncanny…squint and they could be twins</figcaption>
  <img src="{{ site.url }}/assets/images/posts/chris-script/hawkeye.jpg" srcset="{{ site.url }}/assets/images/posts/chris-script/hawkeye@2x.jpg 2x" alt="Chris profile photo next to Hawkeye profile photo">
</figure>

The background of what shall be now termed as “The Chris Script” (trademark pending) goes something like this. During the first meetup of 2019, which was the first one that took place after Chris's farewell, I had the dumb idea of putting up a profile photo of Chris on an iPad next to me while I introduced the meetup.

But then, I couldn't really find a high-resolution photo of Chris online, and my iPad didn't fare too well as a photo frame. Out of the blue, I got a better idea. Simply the best. Better than all the rest. Why not have Chris heads randomly popping up from all directions on the [Talk.CSS introduction slides](https://singaporecss.github.io/talk.css)?

## Implementing the Chris script

The most important thing as this point was to request a high resolution profile photo of the man himself, which Chris gamely provided, having no idea what I was going to do with it. His faith is admirable. After a bit of minor cropping, I had on my hands a lovely Chris head image.

My first idea was to load 1 Chris head on the site, offset it out of frame to start with, then randomly translate/rotate it back into the viewport so it looked like the head would peek in from all sides after some predefined length of time. Turns out this was harder than expected, given the combination of `translateX`, `translateY` and `rotate` values.

Eventually I decided to go with 4 Chris heads instead. I'm fairly sure someone smarter than me can do it with 1 Chris head, but my brain couldn't figure it out and seriously, I have a day job, you know. Like I mentioned earlier, 3 transform values are involved here.

If you're interested in how the slides themselves were built, I [wrote a little something]({{ site.url }}/blog/html-slides-without-frameworks/) a while back which covers it, so give it a look if you're curious. To that, I added a `<div>` at the bottom of the page with the 4 Chris heads like so:

```html
<div class="nonsense" id="nonsense">
  <img class="chris-top jsChris" src="img/chris.png" srcset="img/chris@2x.png 2x" alt="The one and only Chris Lienert">
  <img class="chris-right jsChris" src="img/chris.png" srcset="img/chris@2x.png 2x" alt="The one and only Chris Lienert">
  <img class="chris-bottom jsChris" src="img/chris.png" srcset="img/chris@2x.png 2x" alt="The one and only Chris Lienert">
  <img class="chris-left jsChris" src="img/chris.png" srcset="img/chris@2x.png 2x" alt="The one and only Chris Lienert">
</div>
```

Class name and ID are `nonsense` because that's exactly what this idea is. Nonsense. But loads of fun, and that's all that matters. There would definitely be some Javascript involved, and what I like to do is make sure my Javascript-related CSS classes are only used for that purpose. For me, I choose to prefix them with a `js`.

### CSS-y bits

The initial set up for the 4 Chris heads are as follows:

```css
:root {
  --tx: 0;
  --ty: 0;
}

.nonsense {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  text-align: initial;
}

[class^="chris"] {
  position: absolute;
}

.chris-top {
  transform: translate(var(--tx, 0), -100%) rotate(180deg);
}

.chris-right {
  transform: translate(calc(100vw + 1em), var(--ty, 0)) rotate(-90deg);
}

.chris-bottom {
  transform: translate(var(--tx, 0), 100vh) rotate(0deg);
}

.chris-left {
  transform: translate(calc(-100% - 1em), var(--ty, 0)) rotate(90deg);
}
```

As you can see, there are some CSS custom properties involved. Because I wanted an easier way to introduce the random positioning element, and I thought `style.setProperty` was a convenient way to do it.

So the nice part about transform functions is that you can use `calc()` functions within them, though it doesn't work entirely right in Internet Explorer and if you need to support that, [a workaround](https://www.saninnsalas.com/using-calc-inside-css3-transform-in-internet-explorer/) is in order.

Also, when using CSS custom properties, the second parameter passed into the `var()` syntax is a fallback in case the custom property value somehow **fails to compute**. It is, however, **not** going to work if the browser doesn't support CSS custom properties at all.

This initial set of styles position all 4 Chris heads just out of the viewport. The idea is to have a function trigger every 20 seconds to add the `.active` class randomly on 1 of the Chris heads at a time. The `.active` class would run an animation effect that translates the head back into the viewport.

```css
.chris-top.active {
  animation: popdown 4000ms ease;
}

.chris-right.active {
  animation: popleft 4000ms ease;
}

.chris-bottom.active {
  animation: popup 4000ms ease;
}

.chris-left.active {
  animation: popright 4000ms ease;
}

@keyframes popdown {
  50% {
    transform: translate(var(--tx, 0), 0) rotate(180deg);
  }
}

@keyframes popleft {
  50% {
    transform: translate(calc(100vw - 100%), var(--ty, 0)) rotate(-90deg);
  }
}

@keyframes popup {
  50% {
    transform: translate(var(--tx, 0), calc(100vh - 100%)) rotate(0deg);
  }
}

@keyframes popright {
  50% {
    transform: translate(0, var(--ty, 0)) rotate(90deg);
  }
}
```

### Javascript-y bits

There's probably a neater way to write this function, but I'm a lazy person. So this is it. Behold, the Chris Script (trademark pending)!

```javascript
(function() {
  const chrisHeads = document.getElementsByClassName('jsChris')
  const nonsense = document.getElementById('nonsense')
  var lastActiveHead = null

  function headAppear() {
    // the bit that does the random positioning
    nonsense.style.setProperty('--tx', Math.floor(Math.random() * 100) + 0 + 'vw')
    nonsense.style.setProperty('--ty', Math.floor(Math.random() * 100) + 0 + 'vh')

    // the bit that randomly assigns the .active class
    if (lastActiveHead) lastActiveHead.classList.toggle('active')
    const random = Math.floor(Math.random() * (chrisHeads.length - 1)) + 0
    const randomHead = chrisHeads[random]
    randomHead.classList.toggle('active')
    lastActiveHead = randomHead

    // the bit that determines how long before a Chris head pops out
    setTimeout(headAppear, 20000)
  }
  headAppear()
})()
```
If I do have some extra time on my hands, I'll think about how to refactor this thing to work with only 1 Chris head in the DOM. But for now, this implementation seems to serve its purpose.

## Wrapping up

I don't know what the useful takeaway is here, other than CSS custom properties provide a really convenient way for Javascript to hook into CSS. And that I tend to do many useless things with my time, but it was fun though, and isn't that kinda important? (I also had to Google how to spell convenient multiple times, shhhh… don't tell everyone)

<img srcset="{{ site.url }}/assets/images/posts/chris-script/chris-script-480.jpg 480w, {{ site.url }}/assets/images/posts/chris-script/chris-script-640.jpg 640w, {{ site.url }}/assets/images/posts/chris-script/chris-script-960.jpg 960w, {{ site.url }}/assets/images/posts/chris-script/chris-script-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/chris-script/chris-script-640.jpg" alt="Chris is watching you">