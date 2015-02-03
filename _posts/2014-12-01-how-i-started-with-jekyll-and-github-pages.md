---
layout: post
title: "How I started with Jekyll and GitHub Pages"
date: December 01, 2014
tags: [jekyll, github-pages]
---
The idea of building my own website had always been floating around in my head, but I never really got down to doing something about it. Given that I work at a Drupal shop, my first instinct was to build my own site on Drupal. That somehow just did not pan out. 

Now, I’m the type of person whose inbox is constantly at the state of inbox zero. I have no permanent icons or files on my desktop and if I don’t need it, I don’t have it anymore. This behaviour has gotten me into trouble a few times, when I realised, after the fact, that something I actually needed no longer exists. In a nutshell, I’m the direct opposite of a hoarder. 

The best thing about Drupal is that you really can build any kind of site with it. However, building a simple site with Drupal can sometimes feel like using a Tsar Bomba to nuke a rat. I mean, have you seen the markup Drupal generates?

Then, I discovered Jekyll. Specifically, I read a fantastic article by [Anna Debenham](http://maban.co.uk/) called [Get Started With GitHub Pages (Plus Bonus Jekyll)](http://24ways.org/2013/get-started-with-github-pages/), which outlined exactly what was required to set everything up. So upon being sufficiently inspired, I sat myself down after work one day and tried to set up my own Jekyll site hosted on Github Pages. Now this was about half a year ago and Jekyll has been updated multiple times since. So I decided to nuke the first iteration and redo everything with Jekyll 2.5.1 and document the process here.

So my steps essentially were:

1. Install Jekyll on your machine by running the following command in your terminal (full disclosure, I use a Mac so Ruby comes with).
    <pre><code class="language-bash">gem install jekyll</code></pre>
2. Be patient, because there are quite a number of things to install. Let your terminal do its thing.
3. While waiting, create a new Github repository called <code class="language-bash">YOUR_GITHUB_USER_NAME.github.io</code>. According to documentation, the first part of the repository MUST match your Github username exactly.
4. Using your terminal, git clone said repository to wherever you do local development on your machine, for me, it would be my <code class="language-bash">Sites</code> folder. The command will look something like this:
    <pre><code class="language-git">git clone git@github.com:YOUR_GITHUB_USER_NAME.github.io/YOUR_GITHUB_USER_NAME.github.io.io.git</code></pre>
5. Create a basic <code class="language-bash">index.html</code> in the folder you just cloned.
6. Navigate to the folder you just cloned, then run the following:
    <pre><code class="language-git">git add –-all
git commit -m “Initial commit”
git push</code></pre>
7. Browse to <code class="language-bash">http://YOUR_GITHUB_USER_NAME.github.io</code> and your index.html page should show up.
8. On your local machine, delete the <code class="language-bash">index.html</code> file you just pushed (stay with me here, there’s a reason for this)
9. Spin up a new Jekyll site by running:
    <pre><code class="language-bash">jekyll new /path/to/folder/you/cloned/earlier</code></pre>
10. At the end of it, it SHOULD say the site has installed. Now, the reason we delete the original index.html is that spinning up a new Jekyll site will create an index.html file as well, which would conflict with that initial index.html you pushed up to Github.
11. Run Jekyll with the following:
    <pre><code class="language-bash">jekyll serve –watch</code></pre>
Fun tip, set up an alias for this command in your `.bash_profile` file like so:
    <pre><code class="language-bash">alias jsa='jekyll serve --baseurl "" --watch';</code></pre>
I chose to use the uncreative <code class="language-bash">jsa</code> as the alias but you can use whatever you like.
12. Your cloned folder should have a lot of new stuff in it. As of time of writing, Jekyll is at version 2.5.1, which has Sass integration (win!). Your folder structure will look like this:
    <pre><code class="language-markup">
    PROJECT_FOLDER/
    |-- _config.yml
    |
    |-- _includes/              
    |   |-- footer.html         
    |   |-- head.html     
    |   |-- header.html      
    |
    |-- _layouts/            
    |   |-- default.html     
    |   |-- page.html     
    |   |-- post.html     
    |
    |-- _posts/             
    |   |-- 2014-11-14-welcome-to-jekyll.markdown
    |
    |-- _sass/              
    |   |-- _base.scss
    |   |-- _layout.scss
    |   |-- _syntax-highlighting.scss
    |
    |-- _site/              
    |   |-- about/
    |   |-- css/
    |   |-- feed.xml
    |   |-- index.html
    |   |-- jekyll/
    |
    |-- .gitignore
    |-- .sass-cache
    |-- about.md
    |-- css/
    |-- feed.xml
    `-- index.html
</code></pre>
13. Technically, you already have a working Jekyll site at this point.

Ok, so there are lots of files in this new site we spun up. I personally think the documentation on the Jekyll site is fantastic. So I'm going to just very briefly sum up what all these shiny new files do.

### _config.yml

- Site settings go in this file and you can set defaults to be used on every post or page
- All configuration options and instructions can be found [here](http://jekyllrb.com/docs/configuration/)
- Site-wide variables can be declared here and used throughout the site via liquid tags, e.g. <code class="language-bash">{% raw %}{{ site.github_username }}{% endraw %}</code>
- Jekyll comes with a bunch of variables already. Full list [here](http://jekyllrb.com/docs/variables/)

### _includes

- Reusable HTML code snippets go here
- Commonly used for, but definitely not limited to, headers and footers
- Each include file can be called using the `include` tag, for example:
    <pre><code class="language-markdown">{% raw %}
{% include footer.html %}
{% endraw %}</code></pre>

- Benefits include, only having to change your code in one place if you decide to change address in your footer

### _layouts

- Layout templates are written in HTML
- Layouts can be applied to your post or page via the YAML front matter, which must be the first thing in the file
- You must use valid YAML set between triple-dashes, for example:
    <pre><code class="language-markup">
---
layout: post
title: I built a Jekyll site and you won't believe what happened next
---
</code></pre>
- Variables can be used in the template, for example:
    <pre><code class="language-markup">
&lt;div class="page-content"&gt;
    {% raw %}{{ content }}{% endraw %}
&lt;/div&gt;</code></pre>

### _posts

- You can write your posts in markdown or plain HTML
- Posts must be named in the format <code class="language-bash">YYYY-MM-DD-title.ext</code>
- The default URL follows a style called <code class="language-bash">date</code>, which looks like <code class="language-bash">/:categories/:year/:month/:day/:title.html</code>
- To specify your own post URLs, set the permalink in the <code class="language-bash">config.yml</code> file like so:
    <pre><code class="language-markup">permalink: /blog/:title</code></pre>
and this will give you a URL of <code class="language-bash">http://www.SITENAME.com/blog/POST-TITLE/</code>
- Full list of options can be found [here](http://jekyllrb.com/docs/permalinks/)

### _sass

- Jekyll now comes with Sass so take this time to dance around the room
- If you don't know what Sass is, go [here](http://sass-lang.com/) and get your mind blown

### _site

- Jekyll will parse all the files and folders mentioned above and generate your site's files in here
- Do not change any files here because they will be rewritten every time Jekyll compiles your site

### index.html

- This be your home page, yo.

### Other pages

- For anything that isn't a post, you can create them in the root of your site
- The URL will just be <code class="language-bash">http://www.SITENAME.com/PAGE-TITLE.html</code>

I actually had a lot of fun building my own Jekyll site and would urge anyone who likes to have full control over their site's markup to give it a try too.
