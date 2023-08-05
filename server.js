const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path')


// dotenv configuration
dotenv.config()

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json())


// static files
app.use(express.static(path.join(__dirname, './client/dist')))
app.get('*', function (req, res) {
    return res.sendFile(path.join('./client/dist/index.html'))
})
// routes
app.use('/api/v1/portfolio', require("./routes/profolioRoute"));


// port
PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `.bgCyan.green)
})