const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


const options = {
    definition : {
        openapi: '3.0.0',
        info: {
          title: 'Bot Whatsapp NodeJS && Landbot',
          version: '1.0.0',
        },
    },
    apis : ["./router/index.js"]
}

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocs =  (app,port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get("/api/v1/doc.json", (req,res) => {
        res.setHeader('Content-type','aplication/json')
        res.send(swaggerSpec)
    })
}

module.exports = {swaggerDocs}