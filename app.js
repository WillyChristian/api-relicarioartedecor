const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')

require('dotenv/config')

// IMPORT DE ARQUIVOS INTERNOS
const userRoute = require('./src/Routes/userRoutes.js')


// CONFIGURAÇÕES DO SERVIDOR
mongoose.connect( process.env.URL,{
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
})

//CONFIGURAÇÕES GERAIS 
const app = express()
app.use(cors({
	origin: " * "
}))


app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use( bodyParser.json())


// ACESSOS ÀS ROTAS
app.use("/user", userRoute)
	

app.listen( process.env.PORT || 5000, () => console.log('PORT 5000'))