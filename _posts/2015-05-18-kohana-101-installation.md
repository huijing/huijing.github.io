---
layout: post
title: "Kohana 101: Installation and setup"
date: May 18, 2015
tags: [kohana]
---
*Update: The Kohana framework has been deprecated and the last stable version was 3.3.6 released on 25 July 2006.*

I'm starting on something completely new to me: the [Kohana](https://kohanaframework.org/) framework, and this is my attempt to document everything I'm learning. When I started this blog, I was already one year into Drupal, and so a lot of the things I struggled with as a noob had more or less evaporated from my mind. For Kohana, I'm a complete noob once again, so hopefully this will be helpful to somebody who's starting from zero as well.

<p class="no-margin">As of time of writing, the latest stable version of Kohana is v3.3.3.1. There are 2 ways to install Kohana on your system, either download the .zip file from the homepage or get the files via git. If you choose the first option, extract the contents of the .zip file into your local web root. If you choose the second option, navigate to your local web root and run the following:</p>
<pre><code class="language-bash">git clone git://github.com/kohana/kohana.git
cd kohana/
git submodule init
git submodule update</code></pre>

Note: If you need to use a version of Kohana other than the latest stable version, you can try downloading it from the [archives](https://kohanaframework.org/download), but the last I tried, the archives were offline. Your best bet is to get it from Kohana's [GitHub repository](https://github.com/kohana/kohana). 

<p class="no-margin">For installation via git, there is an extra step to switch git branches if you need an earlier version.</p>
<pre><code class="language-bash">git clone git://github.com/kohana/kohana.git
cd kohana/</code></pre>

<p class="no-margin">To see all the branches, run the following:</p>
<pre><code class="language-bash">git branch -a</code></pre>
<img src="{{ site.url }}/images/posts/kohana-install/installation-3.jpg" alt="Git branch list"/>

<p class="no-margin">For example, if you need v3.0, run:</p>
<pre><code class="language-bash">git checkout 3.0/master</code></pre>

<p class="no-margin">Once you're on the version branch of your choice, run:</p>
<pre><code class="language-bash">git submodule init
git submodule update</code></pre>

<p class="no-margin">Open the <code class="language-bash">bootstrap.php</code> file in the <code class="language-bash">application</code> folder. There are a couple of things to change in this file.</p>

1. <p class="no-margin">Update your default timezone.</p>
<pre class="line-numbers" data-start="11"><code class="language-php">date_default_timezone_set('Asia/Singapore');</code></pre>
2. <p class="no-margin">Update the base_url to point to your site installation.</p>
<pre class="line-numbers" data-start="60"><code class="language-php">Kohana::init(array(
    'base_url'   => '/kohana3/',
));</code></pre>
3. <p class="no-margin">Enable modules.</p>
<pre class="line-numbers" data-start="77"><code class="language-php">
Kohana::modules(array(
    'auth'       => MODPATH.'auth',       // Basic authentication
    'cache'      => MODPATH.'cache',      // Caching with multiple backends
    'codebench'  => MODPATH.'codebench',  // Benchmarking tool
    'database'   => MODPATH.'database',   // Database access
    'image'      => MODPATH.'image',      // Image manipulation
    'orm'        => MODPATH.'orm',        // Object Relationship Mapping
    'oauth'      => MODPATH.'oauth',      // OAuth authentication
    'pagination' => MODPATH.'pagination', // Paging of results
    'unittest'   => MODPATH.'unittest',   // Unit testing
    'userguide'  => MODPATH.'userguide',  // User guide and API documentation
    ));</code></pre>

If you navigate to the site root from your browser, you should see this:
<img src="{{ site.url }}/images/posts/kohana-install/installation.jpg" alt="Environment ready"/>

<p class="no-margin">You need to adjust the permissions on the <code class="language-bash">cache</code> and <code class="language-bash">logs</code> folders. From your terminal, navigate to the <code class="language-bash">application</code> folder and run the following:</p>
<pre><code class="language-bash">sudo chmod 777 cache/ logs/</code></pre>

Refresh the page and you should now see:
<img src="{{ site.url }}/images/posts/kohana-install/installation-2.jpg" alt="Initial screen"/>

<p class="no-margin">Delete the <code class="language-bash">install.php</code> file from the root folder via your favourite method. I just use:</p>
<pre><code class="language-bash">rm install.php</code></pre>

Now, when you refresh the page, you should see a *hello, world!* message. We now have a fresh Kohana site on our hands to play with.
