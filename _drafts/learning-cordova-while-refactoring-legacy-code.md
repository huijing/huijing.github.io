---
layout: post
title: "Learning Cordova while rewriting an app"
date: Apr 07, 2018
tags: [css, html, javascript]
---
This is another “refactoring legacy code” post, and I suspect you'll see more of these in the months to come. Like I said in a previous post, I've decided to do a bit more adulting and took on some gainful employment. A major part of the role I took is janitorial duties of the existing code base.

I say *janitorial* with a lot of love. There are, in my opinion, two kinds of developers around, one who loves creating cool stuff that sort of works and ships these new apps like people change underwear. And then there's the kind who comes in after the crowds have gone home, and the lights have been turned off, and refactors that code into something solid, writes documentation and basically sweeps up after the party.

I'm the second kind of developer. Look, who doesn't like playing with the new stuff? Most of us probably do. Maybe. But I find genuine comfort in refactoring and clean up work. Because I'm a weird person. Keep that in mind if you ever meet me in person.

## Hey, so we have this demo...

My current company is in the business of fraud detection systems, namely, payments fraud. There are several areas in which we can offer services through our products and one of them is customer on-boarding for banks and financial institutions.

Anyway, long story short, there was a pretty interesting concept the business team had developed and someone on the tech team had built out a proof-of-concept demo showcasing said concept.

It was a two-parter, meaning the setup involved an app running off a tablet, and an online dashboard. The demo was used by our sales team from time to time when engaging potential clients and to be honest, when I first saw it, I was kind of impressed as well. Because the concept made sense, and having the demo to illustrate the flow made the explanation all the more compelling.

But, being the *mildly* OCD person I was, some things just jumped out at me, like, I don't know, the page title of the web page being “Free Bootstrap Admin Template: Dream”. To provide some background of this situation I'm in, the team never really had a front-end developer before. As far as I know, the team had been focused on building out the back-end functionality of the company's core products.

I was not the least bit surprised that everything was built with Bootstrap. But that's why I have a job now, right? Also, between the time the demo was built till now, the company also went through a corporate re-branding exercise, so we had different corporate colours now as well. It was as good a time as any to refresh the demo.

## Native app? But I'm so foreign...

Sorry, that was a terrible attempt at a joke. But truth be told, I've NEVER built a native app in my life. Upon further examination of the codebase though, I realised that this wasn't really a native app to begin with, it was built with [Cordova](https://cordova.apache.org/). This I could work with.

The amount of time I spent troubleshooting my local environment for Cordova development was ridiculous. I ended up with [Android Studio](https://developer.android.com/studio/index.html) installed (although I don't actually use it for anything), but ran everything with the [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/#installing-the-cordova-cli) from my terminal.

It also took me 2 days before I realised that rather than trying to fix all the version compatibility issues between the different tools, it was easier to just trace the version of the tool the original developer used and use that instead. Based on the commit dates in the repository, I downgraded to [Cordova 6.5.0](https://cordova.apache.org/news/2017/01/23/tools-release.html) and everything magically worked. I also installed [Gradle](https://gradle.org/) via [Homebrew](https://brew.sh/) because the Android Studio version just wouldn't take.

Another thing about this legacy demo was that the repository had no `.gitignore` file. So all the build artefacts happened to end up in the repository as well. As I was so terribly stuck during the two days of setting up, I read through the Cordova documentation and came across this section on [version control](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/#version-control), which stated:

> It is recommended not to check in `platforms/` and `plugins/` directories into version control as they are considered a build artifact. Your platforms and plugins will be saved in `config.xml` & `package.json` automatically. These platforms/plugins will be downloaded when on the machine when `cordova prepare` is invoked.

I've had the unfortunate experience of [bombing up a Git repository]({{ site.url }}/blog/the-epic-git-bomb/) rather early on in my career, and since then, I've always made sure my repositories have properly set up `.gitignore` files. Because, cleaning up a bombed repository is not fun at all. My `.gitignore` file ended up looking like this:

<pre><code class="language-bash"># Mac
.DS_Store
.AppleDouble
.LSOverride
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
.AppleDB
.AppleDesktop
.apdisk
.idea

# Windows
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BIN/
*.lnk

# Build artifacts
capture_plus/platforms
capture_plus/plugins
node_modules

# IDE files
android.iml
CordovaLib.iml</code></pre>

I also started up a new repository because there was too much history in the original repository for my liking. I guess that's like a cop out, but I was on a time crunch here, my friends. Life isn't perfect and I don't make perfect decisions.

## What is this Cordova?

According to the [documentation](https://cordova.apache.org/docs/en/latest/guide/overview/index.html), Apache Cordova is an open-source mobile development framework which allows us to use standard web technologies–HTML, CSS and Javascript–for cross platform development.

This made it possible for me to treat the project like a typical web application, and set up my regular gulp workflow for Sass compilation, Babel transpiling and Nunjucks as the templating language.

My project folder structure ended up looking like this:

<pre><code class="language-bash">PROJECT_NAME/
|-- .git/
|-- .gitignore
`-- APP_FOLDER/
    |-- config.xml
    |-- hooks/
    |-- platforms/
    |-- res/
    `-- www/
|-- gulpfile.js
|-- node_modules/
|-- package.json
|-- README.md
`-- src/
    |-- js/
    |-- pages/
    |-- scss/
    `-- templates/</code></pre>

The `APP_FOLDER` was where all the Cordova-related commands would be run from, and only contained files that were relevant for the app. My source code was all placed in `src` and gulp would process them into the `www` folder. Most of our projects are built in Python, so [Flask](http://flask.pocoo.org/) was a commonly used framework for developing the web-based UI portion.

Flask uses [Jinja2](http://jinja.pocoo.org/docs/2.10/) as its templating language and [Nunjucks](https://mozilla.github.io/nunjucks/) uses a very similar syntax, because it was based off Jinja2 to begin with. A templating language really streamlines the development workflow because of features like the ability to use includes and macros, template inheritance, use of iterators etc.

## Gulpify-ing Cordova development

As mentioned, my workflow involves three major tasks, compiling Sass into CSS, transpiling ES6 with Babel, and compiling Nunjucks templates into HTML. Based on the folder structure as outlined above, here are each of the three tasks' gulp functions:

<pre><code class="language-javascript">gulp.task('sass', function () {
  return gulp.src('src/scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 3 versions', '> 3%'], { cascade: true }))
  .pipe(gulp.dest('capture_plus/www/css'))
  .pipe(browserSync.reload({stream:true}))
});</code></pre>

<pre><code class="language-javascript">gulp.task('scripts', function() {
  return gulp.src(['src/js/*.js'])
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('capture_plus/www/js'))
  .pipe(browserSync.reload({stream:true}))
});</code></pre>

<pre><code class="language-javascript">gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.+(njk)')
  .pipe(render({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('capture_plus/www'))
  .pipe(browserSync.reload({stream:true}))
});</code></pre>

A critical part of my workflow is the use of [Browsersync](https://browsersync.io/). So that's in the `gulpfile.js` as well:

<pre><code class="language-javascript">gulp.task('browser-sync', ['nunjucks', 'sass', 'scripts'], function() {
  browserSync.init({
    server: "APP_NAME/www",
    port: 6001 /* Pick your favourite port number */
  });
});</code></pre>
