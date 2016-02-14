---
layout: post
title: "The one where I grok MVC"
date: Dec 07. 2015
project: SG50 Time Machine
image: project-11.jpg
tags: [kohana, projects]
---

Earlier this year, I mentioned that I was starting out with the [Kohana](https://kohanaframework.org/) framework. Actually, my team uses a heavily modified version of the Kohana framework as a starter for all our projects. In addition to the Kohana base architecture, our framework had a bunch of goodies built in, like lazy-loading, a run-time Sass compiler and so on. But I digress. We had been tasked to build the website for Audi's SG50 Time Machine campaign. 

<img srcset="{{ site.url }}/images/posts/sg50/sg50-480.jpg 480w, {{ site.url }}/images/posts/sg50/sg50-640.jpg 640w, {{ site.url }}/images/posts/sg50/sg50-960.jpg 960w, {{ site.url }}/images/posts/sg50/sg50-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/sg50-640.jpg" alt="A Drive Back in Time" />

I had previously only ever had experience with Drupal, which isn't an MVC (Model-View-Controller) framework. I had heard of MVC frameworks and even googled what it meant, but somehow it just did not click. After more than 2 years since my first professional start in web development, I'm more certain than ever that if I don't build something for real, my brain just refuses to learn. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

##Le Framework (as explained by a noob)
Our framework is based on Kohana, which is an MVC (Model-View-Controller) framework. It's called (unimaginatively) **Base Framework**. Having been "brought up" on Drupal, I had been shielded from a lot of things, like routing. Drupal handles routing without me having to even think twice about it. A static site doesn't really use any routing (I think), so I had not been exposed to the intricacies of routing up till that point. Imagine my surprise when I realised that typing the URL of the page I just created gave me this wonderful error screen.

<img srcset="{{ site.url }}/images/posts/sg50/error-480.jpeg 480w, {{ site.url }}/images/posts/sg50/error-640.jpeg 640w, {{ site.url }}/images/posts/sg50/error-960.jpeg 960w, {{ site.url }}/images/posts/sg50/error-1280.jpeg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/sg50/error-640.jpeg" alt="Controller not found error" />

My boss gave me a look reminiscent of one a renowned and powerful Jedi master gave his protégé.

<img srcset="{{ site.url }}/images/posts/sg50/padawan@2x.jpg 2x" src="{{ site.url }}/images/posts/sg50/padawan.jpeg" alt="Much to learn you still have" />

My role was mainly front-end development, which meant that anything related to the Views was my domain. But that didn't mean I could get away with not understanding how the framework worked in totality. As I was wrapping my head around it, I figured I'd document my thoughts into some official-looking front-end developers documentation.

**Model** represents the data structure. It does not depend on the controller or the view.

**View** displays the model data and sends user actions to the controller.

**Controller** provides the model data to the view and interprets user actions. 

### Views - The 'V' in MVC 
 
<p class="no-margin">The framework itself is very flexible. You are actually free to structure the project files however you like, but given we are working as a development team, it is advisable to have some general guidelines. Our team structures the views folder as follows:</p>
<pre><code class="language-bash">views/ 
    |-- admin/ 
    | 
    |-- front/ 
    |   |-- common/ 
    |   |-- page/ 
    |   `-- template.php 
    | 
    `-- mobile/</code></pre>

<p class="no-margin">Views for the admin interface are placed in the `admin` folder, while those for the front-facing website are placed in the `front` folder. Common elements like the head, navigation, header, footer and so on should be in individual .php files, placed in the common folder. These blocks of code are called via the following statement in the template.php file:</p>
<pre><code class="language-php">&lt;?php echo View::factory('common/FILE_NAME'); ?&gt;</code></pre>
 
The `template.php` file determines the structure of the HTML document and is called via the `default.php` file in the `controller` folder.
 
### Model and Controller - The 'M' and 'C' in MVC 
 
<p class="no-margin">The `classes` folder houses the controller and model portions of the framework. The file structure looks something like this:</p>
<pre><code class="language-bash">classes/ 
    |-- controller/ 
    |   |-- admin/ 
    |   | 
    |   |-- front/ 
    |   |   `-- default.php 
    |   | 
    |   `-- mobile/ 
    | 
    |-- model/ 
    | 
    `-- kohana.php</code></pre>

In general, front-end developers will not make changes to the model. 
The controller will handle routing for the application and most of the business logic.

### Using the Base Framework

<p class="no-margin">The source code for the site is housed in the application folder, which has the following file structure:</p>
<pre><code class="language-bash">application/ 
    |-- bootstrap.php 
    |-- cache/ 
    |-- classes/ 
    |-- config/ 
    |-- i18n/ 
    |-- logs/ 
    |-- media/ 
    |-- messages/ 
    |-- skin/ 
    |-- vendor/ 
    `-- views/</code></pre>

For front-end development, most of the work will be done in the `skin` and `views` folders. However, there are a lot of developer friendly conveniences that Base Framework provides as well.

### Using a new library 

<p class="no-margin">The media folder contains various external libraries used for development, like Bootstrap and jQuery UI, just to name a few. Of course, it is not mandatory to use them, but they have been included in the repository for the sake of convenience. That being said, my opinion on CSS frameworks is, roll your own, every time. The folder has the following structure:</p>
<pre><code class="language-bash">media/
    |-- css/ 
    |-- fonts/ 
    |-- img/ 
    `-- js/</code></pre>
 
<p class="no-margin">The framework was built to optimise (concatenate, minify and cache) CSS (and SCSS) and JS files via the `config/media.php` file. We can create groups to better organise your scripts, and determine their order. For example:</p>
<pre><code class="language-php">'groups' => array( 
  // Begin: CSS groups 
  'css' => array( 
    'responsive' => array( 
      'foundation/normalize.css', 
      'foundation/foundation.css', 
    ), 
    'fluid' => array( 
      'reset.css', 
      'fluid.css', 
      'text.css', 
      'forms.css', 
      'buttons.css', 
      'sprite.css', 
      'listing.css', 
      'shared.css', 
    ), 
  ), 
  'js' => array( 
    'essential' => array( 
      'lazyload.js', 
      'underscore.js', 
      'jquery.js', 
      'jquery-ui.min.js', 
      'bootstrap.min.js', 
    ), 
  ),
)</code></pre>
 
<p class="no-margin">In the above example, styles in `reset.css` will come first, followed by `fluid.css` and so on. As such, all the dependencies can be managed from this config file. Groups of scripts can be called by name-spacing the file as follows:</p>
<pre><code class="language-php">&lt;?php echo html::style('media/css/group-GROUP_NAME.css'); ?&gt;
&lt;?php echo html::style('media/js/group-GROUP_NAME.js'); ?&gt;</code></pre>

<p class="no-margin">To add a new library, we just add those files into their relevant folders in the media folder:</p>
<pre><code class="language-php">media/ 
    |-- css/ 
    |-- fonts/ 
    |-- img/ 
    `-- js/</code></pre>

Once the library files have been added to their respective folders, these files must be referenced in the `config/media.php` file. There is documentation within the `media.php` file on how use this file correctly (because my boss is a responsible developer).

<p class="no-margin">The purpose of separating external library files from custom code is for hygiene as well as ease of upgrading. This is a concept that I learned when I was doing Drupal, but I think it applies to all frameworks in general. Any custom code or overrides should go into the `skin` folder. It has the following file structure:</p>
<pre><code class="language-bash">skin/ 
    |-- admin/ 
    |   |-- css/ 
    |   |-- img/ 
    |   `-- js/ 
    | 
    |-- front/ 
    |   |-- css/ 
    |   |-- img/ 
    |   `-- js/ 
    | 
    `-- mobile/ 
        |-- css/ 
        |-- img/ 
        `-- js/</code></pre>

### Building and styling pages

Let's say we want to add a gallery page to the project. First, add a `gallery.php` file to the `views/page` folder. Routing for the front page is usually handled in the `default.php` file in the `classes/controller/front/` folder. I managed to find a pretty good explanation for the [routing system used by Kohana](http://zackperdue.com/tutorials/understanding-kohana-routes) written by [Zack Purdue](http://zackperdue.com/). Read it and you will understand why the following route needs to be added inside the `Controller_Front_Default class`:
<pre><code class="language-php">public function action_gallery() { 
  $tpl = $this->template; 
  $tpl->content = View::factory('page/gallery'); 
}</code></pre>

<p class="no-margin">The default CSS file is named global.css and will contain the custom styles for the admin portion and front-facing portion of the site respectively. For CSS styles that only apply to a particular page, we can choose to load a particular stylesheet for that page only by name-spacing the stylesheet as follows:</p>
<pre><code class="language-bash">view-FOLDER_NAME-FILE_NAME.css</code></pre>

<p class="no-margin">Javascript is also handled in a similar way. There is a global.js file which contains functions that are called on every page. If there are page-specific Javascript functions, the file should be name-spaced as follows:</p>
<pre><code class="language-bash">view-FOLDER_NAME-FILE_NAME.js</code></pre> 
 
<p class="no-margin">When we need to add custom styling to our pages and components, these code overrides will be made in the `skin` folder. For this example, we will refer to the `front` folder, but the other folders should follow the same structure as well.</p>
<pre><code class="language-bash">front/ 
   |-- css/ 
   |   |-- global.css  
   |   `-- view-page-gallery.css 
   | 
   |-- img/ 
   `-- js/ 
       |-- global.js 
       `-- view-page-gallery.js</code></pre>

### Dealing with images 
 
<p class="no-margin">There are 3 folders in the Base Framework that are used to store images. Each folder serves a different purpose and images should be placed in their respective folders depending on their usage.</p>
<pre><code class="language-bash">/assets 
/application/media/img 
/application/skin/SITE_SECTION/img</code></pre> 

**Assets folder:** All content-related images should be stored here. 
Examples of content-related images are user images, product images or article images. These images are part of the site's content. 

**Media folder:** All library-related images should be stored here. Some libraries that we use come with images, usually if they have a theme component. For example, if you use jQuery UI with a theme, the download comes with an image folder. If we want to use the pre-packaged theme, then those images go into the `media/img` folder.

**Skin folder:** All theme-related images should be stored here. As we style the site, we need to use icons and background images. These images should be placed in their respective `img` folders in the `skin` folder.

## Building the website

## Further reading

<ul>
  <li class="no-margin"><a href="https://kohanaframework.org/3.3/guide/kohana/">Kohana Official Documentation</a></li>
  <li class="no-margin"><a href="http://zackperdue.com/tutorials/understanding-kohana-routes">Understanding Kohana Routes</a></li>
</ul>
