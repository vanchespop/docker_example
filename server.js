'use strict';

const express = require('express');

const port = 8080;
const host = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hi, this is my first Docker-packed server.');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
