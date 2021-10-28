if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express from 'express';
const app = express();

import indexRouter from './routes/index';
import questionsRouter from './routes/questions';

app.use('/', indexRouter);
app.use('/questions', questionsRouter);



app.listen(process.env.PORT || 3000, () => console.log(' Connected to Server'))