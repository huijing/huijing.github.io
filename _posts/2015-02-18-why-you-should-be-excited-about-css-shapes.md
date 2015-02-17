---
layout: post
title: "Why you should be excited about CSS shapes"
date: February 18, 2015
image: magazine-layout.jpg
description: Tired of rectangular layouts that look like a brick wall? With CSS shapes, your content can now flow around Beyoncé's elbow, like a boss.
tags: [css, podcasts]
---
So I just listened to [Jen Simmons' interview](https://boagworld.com/season/11/episode/1105/) on the Boagworld podcast about CSS shapes and although I've heard about CSS shapes for a while now, I never really tried it out for myself. But for some reason, this interview just compelled me to sit myself down and really understand what the excitement is all about. (Ok, it could largely be because I think [Jen Simmons](http://jensimmons.com/) is awesome and I've been listening to her fantastic podcast, [The Web Ahead](http://thewebahead.net/) for more than a year now)

The first thing I did was to read the [W3C spec](http://thewebahead.net/) for the CSS shapes module level 1. Yes, the spec does read a bit like some legal document in the beginning, but the fun starts from section 2 where all the cool stuff is. In a nutshell, CSS shapes allows us to wrap text around more than just rectangular boxes. You can now wrap your text around circles, ellipses and polygons and even images.  

Before CSS shapes came along, we were more or less locked into standard layouts of rectangular columns. We had to explain to designers who came from print design that no, we can't make the text flow around your beautifully cropped image of Beyoncé.

<div class="figure-wrapper">
<figure class="two-col">
<figcaption>You want this?</figcaption>
<img src="/images/posts/magazine-layout.jpg" alt="Magazine layout"/>
</figure>
<figure class="two-col">
<figcaption>Sorry, you get this.</figcaption>
<img src="/images/posts/web-layout.jpg" alt="Web layout"/>
</figure>
</div>

CSS shapes is being developed by the [Adobe Web Platform team](http://blogs.adobe.com/webplatform/) and they have [blogged](http://blogs.adobe.com/webplatform/category/features/css-shapes) about how this spec has been developing since 2012. Check out the cool demo the team built, based on [Alice in Wonderland](http://webplatform.adobe.com/Demo-for-Alice-s-Adventures-in-Wonderland/), to showcase CSS shapes' capabilities. Point is, with CSS shapes, it's totally possible to have text wrap around Beyoncé's elbow.

<img class="shape" src="/images/posts/beyonce.png" alt="Beyoncé"/>
To be honest, the W3C spec is not that easy to understand, so here's my attempt at explaining it in plain English. A prerequisite for applying a CSS shape property to an element is that the element must be floated. It doesn't work on non-floated elements.

If the browser you're using right now support CSS shapes, you should see text wrapping nicely around the image of Beyoncé, otherwise you'll just see the standard rectangular column of text. (Hint: Try using Chrome or Safari)

There are 4 basic shape functions you can use to define an element's shape, in other words, how you want the text to flow around your element. In addition to that, you can also extract a shape from images with an alpha channel. 

The browser identifies the required shape from the <code class="language-css">shape-image-threshold</code> property. Pixels which have a higher alpha value than the threshold will make up the shape, so it's value must be between 0.0 (transparent) to 1.0 (opaque). If, for some reason, your image doesn't load, there will be no shape to speak of.

For now, text can only flow on the opposite side of the float declared on the element, meaning if it's floated left, then the text will flow on the right, and vice versa. In the future, it will be possible to make text flow all around an element with something called [CSS exclusions](http://dev.w3.org/csswg/css-exclusions/).

<p class="no-margin">Here's an example of how you would use <code class="language-css">shape-outside</code> to make text flow along an image.</p>
<pre><code class="language-css">
.shape {
  shape-outside: url("path/to/nicely-cropped-image.png");
  shape-image-threshold: 0.5;
  shape-margin: 10px;
  float: left;
}
</code></pre>

<p class="no-margin">There are two types of shape properties:</p>

- <code class="language-css">shape-outside</code> which flows the text around a shape. This goes with the <code class="language-css">shape-margin</code> property.
- <code class="language-css">shape-inside</code> which wraps text inside a shape. This goes with the <code class="language-css">shape-padding</code> property. (This property has been deferred to [CSS shapes module level 2](http://dev.w3.org/csswg/css-shapes-2/))

###The circle() function
<img src="/images/posts/circle-example.jpg" alt="CSS shapes circle example"/>
<pre><code class="language-css">
.circle {
  /* general styles for the div*/
  width: 200px;
  height: 200px;
  background-color: #A4F4B0;
  border-radius: 50%;

  /* make it a shape!*/
  shape-outside: circle();
  float: left;
}
</code></pre>
<p class="no-margin">The formal syntax for using the circle() function is:</p> 
<pre><code class="language-css">circle( [&lt;shape-radius&gt;]? [at &lt;position&gt;]? )</code></pre>
The question marks indicate that the parameters are optional.

CSS shapes live inside a reference box, which is the basis for the coordinate system. It follows the CSS box model. [Razvan Caliman](http://razvancaliman.com/), one of the engineers working on CSS shapes, wrote a very good in-depth article on [CSS reference boxes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

The <code class="language-css">shape-radius</code> is the radius of the circle and takes any length unit (px, em, rem, etc.), as well as percentages. You can also use <code class="language-css">closest-side</code> and <code class="language-css">farthest-side</code>. 

<code class="language-css">closest-side</code> uses the length from the centre of the shape to its closest edge of the reference box. Conversely, <code class="language-css">farthest-side</code> uses the length from the centre of the shape to its farthest edge of the reference box. This property defaults to <code class="language-css">closest-side</code> if left blank.

The <code class="language-css">position</code> is represented by a pair of x and y coordinates on the element's coordinate system. It defaults to (0, 0), at the centre of the element.

CSS shapes is one of those properties that won't totally break your layout if someone is viewing it on an unsupported browser. It just falls back onto the usual rectangular column most people are already used to anyway. 

<img src="/images/posts/circle-example-fallback.jpg" alt="CSS shapes circle fallback example"/>

###The ellipse() function
<img src="/images/posts/ellipse-example.jpg" alt="CSS shapes ellipse example"/>
<pre><code class="language-css">
.ellipse {
  width: 100px;
  height: 200px;
  background-color: #A4F4B0;
  border-radius: 50%;
  
  shape-outside: ellipse();
  float: left;
}
</code></pre>

<p class="no-margin">An ellipse is just a circle that appears to have been sat on. Or squashed. So the official syntax for the ellipse() function is:</p> 
<pre><code class="language-css">ellipse( [&lt;shape-radius&gt;{2}]? [at &lt;position&gt;]? )</code></pre>

Notice the 2 behind shape-radius? This just means the function takes in 2 variables, the length of the ellipse's radius on the x-axis and another length on the y-axis. Like the circle, it defaults to <code class="language-css">closest-side</code>.
The position variable also behaves like the circle() function, and the coordinates default to (0, 0), the centre of the ellipse.

###The inset() function
<img src="/images/posts/inset-example.jpg" alt="CSS shapes inset example"/>
<pre><code class="language-css">
.inset {
  width: 200px;
  height: 160px;
  background-color: #A4F4B0;
  border-radius: 50px;
  
  shape-outside: inset(0px round 50px);
  float: left;
}
</code></pre>
It took me a bit more time to wrap my head around the inset() function, but what helped was playing around with the code on [Codepen](http://codepen.io/huijing/pen/vEdVQZ). Here's the official syntax for the inset() function:

<pre><code class="language-css">inset( &lt;shape-arg&gt;{1,4} [round &lt;border-radius&gt;]? )</code></pre>
The <code class="language-css">shape-arg</code> takes in variables the way we write the shorthand for margin or padding, in the order of top, right, bottom then left. So you can pass in 1 value, 2 values or 4 values. Inset is applied from the edge of the element inwards toward the centre.

<div class="figure-wrapper">
<figure class="two-col">
<figcaption>When <code class="language-css">shape-arg</code> is set to 0px</figcaption>
<img src="/images/posts/inset-example-2.jpg" alt="CSS shapes inset example 2"/>
</figure>
<figure class="two-col">
<figcaption>When <code class="language-css">shape-arg</code> is set to 15px</figcaption>
<img src="/images/posts/inset-example-3.jpg" alt="CSS shapes inset example 3"/>
</figure>
</div>
The optional parameter here is <code class="language-css">border-radius</code>, which allows you to create rectangles with rounded corners and flow your text along those rounded corners. Personally, I think the border-radius property is what makes the inset() function useful at all since we can already make text flow around normal rectangles, but that's just me.

###The polygon() function
<img src="/images/posts/polygon-example.jpg" alt="CSS shapes polygon example"/>
<pre><code class="language-css">
.polygon {
  width: 200px;
  height: 200px;
  clip-path: polygon(0 0, 0 200px, 200px 100px);
  background-color: #A4F4B0;
  
  shape-outside: polygon(0 0, 0 200px, 200px 100px);
  float:left;
}
</code></pre>
The polygon() function allows you to define your own shape using coordinate pairs as parameters. The official syntax for the polygon() function is:
<pre><code class="language-css">polygon( [&lt;fill-rule&gt;,]? [&lt;shape-arg&gt; &lt;shape-arg&gt;]# )</code></pre>

There is an optional <code class="language-css">fill-rule</code> property which determines how the shape will be displayed, especially when you have a complex shape with many points which may cross each other. The default value is nonzero. You can refer to the [fill-rule](http://www.w3.org/TR/SVG/painting.html#FillRuleProperty) property for more information.

Each coordinate pair will be a point on your desired shape. There has to be at least 3 points for this to work. In my example code, I used <code class="language-css">clip-path</code> to create the polygon shape by "clipping" out the bits of the element which are outside the polygon, so we can see the text flow nicely around it.

It may be pretty straightforward to create a standard shape like the triangle in my example, but for complex shapes, plotting the points would be quite a painful endeavour. Which is why [Razvan Caliman](http://razvancaliman.com/) released the [CSS Shapes Editor for Chrome](http://razvancaliman.com/writing/css-shapes-editor-chrome/). It adds an additional tab to the Elements panel called Shapes. It allows you to drag points on your shape and adjust it in the browser. The article covers exactly what you need to do to install and use the extension.

###Browser support for CSS shapes

CSS shapes has been available for Chrome since the 37 release, while Safari support came along at 7.1. Here's a look at the browser support for CSS shapes as of time of writing:

<img src="/images/posts/css-shapes.jpg" alt="Can I use CSS shapes"/>

The unfortunate thing is, neither Firefox nor Internet Explorer supports CSS shapes right now. But this is a feature that we should all keep an eye on, and get ourselves ready for, because this could potentially change the way we design websites altogether.

<p class="no-margin">Recommended reading for more CSS shapes goodness:</p>

- [Getting started with CSS shapes](http://www.html5rocks.com/en/tutorials/shapes/getting-started/) by [Razvan Caliman](http://razvancaliman.com/)
- [Using CSS shapes to enhance visual storytelling](http://blogs.adobe.com/webplatform/2013/10/23/css-shapes-visual-storytelling/) by [Razvan Caliman](http://razvancaliman.com/) (If you need more proof that CSS shapes is awesome)
- [CSS shapes 101](http://alistapart.com/article/css-shapes-101) by [Sara Soueidan](http://sarasoueidan.com/) (Sara Soueidan is the Queen of SVG and writes a tonne of brilliant articles about CSS. Follow her RIGHT NOW!)
- [CSS shapes module level 1](http://dev.w3.org/csswg/css-shapes/)
