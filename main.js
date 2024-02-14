const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000 // "Radiofrekvens"
const session = require('express-session');

const { UserAccount } = require('./models')
//const userController  = require('./controllers/userController.js')
const migrationhelper = require('./migrationhelper')

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));