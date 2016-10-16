---
layout: post
title: "Why image performance matters"
date: October 14, 2016
tags: [css, html, optimisation]
---
Let's face it. The web has an obesity problem. [Statistics from the httparchive](http://httparchive.org/interesting.php) shows that, as of 15 Sep 2016, the average size of a web page is 2.48mb, and 1.598mb (or 64.4%) of that is made up of images. [The httparchive](http://httparchive.org/interesting.php) has been keeping statistics on page weight since 15 Nov 2010, and the trend over the past 6 years is slightly alarming.

<img srcset="{{ site.url }}/images/posts/image-perf/page-weight-480.jpg 480w, {{ site.url }}/images/posts/image-perf/page-weight-640.jpg 640w, {{ site.url }}/images/posts/image-perf/page-weight-960.jpg 960w, {{ site.url }}/images/posts/image-perf/page-weight-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/image-perf/page-weight-640.jpg" alt="Page weight trends" />

%Note%
To add statistics on the correlation of growth of internet speed, price of mobile data, against rate of increase of web page size
%EndNote%

[Research conducted by FT.com](http://engineroom.wpengine.com/2016/04/04/a-faster-ft-com/) revealed that a slowdown of 3 seconds on page load time caused a mean percentage drop of 7.9% in article views over a period of 28 days. From an ecommerce perspective, Akamai conducted a survey back in 2009 which showed that consumers start to get impatient when pages take longer than 2 seconds to load. Mozilla managed to [increase download conversions by 15.4%](https://blog.mozilla.org/metrics/2010/04/05/firefox-page-load-speed-%E2%80%93-part-ii/) by shaving 2.2 seconds of their landing page load time back in 2010

The average internet user is no longer someone who's sitting at a desk, tapping away on a keyboard. People are using the internet from their smartphones and tablets, scrolling through their newsfeeds on the toilet, watching videos on the bus, sending chat messages while walking down the street. And because they are mobile, a stable and fast internet connection is not guaranteed.

Browsers render all the elements that make up a web page sequentially, after the HTML has been first parsed. The remaining assets that make up the web page, things like scripts, stylesheets and images, are retrieved in subsequent requests to the server. These round trips between the browser and server take time, and are expensive in terms of performance. A large image simply takes more time to load. If your user is on a spotty internet connection, large images clogging up the already limited bandwidth is just going to slow your page load time to a crawl.

[Google's analysis of mobile latency](https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/) published in September 2016 showed that the average load time for mobile sites is 19 seconds over 3G connections. Usain Bolt can run 200m in that time. From a statistical standpoint, if 64% of page weight is from images, then optimising images is a low hanging fruit in our quest for reducing page weight. 

## Alternative design choices

The common adage *prevention is better than cure* really applies when it comes to reducing page weight from images. Now these suggestions may or may not work for you depending on your style of art direction. But these are some techniques that are good to have in your back pocket.

Here, the example JPEG image clocks in at 87kb. By using the "Save for Web" option on Adobe Photoshop at 60% quality, the resultant file size was more than halved to 41kb. There are some objective methods other than eye-balling it to determine the appropriate quality level, which you can explore if you are so inclined. [Butteraugli](https://github.com/google/butteraugli) is an open-source tool you can use as a quality metric for lossy image or video compression.

<div class="figure-wrapper">
    <figure class="two-col">
        <figcaption>Original</figcaption>
        <img src="{{ site.url }}/images/posts/image-perf/headshot.jpg" srcset="{{ site.url }}/images/posts/image-perf/headshot@2x.jpg 2x" alt="Original"/>
    </figure>
    <figure class="two-col">
        <figcaption>Save for Web</figcaption>
        <img src="{{ site.url }}/images/posts/image-perf/orig.jpg" srcset="{{ site.url }}/images/posts/image-perf/orig@2x.jpg 2x" alt="Save for Web"/>
    </figure>
</div>

1. If your image has a point of focus, blur everything else. This works especially well for headshots, as [humans seem to be exceptionally sensitive to faces](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2998394/). A simple Gaussian blur of radius 1.0 reduced the file size to 36kb.
    <div class="figure-wrapper">
        <figure class="two-col">
            <figcaption>Save for Web</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/orig.jpg" srcset="{{ site.url }}/images/posts/image-perf/orig@2x.jpg 2x" alt="Save for Web"/>
        </figure>
        <figure class="two-col">
            <figcaption>Gaussian blur</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/blur.jpg" srcset="{{ site.url }}/images/posts/image-perf/blur@2x.jpg 2x" alt="Gaussian blur"/>
        </figure>
    </div>
2. Greyscale images are smaller in size than colour images. If art direction permits, saving the image in greyscale can save you quite a bit. The resultant image was 34kb. You can still colorise the greyscale image to suit design at the expense of a few extra kilobytes.
    <div class="figure-wrapper">
        <figure class="two-col">
            <figcaption>Save for Web</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/orig.jpg" srcset="{{ site.url }}/images/posts/image-perf/orig@2x.jpg 2x" alt="Save for Web"/>
        </figure>
        <figure class="two-col">
            <figcaption>Greyscale</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/bnw.jpg" srcset="{{ site.url }}/images/posts/image-perf/bnw@2x.jpg 2x" alt="Greyscale"/>
        </figure>
    </div>
    <div class="figure-wrapper">
        <figure class="two-col">
            <figcaption>Warm filter</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/warm.jpg" srcset="{{ site.url }}/images/posts/image-perf/warm@2x.jpg 2x" alt="Warm filter"/>
        </figure>
        <figure class="two-col">
            <figcaption>Cool filter</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/cool.jpg" srcset="{{ site.url }}/images/posts/image-perf/cool@2x.jpg 2x" alt="Cool filter"/>
        </figure>
    </div>
3. Combine both techniques above for extra savings. The end result is a 27kb file after blur and greyscale applied.
    <div class="figure-wrapper">
        <figure class="two-col">
            <figcaption>Save for Web</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/orig.jpg" srcset="{{ site.url }}/images/posts/image-perf/orig@2x.jpg 2x" alt="Save for Web"/>
        </figure>
        <figure class="two-col">
            <figcaption>Combined</figcaption>
            <img src="{{ site.url }}/images/posts/image-perf/combined.jpg" srcset="{{ site.url }}/images/posts/image-perf/combined@2x.jpg 2x" alt="Combined"/>
        </figure>
    </div>

## Optimising image files

The first question to ask before even touching a single image file is, do you really need an image for that? There are many effects and animations that can be achieved with just CSS alone. Once you're sure an image file is necessary, depending on its purpose and context, there are several image formats at your disposal. 

### SVG (Scalable Vector Graphics)

For icons and simple shapes, SVGs are your best bet. They scale perfectly without increasing in file size and a well-optimised SVG is often a fraction the size of its rasterised counterpart. [SVGO](https://github.com/svg/svgo) is an excellent Nodejs-based tool to help strip redundant information from SVGs without affecting its rendering. It can be installed and used directly from the command line, or as part of a project build step be it gulp or webpack. There is also [an online web app, SVGOMG](https://jakearchibald.github.io/svgomg/) which serves as a GUI version of the tool.

### JPEG (Joint Photographic Expert Group)

JPEG is a lossy file format, and was developed for compressing photographic images by removing information from the file that is not discernible by the human eye. The same image file should not be saved again and again because the quality of the image will degrade substantially. It's better to have the original working file and just export that as a JPEG image when changes need to be made. JPEGs are ideal for photographic images that don't require transparency. Not so much for line drawings or images that require precision and sharpness.

### PNG (Portable Network Graphics)

PNG is a lossless file format, and are good if you need to a fine level of detail in your images. They also handle transparency much better than GIFs. PNG-8 is the indexed colour depth version, which produces smaller file sizes but can only store 256 colours. PNG-24 has a direct colour depth, and can store the entire gamut of colours but will end up significantly larger than JPEGs or GIFs.

### GIF (Graphic Interchange Format)

GIF is also a lossless file format, and has been around for a long time, hence has excellent support. When PNGs were first introduced, GIFs were considered a safer choice, but in this day and age, the only viable use-case for GIFs is animation. And if you can get away with it, muted videos can actually be smaller in size with better quality. 

Ideally, you'd want to export your images using your image editor's "Save for Web" (or similar functionality) as demonstrated earlier, then run them through a specialised image optimiser. There are plenty of options for that, either online or as installed applications, like [FileOptimizer](http://nikkhokkho.sourceforge.net/static.php?page=FileOptimizer) for Windows or [ImageOptim](https://imageoptim.com/) for Mac and Linux.

There is also the option of using an online service like [Cloudinary](https://cloudinary.com/). Cloudinary supports a wide range of development platforms by offering client-side integration libraries and SDKs. 

If you are building a static site without any frameworks, you still upload images to your Cloudinary account and use them as your image source like you would any image hosting service. The added plus is that you can utilise the Cloudinary API to resize and transform the images you uploaded using simple URL parameters. You can even specify different image formats (Cloudinary supports even the latest ones) and all the processing is taken care of by Cloudinary's servers.

## New file formats

There are also a number of new formats being developed that offer higher quality at lower file sizes. As of now, these formats are far from being universally supported. Still, it's good to know about their existence and follow their development as we go along.

### WebP 

[WebP](https://developers.google.com/speed/webp/) is an image format for the web developed by Google that provides both lossless and lossy compression. Both compression formats support transparency and generally result in file sizes that are 3/4 the size of a comparable PNG image. It is natively supported in Chrome and Opera.

### FLIF (Free Lossless Image Format)

[FLIF](http://flif.info/) is a very recent lossless image format that supports progressive decoding. Based on [benchmarking done by Cloudinary](http://cloudinary.com/blog/flif_the_new_lossless_image_format_that_outperforms_png_webp_and_bpg), it seems to outperform all other image formats available at the moment. Currently, FLIF is not natively supported in any browser. To use it now, you will need to utilise the [Poly-FLIF polyfill](https://github.com/uprootlabs/poly-flif).

### BPG (Better Portable Graphics)

[BPG](http://bellard.org/bpg/) is a new image format meant to replace the JPEG image format. It has a high compression ratio and unlike JPEG, supports transparency. To use BPG, you will need to integrate a Javascript BPG decoder (56kb gzipped) in your site for browsers to recognise the image.

## Using the picture element and srcset attribute

The problem of responsive images has been around for quite a while now, and developers have come up with a myriad of methods to serve images appropriate to the screen size they are being displayed on. Considering the sheer number of screen sizes being used to view web pages on, this is a very tall ask. But with the introduction of the picture element and the srcset attribute, we now have a native solution to tackle this thorny problem. If you're interested, [Ars Technica](http://arstechnica.com/) published a feature on the [origin story of the picture element](http://arstechnica.com/information-technology/2014/09/how-a-new-html-element-will-make-the-web-faster/).

The picture element, srcset and sizes attributes have been drafted into the HTML 5.1 specification and as of October 2016, all major browsers, except Internet Explorer and Opera Mini, fully support both [picture](http://caniuse.com/#search=picture) and [srcset](http://caniuse.com/#search=srcset). The specification was developed off [practical use cases for responsive images](https://www.w3.org/TR/respimg-usecases/) and tackles the following issues:

<ul>
  <li class="no-margin">Device-pixel-ratio-based selection</li>
  <li class="no-margin">Viewport-based selection</li>
  <li class="no-margin">Art direction-based selection</li>
  <li>Image format-based selection</li>
</ul>

Just to clarify, `picture` is a HTML element, while `srcset` and `sizes` are attributes for the `img` element. Depending on your use case, you may not need the `picture` element to use responsive images.

Before this specification existed, browsers had no way of knowing the image size relative to the viewport or the source files' dimensions, making it impossible for the browser to intelligently serve the appropriately sized image. With `srcset`, we can declare a set of image sources complete with pixel-density and width information to the browser using `x` and `w` descriptors respectively. And the `sizes` attribute lets us tell the browser what size the image should be at a particular viewport width.

The `picture` element is a wrapper for the image element and its sources. The `source` element, in this case, will be familiar to you if you've used the `video` or `audio` elements before. We can use multiple `source` elements to specify multiple media resources for use.

If you want to serve the exact same image but in different sizes or pixel-densities, then you should use an `img` element with the `srcset` attribute defined. If you want to serve a specific image at a specific breakpoint, or serve images in one of the newer formats, then you should use the `picture` element instead.

Note that for all the use cases, whether you're using `picture` or `srcset` and `sizes`, the image `src` attribute MUST be present. Alternative text should be applied to the `img` element not the `picture` tag. If an older browser encounters such code, it will just read off the image's `src` attribute like any other image, so your image won't be broken.

### Code Examples

1. Device-pixel-ratio-based selection

    <pre><code class="language-markup">&lt;img srcset="mark-383.jpg 1.5x, mark-510.jpg 2x" src="mark-255.jpg" alt="Outsider's mark" /&gt;</code></pre>
2. Viewport-based selection

    <pre><code class="language-markup">&lt;img srcset="kaldwin-480.jpg 480w, 
                kaldwin-640.jpg 640w, 
                kaldwin-960.jpg 960w,
                kaldwin-1280.jpg 1280w" 
         sizes="(max-width: 400px) 100vw, 
                (max-width: 960px) 75vw, 
                640px" 
           src="kaldwin-640.jpg" alt="Emily Kaldwin"&gt;</code></pre>
3. Art direction-based selection

    <pre><code class="language-markup">&lt;picture&gt;
  &lt;source media="(min-width: 960px)" srcset="karnaca-large.jpg"&gt;
  &lt;source media="(min-width: 575px)" srcset="karnaca-medium.jpg"&gt;
  &lt;img src="karnaca-small.jpg" alt="City of Karnaca"&gt;
&lt;/picture&gt;</code></pre>

4. Image format-based selection

    <pre><code class="language-markup">&lt;picture&gt;
  &lt;source type="image/vnd.ms-photo" src="far-reach.jxr"&gt;
  &lt;source type="image/jp2" src="far-reach.jp2"&gt;
  &lt;source type="image/webp" src="far-reach.webp"&gt;
  &lt;img src="far-reach.png" alt="Emily's power: Far reach"&gt;
&lt;/picture&gt;</code></pre>

Cloudinary's URL-based API comes in really handy for these use cases because you can upload a single high-resolution image then define all the different sizes and formats you need by adding the necessary parameters to the image source URL. So for a viewport-based image selection use case, the code will look like this:

<pre><code class="language-markup">&lt;img srcset="http://res.cloudinary.com/huijing/image/upload/w_480/v1476458602/karnaca_fj968w.jpg 480w,
             http://res.cloudinary.com/huijing/image/upload/w_640/v1476458602/karnaca_fj968w.jpg 640w,
             http://res.cloudinary.com/huijing/image/upload/w_960/v1476458602/karnaca_fj968w.jpg 960w,
             http://res.cloudinary.com/huijing/image/upload/w_1280/v1476458602/karnaca_fj968w.jpg 1280w"
      sizes="(max-width: 400px) 100vw, 
             (max-width: 960px) 75vw, 
             640px" 
        src="http://res.cloudinary.com/huijing/image/upload/w_640/v1476458602/karnaca_fj968w.jpg"
        alt="Coast of Karnaca City"&gt;</code></pre>

## Wrapping up

Web page performance is something that has a direct impact on user experience and engagement, and image optimisation is a big part of maximising that performance. Both designers and developers have to make performance a priority when it comes to designing and building for the web. With the technology available now, we should be more than capable of producing well-designed web pages with high quality imagery without compromising page load speeds.

## Further reading and resources

<ul>
  <li class="no-margin"><a href="http://blogs.worldbank.org/opendata/where-are-cheapest-and-most-expensive-countries-own-mobile-phone">Where are the cheapest and most expensive countries to own a mobile phone?</a></li>
  <li class="no-margin"><a href="https://medium.com/@duhroach/how-png-works-f1174e3cc7b7#.ssxzmtqdz">How PNG works</a></li>
  <li class="no-margin"><a href="https://medium.freecodecamp.com/how-jpg-works-a4dbd2316f35#.miudhz3wq">How JPG Works</a></li>
  <li class="no-margin"><a href="http://ericportis.com/posts/2014/srcset-sizes/">Srcset and sizes</a></li>
  <li class="no-margin"><a href="http://alistapart.com/article/using-responsive-images-now">Using Responsive Images (Now)</a></li>
  <li><a href="https://responsiveimages.org/">Responsive Images Community Group</a></li>
</ul>

