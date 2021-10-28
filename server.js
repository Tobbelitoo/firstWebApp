if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// EXPRESS
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// REQUIRE ROUTES
const indexRouter = require('./routes/index');
const questionsRouter = require('./routes/questions');

// APP SET VIEWS & LAYOUTS & PUBLIC FOLDER
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use('expressLayouts');


// MONGOOSE

// ACCEPT JSON in BODY

// BIND ROUTES to ROUTE VARIABLES
app.use('/', indexRouter);
app.use('/questions', questionsRouter);

// APP LISTEN
app.listen(process.env.PORT || 3000, () => console.log(' Connected to Server'))