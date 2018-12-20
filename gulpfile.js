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
 * Compile files from _scss into both _site/css (for live injecting) and site (for future Jekyll builds)
 */
function styles() {
  return gulp.src(['_sass/pages.scss', '_sass/posts.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'))
}

function stylesProd() {
  return gulp.src(['_sass/pages.scss', '_sass/posts.scss'])
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(gulp.dest('assets/css'))
}

/**
 * Compile files from _js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
function scripts() {
  return gulp.src(['_js/lib/*.js', '_js/custom.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/js'))
}

function scriptsProd() {
  return gulp.src(['_js/lib/*.js', '_js/custom.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(gulp.dest('assets/js'))
}

/**
 * Server functionality handled by BrowserSync
 */
function browserSyncServe(done) {
  browserSync.init({
    server: '_site',
    port: 4321
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

/**
 * Build Jekyll site
 */
function jekyllDev(done) {
  browserSync.notify(messages.jekyllDev)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--drafts', '--future', '--incremental', '--config=_config.yml,_config_dev.yml'], {stdio: 'inherit'})
  .on('close', done)
}

function jekyllProd(done) {
  browserSync.notify(messages.jekyllProd)
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
  .on('close', done)
}

/**
 * Watch source files for changes & recompile
 * Watch html/md files, run Jekyll & reload BrowserSync
 */
function watchMarkup() {
  gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_drafts/*', '_posts/*', '_pages/*'], gulp.series(jekyllDev, browserSyncReload));
}

function watchScripts() {
  gulp.watch(['_js/**/*.js'], scripts)
}

function watchStyles() { 
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], styles)
}

function watch() {
  gulp.parallel(watchMarkup, watchScripts, watchStyles)
}

var compile = gulp.parallel(styles, scripts)
var compileProd = gulp.parallel(stylesProd, scriptsProd)

var serve = gulp.series(compile, jekyllDev, browserSyncServe)
var watch = gulp.parallel(watchMarkup, watchScripts, watchStyles)

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel(serve, watch))
gulp.task('build', gulp.series(compileProd, jekyllProd))