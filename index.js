const express = require('express');
const colors = require('colors');

const app = express();

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5000, () => {
    console.log(colors.bgBlue("running"))
})