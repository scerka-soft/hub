import { src, dest, parallel } from 'gulp';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'sass';
import gulpsass from 'gulp-sass';
import htmlmin from 'gulp-htmlmin';
import strip from 'gulp-strip-comments';
import terser from 'gulp-terser';

const scss = gulpsass(sass);

export const css = () => {
    return src('./src/sass/*.scss')
        .pipe(scss({ outputStyle: 'compressed'}))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(dest('./dist/css'));
};

export const html = () => {
    return src('./src/*.html',)
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(dest('./dist',));
};

export const javascript = () => {
    return src('./src/js/*.js')
        .pipe(strip())
        .pipe(concat('libs.js'))
		.pipe(terser())
        .pipe(dest('./dist/js'));
};

export const images = () => {
    return src('./src/favicon.png', {encoding: false})
        .pipe(dest('./dist'));
};

export const fonts = () => {
    return src('./src/fonts/*.*', {encoding: false})
        .pipe(dest('./dist/fonts'));
};

export default parallel(html, css, javascript, images, fonts);