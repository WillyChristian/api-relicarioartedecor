const express = require('express')

const Rotas = express.Router()

Rotas.get("/", (req,res) => {
    res.send('Agora ta funcionando')
})


module.exports = Rotas