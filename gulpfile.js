var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var concat      = require('gulp-concat');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build --drafts --config _config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
  browserSync.init({
    server: "_site",
    port: 1234
  });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_scss/styles.scss')
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
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scripts', function() {
  return gulp.src(['_js/lib/*.js', '_js/**/*.js'])
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
  gulp.watch(['_scss/**/*.scss','_scss/*.scss'], ['sass']);
  gulp.watch(['_js/**/*.js','_js/*.js'], ['scripts']);
  gulp.watch(['index.md', '_layouts/*.html', '_posts/*', '_includes/*.html'], ['jekyll-rebuild']);
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
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
