const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const routes = require('./router/index')
const {swaggerDocs : swaggerDocsV1} = require("./router/swagger")


const PORT =  process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Bienvenidos hmApp')
  })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin:"*"}))
app.use("/api/v1", routes());

app.listen(PORT, () => {
    console.log('Response from server node hm on port '+PORT)
    swaggerDocsV1(app,PORT)
});