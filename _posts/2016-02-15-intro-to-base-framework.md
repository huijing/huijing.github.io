---
layout: post
title: "Introduction to the Base Framework"
date: Feb 15, 2016
image: base.jpg
tags: [kohana]
---

I had previously only ever had experience with Drupal, which isn't an MVC (Model-View-Controller) framework. I had heard of MVC frameworks and even googled what it meant, but somehow it just did not click. After more than 2 years since my first professional start in web development, I'm more certain than ever that if I don't build something for real, my brain just refuses to learn. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

The creator of the base framework (who also used to be my boss) had expressed intent to open-source it, eventually (when he's less busy). So maybe some day in the future, some developer may chance upon the framework and try it for their project. Hopefully this post will still exist then and be of help.

## Le Framework (as explained by a noob)

The framework is based on Kohana, which is an MVC (Model-View-Controller) framework. It's unimaginatively called the **Base Framework**. Having been "brought up" on Drupal, I had been shielded from a lot of things, like routing. Drupal handles routing without me having to even think twice about it. A static site doesn't really use any routing (I think), so I hadn't been exposed to the intricacies of routing up till that point. Imagine my surprise when I realised that typing the URL of the page I just created gave me this wonderful error screen.

<img srcset="{{ site.url }}/images/posts/base-framework/error-480.jpeg 480w, {{ site.url }}/images/posts/base-framework/error-640.jpeg 640w, {{ site.url }}/images/posts/base-framework/error-960.jpeg 960w, {{ site.url }}/images/posts/base-framework/error-1280.jpeg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/base-framework/error-640.jpeg" alt="Controller not found error" />

My boss gave me a look reminiscent of one a renowned and powerful Jedi master gave his protégé.

<img srcset="{{ site.url }}/images/posts/base-framework/padawan@2x.jpg 2x" src="{{ site.url }}/images/posts/base-framework/padawan.jpeg" alt="Much to learn you still have" />

My role was mainly front-end development, which meant that anything related to the Views was my domain. But that didn't mean I could get away with not understanding how the framework worked in totality. As I was wrapping my head around it, I figured I'd document my thoughts into some official-looking front-end developers documentation, which I am re-purposing into this blog post. *#whynot*

### So...MVC?

**Model** represents the data structure. It does not depend on the controller or the view.

**View** displays the model data and sends user actions to the controller.

**Controller** provides the model data to the view and interprets user actions. 

### Views - The 'V' in MVC 
 
<p class="no-margin">The framework itself is very flexible. You are actually free to structure the project files however you like, but if you ever plan on being friends with the other developers on your team, it is advisable to have some general guidelines. Our team structured the views folder like so:</p>
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

In general, front-end developers will not make changes to the model. The controller will handle routing for the application and some of the business logic. I have been told by other experienced back-end developers that controllers shouldn't even have business logic in them. I, being a noob at this, am not qualified (yet) to give advice in this domain, so please consult your resident back-end developer instead.

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

For front-end development, most of the work will be done in the `skin` and `views` folders. The Base Framework also comes with a number of developer-friendly conveniences too.

### Using a new library 

<p class="no-margin">The media folder contains various external libraries used for development, like Bootstrap and jQuery UI, just to name a few. Of course, it is not mandatory to use them, but they have been included in the repository for the sake of convenience. That being said, my opinion on CSS frameworks is, roll your own, every time. This folder has the following structure:</p>
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
 
<p class="no-margin">In the above example, styles in `reset.css` will come first, followed by `fluid.css` and so on. As such, all the dependencies can be managed from this configuration file. Groups of scripts can be called by name-spacing the file as follows:</p>
<pre><code class="language-php">&lt;?php echo html::style('media/css/group-GROUP_NAME.css'); ?&gt;
&lt;?php echo html::style('media/js/group-GROUP_NAME.js'); ?&gt;</code></pre>

<p class="no-margin">To add a new library, just add those files into their relevant folders in the media folder:</p>
<pre><code class="language-php">media/ 
    |-- css/ 
    |-- fonts/ 
    |-- img/ 
    `-- js/</code></pre>

Once the library files have been added to their respective folders, those files must be referenced in the `config/media.php` file. There is documentation within the `media.php` file on how use this file correctly (because my boss is a responsible developer).

<p class="no-margin">The purpose of separating external library files from custom code is for hygiene as well as ease of upgrading. This is a concept that I learned when I was doing Drupal, but I think it applies to all frameworks in general. Any custom code or overrides should go into the `skin` folder, which has the following file structure:</p>
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

<p class="no-margin">The default CSS file is named global.css and will contain the custom styles for the admin portion and front-facing portion of the site respectively. You can always change the name of the file, and change the corresponding line in the `template.php` file to get it to load. For CSS styles that only apply to a particular page, name-space the stylesheet as follows:</p>
<pre><code class="language-bash">view-FOLDER_NAME-FILE_NAME.css</code></pre>

<p class="no-margin">Javascript is also handled in a similar way. There is a global.js file which contains functions that are called on every page. If there are page-specific Javascript functions, the file should be name-spaced like so:</p>
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

## Wrapping up

That's pretty much it in terms of using the framework from a front-end developer's perspective. I will update this post to link to the source code of the framework once it's released to the wild. So stay tuned.

## Further reading

<ul>
  <li class="no-margin"><a href="https://kohanaframework.org/3.3/guide/kohana/">Kohana Official Documentation</a></li>
  <li><a href="http://zackperdue.com/tutorials/understanding-kohana-routes">Understanding Kohana Routes</a></li>
</ul>
