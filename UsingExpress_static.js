const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,"public")))

app.listen(4000,(err) => {
    err ? console.log("err",err) : console.log("SERVER RUNNING")
})