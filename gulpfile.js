const gulp = require('gulp');
const livereload = require('gulp-livereload');


function reload_css() {
	return gulp.src('css/*.css')
	.pipe(livereload());
};

exports.reload_css = reload_css;

function watch(done) {
	livereload.listen();
	gulp.watch('css/*.css', reload_css);
	done;
};

exports.default = gulp.parallel(reload_css, watch);


