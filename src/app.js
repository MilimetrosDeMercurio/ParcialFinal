
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const app = express();

//conectando 
mongoose.connect('mongodb://localhost/animalesFantasticos')
.then(db => console.log('Db connected'))
.catch(err => console.log(err));

//importar rutas

const indexRoutes = require('./routes/index');



//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));





//rutas

app.use('/', indexRoutes);


//inicializando servidor

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});