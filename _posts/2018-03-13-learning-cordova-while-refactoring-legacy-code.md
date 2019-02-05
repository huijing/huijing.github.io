---
layout: post
title: "Learning Cordova while rewriting an app"
date: Mar 13, 2018
tags: [css, html, javascript, gulp]
---
This is a “refactoring legacy code” post, and I suspect you'll see more of these in the months to come because I've decided to do a bit of adulting by taking on some gainful employment. A major part of the role involves janitorial duties for the existing front-end code base.

I say *janitorial* with a lot of love. There are, in my opinion, two kinds of developers around, those who love creating cool stuff that sort of works and ship new apps like people change underwear. And then there are those who come in after the crowds have gone home, and the lights have been turned off, and refactor that code into something solid, write documentation and basically sweep up after the party.

I'm the second kind of developer. Look, who doesn't like playing with the new stuff? Most of us probably do. Maybe. But I find genuine comfort in refactoring and clean up work. Because I'm a weird person. Keep that in mind if you ever meet me in person.

## Hey, so we have this demo...

My current company is in the business of fraud detection systems, namely, payments fraud. There are several areas in which we can offer services through our products and one of them is customer on-boarding for banks and financial institutions.

Anyway, long story short, there was a pretty interesting concept the business team had developed and someone on the tech team had built out a proof-of-concept demo showcasing said concept.

It was a two-parter, meaning the setup involved an app running off a tablet, and an online dashboard. The demo was used by our sales team from time to time when engaging potential clients and to be honest, when I first saw it, I was kind of impressed as well. Because the concept made sense, and having the demo illustrate the flow made the explanation all the more compelling.

But, being the *mildly* OCD person I was, some things just jumped out at me, like, I don't know, the page title of the web page being “Free Bootstrap Admin Template: Dream”. To provide some background of this situation I'm in, the team never really had a front-end developer before. As far as I know, the team had been focused on building out the back-end functionality of the company's core products.

I was not the least bit surprised that everything was built with Bootstrap. But that's why I have a job now, right? Also, between the time the demo was built till now, the company went through a corporate re-branding exercise, so we had different corporate colours now. It was as good a time as any to refresh the demo.

## Native app? But I'm so foreign...

Sorry, that was a terrible attempt at a joke. But truth be told, I've NEVER built a native app in my life. Upon further examination of the codebase though, I realised that this wasn't really a native app to begin with, it was built with [Cordova](https://cordova.apache.org/). This I could work with.

The amount of time I spent troubleshooting my local environment for Cordova development was ridiculous. I ended up with [Android Studio](https://developer.android.com/studio/index.html) installed (although I don't actually use it for anything), but ran everything with the [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/#installing-the-cordova-cli) from my terminal.

It also took me 2 days before I realised that rather than trying to fix all the version compatibility issues between the different tools, it was easier to just trace the versions of the tools the original developer used and use those instead. Based on the commit dates in the repository, I downgraded to [Cordova 6.5.0](https://cordova.apache.org/news/2017/01/23/tools-release.html) and everything magically worked. I also installed [Gradle](https://gradle.org/) via [Homebrew](https://brew.sh/) because the Android Studio version just wouldn't take.

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

As mentioned, my workflow involved three major tasks, compiling Sass into CSS, transpiling ES6 with Babel, and compiling Nunjucks templates into HTML. Based on the folder structure as outlined above, here are each of the three tasks' gulp functions:

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

A critical part of my workflow is the use of [Browsersync](https://browsersync.io/). So that made it in the `gulpfile.js` as well:

<pre><code class="language-javascript">gulp.task('browser-sync', ['nunjucks', 'sass', 'scripts'], function() {
  browserSync.init({
    server: "APP_NAME/www",
    port: 6001 /* Pick your favourite port number */
  });
});</code></pre>

## Debugging on a device

As this demo was going to be deployed onto our company tablets, which were all Samsung Galaxy S2s, I only focused on the Android portion of things. If we ever demo on an iOS device, I'll let you know. What I liked about the Android tablets is that once you connect it to your computer via USB, you can inspect stuff just like on a desktop browser when using Chrome.

To do that you'll have to turn on Developer Mode, which involves finding the *Build number* of your device, usually under the *About device* section in *Settings*. Tapping on the *Build number* seven times will unlock *Developer mode*. You'll know you're on the right track because a notification will pop up after a couple of taps saying “You are now X steps away from being a developer.”.

Once that happens, there will be a new section called *Developer options*, where you can turn on USB debugging. This is what allows us access to the Chrome Webview debugging tool by entering `chrome://inspect` in the address bar.

<figure>
    <figcaption>Chrome can tell if you've connected to an Android device</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/cordova/webview-debug-480.jpg 480w, {{ site.url }}/assets/images/posts/cordova/webview-debug-640.jpg 640w, {{ site.url }}/assets/images/posts/cordova/webview-debug-960.jpg 960w, {{ site.url }}/assets/images/posts/cordova/webview-debug-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/cordova/webview-debug-640.jpg" alt="Chrome webview debugging tool" />
</figure> 

To test and debug your Cordova app on the Android device, you'll need to use this command, the `-debug` flag is important here:

<pre><code class="language-bash">cordova run android -debug --device</code></pre>

<figure>
    <figcaption>Inspect your app like you would a website</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/cordova/debug-cordova-480.jpg 480w, {{ site.url }}/assets/images/posts/cordova/debug-cordova-640.jpg 640w, {{ site.url }}/assets/images/posts/cordova/debug-cordova-960.jpg 960w, {{ site.url }}/assets/images/posts/cordova/debug-cordova-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/cordova/debug-cordova-640.jpg" alt="Developer tools for your app" />
</figure> 

The only minor issue is that every time you make a change to your code, you'll have to redeploy to the device to test it. But for this app I was building, the only time I had to do this in quick succession was when I was working with the device APIs. The rest of the time I just worked off my computer, since Browysersync was serving up the files as per a normal website.

## Accessing device APIs with Cordova plugins

As someone who was using Cordova for the first time, I didn't realise how much heavy lifting was already handled by the [plugin ecosystem](https://cordova.apache.org/plugins/) until I dug into the part of the code that used the [Cordova Plugin Camera Preview](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview) and the [card.io plug-in for Cordova](https://github.com/card-io/card.io-Cordova-Plugin).

The documentation for these two plugins was pretty good and it didn't take too much for me to figure out how to get things working. Part of the demo involved snapping a picture of the user as part of the registration process. Camera Preview's `takePicture` function provides the option to set width, height and quality and returns the image data as a base64 encoded jpeg image which you can then process as you wish.

Displaying the image involved adding a handful of CSS styles to make sure things aligned up nicely, specifically `object-fit`. This property is slowly climbing up my list of favourite CSS properties.

<pre><code class="language-css">.selfie-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center;
}</code></pre>

Another fun part of the app was the bit where you could snap a photo of your government-issued identification card and the app could extract relevant details like the card number and country of issuance. To make life easier for ourselves, we only “accepted” cards from Malaysia and Singapore.

For this, we used the [Google Vision API](https://cloud.google.com/vision/) for text extraction, and it's actually pretty good. I suppose the cards themselves are clearly printed and standard format, so maybe it wasn't all that hard for Google to extract the text. Based on the processed image, we could display the extracted text in the UI, instead of having users manually type it in.

[card.io](https://www.card.io/) is made by the folks at PayPal and provides easy credit card scanning in mobile apps. Our demo also had a credit card scanning component. The library comes with a set of functions that return relevant fields from the credit card scan so you can use them how you want. And if the scan fails for some reason, there is always the option for manual entry via the device keyboard.

One thing I learned from this exercise is that the first six digits of a credit card identifies the card's brand, financial institution that issued it, as well as country of issue. Basic credit card number validation is dependent on the [Luhn algorithm](https://planetcalc.com/2464/), which is a simple checksum formula that considers the number sequence valid if the checksum mod 10 equals to zero.

Good to know if you need to generate credit card numbers for testing. Like how I did.

## Removing jQuery is cathartic

Once I had my workflow set up, I could write ES6 syntax without worrying too much about browser support. To be safe, I did include polyfills for [Promises](https://github.com/taylorhakes/promise-polyfill) and [Fetch](https://github.com/github/fetch). All the jQuery from the original implementation was rewritten in ES6, and streamlined where possible (let's just say there were some functions that weren't necessary, just some).

It was a good way for me to familiarise myself with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) as I had to convert all the `$.ajax()` `POST` requests to use Fetch instead. Mostly issues with `cors` but it wasn't that hard to google up the right settings.

For example, the `POST` request to check the card number against our [BIN database](http://binbase.net/) used to look something like this:

<pre><code class="language-javascript">var url = encodeURI("http://SOME_SERVER_ADDRESS.com/bank/app?binbase="+binbase+"&lastfour="+lastfour+"&id="+id+"&amount="+amount)

var settings = {
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "POST",
  "dataType": "json",
  "headers": {
    "cache-control": "no-cache",
  },
  "complete": function(){
      window.location.href="sms_verification.html"
  },
}

$.ajax(settings).done(function (response) {
  // console.log(response)
  if (response.status=="ok"){
    console.log("success")
  }else if(response.status=="fail"){
    console.log("fail")
  }else{
    console.log("error")
  }
});</code></pre>

The refactored version looked something like this:

<pre><code class="language-javascript">const url = encodeURI(uiServerUrl + '/bank/app?binbase=' + binCheck + '&lastfour=' + lastfour + '&id=' + userId + '&amount='+ verificationAmount);
fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
.then(checkStatus).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log('Bin check status: ' + data.status);
  window.location.href = 'verification.html';
}).catch(function(error) {
  console.log('request failed', error)
})</code></pre>

Is my method better? I really can't say for sure, because both implementations achieved the same result, but I'm really more fond of using Fetch, you know?

## Wrapping up

This was just an overview of my first-time experience with Cordova and I think it's a pretty useful framework for demonstrating proof-of-concept, especially when you don't have any native developers on hand. Would I use this for a full-fledged native app? At this point, I'd say probably not, but what do I know?

There's another part to this demo that I'm pretty happy with but it has nothing to do with Cordova, so that'll show up in another post. That part involves theme switching with Sass maps, and fun times all around. Stay tuned, my friends.
