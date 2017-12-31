---
layout: post
title: "Reveal.js + GitHub Pages: when developers give talks"
date: October 18, 2015
tags: [frameworks, github-pages]
---
Recently, I was asked to give a talk at a local front-end meetup. I'd never spoken at any meetups before that. Let's just say I've been a devoted member of the audience. Regardless, I figured if I was going to give a talk in front of actual human beings, I probably ought to put some effort into preparing some decent slides to facilitate things. 

For most people, presentation decks are synonymous with Powerpoint, or Keynote for those hipster types (kidding, I'm one of you guys). I was all like, I'm a developer, we don't need no stinking presentation software, we HTML that shit. I guess I'll jump on any reason to play with something new. There are loads of frameworks that let you create really nice presentations as static sites, [Reveal.js](http://lab.hakim.se/reveal-js/), [Remark](http://remarkjs.com/), [deck.js](http://imakewebthings.com/deck.js/), just to name a few. I settled on Reveal.js, simply because. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

My idea was to host all my slides on GitHub Pages since my own website was already up there. Using project pages would also make the URL structure appear like it was part of my site, even though they would be in completely separate repositories.

## Setting up Project Pages

1. Create a new GitHub repository (the URL for that is [https://github.com/new](https://github.com/new)).
2. Start up your terminal and navigate to the folder you want your working files to reside in.
3. You can copy the clone URL from the right sidebar of your new repository's admin page. The command should look like this in your terminal:
    <pre><code class="language-bash">git clone github.com/YOUR_USER_NAME/REPO_NAME.git</code></pre>
4. Navigate to your freshly cloned directory and run the following commmand:
    <pre><code class="language-bash">git checkout --orphan gh-pages</code></pre>

You should now be on the `gh-pages` branch, and ready to rock.

## Setting up Reveal.js

1. Install [Node.js](https://nodejs.org/en/). If you are on a Mac, I suggest installing Node.js via [Homebrew](http://brew.sh/). I covered this topic in an earlier post, which you can refer to [here]({{ site.url }}/assets/blog/drupal-101-theming-with-gulp/#nodejs).
2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli). Once you've installed Node.js and npm(Node.js package manager), you can install Grunt's command line interface using the following command:
    <pre><code class="language-bash">npm install -g grunt-cli</code></pre>
3. Get the latest version of Reveal.js, either via git clone or just downloading the zipped files directly from the [respository](https://github.com/hakimel/reveal.js/) and place those files into your newly created GitHub Pages folder. If you choose to git clone, copy all the files into the aforementioned folder you created earlier, **without** the `.git` folder.
4. To make sure everything went well, navigate into your newly created GitHub Pages folder which now contains all the Reveal.js files and run the following command:
    <pre><code class="language-bash">npm install</code></pre>
5. Once that's done (it may take a while depending on your internet connection), run the following command to start the Grunt server:
     <pre><code class="language-bash">grunt serve</code></pre>
6. Your browser should load up *http://localhost:8000*, which shows your presentation (at this point, it'll be the Reveal.js presentation). You can change the port number by using `grunt server --port XXXX`, where `XXXX` can be whatever port number you wish.

## Customising your theme

Reveal.js already comes with a lot of pretty themes that you can use out of the box simply by changing the main stylesheet on line 18 of the index.html file. If you're like me, and want to customise your own theme, just duplicate one of the themes in the *css/theme/source* folder. I used `simple.scss` because it's the most bare-bones and easiest to customise. Most of the default styles from reveal.scss should be kept, but I found the border and box-shadow around images unsuitable for my own theme, so I just removed those. It's up to you to tweak the CSS to suit your preferences. I wanted the theme to be in line with my own website, so I used the fonts and colours from there instead.

## My go-to Reveal.js functions

**Speaker mode**  
This is the most awesome thing (at least, in my opinion) about Reveal.js. Just press <kbd>s</kbd>, and you will get keynote-style previews of the next slide, a timer AND speaker notes.

**Speaker notes**  
To have speaker notes on each slide, add an `<aside>` element with the class `notes` to your slide `<section>`.

**Nested sections**  
If you wrap multiple sections with another `<section>` element, the slides become grouped together vertically. You can use <kbd>spacebar</kbd> to run the slides in order through each section and its children.

## Exporting to PDF

I tried the integrated export to PDF function that comes with Reveal.js but somehow it didn't work for me, in that the CSS styles seem to go haywire and my text ended up overlapping into one long messed up section instead of each slide a page. So I tried the recommended alternative, [decktape.js](https://github.com/astefanutti/decktape). This PDF exporter works **brilliantly**. A big plus is it built with support for Reveal.js. Double win! I cloned the repository into my *Applications* folder but you can put it anywhere you like. The instructions on the repository README.md are straightforward and easy to follow, so just do what it says.

<p class="no-margin">To get your presentation exported as a PDF, the command I used was:</p>
<pre><code class="language-bash">bin/phantomjs decktape.js reveal http://localhost:8000/ resp-imgs.pdf</code></pre>

One thing is, if you use [fragments](https://github.com/hakimel/reveal.js#fragments) in your presentation, each fragment's reveal state will be in its own slide. If you're on a Mac, you can just delete those extra slides from your PDF file easily using Preview, but if you're on another OS, you'll probably want to find a way to delete those half-revealed slides. 

## Integrating with existing GitHub Pages site

My website is a Jekyll-based blog hosted as my main User Page on GitHub, while these slides were in a repository set up as a Project Page, called *Slides*. The URL for GitHub Project Pages would be `http(s)://<username>.github.io/<projectname>`. In my case, my slides project page URL was `http://www.chenhuijing.com/slides`. I had originally planned to create a landing page for all my slides as a perma-linked page on my website, but by doing so, it somehow screwed up how GitHub handled the URLs, and it didn't recognise my Project Page at all. So instead, I recreated that landing page from the page source into an `index.html` file in the root folder of *Slides* instead. It's probably easier to understand if you just peeked at my source files. 

## Wrapping up

I'm really happy with what Reveal.js has to offer as a HTML presentation framework. The documentation is really comprehensive, and the author is very responsive on Github issues as well. So if you have to give a talk anytime soon, try skipping Keynote and Powerpoint for Reveal.js instead.
