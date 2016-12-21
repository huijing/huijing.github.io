---
layout: post
title: "Images, the web's nutrition problem"
date: December 14, 2016
tags: [css, html, optimisation]
---
Okay, that wasn't my best headline, writing is hard. But let's face it, the web has an obesity problem. I remember the first time I did some research for a talk I gave at Talk.JS back in 2015, and found [the httparchive](http://httparchive.org/interesting.php), which had statistics on web page sizes since 2010. I said that exact phrase during the talk, and let's just say I don't think the web has started on its diet plan or gym membership yet. 

And because I'm a weirdo who likes charts, I wanted to see how this weight gain happened over the past 6 years. It probably crept up on us, I mean, you can't just wake up 30 pounds heavier overnight. As of 15 Nov 2016, the average size of a web page is 2.47mb, and 1.615mb (or 65.4%) of that is made up of images. So I plotted the weights of different content types over time to how the trend looked. If images were donuts, the web was eating more and more of them over time.

<img srcset="{{ site.url }}/images/posts/image-perf/page-weight-480.jpg 480w, {{ site.url }}/images/posts/image-perf/page-weight-640.jpg 640w, {{ site.url }}/images/posts/image-perf/page-weight-960.jpg 960w, {{ site.url }}/images/posts/image-perf/page-weight-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/image-perf/page-weight-640.jpg" alt="Page weight trends" />



[Research conducted by FT.com](http://engineroom.wpengine.com/2016/04/04/a-faster-ft-com/) revealed that a slowdown of 3 seconds on page load time caused a mean percentage drop of 7.9% in article views over a period of 28 days. From an ecommerce perspective, Akamai conducted a survey back in 2009 which showed that consumers start to get impatient when pages take longer than 2 seconds to load. Mozilla managed to [increase download conversions by 15.4%](https://blog.mozilla.org/metrics/2010/04/05/firefox-page-load-speed-%E2%80%93-part-ii/) by shaving 2.2 seconds off their landing page load time back in 2010.

According to [ICT Facts and Figures 2016 report](http://www.itu.int/en/ITU-D/Statistics/Pages/facts/default.aspx) published by the [International Telegraph Union (ITU)](http://www.itu.int/en/about/Pages/default.aspx), mobile broadband subscriptions are growing at a much faster rate than fixed broadband subscriptions in developing countries. But the matter of fact is [only 15% of the world's citizens have access to affordable high-speed internet](http://www.worldbank.org/en/publication/wdr2016). It is our responsibility as people who build for the web to optimise our sites and applications so we are not exacting additional economic burden to our users, especially those 85% for whom high-speed internet is a significant expense.

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

## New file formats

There are also a number of new formats being developed that offer higher quality at lower file sizes. As of now, these formats are far from being universally supported. Still, it's good to know about their existence and follow their development as we go along.

### WebP 

[WebP](https://developers.google.com/speed/webp/) is an image format for the web developed by Google that provides both lossless and lossy compression. Both compression formats support transparency and generally result in file sizes that are 3/4 the size of a comparable PNG image. It is natively supported in Chrome and Opera.

### FLIF (Free Lossless Image Format)

[FLIF](http://flif.info/) is a very recent lossless image format that supports progressive decoding. Based on [benchmarking done by Cloudinary](http://cloudinary.com/blog/flif_the_new_lossless_image_format_that_outperforms_png_webp_and_bpg), it seems to outperform all other image formats available at the moment. Currently, FLIF is not natively supported in any browser. To use it now, you will need to utilise the [Poly-FLIF polyfill](https://github.com/uprootlabs/poly-flif).

### BPG (Better Portable Graphics)

[BPG](http://bellard.org/bpg/) is a new image format meant to replace the JPEG image format. It has a high compression ratio and unlike JPEG, supports transparency. To use BPG, you will need to integrate a Javascript BPG decoder (56kb gzipped) in your site for browsers to recognise the image.

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

