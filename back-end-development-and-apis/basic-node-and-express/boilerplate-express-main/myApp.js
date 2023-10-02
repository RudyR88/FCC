let express = require('express');
let app = express();


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
app.get('/json', (req, res) => {
    res.json({message: "Hello json"});
})

































 module.exports = app;
