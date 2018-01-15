---
layout: post
title: "Drupal 101: Theming Drupal 8 with gulp"
date: August 1, 2017
image: drupal-gulp
description: "If you write a lot of custom Drupal themes, gulp can really help streamline your workflow. Every second saved counts."
tags: [drupal8, theming, workflow]
category: planet-drupal
---
Around two years ago, I wrote a post called [Drupal 101: Theming Drupal 7 with gulp]({{ site.url }}/blog/drupal-101-theming-with-gulp/), which covered some basics about Sass and gulp. I'm not going to repeat myself, so if you can read that article if you're interested. This one is going to cover the delta for the `gulpfile.js` setup in Drupal 8.

## gulp-ify your Drupal theme

If you're just starting out with Drupal 8 theming, you can read my previous post on exactly that [right here]({{ site.url }}/blog/drupal-101-d8-theming/). I'm going to cover the gulp tasks that are relevant to my way of working, which is a whole lot less than what most other people do with gulp.

I only use gulp to compile Sass, handle ES6 and clear the cache when I update Twig templates. No minification because Drupal does that already.

### Setting up the package.json file

This part is completely replicated from the Drupal 7 post. Screenshots are tedious, so just replace all instances of *Drupal 7* in the screenshots with *Drupal 8* in your mind, thanks.

<p class="no-margin">Navigate to the root of your Theme folder and initiate a new node project.</p>
<pre><code class="language-bash">npm init</code></pre>
This will trigger a series of prompts for the generation of a `package.json` file. This file will store all the information about the required node packages for your project. 

<img srcset="{{ site.url }}/assets/images/posts/drupal-gulp/npm-init-480.jpg 480w, {{ site.url }}/assets/images/posts/drupal-gulp/npm-init-640.jpg 640w, {{ site.url }}/assets/images/posts/drupal-gulp/npm-init-960.jpg 960w, {{ site.url }}/assets/images/posts/drupal-gulp/npm-init-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/drupal-gulp/npm-init-640.jpg" alt="npm init" />

Most of the prompts are pretty intuitive, and if you leave any of the fields blank, default values will be used. You can always change those values later. Set the entry point to `gulpfile.js` , and add information like the git repository if you wish.

<img srcset="{{ site.url }}/assets/images/posts/drupal-gulp/package-json-480.jpg 480w, {{ site.url }}/assets/images/posts/drupal-gulp/package-json-640.jpg 640w, {{ site.url }}/assets/images/posts/drupal-gulp/package-json-960.jpg 960w, {{ site.url }}/assets/images/posts/drupal-gulp/package-json-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/drupal-gulp/package-json-640.jpg" alt="npm init" />

<span class="emoji" role="img" tabindex="0" aria-label="exclamation mark">&#x2757;</span> **Important: Preventing segmentation fault**    
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

### Plugins used

<p class="no-margin">Here's the list of plug-ins needed and what they will be used for:</p>
<ul>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp">gulp</a> - Still have to install gulp locally</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-sass">gulp-sass</a> - To compile Sass into CSS</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-autoprefixer">gulp-autoprefixer</a> - To add vendor-prefixes based on the latest specifications</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/browser-sync">browser-sync</a> - To live-reload the browser</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-concat">gulp-concat</a> - To concatenate all your different Javascript files into one big one</li>
  <li class="no-margin"><a href="https://www.npmjs.com/package/gulp-babel">gulp-babel</a> - To write ES6 and transpile it so browsers can understand what you're writing</li>
  <li><a href="https://www.npmjs.com/package/babel-preset-es2015">babel-preset-es2015</a> - Part of gulp-babel, but has to be installed as well</li>
</ul>

<p class="no-margin">This is what the final <code>package.json</code> looks like:</p>
<pre><code class="language-javascript">{
  "name": "drupal-8-starter",
  "version": "1.0.0",
  "description": "gulp workflow for Drupal 8 theming",
  "main": "gulpfile.js",
  "devDependencies": {
    "babel-preset-es2015": "^6.24.1",
    "browser-sync": "^2.18.13",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-babel": "^6.1.2",
    "gulp-sass": "^3.1.0"
  },
  "scripts": {
    "postinstall": "find node_modules/ -name '*.info' -type f -delete"
  },
  "author": "huijing <kakyou_tensai@yahoo.com>",
  "license": "ISC"
}
</code></pre>

### gulpfile.js setup

The Drupal 7 post goes into a lot more detail on creating tasks and what each of the tasks does, and installing stuff, and if that's what you need, [head on over there]({{ site.url }}/blog/drupal-101-theming-with-gulp/). This is simply the updated `gulpfile.js` for Drupal 8.

<pre><code class="language-javascript">var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    babel       = require('gulp-babel'),
    cp          = require('child_process');&NewLine;
/**
 &ast; Launch the Server
 */
 gulp.task('browser-sync', ['sass', 'scripts'], function() {
    browserSync.init({
      // Change as required, also remember to set in theme settings
      proxy: "HOSTNAME.dev",
      port: 3000
    });
});&NewLine;
/**
 &ast; @task sass
 &ast; Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('_scss/styles.scss')
  .pipe(sass())
  .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream:true}))
});&NewLine;
/**
 &ast; @task scripts
 &ast; Compile files from js
 */
gulp.task('scripts', function() {
  return gulp.src(['_js/*.js', '_js/custom.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.reload({stream:true}))
});&NewLine;
/**
 &ast; @task clearcache
 &ast; Clear all caches
 */
gulp.task('clearcache', function(done) {
  return cp.spawn('drush', ['cache-rebuild'], {stdio: 'inherit'})
  .on('close', done);
});&NewLine;
/**
 &ast; @task reload
 &ast; Refresh the page after clearing cache
 */
gulp.task('reload', ['clearcache'], function () {
  browserSync.reload();
});&NewLine;
/**
 &ast; @task watch
 &ast; Watch scss files for changes & recompile
 &ast; Clear cache when Drupal related files are changed
 */
gulp.task('watch', function () {
  gulp.watch(['_scss/*.scss', '_scss/**/*.scss'], ['sass']);
  gulp.watch(['_js/*.js'], ['scripts']);
  gulp.watch(['templates/*.html.twig', '**/*.yml'], ['reload']);
});&NewLine;
/**
 &ast; Default task, running just `gulp` will 
 &ast; compile Sass files, launch BrowserSync, watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);</code></pre>

## Wrap-up

Porting an existing project up a version number is always a bit of a chore, but it always feels good when it's done. Dear future self, one day you'll look back at this post and be thankful you wrote it, because you almost never remember anything unless you error out big time. You're welcome.
