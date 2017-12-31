---
layout: post
title: "Hosting a Jekyll site on GitLab Pages"
date: January 04, 2017
tags: [gitlab-pages]
---
I've always hosted my static site projects on [GitHub Pages](https://pages.github.com/) and honestly, it's been great. Setup takes no time (maybe because I've done it so many times before), especially since GitHub [simplified the publishing process](https://github.com/blog/2228-simpler-github-pages-publishing). But because <span class="emoji" role="img" tabindex="0" aria-label="musical notes">&#x1F3B6;</span> I'm just a sucker for pain <span class="emoji" role="img" tabindex="0" aria-label="musical notes">&#x1F3B6;</span>(*insert music to Sucker for Pain from the Suicide Squad OST* ), I decided to give [GitLab Pages](https://pages.gitlab.io/) a try instead.

It's not that GitLab Pages is bad, far from it. But doing anything for the first time (even setting up GitHub Pages) will be a little bit tricky. Also, GitLab Pages is slightly harder to setup but provides much more flexibility, so weigh your pros and cons. [Jekyll](https://jekyllrb.com/) is my static site generator of choice.

## Types of sites

Similar to GitHub Pages, GitLab Pages also allows you to have a single user site and unlimited project sites. But what GitLab Pages has in addition is the concept of **groups**. If you haven't used GitLab before, you can actually [group several projects together into a directory](https://docs.gitlab.com/ee/workflow/groups.html), which provides a namespace under which all these projects are housed under. And you can then give an user access to all projects within that group. GitLab pages allows you to have a unique site per group as well.

## General steps for user/group site

1. Create a repository on GitLab named `YOUR_USER_NAME.gitlab.io`, making sure the first part matches your user name or group name exactly.

2. Create a `.gitlab-ci.yml` file. This file controls the build process for your site. Every push to the Git repository will trigger the runner and you can check its progress on the `/pipelines` page of your project.

    <img srcset="{{ site.url }}/assets/images/posts/gitlab-pages/pipeline-480.png 480w, {{ site.url }}/assets/images/posts/gitlab-pages/pipeline-640.png 640w, {{ site.url }}/assets/images/posts/gitlab-pages/pipeline-960.png 960w, {{ site.url }}/assets/images/posts/gitlab-pages/pipeline-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/gitlab-pages/pipeline-640.png" alt="Pipeline option on toolbar" />

    *Note: I wish I had found this page when I was setting up, but I somehow missed it. So I'm highlighting it to you now. Refer to [Build Jekyll with Bundler](https://gitlab.com/jekyll-themes/default-bundler) if you're using Jekyll as your static site generator.*

3. <p class="no-margin">For Jekyll sites, your <code>gitlab-ci.yml</code> will look something like this:</p>

    <pre><code class="language-yaml">&num; requiring the environment of Ruby 2.3.x
image: ruby:2.3
&num; add bundle cache to 'vendor' for speeding up builds
cache:
  paths:
      - vendor/
before_script:
  - bundle install --path vendor
&num; the 'pages' job will deploy and build your site to the 'public' path
pages:
  stage: deploy
  script:
      - bundle exec jekyll build -d public/
  artifacts:
        paths:
          - public
  only:
      - master &num; this job will affect only the 'master' branch</code></pre>

4. Make sure you exclude the `vendor` directory in your `_config.yml` file. This step tripped me up a bit (evidence can be seen in the first couple of [my repository commits](https://gitlab.com/penang-hokkien/penang-hokkien.gitlab.io/commits/master)). If you, unlike me, are familiar with the YAML syntax, you probably wouldn't have ran into the problems I did.

    First of all, I didn't exclude the `vendor` directory in my initial commit, so I ran into an `invalid date '0000-00-00'` error and my pipeline failed. So after a bit of googling, I found [this issue log](https://github.com/jekyll/jekyll/issues/2938) and the solution was to exclude the `vendor` directory. But the instruction was to add the line `exclude: [vendor]` to the `_config.yml` file.

    With my complete lack of YAML knowledge, I dutifully added the line and the relevant portion of the `_config.yml` file looked like this:

    <pre><code class="language-yaml"># Do NOT do this. This is WRONG!!
exclude:
  - [vendor]
  - Gemfile
  - Gemfile.lock
  - node_modules
  - gulpfile.js
  - package.json</code></pre>

    Basically, I didn't know the shorthand for lists in YAML was written like Javascript arrays. So here are the 2 correct ways to exclude multiple files/folders in your `_config_yml`.

    <pre><code class="language-yaml">exclude:
  - vendor
  - Gemfile
  - Gemfile.lock
  - node_modules
  - gulpfile.js
  - package.json</code></pre>

    OR

    <pre><code class="language-yaml">exclude: [vendor, "Gemfile", "Gemfile.lock", node_modules, "gulpfile.js", "package.json"]</code></pre>

5. Push your files up to GitLab and watch it run in the pipeline page. If you run into a `Could not find a Javascript runtime.` error, which I somehow did, you may need to include the line `gem 'therubyracer'` in your `Gemfile`. [Relevant issue log here](https://github.com/jekyll/jekyll/issues/2327). Why is a Javascript runtime needed for a Jekyll site you may ask? It's most probably not needed, but something up with my site's files <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>.

## Wrapping up

It wasn't a terrible experience, and the trip-ups were largely due to my own stupidity anyway. But at least I got the site up and running. Feel free to reference my [site's setup on GitLab](https://gitlab.com/penang-hokkien/penang-hokkien.gitlab.io). Also, because of the whole GitLab CI configuration thing, you're free to use any static site generator of your choice, unlike GitHub Pages, which is slightly limiting. If you find GitHub Pages a bit too restrictive for your liking, why not give GitLab Pages a try?
