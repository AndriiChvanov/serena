let project_folder = "dist";
let source_folder = "src";

const webpackConfig = require("./webpack.config.js");

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		module: project_folder + "/js/module/",
		icons: project_folder + "/icons/",
		fonts: project_folder + "/fonts/",
	},
	src: {
		html: source_folder + "/*.html",
		css: source_folder + "/scss/style.scss",
		js: source_folder + "/js/main.js",
		module: source_folder + "/js/module/*js",
		fonts: source_folder + "/fonts/*ttf",
		icons: source_folder + "/icons/**/*.{jpg,svg,png,sbg,gif,ico,webp}",
	},
	watch: {
		html: source_folder + "/**/*.html",
		css: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		icons: source_folder + "/icons/**/*.{jpg,png,svg,sbg,gif,ico,webp}",
	},
	clean: "./" + project_folder + "/",
};

let { src, dest } = require("gulp"),
	gulp = require("gulp"),
	browsersync = require("browser-sync").create(),
	fileinclude = require("gulp-file-include"),
	del = require("del"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default,
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	webphtml = require("gulp-webp-html"),
	webpcss = require("gulp-webp-css"),
	svgsprite = require("gulp-svg-sprite"),
	ttf2woff = require("gulp-ttf2woff"),
	ttf2woff2 = require("gulp-ttf2woff2"),
	fointer = require("gulp-fonter"),
	babel = require("gulp-babel");
webpack = require("webpack-stream");

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
		notify: false,
	});
}

function module() {
	return src(path.src.module)
		.pipe(dest(path.build.module))
		.pipe(browsersync.stream());
}

function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		.pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream());
}

function css() {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: "expanded",
			})
		)
		.pipe(group_media())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"],
				cascade: true,
			})
		)
		.pipe(webpcss())
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}

function js() {
	return src(path.src.js)
		.pipe(webpack(webpackConfig))
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}

function icons() {
	return src(path.src.icons)
		.pipe(
			webp({
				quality: 100,
			})
		)
		.pipe(dest(path.build.icons))
		.pipe(src(path.src.icons))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		)
		.pipe(dest(path.build.icons))
		.pipe(browsersync.stream());
}

function fonts(params) {
	src(path.src.fonts)
		// .pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	// return src(path.src.fonts)
	// .pipe(ttf2woff2())
	// .pipe(dest(path.build.fonts));
}
gulp.task("svgsprite", function () {
	return gulp
		.src([source_folder + "/icons/*.svg"])
		.pipe(
			svgsprite({
				mode: {
					stack: {
						sprite: "/icons/icons.svg", //sprite file name
						example: true
					},
				},
			})
		)
		.pipe(dest(path.build.js));
});
gulp.task("otf2ttf", function () {
	return src([source_folder + "/fonts/*.otf"])
		.pipe(
			fointer({
				formats: ["ttf"],
			})
		)
		.pipe(dest(source_folder + "/fonts/"));
});

function watchFiles(params) {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.icons], icons);
}

function clean(params) {
	return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, fonts, icons));
let watch = gulp.parallel(build, watchFiles, browserSync);

// exports.module = module;
exports.fonts = fonts;
exports.icons = icons;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
