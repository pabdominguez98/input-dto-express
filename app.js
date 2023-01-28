require('dotenv').config();
const express = require('express');
const app = express();

const userRoutes = require('./src/routes/user.routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        health: 'Up'
    });
})
.use('/user', userRoutes);

module.exports = app;