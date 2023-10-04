// Challenge #6.a
// require('dotenv').config();

let express = require('express');
let app = express();
// let message = "Hello json";


// Challenge #1
// console.log("Hello World");

// Challenge #2
// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// Challenge #3
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
//     // Challenge #4
//     app.use('/public', express.static(__dirname + '/public'));
// });

// Challenge #5
// app.get('/json', (req, res) => {
//     // Challenge #6.b
//     if(process.env["MESSAGE_STYLE"] == "uppercase"){
//         res.json({"message": message.toUpperCase});
//     }
//     else{
//         res.json({"message": message});
//     }
// })

// Challenge #7
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next();
// })

// Challenge #8
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {[
    res.json({time: req.time})
]})
































 module.exports = app;
