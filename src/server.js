require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const userController = require('./routes/userRoutes');
const membershipController = require('./routes/membershipRoutes');

app.use('/', userController);
app.use('/', membershipController);

app.listen(port, console.log(`server is running on port ${port}`));
