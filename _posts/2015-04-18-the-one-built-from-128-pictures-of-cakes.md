---
layout: post
title: "The one built from 128 pictures of cakes"
date: April 18, 2015
image: project-8.jpg
tags: [drupal, projects]
---
I have a habit of saying yes to requests before I realise I have never done said request before. I acknowledge that this is not an optimal strategy to adopt, and some day I'll get in trouble for this, but this post is about a time when things went right (well, let's just say nothing burned down). A close friend of mine makes customised cakes and needed a website, so I figured I'd build her one.

<img src="{{ site.url }}/images/posts/7love/7love.jpg" alt="7lovebakery.com"/>

All I had to start with, was 128 pictures of cakes and confectioneries. This made things really interesting. The good part about this project was that my friend was a great client. I call her a client even though no money exchanged hands throughout this entire process (I don't charge friends, and yes, I acknowledge this as another questionable practice). She trusted me to do my job well, and was always available to answer any questions I had about her business.

###Understanding the business

The first thing I did was to just sit down and talk with her so I could really understand how her business worked. We covered typical questions like what products she offers, how much everything cost and so on. She walked me through how a typical order took place from start to delivery. I asked about the business itself, why she set it up in the first place, and how she felt about the business, so we could establish a suitable design direction. This also helped me with copy-writing for the site.

<p class="no-margin"><strong>Key takeaways were:</strong></p>
<ul>
<li class="no-margin">A majority of her customers would approach her with some theme in mind already</li>
<li class="no-margin">Cakes were customised to fit her customers' specific needs</li>
<li class="no-margin">Other than word-of-mouth referrals, new customers approached her after seeing photos of cakes she made</li>
<li class="no-margin">She offered a fixed set of flavours and sizes</li>
<li class="no-margin">There is no physical store-front</li>
<li class="no-margin">There is no delivery service and customers would meet at designated pick-up locations</li>
<li class="no-margin">There were a number of questions that almost all customers would ask</li>
<li class="no-margin">There was a standard set of information she would need from her customers</li>
<li class>About half her customers were pre-dominantly Chinese-speaking</li>
</ul>

###Site architecture and content

The site would be built on Drupal (unsurprising, I know) and have multi-lingual functionality (just English and Chinese, really). I'd done a number of multi-lingual setups by now so I was fully aware of how well Drupal handled multi-language (ergo, how easy my life would be).

<p class="no-margin">It wouldn't be a complicated affair. Prospective customers who landed on the site could:</p>
<ul>
<li class="no-margin">view pretty pictures of delicious cakes</li>
<li class="no-margin">find out how to order one</li>
<li class="no-margin">actually place an order and, if they're interested</li>
<li>learn more about the baker behind the goods</li>
</ul>

Given that most customers had similar questions, I thought it made sense to have the answers to those questions laid out clearly on the site in the *How to order* page. Contact options were made easily accessible so visitors didn't have to hunt for a way to contact the store.

###Visual design

The bakery was essentially a one-woman operation, and cakes were made to order and delivered immediately after they were baked. Given the personalised nature of her products, I went with a warm and friendly colour palette. I wanted the site to feel welcoming, like you could almost smell the freshly baked cakes. The site's design was thus inspired by the look of small bakery store-fronts, the kind with canvas awnings above their store windows.

My go-to resource for textures is [Subtle Patterns](http://subtlepatterns.com/). Their name is self-explanatory. All the textures are free and you get both the normal and 2x versions in your download. 

<div class="figure-wrapper">
<figure class="two-col">
<figcaption>Canvas texture with stitching effect</figcaption>
<img src="{{ site.url }}/images/posts/7love/canvas.jpg" alt="Header texture"/>
</figure>
<figure class="two-col">
<figcaption>CSS border images for the win!</figcaption>
<img src="{{ site.url }}/images/posts/7love/awning.jpg" alt="Wavy border"/>
</figure>
</div>

Continuing with the theme of old-school bakery, I decided on using wood textures for all the buttons and icons. 

<img src="{{ site.url }}/images/posts/7love/buttons.jpg" alt="Wood texture buttons"/>

I was never formally trained in design school, so the idea of creating static mock-ups in Photoshop was, to me, a tiresome affair. By now, I had created quite a number of custom responsive themes from my [starter-kit](https://www.drupal.org/sandbox/hj_chen/2345293) so I was able to set it up quickly and make all my design decisions from the browser itself. I'd like to take the time to show my appreciation for the fact that CSS can now do so many things and that devtools exist. 

###Site building

When I say multi-language Drupal, you say [i18n](https://www.drupal.org/project/i18n). I cannot say enough about the robustness of Drupal's multi-language support and the fact that Drupal 8 is making it even better just brings a smile to my face.

One another thing I tried out with this site was [Isotope](http://isotope.metafizzy.co/) for filtering of images. Turns out, there's already a module for that called [Views isotope](https://www.drupal.org/project/views_isotope). The integration with Views is pretty smooth and didn't take too long set up.

I also took some extra time on the contact form. I didn't want a twenty-field form that would turn customers off, but I still wanted to capture the information my friend required and streamline some of the communication between them. The logical solution to this problem would be conditional fields, where customers would only see and fill in the fields relevant to the type of cake they wanted.

###Hosting and server set-up

My personal domain was registered through [NameSilo](http://www.namesilo.com/) and I never had any bad experiences with them, so I registered the domain name 7lovebakery.com with NameSilo as well. But web hosting was something I really had to think through.

As a developer, I wanted to have full access to the server, and freedom to install whatever I needed (Git and Drush) without having to go through the technical team of the hosting company. After exploring a number of shared hosting services, I realised the best way to go was to have a dedicated server. But as a small business, my friend didn't have a big budget for this. I settled with using [DigitalOcean](https://www.digitalocean.com/) and I must say, that was a good decision.

Even though I'd never set up my own server before, the documentation is absolutely fantastic. DigitalOcean's [tutorials](https://www.digitalocean.com/community/tutorials) are extremely well-written and easy to follow (trust me, if someone like me can get it, anyone can). I admittedly nuked my first server because I messed it up, but how many people get it right the first time? And because it's so easy to start over (not to mention dirt cheap), it doesn't matter if you get it wrong the first time. For anyone who's interested in learning how to set up a web server, I strongly recommending doing all your experimentation on DigitalOcean. 

If a larger budget was available, I'd actually go for a dedicated Drupal hosting platform like [Pantheon](https://pantheon.io/) or [Acquia](https://www.acquia.com/) because they handle Drupal updates for you. I've had some experience with Acquia Cloud Enterprise and I must say, the response time is pretty quick. Definitely something to keep in mind for clients who can afford it.

###Wrap-up

I'm really fond of this project because I learnt so much from it, from visual design to server set-up. I may not be the best sysadmin or visual designer, but having gone through the process, I've learnt to appreciate these roles even more.
