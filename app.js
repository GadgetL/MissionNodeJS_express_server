//Usando objeto express
const express = require('express')
const app = express() //app de express
const port = 3000 //puerto en el que vamos a ver la app 'localhost:3000'


//path inicial, responderá a la url
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Respondiendo texto, en localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

//regresando un objeto, en localhost:3000/explorers
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hello" }
    res.send(explorer)
})

//Query Params: Recibir parámetros por la url localhost/3000/explorers/gadgetl
//req.params = {"explorerName" : "gadgetl"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//inicilizando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})