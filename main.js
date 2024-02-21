const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000 // "Radiofrekvens"
const session = require('express-session');
const {check} = require('express-validator')

const { UserAccount } = require('./models')
//const  { onHej, onLogin, onCreateUser } = require('./controllers/userController.js')
const userController  = require('./controllers/userController.js')
const migrationhelper = require('./migrationhelper')

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

// check('id').escape()
// sanitize

// app.post("/records", check('id').escape(), (request, response) => {
//     const {id} = request.body.id;
//     // id = ’10; DROP Users--’
//     const query = `SELECT * FROM Users WHERE id = ${id}`;
//     // 1 or 1=1
//     connection.query(query, (err, rows) => {
//       if(err) throw err;
//       response.json({data:rows});
//     });
//   });



app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true } HTTPS
}));



// name = <b>Stefan</b>
app.get('/sida', check('name').escape(), (req, res) => {
    // 

    const {name} = req.query // 
    console.log(name) // &lt;b&gt;Stefan&lt;/b&gt;

      return res.send(`<html><body><ul><li>Hej</li><li>Hopp</li></ul>Hello, ${name}!</body></html>`);
  });

// app.get('/hej',onHej)
app.get('/hej', userController.onHej)
app.post('/api/useraccount', userController.onCreateUser)
// app.post('/useraccount',onCreateUser)

app.post('/api/signIn',userController.onLogin);


app.listen(port, async () => {
    await migrationhelper.migrate()
    console.log(`Example app listening2 on port ${port}`)
})