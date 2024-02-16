const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use('/', router);
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname + '/login.html'))
});

app.get('/signUp', function(req, res) {
    res.sendFile(path.join(__dirname + '/signUp.html'))
});

app.listen(process.env.port || 3333, () => {
    console.log('Server Running!!')
})