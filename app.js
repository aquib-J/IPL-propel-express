const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    // console.log(req.url);
    res.status(200);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(8080, () => {
    console.log('we are listening at port : 8080 ');
})