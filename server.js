const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express()

//load env
dotenv.config({ path: './config.env' })

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
})