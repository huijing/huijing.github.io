---
layout: post
title: "Grid + Flexbox: the best 1-2 punch in web layout"
date: Mar 2, 2017
tags: [css, translated]
hascodepen: true
---
*This article has been translated to French by [Pierre Choffé](https://twitter.com/pierrechoffe) on [La Cascade](https://la-cascade.io/grid-et-flexbox-le-duo-gagnant/).*

We're 5 days away from the stable release of Firefox 52. Do you know what this means? This means in 5 days, CSS Grids will be supported, And Chrome 57 will follow close behind on March 14, then Safari 10.1 and hopefully Edge, before the end of 2017.

I'm so excited.

Can you tell how excited I am? Maybe some emojis can help convey the message. <span class="emoji" role="img" tabindex="0" aria-label="confetti ball">&#x1F38A;</span><span class="emoji" role="img" tabindex="0" aria-label="person gesturing ok">&#x1F646;</span><span class="emoji" role="img" tabindex="0" aria-label="party popper">&#x1F389;</span><span class="emoji" role="img" tabindex="0" aria-label="person dancing">&#x1F483;</span>

## My deep dive into CSS grid

Remember when [Rachel Andrew](https://rachelandrew.co.uk/) answered the question of [whether we should use Flexbox or Grid?](https://youtu.be/MXEzJ-IncX0?t=1274) No? Watch the video then.

> Flexbox for 1 dimensional layout.  CSS Grid is for 2 dimensional layout.  
> — Rachel Andrew

I'm sure smarter people than me have this figured out by now but until my recent month-long torrid affair with CSS Grid, I didn't realise how well Flexbox and Grid went together. It was like peanut butter and jelly, or apples and cinnamon, or bacon and eggs. Oh my gosh, I'm getting hungry.

Some of you may have noticed that I've started contributing to [Codrops CSS Reference](https://tympanus.net/codrops/css_reference/). It's seriously one of the best things that happened to me in 2016, I might write about it. Or not. We'll see. One of the pending entries on the list was for CSS Grid. Before I started writing that entry, I had only played around a little bit with Grid, and built a prototype version of [Penang Hokkien](http://penang-hokkien.gitlab.io/) using Grid just to see if it would play better with vertical writing-mode than Flexbox.

Then I sat down and wrote the entry.

3 weeks later, I felt like I had fused with a max-level [Metal Cactuar](http://exvius.gamepedia.com/Metal_Cactuar) (that's a Final Fantasy Brave Exvius reference, I can't help it, Final Fantasy is a thing in my life <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>), in other words, it was a major levelling-up. I spent a lot of time with the actual specification, all 86 pages of it (according to my print settings).

There were also the [CSS Grid articles](https://blogs.igalia.com/mrego/) written by [Manuel Rego Casasnovas](https://twitter.com/regocas) which really dive into specific features of Grid, like positioned items, grid layout placement and auto-placement. And Rachel Andrew's [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment) was such a life-saver, because another resource I was using had the axes mixed up, making me extremely confused for a few days.

Here's my tip. When trying to learn any CSS property, have a [blank HTML template](https://github.com/huijing/blank-html5) on hand so you can play around in a clean sandbox environment. This was especially useful for a new feature like Grid. I know we have Codepen and all, but I like a blank slate for distraction-free experimentation.

## Examples and demos

As I worked my way through the properties, I started off building very basic grids, just to see how each property value worked. If you've seen the syntax for `grid-template-rows` in the specification, you'll realise that this was not a trivial task. Grid itself is not hard to learn. But because it was built to be very flexible and powerful, you'll need to spend a bit more time to get to know Grid.

A few of those basic grids grew into proper demos. Some demos were inspired by conversations with people from the [CSS Layout Club](https://www.meetup.com/CSS-Layout-Club/). I'm also auditing [Ideas from the History of Graphic Design](https://www.coursera.org/learn/graphic-design-history/home/welcome) on Coursera, so plenty of inspiration from there too (last week was Bauhaus week <span class="emoji" role="img" tabindex="0" aria-label="red heart">&#x2764;&#xFE0F;</span>).

I came across this page from Malerei, Fotografie, Film by László Moholy-Nagy which was laid out in a grid and the first thought that popped into my mind was, that can be done in CSS...I think. Well, only one way to find out.

<figure>
    <figcaption>Page 126 of Malerei, Fotografie, Film</figcaption>
     <img srcset="{{ site.url }}/assets/images/posts/bauhaus/126-480.jpg 480w, {{ site.url }}/assets/images/posts/bauhaus/126-640.jpg 640w, {{ site.url }}/assets/images/posts/bauhaus/126-960.jpg 960w, {{ site.url }}/assets/images/posts/bauhaus/126-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/bauhaus/126-640.jpg" alt="Page 126 of Malerei, Fotografie, Film" />
</figure>

## Bauhaus in my browser

Here's my process. I drew grid lines over the image in Sketch so I could figure out how many columns I needed. For this case, it worked out to be 1 large column followed by 5 narrower columns of equal width and I let the browser figure out the row heights. 

<pre><code class="language-css">.grid {
  display: grid;
  grid-template-columns: 30% 9% 9% 9% 9% 9%;
  justify-content: center; /* to justify the grid in the middle of the container */
}</code></pre>

After that, it was a whole bunch of placement code with the `grid-row` and `grid-column` properties. But if you look at the original image again, you'll see that the content in each grid cell is have their own alignment. Like the first cell's contents are flush to the right, the word in the second cell is flush left and bottom, and so on.

My first instinct, since I got this whole box alignment thing all figured now, was to apply `justify-self` and `align-self` where necessary to adjust the content positions within each grid cell. Nice try, close but no cigar. The issue with doing that is these 2 properties affect the amount of space occupied by the grid cell.

The Bauhaus design has a lot of striking black borders around each grid cell. The border property applies onto the grid item. Any grid alignment property other than `stretch` will make the size of the grid item fit to its contents. Any borders applied to grid items naturally fit the grid item's contents, so I couldn't do that, it messed up the design.

<figure>
    <figcaption>These are not the borders you're looking for</figcaption>
     <img style="max-height:15em;" src="{{ site.url }}/assets/images/posts/bauhaus/fit.svg" alt="Diagram of grid items fitting to content size" />
</figure>

## Flexbox to the rescue

By default, all grid items behave as if their alignment had been set to `stretch` on either axis. So I left that alone, to allow the grid to actually look like a grid. Instead, I applied `display: flex` to the grid item, allowing me to use flex alignment properties applied on the flex container to position my grid item's content. <span class="emoji" role="img" tabindex="0" aria-label="smiling face with sunglasses">&#x1F60E;</span>

<figure>
    <figcaption>That's more like it</figcaption>
     <img style="max-height:15em;" src="{{ site.url }}/assets/images/posts/bauhaus/flex.svg" alt="Diagram of grid items fitting to content size" />
</figure>

<pre><code class="language-css">.grid__item:nth-child(5) {
  grid-row: 3 / 5;
  border-right: 1em solid;
  padding: 1em;
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}</code></pre>

The code looks something like that, but my point is, this is a great technique for building layouts. Grid for the grand scheme of things, and Flexbox for specific adjustments. Here's the Codepen link if anybody is interested in the final result.

<p data-height="300" data-theme-id="9162" data-slug-hash="PpqomV" data-default-tab="css,result" data-user="huijing" data-embed-version="2" data-pen-title="Malerei, Fotografie, Film (pg. 126)" class="codepen">See the Pen <a href="http://codepen.io/huijing/pen/PpqomV/">Malerei, Fotografie, Film (pg. 126)</a> by Chen Hui Jing (<a href="http://codepen.io/huijing">@huijing</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Bonus segment: CSS shapes

Other than the 2 photographs on the page, everything else is CSS, which means the arrow and the gear are actually styled `div`s. I love making CSS shapes, single `div`, if possible. You just need a few handy properties to help you, `box-shadow`, `border` and pseudo-elements.

### Arrow

Arrows are pretty straight-forward. You just need 1 extra pseudo-element for the arrow-head. Make the `div` the body of the arrow, and give it `position: relative` so you can absolutely position the arrow head relative to the body. The arrow head is a triangle, which can be made using the border trick.

<pre><code class="language-css">.arrow {
  width: 0.5em;
  height: 65%;
  background-color: #000;
  position: relative;
  
  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1em;
    border-style: solid;
    border-width: 1em 1em 0 1em;
    border-color: #000 transparent transparent transparent;
  }
}</code></pre>

### Gear

This was a little bit more tricky. The gear body itself is a circle, which is `border-radius: 50%`, but the gear teeth will need more trickery. I couldn't do it with a single `div` this time (though if anyone can, please tell me how). I had an additional inner `div` to help with the gear teeth. The good thing is that all the gear teeth are the same shape, so the `box-shadow` trick can be used here.

<pre><code class="language-css">.gear {
  height: 5em;
  width: 5em;
  background-color: #000;
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    content: '';
  }
  
  &::before {
    height: 3em;
    width: 1em;
    box-shadow: 0em -3em 0em 0em #000, 0em 3em 0 0em #000;
  }
  
  &::after {
    height: 1em;
    width: 3em;
    box-shadow: 3em 0 0em 0em #000, -3em 0 0 0em #000;
  }
}</code></pre>

The gear body and the 4 compass direction gear teeth were made with a single `div` and its 2 corresponding pseudo-elements. For the other 4 gear teeth, I used the inner `div` with pseudo-elements then rotated the `box-shadow`s. I still need to figure out the `transform-origin` issue because I think it looks a bit asymmetrical at the moment.

<pre><code class="language-css">.inner-gear {
  height: 2em;
  width: 2em;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e1e1d5;
  
  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
  }
  
  &::before {
    height: 3em;
    width: 1em;
    box-shadow: 0em -3em 0em 0em #000, 0em 3em 0 0em #000;
    transform: rotate(45deg);
    transform-origin: (75% 75%);
  }
  
  &::after {
    height: 1em;
    width: 3em;
    box-shadow: 3em 0 0em 0em #000, -3em 0 0 0em #000;
    transform: rotate(45deg);
    transform-origin: (25% 75%);
  }
}</code></pre>

## Wrapping up

I find Grid really awesome, and I'm obviously not the only person who thinks so. [Jen Simmons](http://jensimmons.com/) has compiled a list of really good Grid resources so check out [Learn CSS Grid](https://web.archive.org/web/20190305235601/http://jensimmons.com/post/feb-27-2017/learn-css-grid) and try building something with Grid. You won't regret it. <span class="emoji" role="img" tabindex="0" aria-label="grinning face with smiling eyes">&#x1F601;</span>

