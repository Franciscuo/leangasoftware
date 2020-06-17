require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');


const { connectDb } = require('./database/config/database');
const loadCsv = require('./api_v1.0/csv');

//Inicializacion
const app = express();
if (process.env.NODE_ENV != 'test') {
    app.use(morgan('dev'));
}
connectDb();
loadCsv(path.basename(`C:/Users/Frank/Desktop/Web/OTROS/Entrevistas/leangasoftware/resource_accommodation.csv`));



//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./api_v1.0/routes/index.routes'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;