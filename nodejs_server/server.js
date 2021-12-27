var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var pug = require('pug');
const _= require('lodash');
var path =require('path');
const { timeStamp } = require('console');
//var Post = require('./models/post')

//const{Donor}=require ('./models/donor')
//const {initializePayment, verifyPayment}= require('./config/paystack')(request);


app.use(bodyParser.json({ type: 'application/json' }));
app.use*bodyParser.urlencoded({extended : false})
const hostname = "127.0.0.1";
const port = 3000;

const statusOK = 200;
const statusNotFound = 404;

var responseCode = {
    "responseCode": "0000",
    "responseMsg": "Operation Success"
}

var mockDatabase = [
    {
        fruit: "apple",
        color: "red"
    },
    {
        fruit: "banana",
        color: "yellow"
    }
]

var json = {
    "authenToken": "3f783751c9ef36b21bb7035776ee8ca8daf886f463c4bc4527abc1b1e07c60c599c70904da9014b65da5ee935db0c2c8b62624cb2661c5539748734f86090556",
    "ecommerceId": "W010101",
    "transactionType": "0",
    "orderId": "AA1111",
    "orderDetails": "CB Test Order 001",
    "amount": "800.00",
    "currency": "MMK",
    "notifyUrl": "https://f0ee-185-107-95-229.ngrok.io/callback",
    "signature": "4e595bc1a4bb00dfc0f0ab9f97a204a7ef15cf5a1dcf6ad6e396ceecb531f259",
    "subMerId": "0000000001700001"
}

var callBackRes={
    "name":"Testing",
    "url": "https://851f-45-125-4-5.ngrok.io/",
    "msg":"Callback Successful",
}


//Handle callback Url
// app.get('/:callback', (req, res) => {

//     res.send(responseCode);
//     const theData = res.body;
//     console.log(theData);
//     console.log(req.body);
// });

//Handle callback Url
app.post('/:callback', (req, res) => {

    console.log(req.body);  
    res.send(responseCode);
    const theData = res.body;
    console.log(theData);
});



//Handle GET request
app.get('/', function (req, res) {
    if (mockDatabase.length < 1) {
        res.statusCode = statusNotFound;
        res.send('Item not found');
        return;
    }
    res.statusCode = statusOK;
    res.send(json);
});

//Handle Get(one)request
app.get('/:id', function (req, res) {
    var id = req.params.id;
    if (id < 0 || id >= mockDatabase.length) {
        res.statusCode = statusNotFound;
        res.send('Item not found');
        return;
    }
    res.statusCode = statusOK;
    res.send(mockDatabase[id]);
});

//Handle POST request
app.post('/', function (req, res) {
    var newObject = req.body;
    mockDatabase.push(newObject);
    var id = mockDatabase.length - 1;
    res.statusCode = statusOK;
    res.send(`Item ad with id${id}`);
});

//Handle DELETE request
app.delete('/:id', function (req, res) {
    var id = req.params.id;
    mockDatabase.splice(id, 1);
    res.statusCode = statusOK;
    res.send(`Item deleted at id ${id}`);
});

app.listen(port, hostname, function () {
    console.log(`Listening at http://${hostname}:${port}/...`)
});



