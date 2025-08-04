require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/userRouter');

const {logger} = require('./middlewares/logger')

const app = express();

//use middleware
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/api/user', userRouter)

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
