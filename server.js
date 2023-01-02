// const exp = require('http');

// const server = http.createServer((req, res) => {
//     const { headers, url, method} = req;
//     console.log("🚀 ~ file: server.js:5 ~ server ~ headers, url, method", headers, url, method);
//     res.end();
// });

// const PORT = 6000;

// server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config({path: './config/config.env'});


const app = express();

const PORT = process.env.PORT || 6000;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))