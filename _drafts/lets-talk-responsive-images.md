---
layout: post
title: "Using Responsive Images (Now)"
date: October 6, 2015
tags: [css, performance]
external_url: http://alistapart.com/article/using-responsive-images-now
external_site: alistpart
---

If you have been reading most of my blog posts, you'll realise that I mention podcasts a lot. Podcasts are actually my number 1 learning resource, as well as how I keep myself up to date with the latest developments on the web. So this is yet another podcast inspired post, on responsive images. There was a great conversation about this on [Episode 99](http://thewebahead.net/99) of The Web Ahead, between Jen Simmons and [Jason Grigsby](https://twitter.com/grigs).

That was the first time I learned about the difference between <code class="language-markup">&lt;picture&gt;</code> and <code class="language-markup">srcset</code>. I didn't even know <code class="language-markup">srcset</code> existed until then. Implementing responsive images on my own website had always been on the back of my mind but I never really got around to it, until today. Ok, full disclosure, the major reason was that I recently upgraded to a retina display and my shitty non-retina images were REALLY getting to me.

###The challenge with responsive images
When the concept of responsive design came about, developers and designers have been trying to find ways to deal with the issue of responsive images. It's honestly a [hard problem](https://css-tricks.com/responsive-images-hard/) to solve, because we're serving the same website, with the same image sources, across a wide range of device widths. Do you want a blurry, pixelated image on a large display? Or do you want to load a huge (but oh so pretty) image on your mobile phone? Talk about being stuck between a rock and a hard place.

Loads of smart people, namely the [Responsive Issues Community Group (RICG)](https://www.w3.org/community/respimg/) have been working together to solve this problem. Which is why we now have the <code class="language-markup">&lt;picture&gt;</code> element and the <code class="language-markup">srcset</code> and <code class="language-markup">sizes</code> attributes being drafted into the [HTML 5.1 specification](http://www.w3.org/TR/html51/). Because we cannot predict where and how users are going to view our websites, we need the browsers themselves to pick the best image for the situation. That's what the proposed solution is trying to do. With reference to the HTML5.1 working draft (as of 9 July 2015), the new specification will address the following issues:
<ol>
  <li class="no-margin">Device-pixel-ratio-based selection</li>
  <li class="no-margin">Viewport-based selection</li>
  <li class="no-margin">Art direction-based selection</li>
  <li>Image format-based selection</li>
</ol>

The specification introduces 2 new attributes to the <code class="language-markup">&lt;img&gt;</code> element, namely <code class="language-markup">srcset</code> and <code class="language-markup">sizes</code>. <code class="language-markup">srcset</code> lets us declare a set of image sources, which browsers will serve according to certain conditions we specify using descriptors. There are <code class="language-markup"> x </code> descriptors and <code class="language-markup"> w </code> descriptors. 

###Case #1: Device-pixel-ratio-based selection
With the introduction of retina screens, it became necessary not only to take into account the resolution of the screen but the pixel density of those screens as well. Retina screens, 4K displays, UltraHD, all these displays have way more pixels packed into them compared with a standard resolution display of the same size. More pixels = sharper image quality. 

The <code class="language-markup">srcset</code> attribute is basically lists the pool of source images from which the browser can pick to load. It's a comma-separated list. The <code class="language-markup"> x </code> descriptor indicates the device-pixel ratio of the image. Depending on what environment (viewport) the browser is operating in, it will utilise this information to select the appropriate image.

<img srcset="{{ site.url }}/images/posts/responsive-images/crest-383.jpg 1.5x, {{ site.url }}/images/posts/responsive-images/crest-510.jpg 2x" src="{{ site.url }}/images/posts/responsive-images/crest-255.jpg" alt="USWNT crest" />
<pre><code class="language-markup">&lt;img src="crest-255.jpg"
     srcset="crest-383.jpg 1.5x, crest-510.jpg 2x"
     width="255" alt="USWNT crest"&gt;</code></pre>
This method works best for fixed width images. If, for some reason, you have an image that will always display at a certain width regardless of screen size, then this is the way to go. But for responsive websites, usually this is not the case, so for images dependent on the viewport width, there's a better method.

###Case #2: Viewport-based selection
For fluid-width images, we use <code class="language-markup">srcset</code> with the <code class="language-markup"> w </code> descriptor and <code class="language-markup">sizes</code>. The <code class="language-markup"> w </code> descriptor tells the browser the width of each image in the list. The <code class="language-markup">sizes</code> attribute is also a comma-separated list of 2 values. The first value is a media condition. The second value is the source-size-value, which determines the width of the image at that particular media condition. One important thing to note is that you cannot use percentages as the source-size-value, the only relative CSS length you can use is vw. 

<img srcset="{{ site.url }}/images/posts/responsive-images/uswnt-480.jpg 480w, {{ site.url }}/images/posts/responsive-images/uswnt-640.jpg 640w, {{ site.url }}/images/posts/responsive-images/uswnt-960.jpg 960w, {{ site.url }}/images/posts/responsive-images/uswnt-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/responsive-images/uswnt-640.jpg" alt="USWNT" />
<pre><code class="language-markup">&lt;img srcset="uswnt-480.jpg 480w, 
             uswnt-640.jpg 640w, 
             uswnt-960.jpg 960w,
             uswnt-1280.jpg 1280w" 
    sizes="(max-width: 400px) 100vw, 
           (max-width: 960px) 75vw, 
           640px" 
    src="uswnt-640.jpg" alt="USWNT"&gt;</code></pre>

For the above example, I'm telling the browser that for viewport widths up till 400px, make the image 100% of the viewport width. At viewport widths up till 960px, make the image 75% of the viewport width. And for everything above 960px, make the image 640px. If you're unfamiliar with vw, [Tim Severien](https://timseverien.com/) wrote a great article [explaning viewport units](https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/). 

The browser utilises the information from <code class="language-markup">srcset</code> and <code class="language-markup">sizes</code> to serve the image that best matches the stated conditions. If my browser's viewport is 600px, it would most likely display the image at 75vw. The browser will try to load the first image larger than 450px, which is <code class="language-markup">uswnt-480.jpg</code>. If I'm on a retina-display with a device-pixel ratio of 2, then the browser will try to load the first image larger than 900px, which should likely be <code class="language-markup">uswnt-960.jpg</code>. We can't be certain of exactly which image will be served because each browser has some leeway in how their algorithm picks an appropriate image based on the information we provide.

The first two use cases display the same image at different quality levels, and hence the <code class="language-markup">srcset</code> attribute alone is sufficient. If you want to show slightly different images at different widths, for example, showing only the critical parts of an image at smaller widths, then we want to use the <code class="language-markup">&lt;picture&gt;</code> element.

###Case #3: Art direction-based selection
The <code class="language-markup">&lt;picture&gt;</code> element is like a wrapper for the image and its sources. Browsers still need the <code class="language-markup">&lt;img&gt;</code> to recognise that an image needs to be served. Without the <code class="language-markup">&lt;img&gt;</code>, nothing will render at all. <code class="language-markup">&lt;source&gt;</code>s provide the browser alternate versions of the image to display. Art direction is used for situations when we want a specific image to display at a specific breakpoint. There is no ambiguity in terms of image selection when you use the <code class="language-markup">&lt;picture&gt;</code> element.

<p>
<picture>
  <source media="(min-width: 960px)" srcset="{{ site.url }}/images/posts/responsive-images/ticker-tape-large.jpg">
  <source media="(min-width: 575px)" srcset="{{ site.url }}/images/posts/responsive-images/ticker-tape-medium.jpg">
  <img src="{{ site.url }}/images/posts/responsive-images/ticker-tape-small.jpg" alt="USWNT ticker-tape parade">
</picture>
</p>

<pre><code class="language-markup">&lt;picture&gt;
  &lt;source media="(min-width: 960px)" srcset="ticker-tape-large.jpg 1024w" sizes="50vw"&gt;
  &lt;source media="(min-width: 575px)" srcset="ticker-tape-medium.jpg 640w" sizes="60vw"&gt;
  &lt;img src="ticker-tape-small.jpg" alt="USWNT ticker-tape parade"&gt;
&lt;/picture&gt;</code></pre>

The <code class="language-markup">&lt;picture&gt;</code> element is backwards compatible in that for browsers that don't support the picture element, <code class="language-markup">&lt;img&gt;</code> will be displayed as per normal. All standard attributes, like <code class="language-markup">alt</code>, for images should be applied to <code class="language-markup">&lt;img&gt;</code> not <code class="language-markup">&lt;picture&gt;</code>.

###Case #4: Image format-based selection
There have been a number of new image formats that have come into existence in recent years. These new image formats offer better quality at lower file sizes. Sounds good, right? Until you realise that none of these formats are universally supported across all browsers. WebP was released by Google and although performs very well, is only natively supported by Chrome and Opera. JPEG-XR, originally known as HD Photo, was a proprietary image format released by Microsoft, supported only by Internet Explorer. If you're interested, Zoltan Hawryluk wrote an [in-depth examination](http://www.useragentman.com/blog/2015/01/14/using-webp-jpeg2000-jpegxr-apng-now-with-picturefill-and-modernizr/) of all these new formats.

<pre><code class="language-markup">&lt;picture&gt;
  &lt;source type="image/vnd.ms-photo" srcset="wwc2015.jxr"&gt;
  &lt;source type="image/jp2" srcset="wwc2015.jp2"&gt;
  &lt;source type="image/webp" srcset="wwc2015.webp"&gt;
  &lt;img src="wwc2015.png" alt="WWC 2015"&gt;
&lt;/picture&gt;</code></pre>

Because <code class="language-markup">&lt;source&gt;</code> also has a type attribute, by specifying the MIME type of each image, browsers can choose the first source that has a type attribute of a supported MIME type. The order of the source matters, in this case, but if the browser doesn't recognise any of the image types, it will just fallback to the original <code class="language-markup">&lt;img&gt;</code> element.

###Can I use all this right now?
As of time of writing, <code class="language-markup">&lt;picture&gt;</code> is supported by the latest stable releases of Firefox, Chrome and Opera. Safari and Internet Explorer do not support <code class="language-markup">&lt;picture&gt;</code> natively at all. <code class="language-markup">srcset</code> does slightly better, with full support on the latest stable releases Firefox, Chrome and Opera, and partial support on Safari 8 and Internet Explorer Edge. 

There are quite a few polyfills out there that can address the support problem. The most well known is probably Scott Jehl's [picturefill](http://scottjehl.github.io/picturefill/). I'm currently using [respimage](https://github.com/aFarkas/respimage) on my own site. The specification is still being polished up right now but we're really close to a native responsive image solution. For all those interested, you can join the [Responsive Issues Community Group](https://www.w3.org/community/respimg/), sign up for the [newsletter](https://responsiveimages.org/) or follow them on [Twitter](https://twitter.com/respimg). 

###Further reading

<ul>
  <li class="no-margin"><a href="https://dev.opera.com/articles/native-responsive-images/">Native Responsive Images</a> by <a href="http://blog.yoav.ws/">Yoav Weiss</a></li>
  <li class="no-margin"><a href="http://blog.cloudfour.com/dont-use-picture-most-of-the-time/">Don’t use &lt;picture&gt; (most of the time)</a> by <a href="https://twitter.com/grigs">Jason Grigsby</a></li>
  <li class="no-margin"><a href="http://timkadlec.com/2013/11/why-we-need-responsive-images-part-deux/">Why We Need Responsive Images: Part Deux</a> by <a href="http://timkadlec.com/">Tim Kadlec</a></li>
  <li><a href="https://ericportis.com/posts/2014/srcset-sizes/">Srcset and sizes</a> by <a href="https://ericportis.com/">Eric Portis</a></li>
</ul>
