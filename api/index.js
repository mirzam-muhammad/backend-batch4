require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');

const router = require('../src/routes/router');
const userRouter = require('../src/routes/userRouter');
const todoRouter = require('../src/routes/todoRouter');
const uploadRouter = require('../src/routes/uploadRouter');

const {logger} = require('../src/middlewares/logger');

const app = express();

//use middleware
app.use(logger);
app.use('/static', express.static('public'));
app.use(compression())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/api/user', userRouter)
app.use('/api/todo', todoRouter)
app.use('/api/upload', uploadRouter)

app.use('/*splat', async(req, res, next) => {
    return res.status(400).json({
        message: "ROUTE NOT FOUND",
        data: null
    });
});

app.use((err, req, res, next) => {
    console.error("Terjadi error", err.message)

    return res.status(err.status || 500).json({
        message: "Terjadi error",
        data: err.message || "Internal server error"
    })
})

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running')});
