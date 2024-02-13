var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

app.get('/e',
    function(request,response){
        response.send('E');
        console.log('Moi');
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Moro '+request.params.name);
    }
);
app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Terve '+request.params.firstName+" "+request.params.lastName);
    }
);

app.get('/example3/:firstName&:lastName',
    function(request, response){
       response.send('Moi '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.use('/e',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);
