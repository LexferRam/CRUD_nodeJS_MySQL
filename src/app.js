const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//imports routes
const customerRoutes = require('./routes/customer');

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

//routes: peticiones al servidor
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

