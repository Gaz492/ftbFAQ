const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const sassMiddleware = require('node-sass-middleware');

const config = require('./config/default');

const index = require('./routes/index');

var app = express();


// view engine setup
app.engine('.hbs',handlebars({
    extname: 'hbs',
    layoutDir: path.join(__dirname,'/views/layouts'),
    partialsDir: [path.join(__dirname,'/views/partials')]
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(sassMiddleware({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: true
// }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/faq', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{
      siteInfo: {
          title: config.web.title,
          siteName: config.web.siteName

      },
      pageName: err.status,
      debug: config.server.debug
  });
});

module.exports = app;
