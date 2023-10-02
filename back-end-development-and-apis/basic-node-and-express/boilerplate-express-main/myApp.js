let express = require('express');
let app = express();


// Challenge #1
// console.log("Hello World");

// Challenge #2
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})




































 module.exports = app;
