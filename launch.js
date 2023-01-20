const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
console.log("app getting started");
const port = 3200;
const ip = '10.198.188.116';
const dir = path.join(__dirname, '/dist')
app.use(express.static(dir));
console.log(dir);
// app.listen(4200);
app.listen(port, ip, () => {
    console.log(`Example app listening at ${ip}:${port}`)
});