const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const quizzRoutes = require('./routes/quizz');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use('/', authRoutes);
app.use('/quizz', quizzRoutes);

app.listen(PORT, function () {
    console.log('Server running on localhost:' + PORT);
});