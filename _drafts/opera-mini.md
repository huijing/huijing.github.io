---
layout: post
title: "We need to talk about Opera Mini"
date: Mar 07, 2017
tags: [css]
---
Earlier this year, [Jen Simmons](http://jensimmons.com/) asked the following question:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">From your memory, which browser has now twice the user base of Internet Explorer (globally)? (Don’t cheat — what’s your impression?)</p>&mdash; Jen Simmons (@jensimmons) <a href="https://twitter.com/jensimmons/status/824023709925212160">January 24, 2017</a></blockquote>

I managed to get the right answer (UC Browser) by virtue of elimination, not because I actually knew the statistics <span class="emoji" role="img" tabindex="0" aria-label="face with stuck-out tongue & closed eyes">&#x1F606;</span>. But what I do know, is that one of the options I have on my phone was not on that list. Yes, this is my semi-fail segue into talking about Opera Mini. Writing is hard <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>.

## Who uses Opera Mini?

Guess what? I do. I'm reasonably confident that I am possibly the only person in Singapore using a [BLU Win HD LTE](http://www.gsmarena.com/blu_win_hd_lte-7205.php). It currently runs on Windows 10 Mobile, and I like it. Microsoft Edge uses EdgeHTML as its layout engine and Chakra as its Javascript engine. Both desktop and mobile versions use the same engine, which is more than I can say for iOS browsers <span class="emoji" role="img" tabindex="0" aria-label="fire (burn)">&#x1F525;</span>.

Anyway, back to Opera Mini. The browser usage share for February 2017, according to StatCounter is 3.3%. That's actually more than Edge 14 (1.49%) and Safari 10 (1.54%) combined. Regionally, the lion's share of users for Opera Mini are from Africa, followed by Asia.

Africa is a significant market for Opera and they have focused on developing features that address key challenges for people in that region: high data costs, limited network capacity, growing page weights and background data consumption. These challenges apply to lower-income countries in other regions as well.

## Different modes on Opera Mini

Opera Mini has different modes, which affect data consumption and also rendering. Each of the operating systems uses a version of Opera Mini with a different set of modes. Check out the full table at [Opera Browsers, Modes & Engines](https://dev.opera.com/articles/browsers-modes-engines/).

There are 4 Operating Systems that can run Opera Mini: Android, iOS, J2ME and Windows Phone, and 3 different rendering engines depending on which mode is chosen.

<div class="figure-wrapper">
    <figure class="multiple">
        <figcaption>iOS</figcaption>
        <img src="{{ site.url }}/images/posts/opera-mini/ios.png" srcset="{{ site.url }}/images/posts/opera-mini/ios@2x.png 2x" />
    </figure>
    <figure class="multiple">
        <figcaption>Android</figcaption>
        <img src="{{ site.url }}/images/posts/opera-mini/android.png" srcset="{{ site.url }}/images/posts/opera-mini/android@2x.png 2x" />
    </figure>
</div>

<div class="figure-wrapper">
    <figure class="multiple">
        <figcaption>J2ME</figcaption>
        <img src="{{ site.url }}/images/posts/opera-mini/j2me.png" srcset="{{ site.url }}/images/posts/opera-mini/j2me@2x.png 2x" />
    </figure>
    <figure class="multiple">
        <figcaption>Windows 10</figcaption>
        <img src="{{ site.url }}/images/posts/opera-mini/win10.png" srcset="{{ site.url }}/images/posts/opera-mini/win10@2x.png 2x" />
    </figure>
</div>

### Presto, server-side 

This version is what runs on J2ME and Windows Phone. It can be selected as *Opera Mini* mode on iOS and *Extreme* mode on Android. The most significant feature for this mode is its server-side compression. 

Opera Mini can act as a proxy browser, meaning the requests from the browser will go through Opera's transcoding servers before being forwarded to the website's server. When the server returns its response, it too passes through Opera's servers, it gets transcoded into Opera Binary Markup Language (OBML) which then gets progressively loaded on the user's device.

<figure>
    <figcaption>Opera Mini architecture diagram</figcaption>
    <img src="{{ site.url }}/images/posts/opera-mini/architecture.svg" />
</figure>

The transcoding process involves parsing of HTML and CSS, as well as execution of Javascript. What is received by Opera Mini at the end of it is an “interactive snapshot of the document's state”. The data savings from this can be up to 90% over the network, but the downsides are standards support is limited, hence quite a few CSS properties are not supported and Javascript may not behave in ways you expect.

Some people might be concerned with is security, given that all data will pass through Opera's servers. Opera ensures that the traffic between your handset and their servers is encrypted when browsing secure webpages, but they would require access to the unencrypted version of the webpage to implement compression.

### Android WebView

Opera Mini on Android phones also have a *High* mode option, which runs on [Android WebView](https://developer.chrome.com/multidevice/webview/overview). WebView is based on Chromium and uses the V8 Javascript engine. By default, if you are connected to Wi-Fi and using this mode, data savings are disabled unless you explicitly turn it on in the Settings.

There is also something called Video Boost, which is an option you can toggle from the Data Savings settings as well. Activating it will trigger video compression to reduce the size of the video file during the transcoding process.

### WebKit, system

Opera Mini on iOS phones have 2 additional modes, *Normal* and *Turbo*. Both these modes run on WebKit, as is expected for all browsers on iOS. The difference between them is that *Turbo* is a proxy browser, which works similarly to *Mini* mode except that the compression is much less aggressive, allowing websites to generally render as expected.

## Developing with Opera Mini in mind

This is a recap of my own experience and some thought processes that led to certain decisions. Point is, it's necessary to understand that there will be people who browse your site using Opera Mini mode. It could be 1 person, it could be 100, it could be 100,000. I've often heard the argument that people using Opera Mini are not the target audience so it doesn't matter.

It does matter. I'm not saying spend months trying to build an Opera Mini specific implementation, nor am I advocating for limiting features simply because Opera Mini doesn't support them. I want everyone to go ahead and explore and learn the latest and greatest, experiment and build wonderful experiences. But it is a must that the most basic content is accessible from Opera Mini.

When it's all said and done, if we strip away all the scripts and styles, can people understand your message? Properly structured text and optimised images. That's the crux of it. Layer on all the styles and effects and animations, go as far as you want, but make sure they are built upon a solid foundation.

## @supports is your best friend

For all the things Opera Mini does not support, the one thing it does have going for it, is @supports. In fact, without `@supports` (also known as feature queries), life would be a lot harder when it comes to layering on enhancements.

Opera first implemented in Nov 2012. Both Chrome and Firefox had it since May 2013. So people have been writing about feature queries over the years, though it seems that awareness of its broad support is not well-known. In fact, a lot of early coverage was not written in English (maybe that's why, I can't say for sure).

<ul>
  <li class="no-margin"><a href="http://myakura.hatenablog.com/entry/2012/08/08/012516">@supports ― CSSのFeature Queries</a> by Masataka Yakura, August 8 2012</li>
  <li class="no-margin"><a href="https://dev.opera.com/articles/native-css-feature-detection/">Native CSS Feature Detection via the @supports Rule</a> by Chris Mills, December 21 2012</li>
  <li class="no-margin"><a href="https://davidwalsh.name/css-supports">CSS @supports</a> by David Walsh, April 3 2013</li>
  <li class="no-margin"><a href="https://ar.al/scribbles/responsive-typography-with-css-feature-queries/">Responsive typography with CSS Feature Queries</a> by Aral Balkan, April 9 2013</li>
  <li class="no-margin"><a href="http://www.creativebloq.com/css3/how-use-supports-rule-your-css-11410545">How to use the @supports rule in your CSS</a> by Lea Verou, January 31 2014</li>
  <li class="no-margin"><a href="https://fedin.co.il/css-feature-queries/">CSS Feature Queries</a> by Amit Tal, June 2 2014</li>
  <li class="no-margin"><a href="http://blogs.adobe.com/webplatform/2014/08/21/coming-soon-css-feature-queries/">Coming Soon: CSS Feature Queries</a> by Adobe Web Platform Team, August 21 2014</li>
  <li><a href="http://www.pixelfreu.de/blog/details/items/css-feature-queries-mittels-supports.html">CSS feature queries mittels @supports</a> by 
Daniel Erlinger, November 27 2014</li>
</ul>

Here's how support looks like right now. 
<p class="ciu_embed no-margin" data-feature="css-featurequeries" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-featurequeries">Can I Use css-featurequeries?</a> Data on support for the css-featurequeries feature across the major browsers from caniuse.com.
</p>

### I see you staring at IE

First of all, let me acknowledge that there is still a significant number of organisations that require support of Internet Explorer. Microsoft still continues to support IE11 for the life of Windows 7, 8 and 10. They have, however, *stopped supporting older versions* since January 12, 2016.

Before we talk about IE11's lack of support for `@supports` (see what I did there? <span class="emoji" role="img" tabindex="0" aria-label="smiling face with horns">&#x1F608;</span>), let me introduce the concept of negativity bias. It is also known as the negativity effect. 

> Bad is stronger than good, as a general principle across a broad range of psychological phenomena.  
—Kathleen D. Vohs

Yes, it will be a bit tricky when it comes to using `@supports` for certain features that fall into that odd matrix of being supported by IE11 yet not in Opera Mini but it's kind of a weak excuse to throw the baby out with the bathwater and just disregard feature queries altogether. Going “ain't nobody got time for dat” is NOT the way to do it.

Jen Simmons wrote an extensive article called [Using Feature Queries in CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) which discussed such tricky situations, specifically “Browsers that support do not Feature Queries, yet do support the feature in question”.

<figure>
    <img src="{{ site.url }}/images/posts/opera-mini/matrix.png" srcset="{{ site.url }}/images/posts/opera-mini/matrix@2x.png 2x" alt="Matrix of @supports"/>
    <figcaption>Uni-kitty &copy; Jen Simmons</figcaption>
</figure>

For cases like those, it really depends on the specific CSS feature you want to use, then make a decision whether it is acceptable to not include that feature even if the browser supports it. An example of this would be CSS gradients.

## Wrapping up

The web is meant to 

## Further reading

- [Opera Browsers, Modes & Engines](https://dev.opera.com/articles/browsers-modes-engines/)
- [Opera Mini and JavaScript](https://dev.opera.com/articles/opera-mini-and-javascript/) by [Tiffany Brown](https://twitter.com/webinista)
- [Is Opera Mini secure?](http://www.opera.com/help/mini/android#secure)
- [World Wide Web, Not Wealthy Western Web (Part 1)](https://www.smashingmagazine.com/2017/03/world-wide-web-not-wealthy-western-web-part-1/) by [Bruce Lawson](http://www.brucelawson.co.uk/)


<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<script async src="//cdn.jsdelivr.net/caniuse-embed/1.0.1/caniuse-embed.min.js"></script>
