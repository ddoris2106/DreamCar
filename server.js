const express = require('express');
require('dotenv').config();

const router = require('./routes/router');
const carRouter = require('./routes/carRouter');
const brandRouter = require('./routes/brandRouter');
const imageRouter = require('./routes/imageRouter');

const app = express();

const PORT = process.env.PORT || 7000;


app.use('/', router);
app.use('/car', carRouter);
app.use('/brand', brandRouter);
app.use('/images', imageRouter);


app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
})