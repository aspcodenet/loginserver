const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000 // "Radiofrekvens"
const session = require('express-session');

const { UserAccount } = require('./models')
//const  { onHej, onLogin, onCreateUser } = require('./controllers/userController.js')
const userController  = require('./controllers/userController.js')
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
    // cookie: { secure: true } HTTPS
}));



// app.get('/hej',onHej)
app.get('/hej', userController.onHej)
app.post('/api/useraccount', userController.onCreateUser)
// app.post('/useraccount',onCreateUser)

app.post('/api/signIn',userController.onLogin);


app.listen(port, async () => {
    await migrationhelper.migrate()
    console.log(`Example app listening2 on port ${port}`)
})