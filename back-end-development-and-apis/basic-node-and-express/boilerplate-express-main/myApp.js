// Challenge #6.a
// require('dotenv').config();
const bodyParser = require('body-parser');

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
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // Challenge #4
    app.use('/public', express.static(__dirname + '/public'));
});

// Challenge #5
// app.get('/json', (req, res) => {
//     // Challenge #6.b
//     if(process.env["MESSAGE_STYLE"] == "uppercase"){
//         res.json({"message": message.toUpperCase});
//     }
//     else{
//         res.json({"message": message});
//     }
// });

// Challenge #7
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next();
// });

// Challenge #8
// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     res.json({time: req.time});
// });

// Challenge #9
// app.get('/:word/echo', (req, res) => {
//     res.json({echo: req.params.word});
// });

//Challenge #10
// app.get('/name', (req, res) => {
//     const {first : firstName, last : lastName} = req.query;
//     res.json({name: `${firstName} ${lastName}`});
// });

//Challenge #11
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Challenge #12
app.post('/name', (req, res) => {
    res.json({name: `${req.body.first} ${req.body.last}`});
})
































 module.exports = app;
