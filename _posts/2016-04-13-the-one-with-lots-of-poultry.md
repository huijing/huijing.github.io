---
layout: post
title: "The one with lots of poultry"
date: April 13, 2016
project: Sadia Chicken
image: project-12
tags: [client-work, drupal7]
---
Most of the projects I worked on in 2015 were either Facebook applications (yes, somehow those are still being made) or based on the [Base Framework]({{ site.url }}/blog/intro-to-base-framework/). I didn't think there'd be much opportunity for me to work with Drupal for client sites moving forward but I was wrong. After almost 6 Drupal-free months, we got a client request to build their website in Drupal. Guess who was put in charge of that project? <span class="emoji">&#x1F60E;</span>

<img srcset="{{ site.url }}/assets/images/posts/sadia/sadia-480.jpg 480w, {{ site.url }}/assets/images/posts/sadia/sadia-640.jpg 640w, {{ site.url }}/assets/images/posts/sadia/sadia-960.jpg 960w, {{ site.url }}/assets/images/posts/sadia/sadia-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/sadia/sadia-640.jpg" alt="Sadia chicken" />

Sadia is an international food company which specialises in chilled and frozen foods. We were engaged to create regional websites for Sadia Singapore and Sadia Hong Kong. On the surface this project didn't seem overly-complicated. Each site would have country-specific domain names. The Hong Kong site would be a multi-lingual implementation but the Singapore site would be single language. In the initial brief, both sites would have almost the same content, but as requirements were being clarified, it seemed that the amount of shared content was much less than initially expected.

## Decisions...decisions...

Based on my prior experience with the [Xinmsn]({{ site.url }}/blog/the-one-on-the-tightest-of-deadlines/) project, I knew that it would be important to make the correct architectural call at the start of the project. And after thinking through the requirements, plus some discussion with the team, we decided to go with a multi-site implementation with separate databases but a single code-base.

This meant maintenance of 2 separate sites, one for Sadia Singapore, which would be a mono-lingual English site, and one for Sadia Hong Kong, a bi-lingual English/Chinese site. The English language content for both sites would be almost identical, and I understood this meant a duplication of effort for the content creators but this was a con we could live with.

## Developing a multi-site implementation

I set up my local machine using [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) so all the folders in my `Sites` folder, if require an AMP stack, can be accessed just by appending a `.dev` behind the folder name. There's probably some configuration I could do to have the configuration point to the subdirectories of the 2 sites but I didn't take the time to research it and just manually changed the database in the default `settings.php` file if I needed to switch sites.

Admittedly not my finest solution, but you know, pros and cons. My local machine setup is kinda unorthodox to begin with, so it's my own cross to bear here. To get the multi-site setup to work on a [remote Linux server](https://www.drupal.org/docs/7/multisite-drupal/configuring-a-basic-multi-site-development-environment-in-linux), however, was much easier to get working.

Translation was a bit of a chore because there is no way (at least, that I know of) to ensure everything that needed to be translated was covered other than manual checking. So kudos to the project manager who had to do that. If you're interested in multi-lingual Drupal, I have an [earlier post]({{ site.url }}/blog/drupal-101-setting-up-i18n) covering that, as well as a [previous project write-up]({{ site.url }}/blog/the-one-in-many-languages).

## Site-building and theming

The site's requirements weren't over-the-top, so mostly different configurations of the views of various content types put together with panels. Additional helper modules like Better Exposed Filters and Field Collection were used for specific features.

For example, there was a requirement to have an accordion-style FAQ section, so rather than installing some module to create that, I utilised [Field Collection](https://www.drupal.org/project/field_collection) to structure the mark-up in a way so I could write the accordion functionality myself.

<pre><code class="language-javascript">// Accordion functionality
$('.field-collection-item-field-accordion-content').first().addClass('active');
$('.field-collection-item-field-accordion-content:not(.active)').find('.field-name-field-accordion-body').hide();
$('.field-name-field-accordion-title').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(!$(this).parent().parent().hasClass('active')) {
    $('.field-collection-item-field-accordion-content').removeClass('active');
    $(this).parent().parent().addClass('active');
    $('.field-collection-item-field-accordion-content').find('.field-name-field-accordion-body').slideUp();
    $(this).parent().next().children().slideDown();
  }
});</code></pre>

I know it's jQuery, but Drupal comes with it, so it's not like I can remove it. If it's there, I'm just going to use it. Don't judge me.

<figure>
    <figcaption>Designers seem to like this.</figcaption>
    <video src="{{ site.url }}/assets/videos/sadia-accordion.mp4" controls></video>
</figure>

[Better Exposed Filters](https://www.drupal.org/project/better_exposed_filters) is one of those modules I wish was built into Views by default, because sometimes I do want fancier options for my filter UI, and this allows me to use radio buttons or checkboxes instead of the default select dropdown.

<figure>
    <figcaption>Impossible without BEF.</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/sadia/bef-480.jpg 480w, {{ site.url }}/assets/images/posts/sadia/bef-640.jpg 640w, {{ site.url }}/assets/images/posts/sadia/bef-960.jpg 960w, {{ site.url }}/assets/images/posts/sadia/bef-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/sadia/bef-640.jpg" alt="Fancy filters" />
</figure>

Also, checkout that nifty little arrow like triangle on the image. That's `clip-path` in action, folks! Yay to CSS. Just wanted to put that out there.

<pre><code class="language-css">clip-path: polygon(0 0,0 100%,95% 100%,95% 67%,100% 50%,95% 33%,95% 0);</code></pre>

And if you want to have country flags next to your language switcher, the module you're looking for is [Language Icons](https://www.drupal.org/project/languageicons) in addition to [Language Switcher Dropdown](https://www.drupal.org/project/lang_dropdown). If you're not happy with the default set of icons, you can always add your own and point the module to use that set instead.

<figure>
    <figcaption>Language switching refreshes the page.</figcaption>
    <video src="{{ site.url }}/assets/videos/sadia-lang.mp4" controls></video>
</figure>

## Wrapping up

Okay, full disclosure, this case study was so long overdue that I pretty much forgot most of what I did already. Whatever is written here is what I could piece together from my fragmented memory and doing some view source investigation. Moral of the story is, don't put off writing your project case studies. Remember, memory is more like bread than wine.
