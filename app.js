const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./router/index')

const port =  process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Bienvenidos hmApp')
  })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin:"*"}))

app.use("/api/v1", routes());

app.listen(port, () => {
    console.log('Response from server node hm on port '+port)
  });