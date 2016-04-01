---
layout: post
title: "Gulp workflow for Jekyll and GitHub pages"
date: April 2, 2016
tags: [github-pages, jekyll, gulp]
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

1. Add a `Gemfile` to the root of the project folder which contains the following:
    <pre><code class="language-bash">source 'https://rubygems.org'
gem 'github-pages'</code></pre>
    This ensures that the local environment matches that of GitHub, minimising issues with different gem versions and so on.
2. Navigate into your project folder and run `bundle install`, which will install all the relevant gems GitHub pages needs
3. Spin up a new Jekyll site in the project folder. Note that the `.` indicates the current folder you're in.
    <pre><code class="language-bash">jekyll new .</code></pre>
4. If you check the folder, it should have a bunch of files and folders, which look something like this:
    <pre><code class="language-markup">
    PROJECT_FOLDER/
    |-- _config.yml
    |
    |-- _includes/
    |   |-- footer.html
    |   |-- head.html
    |   |-- header.html
    |   |-- icon-github.html
    |   |-- icon-twitter.html
    |   |-- icon-github.svg
    |   |-- icon-twitter.svg
    |
    |-- _layouts/
    |   |-- default.html
    |   |-- page.html
    |   |-- post.html
    |
    |-- _posts/
    |   |-- 2014-11-14-welcome-to-jekyll.markdown
    |
    |-- _sass/
    |   |-- _base.scss
    |   |-- _layout.scss
    |   |-- _syntax-highlighting.scss
    |
    |-- css/
    |   |-- main.scss
    |
    |-- index.html
    |-- about.md
    |-- .gitignore
    |-- about.md
    |-- feed.xml
    `-- _config.yml
</code></pre>
    If you are that rare human being that read my earlier post on [how I got started with Jekyll and GitHub Pages](), you'll realise that the folder structure is different now. That's because Jekyll has been updated to v3.0.3 (as of time of writing).
5. At this point, you can do whatever you want because you already have all the files needed to start off building your site. And here's where my process kicks in.
6. Remove all existing Sass files and replace with Sass starter files.
7. Copy over the `package.json` and `gulpfile.js` for Jekyll projects. (I have a different set of these files depending on the type of project I'm building)
    <pre><code class="language-javascript">{
  "name": "singaporecss.github.io",
  "version": "1.0.0",
  "description": "Dependencies for Talk.CSS website",
  "main": "gulpfile.js",
  "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
  "repository": {
        "type": "git",
        "url": "git+https://github.com/SingaporeCSS/singaporecss.github.io.git"
      },
  "author": "huijng <kakyou_tensai@yahoo.com>",
  "license": "ISC",
  "bugs": {
        "url": "https://github.com/SingaporeCSS/singaporecss.github.io/issues"
      },
  "homepage": "https://github.com/SingaporeCSS/singaporecss.github.io#readme",
  "devDependencies": {
        "browser-sync": "^2.11.2",
        "gulp": "^3.9.1",
        "gulp-autoprefixer": "^3.1.0",
        "gulp-concat": "^2.6.0",
        "gulp-cssnano": "^2.1.1",
        "gulp-sass": "^2.2.0",
        "gulp-uglify": "^1.5.3",
        "susy": "^2.2.12"
      }
}</code></pre>
8. Each task in `gulpfile.js` has a specific function.
    - Declare all the plugins required for the project at the top of the file.
        <pre><code class="language-javascript">var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');&#10;
var messages = {
     jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
     jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
};</code></pre>
    - Build the Jekyll Site in development mode
        <pre><code class="language-javascript">gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});</code></pre>
    - Rebuild Jekyll & do page reload
        <pre><code class="language-javascript">gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});</code></pre>
    - Wait for jekyll-dev, then launch the Server
        <pre><code class="language-javascript">gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-dev'], function() {
  browserSync.init({
          server: "_site",
          port: 1234
        });
});</code></pre>
    - Compile files from _scss into both _site/css (for live injecting) and site (for future Jekyll builds)
        <pre><code class="language-javascript">gulp.task('sass', function () {
  return gulp.src('_sass/styles.scss')
     .pipe(sass({
          includePaths: ['scss'],
          onError: browserSync.notify
     }))
     .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
     .pipe(gulp.dest('_site/css'))
     .pipe(browserSync.reload({stream:true}))
     .pipe(gulp.dest('css'));
});</code></pre>
    - Compile files from _js/lib into both _site/js (for live injecting) and site (for future Jekyll builds)
        <pre><code class="language-javascript">gulp.task('scripts', function() {
  return gulp.src(['_js/lib/*.js'])
     .pipe(concat('scripts.js'))
     .pipe(gulp.dest('_site/js'))
     .pipe(browserSync.reload({stream:true}))
     .pipe(gulp.dest('js'));;
});</code></pre>
    - Watch scss files for changes & recompile. Watch html/md files, run jekyll & reload BrowserSync
        <pre><code class="language-javascript">gulp.task('watch', function () {
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], ['sass']);
  gulp.watch(['_js/**/*.js'], ['scripts']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '_drafts/*', '**/*.html'], ['jekyll-rebuild']);
});</code></pre>
    - Build the Jekyll Site in production mode
        <pre><code class="language-javascript">gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
     .on('close', done);
});</code></pre>
    - Compile files from _scss into both _site/css (for live injecting) and site (for future Jekyll builds)
        <pre><code class="language-javascript">gulp.task('sass-prod', function () {
  return gulp.src('_sass/styles.scss')
     .pipe(sass({
          includePaths: ['scss'],
          onError: browserSync.notify
     }))
     .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
     .pipe(cssnano())
     .pipe(gulp.dest('_site/css'))
     .pipe(gulp.dest('css'));
});</code></pre>
    - Compile files from _js/lib into both _site/js (for live injecting) and site (for future Jekyll builds)
        <pre><code class="language-javascript">gulp.task('scripts-prod', function() {
  return gulp.src(['_js/lib/*.js'])
     .pipe(concat('scripts.js'))
     .pipe(uglify())
     .pipe(gulp.dest('_site/js'))
     .pipe(gulp.dest('js'));;
});</code></pre>
    - Default task, running just `gulp` will compile the sass, compile the Jekyll site, launch BrowserSync & watch files.
        <pre><code class="language-javascript">gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['scripts-prod', 'sass-prod', 'jekyll-prod']);</code></pre>


