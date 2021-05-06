const express = require('express');
const morgan = require('morgan');
const path = require('path');

const webpack = require('webpack');
const webDevMiddle = require('webpack-dev-middleware');
const webConfig = require('../../webpack.config');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(webDevMiddle(webpack(webConfig)));


//global variables

//routes
app.use(require('./routes/index.routes'));


//static files
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
