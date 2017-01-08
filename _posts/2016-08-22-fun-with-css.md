---
layout: post
title: "Fun with CSS: TechLadies edition"
date: 22 August, 2016
image: tl-ws2.jpg
tags: [css, design]
---
So there's this thing going on known as the [TechLadies Bootcamp](http://www.techladies.co/). TechLadies is a community-led initiative for women in Asia to connect, learn, and advance as programmers in the tech industry (I lifted that verbatim from the website <span class="emoji" role="img" tabindex="0" aria-label="face with stuck-out tongue">&#x1F61B;</span>). I was helping out with one of the pre-bootcamp workshops covering, what else, HTML and CSS.

The goal of the workshop was to introduce the basics of the Internet, plus an introduction to HTML and CSS. Our task for the day was to style a simple Ruby application, called Guess The Number. Although the application was built in Ruby, the participants only needed to concern themselves with the views portion.

Given I was supposed to be teaching this workshop, I figured I'd better do some leg-work first, and try my hand at styling the application myself. I guess I got a little carried away, in that things got a bit too fancy for a beginner's workshop. But it was really fun for me and I thought I'd share what I did for the fancy edition.

## Application mark-up  

The [base application](https://github.com/TechLadies/guess-the-number-sinatra) was written by [Gabe Hollombe](http://avantbard.com/), probably in 5 minutes with one hand tied behind his back, because he's brilliant like that <span class="emoji" role="img" tabindex="0" aria-label="smiling face with sunglasses">&#x1F60E;</span>. There were 3 main views, the start page, play page and win page. Excellent, because it provided just enough material to cover for a beginner's workshop.

<p class="no-margin"><strong>index.html</strong></p>
<pre><code class="language-markup">&lt;body class="flex start"&gt;
  &lt;main class="flex-item"&gt;
    &lt;h1 class="title"&gt;
      &lt;span&gt;Guess The&lt;/span&gt; 
      &lt;span&gt;Number&lt;/span&gt;
    &lt;/h1&gt;

    &lt;div class="text-wrapper"&gt;
      &lt;p&gt;Here's a simple game you can play to try and guess the number I'm thinking of.&lt;/p&gt;
      &lt;p&gt;Ready to play?&lt;/p&gt;
      &lt;a class="btn" href="/new"&gt;Start!&lt;/a&gt;
    &lt;/div&gt;
  &lt;/main&gt;
&lt;/body&gt;</code></pre>

<p class="no-margin"><strong>play.erb</strong></p>
<pre><code class="language-markup">&lt;body class="flex play"&gt;
  &lt;main class="flex-item"&gt;
    &lt;div class="text-wrapper"&gt;
      &lt;h1&gt;I'm thinking of a number between 1 and 100.&lt;/h1&gt;
      &lt;h2&gt;&lt;%= guess_prompt %&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;%= guess_description %&gt;&lt;/p&gt;

      &lt;form action="/play" method="post"&gt;
        &lt;input class="guess-value" type="number" name="guessed_number" min="0" max="100" autofocus /&gt;
        &lt;input class="btn" type="submit" value="Guess" /&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/main&gt;
&lt;/body&gt;</code></pre>

<p class="no-margin"><strong>win.erb</strong></p>
<pre><code class="language-markup">&lt;body class="flex play"&gt;
  &lt;main class="flex-item"&gt;
    &lt;div class="text-wrapper"&gt;
      &lt;h1&gt;You Win!&lt;/h1&gt;
      &lt;img class="trophy" src="img/trophy.svg" alt="Trophy"&gt;
      &lt;h2&gt;You guessed it! I was thinking of the number &lt;%= secret_number %&gt;.&lt;/h2&gt;
      &lt;a class="btn" href="/new"&gt;Play Again&lt;/a&gt;
    &lt;/div&gt;
  &lt;/main&gt;
&lt;/body&gt;</code></pre>

## But first, let me add some resets

<pre><code class="language-css">html {
  box-sizing: border-box;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
p {
  margin: 0;
  padding: 0;
}

input,
button {
  appearance: none;
  display: block;
  border: 0;
  border-radius: 0;
  outline: 0;
  font-size: inherit;

  &:hover,
  &:active,
  &:focus {
    border: 0;
    outline: 0;
  }
}

img {
  max-width: 100%;
}</code></pre>

## General layout

Centre all the things with flexbox! To keep things simple, I just made everything right smack in the middle of the page, and no better way to do that now than with flexbox. 

<pre><code class="language-css">.flex {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
}

.flex-item {
  flex: 1 1 100%;
}</code></pre>

The `.flex` class was applied on the `body` element while the `.flex-item` class was applied to the `main` element.

## Opening title

I wanted a skewed, slanted effect for the title, kind of like those television game show opening sequences (or least, those in my head). And it had to be BIG, so you couldn't miss it. So I went for a sans-serif that was chunky, but narrow. [Fjalla One](https://fonts.google.com/specimen/Fjalla+One) felt right to me. The whole title was a bit long, so I split it up with <code>span</code> tags.

<pre><code class="language-css">h1 {
  font-family: 'Fjalla One', sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.title {
  font-size: 15vmin;
  margin: 5vmin 0;

  span {
    transform: rotate(-10deg) skew(-10deg);
    display: block;
    text-shadow: 1px 1px #333, 2px 2px #333, 3px 3px #333, 4px 4px #333, 5px 5px #333, 6px 6px #333;
  }
}</code></pre>

### transform

 But the crux of the title style is the `transform`</code>` property. CSS transforms allow us to do all kinds of fun stuff, like in Photoshop but with code. I wrote about [basic 2D transforms]({{ site.url }}/blog/basics-of-css-transforms/) a while back, if anyone is interested to find out more about this awesome property.

<figure>
    <img src="{{ site.url }}/images/posts/tl-ws2/title.svg" alt="Transforming the title">
    <figcaption>First rotate -10 degrees, then skew -10 degrees</figcaption>
</figure>
<pre><code class="language-css">span {
  transform: rotate(-10deg) skew(-10deg);
}</code></pre>

If you want to combine multiple transforms, they should be applied to the same transform property. Meaning if you declare the individual transforms one after another in two separate properties, only the last one will apply.

<p class="no-margin"><strong>Wrong way to do it:</strong></p>
<pre><code class="language-css">span {
  transform: rotate(-10deg);
  transform: skew(-10deg); /* Only this one will take */
}</code></pre>

### text-shadow

I also wanted the letters to have a solid 3D look to them. Cue the `text-transform` property. This property takes in 4 arguments in total, but the last 2 arguments, `blur-radius` and `color`, are optional. Each shadow is specified as an off-set from the text, and multiple shadows can be applied. In order to get that 3D look I wanted, I applied 6 text-shadows in total.
<pre><code class="language-css">span {
  text-shadow: 1px 1px #333, 2px 2px #333, 3px 3px #333, 4px 4px #333, 5px 5px #333, 6px 6px #333;
}</code></pre>

If you wanted to do something like a rainbow-layered block effect, then your code might look something like this:
<pre><code class="language-css">span {
  text-shadow: 1px 1px red, 2px 2px orange, 3px 3px yellow, 4px 4px green, 5px 5px blue, 6px 6px violet, 7px 7px indigo;
}</code></pre>

## Page background

By right, CSS gradients are cannot be animated. But by left, we can sort of hack it to work. Note the term hack. This particular hack I'm using is a performance killer, which means I need to research a bit further on more performant techniques, maybe involving `will-change` or some way of manipulating an extra `div` or 2 with `transform: translate()` instead. Stay tuned, folks.

But for now, as I ask for forgiveness from the performance gods, hacky method it is. The trick involves animating the `background-position` property (which is extremely resource-heavy because it's triggering a repaint for every frame of the animation <span class="emoji" role="img" tabindex="0" aria-label="pensive face">&#x1F614;</span>.

<pre><code class="language-css">body {
  height: 100%;
  margin: 0;
  color: $white;
  font-family: "Average", serif;
  position: relative;
  background: linear-gradient(45deg, #7a378b, #b44473);
  background-size: 1000% auto;
  animation: fade 7s ease infinite;
}

@keyframes fade {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}</code></pre>

But essentially, what we have here is a background gradient which is much larger than what is visible, then animating the background-position along the x-axis over a span of 7 seconds (in this example). Because we're animating a gradient and the colours I'm using blend quite subtly together, the performance jank may not be that obvious, but trust me, the animation is janky.

### Fake multiple background effect

In the play and win pages, I also added a number pattern to the background. At first I wanted to make use of the fact that modern browsers support multiple CSS backgrounds but because I used the background-position hack earlier, I could not. So rather than adding another `div` just for the additional background, I used the `::after` pseudo-element instead.

<pre><code class="language-css">.play::after,
.win::after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('img/bg.png');
}</code></pre>

The position properties make sure the element spans the entire viewport, while the `z-index` was set to -1 so it would render under the other elements on the page.

## Press-able buttons

Flat design is nice and everything, but I like my buttons with a bit of movement. The depressed effect when the button is clicked can be achieved by styling the `box-shadow` property. Add a 4px offset-y box-shadow below the button, then translate the button downwards by 4px while removing the box shadow when the button is clicked by styling the `:active` pseudo-class.

<pre><code class="language-css">.btn {
  font-family: 'Fjalla One', sans-serif;
  color: #000;
  padding: 0;
  text-decoration: none;
  margin: 0 auto;
  display: block;
  position: relative;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  line-height: 90px;
  border: 2px solid #648c30;
  background: #8cc049;
  box-shadow: 0 4px #648c30;

  :hover {
    border: 2px solid #648c30;
  }

  :active {
    box-shadow: 0 0 #648c30;
    transform: translateY(4px);
  }
}</code></pre>

## Big number input

This is quite minor, but I also wanted the number input to be nice and large. Simply because this was the only important thing on the page anyway. Given the game ran numbers from 1 to 100, the input only needed enough space for 3 digits plus the default stepper. I went with `ch` for units because it seemed apt. Note: `ch` is the width of the character "0" in the current font.

<pre><code class="language-css">.guess-value {
  font-size: 10vmin;
  text-align: center;
  width: 4ch;
  margin: 0 auto 1rem;
}</code></pre>

## Wrapping up

And that's about it. You can check out the entire source code for the project on [GitHub](https://github.com/huijing/guess-the-number-sinatra) under the **fancy** branch and see the live site at [https://tl-workshop-2.herokuapp.com/](https://tl-workshop-2.herokuapp.com/).

Also, information about TechLadies can be found at their [official website](http://www.techladies.co/), and also checkout their [Facebook page](https://www.facebook.com/TechLadies/) for the latest updates.
