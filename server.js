const express = require('express');
require('dotenv').config();

// Import routers
const router = require('./routes/router');
const carRouter = require('./routes/carRouter');
const brandRouter = require('./routes/brandRouter');
const imageRouter = require('./routes/imageRouter');

const app = express();

const PORT = process.env.PORT || 7000;

// Set Up Routers
app.use('/api', router);
app.use('/api/car', carRouter);
app.use('/api/brand', brandRouter);
app.use('/api/images', imageRouter);

app.use((err, req, res, next) => {
    console.log(`Error found in table ${err.table}, column ${err.column}`);
    res.status(err.status).send(err.message);
})


app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
});