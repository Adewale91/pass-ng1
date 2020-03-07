const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const http = require ('http');
const path = require('path')

//bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//static folder
app.use(express.static(path.join(__dirname, 'dist')))

//send all request to index page
app.set('*', (req, res) => {      // * means select all
    res.sendFile(path.join(__dirname, './index.html'))
})

//set port
const port = process.env.PORT || '5000';
app.set('port', port)

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`server is running on ${port}`);
});