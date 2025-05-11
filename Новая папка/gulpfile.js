var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
var browsersync = require('browser-sync').create();

function sassToCSS(done) {
	gulp.src('./scss/**/*.scss')
	  .pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer({
			     overrideBrowserslist: ['last 2 versions'],
			     cascade: false
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write())
		.pipe( gulp.dest('./css/') )
		.pipe(browsersync.stream());
	done();
}

function watchScss() {
	gulp.watch("./scss/**/*",sassToCSS);
	gulp.watch("./**/*.html",browserReload);
	gulp.watch("./**/*.php",browserReload);
	gulp.watch("./**/*.js",browserReload);
}

function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./"
		},
		port:3000
	});
	done();
}

function browserReload(done) {
	browsersync.reload();
	done();
}

gulp.task('default', gulp.parallel(browserSync, watchScss));
gulp.task(browserSync);
