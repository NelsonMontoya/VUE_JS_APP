const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = 3000
// use this in order to obtain data in the post 
app.use(express.json())

app.use(morgan('combine'))

//use this for allowing connections from anywhere
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        "appName": "Vue Js Empty",
        "Version": "1.0"
    })
})

app.post('/register', (req, res)=> {
    res.send({
        message: `You're authenticated with the email ${req.body.email}`,
        password: `Your password is ${req.body.password}`
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
