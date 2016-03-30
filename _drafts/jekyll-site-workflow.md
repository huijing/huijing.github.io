---
layout: post
title: "A Jekyll workflow"
date: March 28, 2016
tags: [jekyll]
---
After more than a year with Jekyll, I've settled into a workflow that allows me to spin up new sites really quickly. Normally my sites are project pages, because GitHub only allows one user/organisation page but unlimited project pages. The setup process only differs slightly for the two. An additional step is needed to create an orphan gh-pages branch for project pages.

## User/Organisation page

This example will use [SingaporeCSS](https://github.com/SingaporeCSS) as the organisation. Replace *singaporecss* with your own user name or organisation name.

1. Create a repository called *singaporecss.github.io*.
2. Open the terminal, navigate to the sites folder and clone the newly created repository.
    <pre><code class="language-bash">git clone https://github.com/singaporecss/singaporecss.github.io</code></pre>
3. To test that the repository was set up correctly, navigate into the project folder and create a test `index.html` file.
    <pre><code class="language-bash">cd singaporecss.github.io
echo "This be the Talk.CSS website" > index.html</code></pre>
4. Commit the file and push it up.
    <pre><code class="language-bash">git add --all
git commit -m "Initial commit"
git push -u origin master</code></pre>
5. Navigate to *http://singaporecss.github.io* and check the page. Whatever was put in the `index.html` file should load up in the browser.
    <figure>
        <figcaption>Something like this.</figcaption>
        <img src="{{ site.url }}/images/posts/talk-css/initial-commit.jpg" srcset="{{ site.url }}/images/posts/talk-css/initial-commit@2x.jpg 2x" alt="Test index.html file"/>
    </figure>

Now that things are linked up correctly, it's time to get building. The test `index.html` can be nuked now.

1. Spin up a new Jekyll site in the project folder.
    <pre><code class="language-bash">jekyll new</code></pre>
2. Add a `Gemfile` to the root of the project folder which contains the following:
    <pre><code class="language-bash">source 'https://rubygems.org'
gem 'github-pages'</code></pre>
    This ensures that the local environment matches that of GitHub, minimising issues with different gem versions and so on.
3. fef



