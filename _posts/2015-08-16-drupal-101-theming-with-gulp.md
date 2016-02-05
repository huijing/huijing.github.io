---
layout: post
title: "Drupal 101: Theming Drupal 7 with gulp"
date: August 16, 2015
image: drupal-gulp.jpg
description: "If you write a lot of custom Drupal themes, gulp can really help streamline your workflow. Every second saved counts."
tags: [theming, drupal7, workflow]
category: planet-drupal
---
I still remember the first Drupal 7 theme I built. It was for the [Singapore Gastric Cancer Consortium website]({{ site.url }}/blog/the-one-i-cut-my-teeth-on/), and at the time I barely knew my way around HTML and CSS. I used the [Zen](https://www.drupal.org/project/zen) theme as my starter theme, and unknowingly wrote my CSS in `.scss` files without realising the distinction. I was a little bit confused to why I needed to install a software called Codekit to make everything work but was too busy trying to get the theme up and running to worry about it at the time.

## Let's talk about that thing called Sass

After I finished up with that project, I took the time to understand exactly what was going on. That's when I learned what Sass was. Sass, like CSS, is a stylesheet language. It was developed as part of the HAML markup language, but has since grown into its own. Sass was invented by [Hampton Catlin](http://www.hamptoncatlin.com/) in 2006. [Natalie Weizenbaum](https://twitter.com/nex3/), the primary designer and developer of Sass, and [Chris Eppstein](http://chriseppstein.github.io/) are the main contributors to the Sass language. The full Sass documentation can be found [here](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

Sass extends what CSS can do, by introducing useful features such as variables, nesting, mixins and so on. Browsers, however, only understand CSS so the Sass files have to be compiled into CSS for it to serve its purpose. Sass files come in two different syntaxes, Sass and <abbr title="Sassy CSS">SCSS</abbr>, both are currently supported but SCSS is the primary syntax. SCSS is exactly the same as CSS, so renaming any `.css` file to `.scss` works perfectly fine.

Sass originated as an open-source project built in Ruby. You can check out the source code [here](https://github.com/sass/sass). There are many ways you can get up and running with Sass, either from a GUI application or simply the command line. The official documentation for [installing Sass](http://sass-lang.com/install) is pretty comprehensive. The gist of all this is, in order to use Sass in your projects, the Sass files have to be compiled into CSS files first. [Dan Cederholm](http://simplebits.com/) wrote a great article about [Why Sass](http://alistapart.com/article/why-sass) on A List Apart. He describes how Sass simplifies and streamlines the stylesheet authoring process. 

Personally, the Sass functionalities I make use of most are variables and mixins. As well as the occasional for-loop. If you want to see a true Sass pro, [Hugo Giraudel](http://hugogiraudel.com/) is your man. He does a lot of amazing things with Sass and you should check out his [blog](http://hugogiraudel.com/blog/) and all his various [projects](http://hugogiraudel.com/projects/).

## And that other thing called gulp

Officially, [gulp](http://gulpjs.com/) is a build system. When I first heard of all these tools, like [Grunt](http://gruntjs.com/) and gulp, I didn't understand what they were. Terms like task-runner, build tools, streams and so on just flew over my head. The first article I ever read on task-runners was [Grunt for People Who Think Things Like Grunt are Weird and Hard](https://24ways.org/2013/grunt-is-not-weird-and-hard/) by [Chris Coyier](http://chriscoyier.net/). Honestly, I didn't get it. But it's totally my problem and not his (he's awesome). A fellow front-end developer tried to explain to me the benefits of Grunt, but at the time, there was nothing that I needed from Grunt which Codekit couldn't do. So I left task-runners alone, and went about my own way.

Earlier this year, I started doing a lot of HTML, CSS and Javascript experiments, so I came up with my own extremely bare-bones boilerplate, consisting of a 20-line HTML5 template file plus a styles.css file and a scripts.js file, both of which are blank. During these experiments, I found myself pressing ⌘-⇧-R at an alarming rate. Specifically I was doing ⌘-S (save file), ⌘-tab (switch to browser), ⌘-⇧-R (reload browser). And so, [Browsersync](http://www.browsersync.io/). Thing is, if you google "Browsersync development", the first result is [Browsersync + Gulp.js](http://www.browsersync.io/docs/gulp/). I had heard that gulp was easier to understand that Grunt, but was still sceptical, until I read the first tutorial. I actually understood what was happening almost immediately <span class="kaomoji">( ﾉ^.^)ﾉﾟ</span>.

In a nutshell, when we do front-end development, there are certain actions or tasks that we do repeatedly. Like the aforementioned furious browser-reloading. Sometimes, we also use Sass, which needs to be compiled. When we write Javascript, best practice implores us to concatenate and minify our scripts (for production). Lots of stuff to take care of. Rather than have to do all that manually, task-runners like Grunt and gulp can do them automatically whenever we save our working files. So that's what everyone is talking about when they say automating your workflow.

## Getting gulp on your system

### Node.js

gulp is based on [Node.js](https://nodejs.org/). Node.js is an open source Javascript run-time system, in other words, it's a way for your computer to execute Javascript code. You can read this [introduction to Node.js article](http://blog.modulus.io/absolute-beginners-guide-to-nodejs) to find out more about it. The bottom line is, you need to install Node.js on your computer. The most direct way to do this is to download and run the installer from the official website's [downloads page](https://nodejs.org/download/). This approach works for both Windows and Mac. Now if you're on Linux, the assumption is you by default already know how to get Node.js on your system. Nah, just kidding. [Joyent](https://www.joyent.com/) has a great guide on [installing Node.js and NPM](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) for a variety of Linux distributions.

<p class="no-margin">As a Mac user, I use <a href="http://brew.sh/">Homebrew</a> to handle all my development-related packages. Makes life easy when you can <code>brew install</code> almost all the things. To use Homebrew, you’ll need to install Command Line Tools first.</p>
<pre><code class="language-bash">xcode-select --install</code></pre>
<p class="no-margin">A software update window will pop-up and ask if you want to install the tools now. Just click Install and agree to the Terms and Conditions. The package is around 150mb (I think) and will download and install by itself. Once that's done, install Homebrew.</p>
<pre><code class="language-bash">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre>
<p class="no-margin">You can check that everything is running correctly by running:</p>
<pre><code class="language-bash">brew doctor</code></pre>
If it returns `Your system is ready to brew` then you're good to go. And now we finally get to install Node.js. Node.js comes with <abbr title="Node Package Manager">NPM</abbr>, which handles all your Node packages, like Gulp and Browsersync. To verify your installation, run `node -v` and `npm -v` in your Terminal. Both command should return the respective version numbers of each package.

<img srcset="{{ site.url }}/images/posts/drupal-gulp/node-install-810.jpg 1.5x, {{ site.url }}/images/posts/drupal-gulp/node-install-1080.jpg 2x" src="{{ site.url }}/images/posts/drupal-gulp/node-install-540.jpg" alt="Check node install" />

### gulp

<p class="no-margin">I don’t think most people care, but according to the <a href="https://github.com/gulpjs/gulp/blob/master/docs/FAQ.md">FAQ</a>, gulp is always lowercase, except for on the logo. But anyway, the next step is installing gulp.</p>
<pre><code class="language-bash">npm install gulp -g</code></pre>
The `-g` flag installs gulp globally on your system, allowing it to be used as a command line utility, even outside of node projects. However, you will still need to install gulp locally in your project folder. gulp will always look for a locally installed gulp to pass control to. This is actually makes deployment and dependency management much easier.

## gulp-ify your Drupal theme

If you're just starting out with Drupal theming, you can read my previous post on exactly that [right here]({{ site.url }}/blog/drupal-101-d7-theming/). The setup for this workflow is going to be different from the typical gulp tutorials you see on the web. Because Drupal has it's own quirks, you know. 

### Setting up the package.json file

<p class="no-margin">Navigate to the root of your Theme folder and initiate a new node project.</p>
<pre><code class="language-bash">npm init</code></pre>
This will trigger a series of prompts for the generation of a `package.json` file. This file will store all the information about the required node packages for your project. 

<img srcset="{{ site.url }}/images/posts/drupal-gulp/npm-init-480.jpg 480w, {{ site.url }}/images/posts/drupal-gulp/npm-init-640.jpg 640w, {{ site.url }}/images/posts/drupal-gulp/npm-init-960.jpg 960w, {{ site.url }}/images/posts/drupal-gulp/npm-init-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-gulp/npm-init-640.jpg" alt="npm init" />

Most of the prompts are pretty intuitive, and if you leave any of the fields blank, default values will be used. You can always change those values later. Set the entry point to `gulpfile.js` , and add information like the git repository if you wish.

<img srcset="{{ site.url }}/images/posts/drupal-gulp/package-json-480.jpg 480w, {{ site.url }}/images/posts/drupal-gulp/package-json-640.jpg 640w, {{ site.url }}/images/posts/drupal-gulp/package-json-960.jpg 960w, {{ site.url }}/images/posts/drupal-gulp/package-json-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-gulp/package-json-640.jpg" alt="npm init" />

:exclamation: **Important: Preventing segmentation fault**    
To prevent triggering a segmentation fault when running Drush, we need to add a script to the `package.json` file that will remove all `.info` files from the `node_modules` folder. Each node package has it's own `.info` file and it turns out that Drush thinks that they are all part of Drupal. Unfortunately, they are not in a format that Drush recognises and hence everything blows up badly. The `.info` files are not necessary for gulp to run properly so it's safe to remove them.

<p class="no-margin">If you had generated your <code>package.json</code> file by using <code>npm init</code> , locate the section called <code>"scripts":</code> , and replace the line:</p>
<pre><code class="language-bash">"test": "echo \"Error: no test specified\" && exit 1"</code></pre>
<p class="no-margin">with this line instead:</p>
<pre><code class="language-bash">"postinstall": "find node_modules/ -name '*.info' -type f -delete"</code></pre>
<p class="no-margin">Also, create a file called <code>.npmrc</code> in the root of your theme folder with the following contents:</p>
<pre><code class="language-bash">unsafe-perm = true</code></pre>
<p class="no-margin">References to this issue:</p>
<ul>
  <li class="no-margin"><a href="http://drupal.stackexchange.com/questions/126880/how-do-i-prevent-drupal-raising-a-segmentation-fault-when-using-a-node-js-themin">How do I prevent Drupal raising a segmentation fault when using a Node.js theming workflow?</a></li>
  <li><a href="http://dannyenglander.com/blog/drupal-drush-segmentation-fault-11-error-avoiding-rabbit-hole">Drupal Drush Segmentation Fault 11 Error: Avoiding the Rabbit Hole</a> <em>(This one’s a good read)</em></li>
</ul>

### Adding plugins to the package.json file

<p class="no-margin">Under normal circumstances, adding gulp-plugins to your project is a straight-forward affair on the command line. Simply use the command:</p>
<pre><code class="language-bash">npm install PLUGIN_NAME --save-dev</code></pre>

The `--save-dev` flag adds gulp, as a dependency, to your `package.json` file. All the subsequent gulp plug-ins we install locally will also go into this `package.json` file. For this case, however, we'll add the plugins we need directly to the `package.json` file.

Since gulp is simply a tool that helps automate tasks, we need to decide what tasks we want gulp to do for us. For example, I use Sass in my Drupal themes, so one of my tasks will be to compile Sass. This particular workflow I'm describing does not come with minification though. 

I made the decision to handle performance optimisation through Drupal itself. Drupal 7 comes with the option of aggregating and compressing CSS, and aggregating JS. Even though Drupal 7 does not minify JS natively, there is a module called [Minify](https://www.drupal.org/project/minify) that uses [Google's Closure Compiler](https://developers.google.com/closure/compiler/?hl=en) for compression. This workflow I'm building really just automates the actual theming process (building templates, writing styles etc.). 

<p class="no-margin">Here's the list of plug-ins needed and what they will be used for:</p>
<ul>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp">gulp</a> - Still have to install gulp locally</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-sass">gulp-sass</a> - To compile Sass into CSS</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-autoprefixer">gulp-autoprefixer</a> - To add vendor-prefixes based on the latest specifications</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/browser-sync">browser-sync</a> - To live-reload the browser</li>
  <li><a href="https://www.npmjs.com/package/gulp-shell">gulp-shell</a> - To run drush for clearing caches</li>
</ul>
<p class="no-margin">This is what the final <code>package.json</code> looks like:</p>
<pre><code class="language-bash">{
  "name": "godzilla",
  "version": "1.0.0",
  "description": "A custom Drupal 7 godzilla theme",
  "main": "gulpfile.js",
  "devDependencies": {
        "browser-sync": "^2.8.1",
        "gulp": "^3.9.0",
        "gulp-autoprefixer": "^2.3.1",
        "gulp-sass": "^2.0.4",
        "gulp-shell": "^0.4.2"
  },
  "scripts": {
        "postinstall": "find node_modules/ -name '*.info' -type f -delete"
  },
  "author": &quot;huijing&quot;,
  "license": "ISC"
}</code></pre>

### Install all the things

<p class="no-margin">Run the following command in the root of your theme folder, which is where your <code>package.json</code> file should be:</p>
<pre><code class="language-bash">npm install</code></pre>
You'll see a whole lot of stuff going on in your terminal, but when all is said and done, you'll have a `node_modules` folder in your theme folder. This installation allows the script to prevent segmentation fault we added earlier to run as the modules are installed. For future gulp-plugins, you may have to run a <a href="http://dannyenglander.com/blog/drupal-drush-segmentation-fault-11-error-avoiding-rabbit-hole">script</a> to remove their <code>.info</code> files.

Make sure that `node_modules` is added to your `.gitignore` file because we do **NOT** want to commit those files. We only commit the `package.json` file and the `gulpfile.js` file. Anyone who clones the project will need to run `npm install` to get the project up and running.

### Writing the gulpfile.js

1. **Load the required plug-ins**  
    The `require` statement tells Node.js to refer to the `node_modules` folder, find the package stated in parenthesis and pass that into each respective variable in the list. These variables will be used when we write our various gulp tasks.
    <pre><code class="language-javascript">var gulp        = require('gulp'),
       browserSync = require('browser-sync'),
       sass        = require('gulp-sass'),
       prefix      = require('gulp-autoprefixer'),
       shell       = require('gulp-shell');</code></pre>

2. **Creating tasks**  
    We'll start off by creating a task to **compile Sass into CSS**. We'll also use [Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to add vendor-prefixes to the file before it gets output as a CSS file in the `css` folder. Finally, we want the new styles to be injected into the browser (no more ⌘-⇧-R〈( ^.^)ノ). Just check that your file paths are correct.
    <pre><code class="language-javascript">/**
 &ast; @task sass
 &ast; Compile files from scss
 &ast;/
gulp.task('sass', function () {
  return gulp.src('scss/styles.scss') // the source .scss file
  .pipe(sass()) // pass the file through gulp-sass
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer
  .pipe(gulp.dest('css')) // output .css file to css folder
  .pipe(browserSync.reload({stream:true})) // reload the stream
});</code></pre>
    
    <p class="no-margin">We'll also want a task for our favourite drush command, <code>drush cc all</code>. <strong>Clearing cache</strong> is the Drupal equivalent of <em>"Did you turn it off and on again?"</em>. I don't know about you but if I had a dollar for every time I ran this command, I'd be sipping Piña coladas :cocktail: all day on a beach in the Caribbean :sunglasses: by now. If you aren't using Drush, you really should. <a href="{{ site.url }}/blog/team-drupal-development#installing-drush">Here’s</a> an earlier post on how to get set up with Drush.</p>
    <pre><code class="language-javascript">/**
 * @task clearcache
 * Clear all caches
 */
gulp.task('clearcache', function() {
  return shell.task([
      'drush cc all'
  ]);
});</code></pre>

    <p class="no-margin">After clearing the cache, we'll also want to <strong>reload the page</strong>. <code class="language-javascript">gulp.task()</code> accepts three parameters, the task name (which is a string), an array of tasks to be completed before the current task can begin, and the function that holds the logic of the task. The array is an optional argument, so it's common to see gulp tasks with only two parameters defined. Here I want the <code class="language-javascript">'clearcache'</code> task to complete before reloading the page.</p> 
    <pre><code class="language-javascript">/**
 * @task reload
 * Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});</code></pre>

    <p class="no-margin">We want the <code class="language-javascript">'sass'</code> task to trigger when we've made changes to our .scss files and the <code class="language-javascript">'clearcache'</code> task to trigger when we've made changes to our template files. So we write another task to watch those files and trigger their respective tasks when changes have been made.</p>
    <pre><code class="language-javascript">/**
 * @task watch
 * Watch scss files for changes & recompile
 * Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
  gulp.watch('**/*.{php,inc,info}',['reload']);
});</code></pre>

    Browsersync is much more than just a tool to reload your browser. The sync portion of the name comes from the fact that you can synchronise interactions across multiple browsers. So if I set up a bunch of devices whose browsers are pointing to browser-sync's external access URL, I can control all these browsers at the same time. Scrolling, clicking, you name it. The [documentation](http://www.browsersync.io/docs/) is pretty comprehensive, and it's a good idea to familiarise yourself this extremely useful tool. 
    
    <p class="no-margin">You will need to install the browsersync Drupal module for this to work.</p>
    <pre><code class="language-javascript">drush en browsersync -y</code></pre>
    Then go to *Appearance > YOUR_THEME* and check *Enable Browsersync*, and you should be all set. On the gulpfile.js side of things, set the proxy to whatever alias your Drupal site is on. For the domain, just set it to localhost:3000, which is the Browsersync default. When you need to do testing on other devices, replace the IP address with the one shown in your Terminal window after running gulp.

    <img srcset="{{ site.url }}/images/posts/drupal-gulp/gulp-480.jpg 480w, {{ site.url }}/images/posts/drupal-gulp/gulp-640.jpg 640w, {{ site.url }}/images/posts/drupal-gulp/gulp-960.jpg 960w, {{ site.url }}/images/posts/drupal-gulp/gulp-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-gulp/gulp-640.jpg" alt="npm init" />

    <p class="no-margin">The task to <strong>launch the Browsersync server</strong> should look something like this:</p>
    <pre><code class="language-javascript">/**
 * Launch the Server
 */
 gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
      // Change as required
      proxy: "sandbox.dev",
      socket: {
          // For local development only use the default Browsersync local URL.
          domain: 'localhost:3000'
          // For external development (e.g on a mobile or tablet) use an external URL.
          // You will need to update this to whatever BS tells you is the external URL when you run Gulp.
          //domain: '192.168.0.13:3000'
      }
    });
});</code></pre>

    <p class="no-margin">Lastly, we're going to put everything together and write the task that runs all the things. This task will launch the Browsersync server and watch our files for changes. Each individual gulp task can be called with the command <code>gulp TASK_NAME</code>, by naming this task <code class="language-javascript">'default'</code>, we can run it by just typing <code>gulp</code>.</p>
    <pre><code class="language-javascript">/**
 * Default task, running just `gulp` will 
 * compile Sass files, launch Browsersync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);</code></pre>

    <p class="no-margin">My <code>gulpfile.js</code> in its entirety looks like this:</p>
    <pre><code class="language-javascript">var gulp        = require('gulp'),
       browserSync = require('browser-sync'),
       sass        = require('gulp-sass'),
       prefix      = require('gulp-autoprefixer'),
       shell       = require('gulp-shell');&NewLine;
/**
 * Launch the Server
 */
 gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
      // Change as required
      proxy: "sandbox.dev",
      socket: {
          // For local development only use the default Browsersync local URL.
          //domain: 'localhost:3000'
          // For external development (e.g on a mobile or tablet) use an external URL.
          // You will need to update this to whatever BS tells you is the external URL when you run Gulp.
          domain: '192.168.0.13:3000'
      }
    });
});&NewLine;
/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('scss/styles.scss')
  .pipe(sass())
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream:true}))
});&NewLine;
/**
 * @task clearcache
 * Clear all caches
 */
gulp.task('clearcache', function() {
  return shell.task([
    'drush cc all'
  ]);
});&NewLine;
/**
 * @task reload
 * Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});&NewLine;
/**
 * @task watch
 * Watch scss files for changes & recompile
 * Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
  gulp.watch('**/*.{php,inc,info}',['reload']);
});&NewLine;
/**
 * Default task, running just `gulp` will 
 * compile Sass files, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);</code></pre>

### Up and running with Gulp

<p class="no-margin">While you're in the root of your theme folder, run the command:</p>
<pre><code class="language-bash">gulp</code></pre>
Your terminal should look like the last screenshot above, and your browser will have a new window open with the URL pointing to `http://localhost:3000`. There will be a brief notification in the right corner that says *Connected to BrowserSync*. Now, when you write your styles, they will magically update in the Browser without you having to do anything. 

## Wrap-up

I learnt a lot throughout the process of trying to use gulp as part of my theming workflow and also spent a good amount of time googling issues. And hopefully some of the stuff I mentioned will save you some troubleshooting time when you set up your own theme to use gulp.
