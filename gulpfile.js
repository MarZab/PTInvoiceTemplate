const gulp = require('gulp');
const connect = require('gulp-connect');
const underscore = require('underscore');
const sass = require('gulp-sass');
var rename = require('gulp-rename');
const textTransformation = require('gulp-text-simple');


gulp.task('watch', function () {

  connect.server({
    root: 'build/',
    livereload: true
  });

  gulp.watch('./src/styles/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/configuration.js', ['html']);
});


gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'))
    .pipe(connect.reload());
});

gulp.task('build', function () {
  gulp.src('./src/*.html')
    .pipe(rename(function(file) {
        file.dirname = file.basename + '.PTInvoiceTemplate';

        file.basename = 'template';

        gulp.src('./build/images/*')
          .pipe(gulp.dest('./dist/' +file.dirname + '/images'));

        gulp.src('./build/styles/*')
          .pipe(gulp.dest('./dist/' + file.dirname + '/styles'));


        gulp.src('./Info.plist')
          .pipe(gulp.dest('./dist/' + file.dirname));



    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('html', function () {

  let compile = textTransformation(function (template) {

    let text = template;
    let variables = {};

    // interpolation
    function setDepth(obj, path, value) {
      let tags = path.split("."), len = tags.length - 1;
      for (let i = 0; i < len; i++) {
        if (!(tags[i] in obj)) {
          obj[tags[i]] = {};
        }
        obj = obj[tags[i]];
      }
      obj[tags[len]] = value;
    }

    // include paths
    text = text.replace(/file:\/\/{{pathToBundle}}\//, '');

    // filters
    text = text.replace(/[^\|]\| ([a-zA-z0-9]+)\b/g, function (ss, a1) {
      // just ignore them for now
      return '';
    });

    text = text.replace(/{{\s*([^}]+)\s*}}/g, function (ss, a1) {
      setDepth(variables, a1, 'string');
      return `<\%= ${a1} \%>`;
    });

    // if
    text = text.replace(/{% if ([^%]+)%}/g, function (ss, a1) {
      return `<\% if (${a1}) { \%>`;
    });

    // else
    text = text.replace(/{% else %}/g, function (ss, a1) {
      return `<\% } else { \%>`;
    });

    // endif
    text = text.replace(/{% \/if %}/g, function (ss, a1) {
      return `<\% } \%>`;
    });

    // for
    text = text.replace(/{% for ([a-zA-Z0-9]+) in ([a-zA-Z0-9.]+) %}/g, function (ss, a1, a2) {
      return `<\% for (i in ${a2}) { let ${a1} = ${a2}[i]; \%>`;
    });
    text = text.replace(/{% \/for %}/g, function (ss, a1) {
      return `<\% } \%>`;
    });

    // comment
    text = text.replace(/{% comment %}/g, function (ss, a1) {
      return '<!--';
    });
    text = text.replace(/{% \/comment %}/g, function (ss, a1) {
      return '-->';
    });

    delete require.cache[require.resolve('./src/configuration')];
    let configuration = require('./src/configuration');

    variables.randomNumberString = Math.random().toString();

    let compiledTemplate = underscore.template(text, {});
    return compiledTemplate(
      Object.assign({
          'YES': true,
          'NO': false,
        }, variables,
        configuration)
    );

  });

  gulp.src('./src/*.html')
    .pipe(compile())
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});