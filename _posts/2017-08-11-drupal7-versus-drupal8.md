---
layout: post
title: "Drupal 7 versus Drupal 8"
date: August 11, 2017
image: drupal7v8
tags: [drupal8, opinion]
---
I've recently embarked on my first official Drupal 8 project, for Sinvict Technology (case study when the project launches), and it was interesting to see how certain things changed for the better, certain things stayed familiar and certain things seemed slightly worse off. I thought I'd write up some comparison notes between the two versions. This is my personal opinion based on my experiences. You should have your own opinion too.

## Core is so much better

I really like the improvements made to core for Drupal 8. Making views part of core was a great idea, as was making the date field core as well. I felt the organisation of files in the new folder structure was more intuitive than before, you know, like themes go into the *themes* folder, and modules into the *modules* folder. Guess where the core files are? In the *core* folder. Gosh, who'd have thought?

Switching to YAML for configuration was also a welcome change for me. I'd used Jekyll extensively so this was very much up my alley. I find YAML easier to comprehend at a glance, it feels neater to me.

Having an `example.settings.local.php` included by default makes it easier for new users to wrap their heads around having a local configuration versus a production configuration, which I think makes for better collaboration between developers working on the same site.

Also, blocks. Custom blocks are now managed in their own section, making it so much neater. This part I like quite a lot. It used to be that the blocks management interface would get super cluttered as your project got larger and larger, but things are more organised in this current format.

## Theming is different now

I'd heard about the theming revamp since Drupal 8 was first announced but hearing about something is considerably different from getting your hands dirty. One thing I do that goes against the grain is that I don't like to extend base themes, instead, I like to start off with a blank slate.

Which is why the inclusion of a troubleshooting theme like Stark was a plus in my eyes. Even though it wasn't meant to be used as a base theme, the fact that it was “stark” (sorry, it was right there) made it work for me. With a bare-bones starting point, I worked on creating an 8.x branch for my Drupal 7 starter theme, [Clarus](https://www.drupal.org/sandbox/hj_chen/2345293).

The mechanism for adding external libraries through the `THEME_NAME.libraries.yml` makes it easier to plug in Javascript and CSS files and there's also the option to only load them where they are needed via Twig templates.

Oh, and about those Twig templates. There are parts I like and parts that I need to make myself get used to. The modularity of the templates is similar to the old system, making use of name-spacing to target specific components with increasing levels of granularity. But it also makes accessing variables a bit more tricky, in that I had to write pre-process functions in the `THEME_NAME.theme` file to have access to those. Maybe I'm doing it wrong <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>.

But overall, the level of effort needed to create a completely custom theme wasn't all that different from that of Drupal 7, and perhaps once I get up to speed, it may be even faster? I dunno, I can't predict the future.

## There's a module for that, or not anymore

So the thing with a major version change is that some modules don't get updated for it. Let's all remember that Drupal is pretty much a community-driven ecosystem, and all of us need to keep getting em‘ cheques, you know? Work is mostly volunteer-based unless some companies want to sponsor module development, so personally, I've never begrudged module maintainers for letting their modules go.

However, that also means going through the research process for a module that can do something similar, or writing your own. If the functionality is minor, then no problem, code it up yourself. But if it something that requires significant effort, and not included in your project budget, release the search hounds, I say!

Fortunately, most of the modules I used for Drupal 7 got ported over just fine, with the exception of Field Slideshow, but there were other ways to implement what I wanted. Some modules, like Panels, changed significantly and it took a while get used to.

For example, one of the things I used to do was create Panel pages for nodes where content authors could still make their updates via the standard edit interface for content types. Using panels allowed us to build a page with content from other sources as well, like views blocks and so on.

Because the interface is slightly different now, it took me quite a while before realising I could do that by selecting *Entity View (Content)* from the *Chaos Tools* section when adding a new block. Also, blocks. There doesn't seem to the option to create custom content panels any more, but the same end result can be achieved with custom blocks anyway, so no biggie.

## Configuration management isn't features...yet

One of the best practices I picked up was to package up functionality into features for deployment, as well as easier tracking of development progress. Features 2.x in Drupal 7 was quite robust (or at least, suited to the method my team used) and allowed us to deploy new features from local to staging to production really smoothly.

I first tried out configuration management for the initial deployment of the site, and realised that you couldn't actually pick and choose multiple configurations to export, it was either all of them or a single configuration. Which was quite a bummer, because on local, there are certain modules purely used for development that I didn't want to include in the export but couldn't.

Hopefully this is something that will be enhanced moving forward, because having all the configuration stored in files does make things easier, but only if there's a higher level of control over what gets exported or not.

## Wrapping up

I've been much less involved with Drupal over the last couple years though when I do get a project that needs a CMS, I find myself reaching for Drupal first. It's great to see that long wait for Drupal 8's release wasn't in vain, and my overall impressions of Drupal 8 are quite positive.

Drupal did kick-start my career, so you can say I have a soft spot for this particular CMS with a rather cute logo. If you haven't tried Drupal 8 yet, I think now is a good time to start.

<em><small>Credits: OG:image from <a href="https://www.phase2technology.com/blog/transforming-enterprises-drupal-8">Phase2 Technology</a> blog post on Transforming Enterprises with Drupal 8</small></em>
