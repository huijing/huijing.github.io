---
layout: post
title: "Friends don't let friends implement dark mode alone"
date: May 24, 2019
tags: [design, css]
image: blend-dark-mode
---
So I have [this friend, Wei](https://twitter.com/wgao19), who's basically an expert with CSS blend modes, right? And she came up with a really interesting method to implement dark mode on her site with blend modes. Then [wrote about it](https://dev.wgao19.cc/2019-05-04-sun-moon-blending-mode/), because sharing is caring.

It just so happens that my site's generally green-ish theme gets blended into purple with the technique she described, so I figured it's time to add an experimental feature to my site. I also want to highlight that she really does it 1000 times better on [her own site](https://dev.wgao19.cc/).

If you use React, you're in luck because she's released it as [a plugin](https://github.com/wgao19/sun-moon-toggle) you can install and add some blend mode goodness to your site as well. But I'm clearly not a cool kid who uses React. So maybe don't do what I did if you're running something similar?

## The gist of it

This particular technique involves overlaying a `div` which takes up the full viewport, has the same colour as your main background and a `mix-blend-mode` of `difference`, over your site. That was a horrible sentence, I'm sorry.

What blend modes do is mix the colours of the source element with the content behind it via a “mixing” formula. Each of the different blend mode values are essentially combining the 2 colours in according to different formulas.

<img srcset="{{ site.url }}/assets/images/posts/blend-dark-mode/difference-480.png 480w, {{ site.url }}/assets/images/posts/blend-dark-mode/difference-640.png 640w, {{ site.url }}/assets/images/posts/blend-dark-mode/difference-960.png 960w, {{ site.url }}/assets/images/posts/blend-dark-mode/difference-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/blend-dark-mode/difference-640.png" alt="Simplified diagram of how difference works for blend modes">

For an in-depth explanation on the intuition behind the math, you should [watch Wei talk about it](https://www.youtube.com/watch?v=iUoon3GneRA) at [Talk.CSS #38](https://singaporecss.github.io/38/). I'm just the friend who steals her friend's code, or at least, some of it.

First of all, we need a `div` for your site to blend with. This `div` has to be on top of everything else, so put it just inside your `body` element for optimum results. To make it cover the entire viewport, you can do something like this:

```css
.blender {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: color('sugarcane');
  mix-blend-mode: difference;
  pointer-events: none;
}
```

And you should see your site colours magically invert before your very eyes.

<img srcset="{{ site.url }}/assets/images/posts/blend-dark-mode/light-dark-480.png 480w, {{ site.url }}/assets/images/posts/blend-dark-mode/light-dark-640.png 640w, {{ site.url }}/assets/images/posts/blend-dark-mode/light-dark-960.png 960w, {{ site.url }}/assets/images/posts/blend-dark-mode/light-dark-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/blend-dark-mode/light-dark-640.png" alt="Screenshot of Hui Jing's website comparing light mode on the left with dark mode on the right">

## But wait, there's more…

But this isn't exactly what I wanted. At least, not yet. What we need next, is a toggle. In case you hadn't cued in, my site is sort of, kind of Minecraft-y. So why not use the sun and moon from Minecraft? Either people can tell, or they won't. It doesn't matter either way.

My toggle is actually a checkbox with a souped-up label. Because I'm using the checkbox as a state tracker. You'll see later. Theoretically, this can go anywhere because it's going to be explicitly positioned but I put mine directly under the full-screen `div`.

```html
<input type="checkbox" class="blend-checkbox" id="blendToggle">
<label for="blendToggle" class="blend-toggle"></label>
```
It's going to be a round thingy people can click on with the Minecraft sun applied as a background image, so apply styles like so:

```css
.blend-toggle {
  position: fixed;
  height: 3rem;
  width: 3rem;
  left: 1rem;
  bottom: 1rem;
  border-radius: 50%;
  background-image : url('/assets/images/sun.png');
  background-position: center;
  background-size: cover;
  z-index: 1;
}
```
## …there's more…

Now, we could switch the checkbox with the full-screen `div` then use the sibling selector to activate the `div` when the checkbox is checked and handle this whole thing without Javascript, but turns out in order to keep state between pages, even the hackiest method needs some help from Javascript.

My hackiest method here refers to using `localStorage` to determine if the user toggled dark mode or not. But I'm still using the checkbox status to keep track of what CSS class needs to be applied to make the `div` “active”.

```javascript
const blendCheckbox = document.getElementById('blendToggle')
const blender = document.getElementById('blender')
blendCheckbox.addEventListener('click', toggleBlend, false)

function toggleBlend(e) {
  if (e.target.checked) {
    localStorage.checked = true
    blender.classList.add('active')
  } else {
    localStorage.checked = ''
    blender.classList.remove('active')
  }
}

(function() {
  blendCheckbox.checked = localStorage.checked
  if (localStorage.checked) {
    blender.classList.add('active')
  } else {
    blender.classList.remove('active')
  }
})()
```
So Wei's site when viewed on desktop has this fancy expansion of the full-screen `div` from behind the toggle which looks kinda cool, so of course I was going to steal that. But I just based it on viewport width instead, so anything larger than `960px` gets that, and everything below gets fade in/out effect.

```css
.blender {
  position: fixed;
  background-color: color('sugarcane');
  mix-blend-mode: difference;
  pointer-events: none;
}

@media screen and (max-width: 959px) {
  .blender {
    opacity: 0;
    height: 100vh;
    width: 100vw;
    transition: opacity 0.5s ease;
  }
}

@media screen and (min-width: 960px) {
  .blender {
    height: 3rem;
    width: 3rem;
    left: 1rem;
    bottom: 1rem;
    border-radius: 50%;
    left: calc(50% - 24rem);
    transition: transform 0.7s ease-out;
  }
}
```
When the toggle is clicked, if the checkbox is checked, then an `active` class is applied to the full-screen `div`.

```css
@media screen and (max-width: 959px) {
  .blender.active {
    opacity: 1;
  }
}

@media screen and (min-width: 960px) {
  .blender.active {
    transform: scale(100);
  }
}
```
## …there's always more

Most of the stuff on the site is safe to invert, but there are some things, like images or emojis which are better off left as they were, so in comes the `isolation` property. Setting it to a value of `isolate` turns the element into a stacking context, excluding it from being blended.

```css
.blender.active ~ .blend-toggle {
  background-image : url('/assets/images/moon.png');
  isolation: isolate;
}

img,
.external-url::before,
.emoji {
  isolation: isolate;
}
```
We also want our toggle to be keyboard accessible, so add in a `:focus` state and style it however you like:

```css
.blend-checkbox:focus ~ label {
  outline: 5px auto -webkit-focus-ring-color;
}
```
Lastly, we need to take into account all the browsers that do not support CSS blend modes, like the pre-Chromium edge browser, for example. 

So wrap all the blend mode related stuff within a media query and users of those browsers will be none the wiser. This is experimental anyway so they're not missing anything.

```css
@supports (mix-blend-mode: difference) {
  /* All the blender, toggle and whatever goes here */
}
```

## Why my implementation is not great

If you tried this experimental feature on my site, you'll notice that between pages, because of latency with the Javascript checking `localStorage` to apply the relevant CSS class, there's a flash of light between the dark modes.

It's highly not ideal. Wei's site is smooth as butter because React is taking care of things under the hood (at least I think that's the reason, but what do I know). My point is, this works on my site but it certainly isn't pretty.

Regardless, it was fun to implement and I'll keep it on there just to annoy people who disdain that flash of lightness between pages if they so happen to toggle dark mode. Because I'm not a very nice person.

## Wrapping up

Recently, Firefox 67 has started to support `prefers-color-scheme`, which allows sites to adopt their styles to match an user's preference to light or dark schemes. This is supported in Safari as well, with Chrome coming in later this year.

That's probably going to be THE way to do dark mode moving forward, but this experiment isn't about dark mode per se, it's about blend modes. Sort of. 

So, yeah, it's your site and your content. Do whatever pleases you.

Because you're worth it.