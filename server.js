if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const questionsRouter = require('./routes/questions');

app.use('/', indexRouter);
app.use('/questions', questionsRouter);



app.listen(process.env.PORT || 3000, () => console.log(' Connected to Server'))