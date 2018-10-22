const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controllers/doggo_controller')
//IMPORT YOUR CONTROLLER HERE

const app = express()
app.use(bodyParser.json())

let saves = []
// let textSave=

app.get('https://dog.ceo/api/breeds/image/random', (req, res) => {
  res.status(200).send('Doggo')
})
app.post('/api/post', (req,res)=>{
  saves.push(req.body)
  res.status(200).send(saves)
})

app.get('https://aws.random.cat/meow', (req, res)=>{
  res.status(200).send('Catto')
})

app.get('https://talaikis.com/api/quotes/random/', (req, res)=>{
  res.status(200).send('Quote')
})

app.delete('/api/delete/:id', (req,res)=>{
 saves=[]
res.status(200).send(saves)
})

app.get('/api/get', (req,res)=>{
  res.status(200).send(data)
})
  

// app.put('/api/put', (req,res)=>{

// })

// app.put('/api/put',(req,res)=>{
// textSave.push(req.body)
// res.status(200).send(textSave)
// })


const PORT = 3232

app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))