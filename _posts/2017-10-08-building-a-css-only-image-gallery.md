---
layout: post
title: "Building a CSS-only image gallery (with fallbacks)"
date: Oct 08, 2017
tags: [css, design, translated]
---
*This article has been translated to Japanese on [SeleQt](https://www.seleqt.net/programming/bulding-a-css-only-image-gallery-with-fallbacks/).*

Sometimes, we get handed a project in which we have almost complete creative control and free-reign to do pretty much whatever. I consider myself pretty lucky to have had 2 such projects since the start of my web development career. The latest one being the website for [Wismut Labs](https://www.wismutlabs.com).

I sort of talked about how the website itself got built, from the branding, to the design and actual code, [if you're interested](https://www.wismutlabs.com/blog/whats-in-a-name/). To me, projects like these are like going on vacation, because a typical project involves a lot more stakeholders, more considerations and more compromise (on a myriad of things).

But I digress. The point today is to talk about building an experimental CSS-only image gallery, which doesn't break the experience even on older browsers. The point of an image gallery is to view images. How said images are displayed on every browser doesn't have to be identical. The TLDR is I built a little image gallery for [one of the Wismut Labs blog posts](https://www.wismutlabs.com/blog/wismut-labs-sign-mou-to-be-part-of-iiot-consortium/).

## CSS-only image gallery

A little bit of back story to how this experiment came about. I have a designer friend who was asking my opinion on a website she was designing for and one of the features was an image gallery with a slider. The site was for a company which sold second-hand <abbr title="Computer numerical control">CNC</abbr> machines.

The purpose of having an image gallery with the slider was to allow potential buyers to view the machine from as many angles and close-ups as possible. Quite reasonable, if you ask me. But I also wondered if I could build that without the use of Javascript, and after a little bit of research, I found out that it was totally possible.

First, let's break down the requirements for an image gallery with a slider. We'll need an image displayed at a reasonably large size at all times, as well as a set of thumbnails for all other images in the gallery. The displayed image should correspond to the thumbnail being clicked on, making the thumbnails the navigation for the gallery.

Keep in mind that this is just one type of image gallery with slider, and there are a myriad of behaviours for such a component, which will require different techniques to build. But for the one I just described, the relevant CSS properties to achieve the desired behaviour is as follows:

<ul>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-flexbox-1/">Flexbox</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-values-3/#viewport-relative-lengths">Viewport-percentage units</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css3-images/#the-object-fit">Object-fit</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-transforms-1/">Transforms</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css3-animations/">Animations</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css3-selectors/#target-pseudo">:target</a></li>
  <li><a href="https://www.w3.org/TR/css3-selectors/#negation">:not()</a></li>
</ul>

I like to do my demos stand-alone, just so I can get an accurate grasp of exactly what code is needed without worrying about how to integrate the component into the larger context of a website. We can worry about that bit later.

One thing I wanted to experiment with was to keep the aspect-ratio true to the original images regardless of how the viewport size changed. And also, whether it was possible for the image gallery to never exceed the bounds of the viewport.

<figure>
    <figcaption>This is Chinese supermodel, Liu Wen, who features in this demo</figcaption>
    <img src="{{ site.url }}/images/posts/responsive-slider/liuwen.jpg" srcset="{{ site.url }}/images/posts/responsive-slider/liuwen@2x.jpg 2x" alt="Liu Wen"/>
</figure>

<p class="no-margin">The markup for the gallery involves 2 lists of images, the display images and the thumbnails:</p>

<pre class="language-markup"><code>&lt;div class="container"&gt;
  &lt;ul class="slides"&gt;
    &lt;li id="slide1"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" alt="" /&gt;&lt;/li&gt;
    &lt;li id="slide2"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" alt="" /&gt;&lt;/li&gt;
    &lt;li id="slide3"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" alt="" /&gt;&lt;/li&gt;
    &lt;li id="slide4"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /&gt;&lt;/li&gt;
    &lt;li id="slide5"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" /&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;ul class="thumbnails"&gt;
    &lt;li&gt;&lt;a href="#slide1"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" /&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#slide2"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" /&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#slide3"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" /&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#slide4"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" /&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#slide5"&gt;&lt;img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" /&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>

The thumbnails and the display images are the same, I figured since I had to load the display images anyway, might as well just use them for the thumbnails and style them accordingly. That way I didn't have to prepare a second set of images for thumbnails and load those.

You'll notice that the display images all have an ID and each of the corresponding thumbnails have an `href` to those IDs. This is necessary for the `:target` pseudo-class selector to work, which allows us to apply styles to the target element of a URI containing a fragment identifier.

Because the images I chose to use for this demo are oriented in portrait, I decided to make the thumbnails display in a column on the right of the display image. `object-fit` allowed me to crop the portrait images to a landscape orientation and position them such that the focus of the image is still on key content (e.g. the model's face).

<pre class="language-scss"><code>.thumbnails {
  display: flex;
  flex-direction: column;
  line-height: 0;
  
  li {
    flex: auto; 
  }

  a {
    display: block;
  }
  
  img {
    width: 30vmin;
    height: 20vmin;
    object-fit: cover;
    object-position: top;
  }
}</code></pre>

The trick to keeping the image gallery within the bounds of the viewport at all times is the `vmin` unit. It refers to the 1% of either the viewport width or height, whichever is smaller at the moment. By setting the height of the gallery to `100vmin`, we can be assured that the gallery will never overflow the viewport.

<pre class="language-scss"><code>.slides {
  overflow: hidden;
  width: 75vmin;
  height: 100vmin;
  
  li {
    width: 75vmin;
    height: 100vmin;
    position: absolute;
    z-index: 1;
  }
  
  img {
    height: 100vmin;
    object-fit: cover;
    object-position: top;
  }
}</code></pre>

Another part of the slider, is inevitably, the sliding effect, which can be achieved with the help of CSS transforms and animations. The premise of this technique is to have all the display images translated upward 100% of their height, and have them revert to their original position when their respective thumbnail is clicked on.

The keyframes are very simple (I did not bother with any elaborate timing functions, and you're free to improve on this) and linear. These animations are triggered with the `:target` selector.

<pre class="language-scss"><code>.slides li:target {
  z-index: 3;
  -webkit-animation: slide 1s 1;
}

.slides li:not(:target) {
  -webkit-animation: hidden 1s 1;
}

@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes hidden {
  0% {
    z-index: 2;
  }
  100% {
    z-index: 2;
  }
}</code></pre>

The end result can be seen in the CodePen below. Not too much code, and even works in IE11, because the `:target` selector has been supported since IE9. It's just that IE11 doesn't support `object-fit` so the thumbnail aspect ratio is very skewed.

<p data-height="300" data-theme-id="9162" data-slug-hash="GvNLJm" data-default-tab="css,result" data-user="huijing" data-embed-version="2" data-pen-title="Responsive CSS vertical slider with thumbnails" class="codepen">See the Pen <a href="https://codepen.io/huijing/pen/GvNLJm/">Responsive CSS vertical slider with thumbnails</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Which leads to the next relevant point of discussion: **feature queries**.

## Feature queries...again?

Yes, my friend. Feature queries, all day, every day. I'm going to keep talking about feature queries until the cows come home. At least till there's a better solution (but I think this is a pretty sweet solution already).

Honestly, the existence of feature queries has changed the way I think about doing web design, and flipped a switch in my brain to start embracing the fact that different browsers will sometimes render things differently, so why not make use of it?

For this CSS-only image gallery, the least supported property is `object-fit` followed by viewport-percentage lengths. The logic behind this approach is to assess the properties critical to the functionality of the feature you're trying to build, then determine how to break down the layers of support.

I attempted to integrate the image gallery into an existing site, with an existing code-base, and lots of other elements on the page besides the gallery, which meant the `vmin` approach had to be modified somewhat.

### Basic fallback first

Although I start off with the end result in mind, I always think about the opposite end of the spectrum, which is the base level display of the components with none of the features. For an image gallery like this, it'll be a list of images (albeit with a little bit of styling).

I chose to display the images in columns as the viewport size grew larger, using the most basic layout technique, `inline-block`. Given this wouldn't be a slider at all, the thumbnails became unnecessary.

<pre class="language-scss"><code>.container {
  text-align: center;
  margin-bottom: 1em;

  ul,
  li,
  img {
    margin: 0;
  }

  li {
    list-style: none;
  }

  .slides {
    display: inline-block;

    li {
      width: 10em;
      display: inline-block;
      vertical-align: top;
      margin-bottom: 0.25em;
    }

    img {
      width: 100%;
    }
  }

  .thumbnails {
    display: none;
  }
}</code></pre>

### Layer it on

There isn't sufficient real estate on a narrow screen for the image gallery either, so the code for the image gallery kicks in beyond the minimum screen width of 540px. Anything less than that gets the images in a list. Trade-offs <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>.

A quick run-through of the CSS properties needed for the slider to work reveals that the least supported property is `object-fit`. There is no hard and fast rule for what to use in your feature query because every context is different. For this particular case, I went with `object-fit` as the basis of my feature query because it was the least supported of the lot.

<pre class="language-scss"><code>@media screen and (min-width: 540px) {
  @supports (object-fit:cover) {
    .container {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;

      .slides {
        overflow: hidden;
        width: 50vmax;

        li {
          position: absolute;
          z-index: 1;
          width: initial;
          display: block;
        }

        li:target {
          z-index: 3;
          -webkit-animation: fade 0.6s 1;
        }

        li:not(:target) {
          -webkit-animation: hidden 0.6s 1;
        }

        img {
          width: auto;
          object-fit: cover;
          object-position: top;
          height: 37.5vmax;
        }
      }

      .thumbnails {
        display: flex;
        flex-direction: column;
        line-height: 0;
        width: 13.75vmax;
        
        li {
          flex: auto;
        }

        a {
          display: block;
          border: 0;
        }
        
        img {
          object-fit: cover;
          object-position: top;
          width: 100%;
          height: calc(37.5vmax / 7);
        }
      }
    }
  }
}</code></pre>

The end result looked something like the video below (I'm not good at doing screen recordings tbh). Is it the best image slider ever? Definitely not. But it worked for the context in which it was used.

<figure>
    <figcaption>Sorry, this is a terrible screen recording</figcaption>
    <video src="{{ site.url }}/videos/css-slider.mp4" controls></video>
</figure>

There may be instances where the component you're trying to build works incrementally for the CSS properties required. In that case, you may have multiple feature queries, providing an even more nuanced level of feature support.

Again, these decisions may or may not be trivial depending on the scope and context of your project, but feature queries are an incredibly useful tool in our arsenal and we should be skilled enough to wield them masterfully regardless of whether they are used in every project or not.

## Sidenote: copy and paste is not integration

It's pretty common to find code snippets online for various functionalities like carousels, tabs, loaders etc. and a lot of them are written well, but simply copying and pasting them into your own project without an understanding of how the underlying code works tends to break things. 

Integrating someone else's code seamlessly into your own project is an underrated skill, IMHO, because it requires you to be as proficient, if not more so, than the original author in order to discern which parts of the code are relevant to the functionality you need, and which can be discarded.

## Wrapping up

As I continue to delve and experiment with various CSS properties, feature queries will remain a key ingredient in my code. I can't force anybody to use feature queries, but I do hope a handful of people who read this or see some of my demos feel curious enough to try them out.

I'm no expert, so I'm constantly tweaking, building and breaking stuff as I attempt to code whatever tickles my fancy at the moment. Did you know someone once said, the only way to get better at CSS is to CSS more (actually no, he was talking about running, but running...CSS...same difference, no? <span class="emoji" role="img" tabindex="0" aria-label="face with stuck-out tongue">&#x1F61B;</span>) Till the next one!

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
