---
layout: post
title: "Fun with CSS: NBA edition"
date: 10 September, 2016
image: .jpg
tags: [css, design]
---
This is my second "Fun with CSS" post, maybe this should become a series. But anyway, I had watched the video of [Ethan Marcotte](http://ethanmarcotte.com/)'s talk at [An Event Apart](http://aneventapart.com/) called [Laziness in the Time of Responsive Design](https://vimeo.com/165061923), and was fascinated by his progressive enhancement demo. It starts at around the 48 minute mark where he starts covering animation.

> Design the transaction not the interface.

The transaction in this case, is simply to make a choice and submit it. This can be achieved with a form consisting of a simple set of radio buttons and a submission button. I highly recommend watching the entire talk, definitely lots to take away from it. The end result of the demo was really cool, and I wanted to recreate it, just for kicks.

Wasn't as straightforward as I thought, largely because the code snippets in the presentation were focused only on the key parts of the implementation, but to get the entire thing to work required some more effort. I also took a lot of [Harry Roberts](http://csswizardry.com/)'s guidance on how to structure CSS to heart, especially after I watched [CSS for Software Engineers for CSS Developers](https://vimeo.com/177216958). So this experiment took me around 2 days, and a lot of that time was spent just thinking about how to structure my CSS classes and HTML. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

## Basic HTML structure

My usual workflow starts off with plain HTML elements, without classes or even wrapper divs for that matter. Personally I'm not a big fan of infinitely nested HTML to begin with, so I really scrooge-y about adding them.

<pre><code class="language-markup">&lt;main&gt;
  &lt;h1&gt;Which was the best moment in Game 7 of the 2016 NBA Finals?&lt;/h1&gt;
  
  &lt;form action="#" method="POST"&gt;
    &lt;label&gt;
      &lt;input type="radio" name="moment" value="block"&gt;
      &lt;img src="https://www.chenhuijing.com/filerepo/block.jpg" alt="The Block"&gt;
      &lt;span&gt;The Block&lt;/span&gt;
    &lt;/label&gt;
   
    &lt;label&gt;
      &lt;input type="radio" name="moment" value="shot"&gt;
       &lt;img src="https://www.chenhuijing.com/filerepo/shot.jpg" alt="The Shot"&gt;
      &lt;span&gt;The Shot&lt;/span&gt;
    &lt;/label&gt;

    &lt;label&gt;
      &lt;input type="radio" name="moment" value="stop"&gt;
      &lt;img src="https://www.chenhuijing.com/filerepo/stop.jpg" alt="The Stop"&gt;
      &lt;span&gt;The Stop&lt;/span&gt;
    &lt;/label&gt;

    &lt;label&gt;
      &lt;input type="radio" name="moment" value="feelz"&gt;
      &lt;img src="https://www.chenhuijing.com/filerepo/feels.jpg" alt="The Feelz"&gt;
      &lt;span&gt;The Feelz&lt;/span&gt;
    &lt;/label&gt;
    &lt;/div&gt;

    &lt;button type="reset"&gt;Cancel&lt;/button&gt;
    &lt;button&gt;OK&lt;/button&gt;
  &lt;/form&gt;
&lt;/main&gt;</code></pre>

I went back-and-forth for a bit on whether I wanted the label to wrap the input element or use a for attribute with an id but eventually settled on wrapping everything up in the label element. It matters to link the label to its respective input from a semantic perspective as well to ensure a larger target for selection.

The progressive enhancement for this example is definitely not as robust as it could be, as I admittedly skipped straight to browsers that support flexbox and border-radius. Maybe one day when I have more time on my hands, I'll modify the code so it can run on really old browsers.

*Intermission time...  
Speaking of really old browsers, I recently attended a [Vintage Computing edition](http://www.meetup.com/Hackware/events/233881260/) of [Hackware](http://www.meetup.com/Hackware/), which is a monthly meet-up for hardware developers and enthusiasts.  
And my brilliant friend, [Kheng Meng](http://yeokhengmeng.com/) managed to get Windows 3.1 running on modern hardware, it was brilliant. We realised that IE5 does not support HTTPS, rendering many websites unusable. Guess who works perfectly? Google.com! <span class="emoji">👏</span> for backward compatibility.*
