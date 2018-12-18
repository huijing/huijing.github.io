var gulp        = require('gulp')
var browserSync = require('browser-sync')
var sass        = require('gulp-sass')
var cssnano     = require('gulp-cssnano')
var prefix      = require('gulp-autoprefixer')
var concat      = require('gulp-concat')
var uglify      = require('gulp-uglify')
var cp          = require('child_process')

var messages = {
  jekyllDev: '<span style="color: grey">Running:</span> $ jekyll build for dev',
  jekyllProd: '<span style="color: grey">Running:</span> $ jekyll build for prod'
}

/**
 * Build the Jekyll Site in development mode
 */
gulp.task('jekyll-dev', function(done) {
  browserSync.notify(messages.jekyllDev)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--drafts', '--future', '--incremental', '--config=_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done)
})

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-dev', function() { 
  browserSync.reload()
}));

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future Jekyll builds)
 */
gulp.task('sass', function() {
  return gulp.src(['_sass/pages.scss', '_sass/posts.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'))
})

/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('scripts', function() {
  return gulp.src(['_js/lib/*.js', '_js/custom.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/js'))
})

/**
 * Wait for jekyll-dev, then launch the Server
 */
gulp.task('browser-sync', gulp.series(gulp.parallel('sass', 'scripts'), 'jekyll-dev', function() {
  browserSync.init({
    server: '_site',
    port: 4321
  })
}));

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run Jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], gulp.series('sass'))
  gulp.watch(['_js/**/*.js'], gulp.series('scripts'))
  gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_drafts/*', '_posts/*', '_pages/*'], gulp.series('jekyll-rebuild'))
})

/**
 * Build the Jekyll Site in production mode
 */
gulp.task('jekyll-prod', function(done) {
  browserSync.notify(messages.jekyllProd)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done)
})

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass-prod', function() {
  return gulp.src(['_sass/pages.scss', '_sass/posts.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(gulp.dest('assets/css'))
})

/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future Jekyll builds)
 */
gulp.task('scripts-prod', function() {
  return gulp.src(['_js/lib/*.js', '_js/custom.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(gulp.dest('assets/js'))
})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.series('browser-sync', 'watch'))
gulp.task('build', gulp.series('scripts-prod', 'sass-prod', 'jekyll-prod'))