const express = require('express');
const morgan = require('morgan');

const webpack = require('webpack');
const webDevMiddle = require('webpack-dev-middleware');
const webConfig = require('../webpack.config');

const routes = require('./routes/index.routes');
//const connection = require('./dbconnection/connection')

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use(webDevMiddle(webpack(webConfig)));

app.use(routes);

//connection();

app.listen(port, ()=>{
    console.log('Servidor a la escucha en el puerto ' + port)
})
