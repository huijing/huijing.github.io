---
layout: post
title: "Drupal 101: Starting Drupal development"
date: August 05, 2015
tags: [workflow, drupal]
---
I recently moved from an agency specialising in building Drupal sites to one which is platform-agnostic, and uses all variety of technologies. As my team was not very familiar with Drupal, I started writing some documentation on setting up locally, installing Drush and commonly used modules, and some other stuff so everyone could get up and running quickly. I've modified it to be even more beginner-friendly, for people who've never built websites before. This is sort of opinionated so feel free not to follow along exactly.

###The basic technology stack
As with most content management systems, Drupal has some [system requirements](https://www.drupal.org/requirements) in order to run, commonly known as a technology stack. This simply means you have to install a bunch of things before installing Drupal. The most common stack for running Drupal is: **Apache**, **MySQL** and **PHP**, or AMP stack. You can choose to install each of these components separately on your machine, or you can download a [software bundle](https://en.wikipedia.org/wiki/List_of_Apache%E2%80%93MySQL%E2%80%93PHP_packages) that comes with all of them. [XAMPP](https://www.apachefriends.org/index.html) is very popular because it's cross-platform. Some Windows users go with [WAMP](http://www.wampserver.com/en/) and some Mac users use [MAMP](https://www.mamp.info/en/). All of them generally provide the same functionality, but each have their own pros and cons. I chose to install all my components separately, but if you don't want to do that, just go with a software bundle.

<p class="no-margin"><strong>Apache</strong></p>
[Apache](http://www.apache.org/) is the recommended web server for running Drupal. A web server is a program which accepts requests from clients, like browsers, and responds to those requests. It's like going to a store and asking the shopkeeper for a can of peas. The shopkeeper will check his inventory and if he has any, he'll hand you the can, if not, he'll tell you he doesn't have any. To find out more about Apache, you can read [An Introduction to Apache](https://code.tutsplus.com/tutorials/an-introduction-to-apache--net-25786) by [Diana Eftaiha](https://twitter.com/thedphoto). You are free to use other web servers, like Nginx or Hiawatha, because Drupal works on any web server that supports PHP.

<p class="no-margin"><strong>MySQL</strong></p>
Drupal also requires a database server, the recommended one being [MySQL](http://www.mysql.com/). Similar to the web server, a database server is a program which provides database services to other programs (like your browser). A database is like a neatly organised filing cabinet, and the database server is like the secretary in charge of all those documents. The secretary should only takes requests from authorised personnel, for security reasons. This is why MySQL requires you to have a user name and password to log into the system. By default, MySQL does not come with a graphical user interface (GUI). It is definitely possible to manage your database from the command line alone, but most people install a GUI to make things easier. I use [Sequel Pro](http://www.sequelpro.com/), but that's only for Mac users. A popular choice is [phpMyAdmin](https://www.phpmyadmin.net/), which allows you to handle database management via the browser. [MySQL workbench](http://dev.mysql.com/downloads/workbench/) is another database management software which is cross-platform.

<p class="no-margin"><strong>PHP</strong></p>
[PHP](https://secure.php.net/) is a server-side scripting language which allows web pages to serve up content dynamically. When we install PHP on a server, we are actually installing an engine which interprets the PHP code on your web page. Continuing with the secretary example above, it's as if you have a request but it's written in Chinese, and the secretary doesn't understand Chinese. Installing PHP is like introducing a translator, to this mix, so the translator will interpret your Chinese request to the secretary so she can understand exactly what you're requesting. There are many different server-side scripting languages, like Java, Ruby, Python and so on. They are simply different languages, like Chinese, Spanish and French.

<p class="no-margin">Regardless of the option you choose, follow the instructions provided by the software manufacturer to install your software bundle of choice on your machine. If you're on a Mac and feeling adventurous, these are the resources I used to set up my development environment:</p>
<ul>
  <li class="no-margin"><a href="https://echo.co/blog/os-x-1010-yosemite-local-development-environment-apache-php-and-mysql-homebrew">OS X 10.10 Yosemite Local Development Environment: Apache, PHP, and MySQL with Homebrew</a></li>
  <li class="no-margin"><a href="https://mallinson.ca/osx-web-development/">Using Dnsmasq for local development on OS X</a></li>
  <li><a href="https://mallinson.ca/osx-web-development/">The Perfect Web Development Environment for Your New Mac</a></li>
</ul>

Installing all these programs alone is not the end of it. These programs, specifically the Apache server and the MySQL server, must be running in order for everything to work. If you chose to go with a software bundle, there will be an option to start the servers. If you're just starting out, you may tend to forget to start the servers, especially if you've restarted your machine. Just keep that in mind if your development site refuses to load. If, for some reason, your MySQL server isn't running, whatever GUI database management program you're using won't load your database either.

<p class="no-margin">Here are some tutorials with screenshots covering how to set up a local site on your machine for XAMPP, MAMP and WAMP.</p>
<ul>
  <li class="no-margin"><a href="https://blog.udemy.com/xampp-tutorial/">XAMPP Tutorial: How to Use XAMPP to Run Your Own Web Server</a></li>
  <li class="no-margin"><a href="http://www.jenlampton.com/blog/using-mamp-local-drupal-development">Using MAMP for local Drupal development</a></li>
  <li><a href="http://klausharris.de/blog/install-drupal-7-wamp.html">How to install Drupal 7 on WAMP</a></li>
</ul>

###

###Installing Drupal locally
1. Download the latest stable version of Drupal from [Drupal.org](https://www.drupal.org/start)
2. Extract the `.zip` file into your localhost directory and set up however you normally do a new local site. The common default alias used for your local environment is localhost, or 127.0.0.1, so we'll be referring to `http://localhost` for this example.
3. Navigate to the sites/default folder and make a copy of the default.settings.php file. Rename this file settings.php. Set the permissions for this file to writeable. You can do that with the following command.
    <pre><code class="language-bash">chmod 666 settings.php</code></pre>
    You can even just right-click the file and change the permissions from there, if you wanted to. Drupal will change the permissions to 444, and this is essential to keeping your site secure.
4. Depending on what you use to manage databases, create a new mySQL database. You should have a user name and password which you set up when you installed MySQL on your system earlier. These credentials have to be entered when you install Drupal via the browser interface in the next steps.
5. On your browser, navigate to the root of the site, in this case, `http://localhost`.
    - You will be redirected to the `install.php` page. Select Standard and continue.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/responsive-images/local-dev-640.jpg" alt="Install" />
    - Choose the default language and click next. For the database setup, enter the name of the database you created earlier, with your MySQL credentials. The advanced options can be left as default.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev2-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev2-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev2-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/responsive-images/local-dev2-640.jpg" alt="Database setup" />
    - Drupal should start installing. 
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev3-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev3-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev3-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev3-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/responsive-images/local-dev3-640.jpg" alt="Installation running" />
    - Set up the user 1 account. This account is the superadmin account which can access everything on the site.
    <img srcset="{{ site.url }}/images/posts/local-dev/local-dev4-480.jpg 480w, {{ site.url }}/images/posts/local-dev/local-dev4-640.jpg 640w, {{ site.url }}/images/posts/local-dev/local-dev4-960.jpg 960w, {{ site.url }}/images/posts/local-dev/local-dev4-1168.jpg 1168w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/responsive-images/local-dev4-640.jpg" alt="Install" />
    - Your site should be successfully set up.

({{ site.url }}/blog/team-drupal-development/#installing-drush)
({{ site.url }}/blog/team-drupal-development/#installing-git)

<p class="no-margin"><strong>Workflow tip</strong></p>
If you're like me, and need to develop multiple local sites on your machine at the same time, I suggest keeping a fresh Drupal install on your PC. 

[How to use Apache Virtual Host to run multiple local websites on Windows](http://www.geeksengine.com/article/apache-multiple-local-websites.html)
[Running Multiple Sites in MAMP](http://brockboland.com/2009/12/running-multiple-sites-mamp/)
[How to run multiple websites on XAMPP on Windows](http://www.wpwhitesecurity.com/wordpress-tips-webmasters/multiple-websites-xampp/)


Setting up for development

Initial module installation

There are a number of modules that are so regularly used that they are default installs for every Drupal site. With Drush installed, you can easily install all these modules from your command line.
To double check that Drush is installed correctly on your system, navigate to the root of your Drupal installation and run:
  drush status

You should see something like this:


The modules are as follows:
  • Administration menu -> A better version of the administration toolbar that ships with Drupal
  • Devel -> Allows use of the dpm() function, which is the equivalent of console.log() in javascript.
  • Views -> Used for displaying the content on the site in all manner of configurations
  • Ctools -> Dependency for views
  • Token -> for using placeholders in content, urls, etc.
  • Pathauto -> The standard for automatic path aliasing
  • Display suite -> for adding advanced field configuration and layout control for node pages (and other entities)
  • Libraries -> an API module for modules, allows for better management of external libraries
  • Date -> Adds a date field type to Drupal
  • Smart trim -> Allows for better management of summary content displays
  • Registry Rebuild -> To rebuild the registry (a list of PHP classes and the files they go with)
  
  
Download all of them using the following command:
  drush dl admin_menu devel views ctools token pathauto date libraries smart_trim ds registry_rebuild -y

Enable them by using the following command:
  drush en admin_menu devel views views_ui ds ds_ui ctools token pathauto date libraries smart_trim registry_rebuild -y
  
Other modules will be installed depending on the requirements of the site. The guiding principle of building Drupal sites is to limit the amount of custom code written. 

Module selection is an integral part of building a Drupal site. If the particular functionality is relatively niche, it makes sense to examine the usage statistics of the module, the number of open issues it has and if there are any critical bugs.

 The good thing is that the community often writes patches to fix bugs, so Drupal.org is a valuable resource throughout the development process.

Additional developer friendly tweaks

Add the following three lines to your settings.php file.
  error_reporting(E_ALL);
  ini_set('display_errors', TRUE);
  ini_set('display_startup_errors', TRUE);
This turns on error reporting, which is extremely helpful when developing. Otherwise, you will just end up with a white screen and not know what's wrong.

Resources for troubleshooting Drupal issues

http://drupal.stackexchange.com/
https://www.drupal.org/

alias jsa='jekyll server --drafts --config _config.yml,_config_dev.yml --watch';


# Site settings
title: Chen Hui Jing
email: kakyou_tensai@yahoo.com
description: The chronicles of a self-taught designer and developer.
baseurl: ""
url: "http://127.0.0.1:4000" 

relative_permalinks: false
permalink: /blog/:title/
paginate: 8
paginate_path: "/blog/page:num"

twitter_username: hj_chen
github_username:  huijing
drupalorg_username: huijing
about: "I'm Hui Jing, a designer and front-end developer who builds Drupal-flavoured websites."

# Build settings
markdown: kramdown
gems:
  - jekyll-sitemap
  - jemoji

# Exclude files and folder
exclude:
  - node_modules
  - gulpfile.js
  - package.json
  - bower_components

defaults:
  -
    scope:
      path: ""      # empty string for all files
      type: posts   # limit to posts
    values:
      is_post: true # automatically set is_post=true for all posts
