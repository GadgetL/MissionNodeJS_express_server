//Usando objeto express
const express = require('express')
const app = express() //app de express
const port = 3000 //puerto en el que vamos a ver la app 'localhost:3000'


//path inicial, responderá a la url
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//inicilizando la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})