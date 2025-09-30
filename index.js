const express = require('express')
const abc = require('./router/abc.js')

// ...


const app = express()
const port = 3000
app.use('/abc', abc)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/aa', (req, res) => {
 res.download("template/index.html");
})


app.get('/blog/:slug', (req, res) => {
    console.log(req.query)
  res.send(`Hello World! ${req.params.slug}`)
})
app.get('/in', (req, res) => {
    console.log(req.query)
  res.sendFile('template/index.html',{root:__dirname})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})