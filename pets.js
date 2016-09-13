'use strict'

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')



app.get('/pets', function(req, res) {
  fs.readFile('pets.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data))
  })
})

app.listen(port)
