
var express = require('express');
var app = express();
let path=require('path')
let dotenv=require('dotenv');
let bodyParser=require('body-parser');
const topTenJsonHandler = require('./economyHandler');


dotenv.config();

const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    // console.log(req.url);
    res.status(200);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/year',topTenJsonHandler)


app.listen(process.env.PORT || 8080, () => {
    console.log('we are listening at port : 8080 ');
})