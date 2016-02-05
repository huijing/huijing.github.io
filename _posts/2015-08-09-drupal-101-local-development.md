---
layout: post
title: "Drupal 101: Starting Drupal development"
date: August 09, 2015
tags: [workflow, drupal7]
category: planet-drupal
---
I recently moved from an agency specialising in building Drupal sites to one which is platform-agnostic, and uses all variety of technologies. As my team was not very familiar with Drupal, I started writing some documentation on setting up locally, installing Drush and commonly used modules, and some other stuff so everyone could get up and running quickly. I've modified it to be even more beginner-friendly, for people who've never built websites before. This is sort of opinionated so feel free not to follow along exactly.

## The basic technology stack

As with most content management systems, Drupal has some [system requirements](https://www.drupal.org/requirements) in order to run, commonly known as a technology stack. This simply means you have to install a bunch of things before installing Drupal. The most common stack for running Drupal is: **Apache**, **MySQL** and **PHP**, or AMP stack. You can choose to install each of these components separately on your machine, or you can download a [software bundle](https://en.wikipedia.org/wiki/List_of_Apache%E2%80%93MySQL%E2%80%93PHP_packages) that comes with all of them. [XAMPP](https://www.apachefriends.org/index.html) is very popular because it's cross-platform. Some Windows users go with [WAMP](http://www.wampserver.com/en/) and some Mac users use [MAMP](https://www.mamp.info/en/). All of them generally provide the same functionality, but each have their own pros and cons. I chose to install all my components separately, but if you don't want to do that, just go with a software bundle.

### Apache

[Apache](http://www.apache.org/) is the recommended web server for running Drupal. A web server is a program which accepts requests from clients, like browsers, and responds to those requests. It's like going to a store and asking the shopkeeper for a can of peas. The shopkeeper will check his inventory and if he has any, he'll hand you the can, if not, he'll tell you he doesn't have any. To find out more about Apache, you can read [An Introduction to Apache](https://code.tutsplus.com/tutorials/an-introduction-to-apache--net-25786) by [Diana Eftaiha](https://twitter.com/thedphoto). You are free to use other web servers, like Nginx or Hiawatha, because Drupal works on any web server that supports PHP.

### MySQL

Drupal also requires a database server, the recommended one being [MySQL](http://www.mysql.com/). Similar to the web server, a database server is a program which provides database services to other programs (like your browser). A database is like a neatly organised filing cabinet, and the database server is like the secretary in charge of all those documents. The secretary should only takes requests from authorised personnel, for security reasons. This is why MySQL requires you to have a user name and password to log into the system. By default, MySQL does not come with a graphical user interface (GUI). It is definitely possible to manage your database from the command line alone, but most people install a GUI to make things easier. I use [Sequel Pro](http://www.sequelpro.com/), but that's only for Mac users. A popular choice is [phpMyAdmin](https://www.phpmyadmin.net/), which allows you to handle database management via the browser. [MySQL workbench](http://dev.mysql.com/downloads/workbench/) is another database management software which is cross-platform.

### PHP

[PHP](https://secure.php.net/) is a server-side scripting language which allows web pages to serve up content dynamically. When we install PHP on a server, we are actually installing an engine which interprets the PHP code on your web page. Continuing with the secretary example above, it's as if you have a request but it's written in Chinese, and the secretary doesn't understand Chinese. Installing PHP is like introducing a translator, to this mix, so the translator will interpret your Chinese request to the secretary so she can understand exactly what you're requesting. There are many different server-side scripting languages, like Java, Ruby, Python and so on. They are simply different languages, like Chinese, Spanish and French.

<p class="no-margin">Regardless of the option you choose, follow the instructions provided by the software manufacturer to install your software bundle of choice on your machine. If you're on a Mac and feeling adventurous, these are the resources I used to set up my development environment:</p>
<ul>
  <li class="no-margin"><a href="https://echo.co/blog/os-x-1010-yosemite-local-development-environment-apache-php-and-mysql-homebrew">OS X 10.10 Yosemite Local Development Environment: Apache, PHP, and MySQL with Homebrew</a></li>
  <li class="no-margin"><a href="http://passingcuriosity.com/2013/dnsmasq-dev-osx/">Using Dnsmasq for local development on OS X</a></li>
  <li><a href="https://mallinson.ca/osx-web-development/">The Perfect Web Development Environment for Your New Mac</a></li>
</ul>

Installing all these programs alone is not the end of it. These programs, specifically the Apache server and the MySQL server, must be running in order for everything to work. If you chose to go with a software bundle, there will be an option to start the servers. If you're just starting out, you may tend to forget to start the servers, especially if you've restarted your machine. Just keep that in mind if your development site refuses to load. If, for some reason, your MySQL server isn't running, whatever GUI database management program you're using won't load your database either.

<p class="no-margin">Here are some tutorials with screenshots covering how to set up a local Drupal site on your machine for XAMPP, MAMP and WAMP.</p>
<ul>
  <li class="no-margin"><a href="https://blog.udemy.com/xampp-tutorial/">XAMPP Tutorial: How to Use XAMPP to Run Your Own Web Server</a></li>
  <li class="no-margin"><a href="http://www.jenlampton.com/blog/using-mamp-local-drupal-development">Using MAMP for local Drupal development</a></li>
  <li><a href="http://klausharris.de/blog/install-drupal-7-wamp.html">How to install Drupal 7 on WAMP</a></li>
</ul>

## Must-have tools

Admittedly, we developers love our tools. But if something can streamline your workflow and reduce your development time, why not? Don't worry, this is not a long list, there are only two tools we really need. Git and Drush. I've already written about these two tools and how to install them in a previous post about [developing Drupal sites as a team]({{ site.url }}/blog/team-drupal-development/). You can skip straight to the parts on [installing Drush]({{ site.url }}/blog/team-drupal-development/#installing-drush) and [installing Git]({{ site.url }}/blog/team-drupal-development/#installing-git).

## Installing Drupal locally

1. Download the latest stable version of Drupal from [Drupal.org](https://www.drupal.org/start)
2. Extract the `.zip` file into your localhost directory and set up however you normally do a new local site. The common default alias used for your local environment is localhost, or 127.0.0.1, so we'll be referring to `http://localhost` for this example.
3. Navigate to the sites/default folder and make a copy of the default.settings.php file. Rename this file settings.php. Set the permissions for this file to writeable. You can do that with the following command.
    <pre><code class="language-bash">chmod 666 settings.php</code></pre>
    You could also right-click the file and change the permissions from there, if you wanted to. Drupal will change the permissions to 444, and this is essential to keeping your site secure.
4. Depending on what you use to manage databases, create a new mySQL database. You should have a user name and password which you set up when you installed MySQL on your system earlier. These credentials have to be entered when you install Drupal via the browser interface in the next steps.
5. On your browser, navigate to the root of the site, in this case, `http://localhost`.
    - You will be redirected to the `install.php` page. Select *Standard* and continue.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/local-dev/local-dev-640.jpg" alt="Install" />
    - Choose the default language and click next. For the database setup, enter the name of the database you created earlier, with your MySQL credentials. The advanced options can be left as default.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev2-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev2-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev2-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/local-dev/local-dev2-640.jpg" alt="Database setup" />
    - Drupal should start installing. 
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev3-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev3-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev3-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev3-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/local-dev/local-dev3-640.jpg" alt="Installation running" />
    - Set up the user 1 account. This account is the superadmin account which can access everything on the site.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev4-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev4-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev4-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev4-1168.jpg 1168w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/local-dev/local-dev4-640.jpg" alt="Install" />
    - Your site should be successfully set up.

<p class="no-margin">You may also need to develop multiple sites concurrently on your machine, and this will require more steps to setup that I will not cover here, but you can check out the following articles to point you in the right direction.</p>
<ul>
  <li class="no-margin"><a href="http://www.geeksengine.com/article/apache-multiple-local-websites.html">How to use Apache Virtual Host to run multiple local websites on Windows</a></li>
  <li class="no-margin"><a href="http://brockboland.com/2009/12/running-multiple-sites-mamp/">Running Multiple Sites in MAMP</a></li>
  <li><a href="http://www.wpwhitesecurity.com/wordpress-tips-webmasters/multiple-websites-xampp/">How to run multiple websites on XAMPP on Windows</a></li>
</ul>

## Initial module installation

<p class="no-margin">There are a number of modules that are so regularly used that they are default installs for every Drupal site I build. With Drush installed, you can easily install all these modules from your command line.
To double check that Drush is installed correctly on your system, navigate to the root of your Drupal installation and run:</p>
<pre><code class="language-bash">drush status</code></pre>

You should see something like this:
  <img srcset="{{ site.url }}/images/posts/local-dev/drush-480.jpg 480w, {{ site.url }}/images/posts/local-dev/drush-640.jpg 640w, {{ site.url }}/images/posts/local-dev/drush-960.jpg 960w, {{ site.url }}/images/posts/local-dev/drush-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/local-dev/drush-640.jpg" alt="Install" />

<p class="no-margin">The modules are as follows:</p>
<ul>
  <li class="no-margin"><a href="https://www.drupal.org/project/admin_menu">Administration menu</a> -&gt; A better version of the administration toolbar that ships with Drupal</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/devel">Devel</a> -&gt; Helper module for development. Allows use of the dpm() function, which is the equivalent of console.log() in Javascript, dummy content generation and so on.</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/views">Views</a> -&gt; Used for displaying the content on the site in all manner of configurations</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/ctools">Ctools</a> -&gt; Dependency for views</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/token">Token</a> -&gt; For using placeholders in content, urls, etc.</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/pathauto">Pathauto</a> -&gt; The standard for automatic path aliasing</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/ds">Display suite</a> -&gt; For adding advanced field configuration and layout control for node pages (and other entities)</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/libraries">Libraries</a> -&gt; An API module for modules, allows for better management of external libraries</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/date">Date</a> -&gt; Adds a date field type to Drupal</li>
  <li class="no-margin"><a href="https://www.drupal.org/project/smart_trim">Smart trim</a> -&gt; Allows for better management of summary content displays</li>
  <li><a href="https://www.drupal.org/project/registry_rebuild">Registry Rebuild</a> -&gt; To rebuild the registry (a list of PHP classes and the files they go with)</li>
</ul>


<p class="no-margin">Download and enable them by using the following command:</p>
  <pre><code class="language-bash">drush en admin_menu devel views views_ui ds ds_ui ctools token pathauto date libraries smart_trim registry_rebuild -y</code></pre>

<p class="no-margin">If you want to select the module version, then it'd be better if you used this command:</p>
  <pre><code class="language-bash">drush dl admin_menu devel views ctools token pathauto date libraries smart_trim ds registry_rebuild --select</code></pre>
This is by no means a definitive list of default modules to install. Every developer will have their own list of go-to modules as part of the site setup process. These are just some suggestions for you to start off with if you've never built Drupal sites before.

<p class="no-margin">In addition to installing and enabling modules, I will also disable a few of Drupal's core modules. Again, this is a purely optional step. I find the overlay interface for site configuration rather annoying. The default admin toolbar is a bit limited for my liking as well, so I use the Administration menu (mentioned above) instead. Run this command to disable both:</p>
  <pre><code class="language-bash">drush dis overlay toolbar -y</code></pre>

Other modules will be installed depending on the requirements of the site. The guiding principle of building Drupal sites is to limit the amount of custom code written. Module selection is an integral part of building a Drupal site. If the particular functionality is relatively niche, it makes sense to examine the usage statistics of the module, the number of open issues it has and if there are any critical bugs. The good thing is that the community often writes patches to fix bugs, so [Drupal.org](https://www.drupal.org/) is a valuable resource throughout the development process. Another place to get help with Drupal issues is [Drupal Answers](http://drupal.stackexchange.com/), which is basically Stack Overflow for Drupal.

<p class="no-margin"><strong>Additional developer-friendly tweaks</strong></p>
<p class="no-margin">Add the following three lines to your settings.php file.</p>
  <pre><code class="language-php">error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);</code></pre>
This turns on error reporting, which is extremely helpful when developing. Otherwise, you will just end up with a white screen and not know what's wrong. However, when it comes to deploying your site to a live production environment, these lines should be removed.

## Wrap-up

Every developer has their own preferred workflows and processes, and this is mine. Hopefully there are some bits you find helpful and can incorporate into your own Drupal development workflow. 
