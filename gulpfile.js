var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');

var messages = {
    jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
    jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
};

/**
 * Build the Jekyll Site in development mode
 */
gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-dev, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 1234
  });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_sass/styles.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

/**
 * Compile files from _js/lib into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scripts', function() {
  return gulp.src(['_js/lib/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('js'));;
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], ['sass']);
  gulp.watch(['_js/**/*.js'], ['scripts']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '_drafts/*', '**/*.html'], ['jekyll-rebuild']);
});

/**
 * Get comments from Poole
 */
gulp.task("comments", function() {
  var options = {
    hostname: 'pooleapp.com',
    port: 80,
    path: '/data/b9795210-2fdf-4d80-8dfe-31ed93a0ea24.yaml',
    method: 'GET'
  };
  // Go and get data
  require('http').get(options, function(res) {
    var body = '';
    res.on('data', function(chunk) {
        body += chunk;
    });
    res.on('end', function() {
      // Save the comments for jekyll to use as a data source
      require('fs').writeFile('./_data/rawcomments.yml', body, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("Comments data saved.");
        }
      });
    });
  }).on('error', function(e) {
    console.log("Got error: ", e);
  });
});

gulp.task('comments', ['comments']);

/**
 * Build the Jekyll Site in production mode
 */
gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass-prod', function () {
  return gulp.src('_sass/styles.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/css'))
    .pipe(gulp.dest('css'));
});

/**
 * Compile files from _js/lib into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scripts-prod', function() {
  return gulp.src(['_js/lib/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'))
    .pipe(gulp.dest('js'));;
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['scripts-prod', 'sass-prod', 'jekyll-prod']);
