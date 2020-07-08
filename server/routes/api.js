const express = require('express')
const router = express.Router()


const wonders = [
  { name: "Mount Everest", location: "Nepal", visited: false },
  { name: "Grand Canyon", location: "Arizona", visited: false },
  { name: "Botanical Gardens", location: "Singapore", visited: true },
  { name: "Pantheon", location: "Greece", visited: false },
  { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function (req, res) {
  res.send(wonders)
})

router.put('/wonder/:name', function(req, res){
console.log(req.params.name)
console.log(wonders.find(entry => entry.name === req.params.name))
wonders.find(entry => entry.name === req.params.name).visited = true

res.end()
})

router.delete('/wonder/:name', function(req, res){
console.log(wonders.findIndex(entry => entry.name === req.params.name))
let indexToDelete = wonders.findIndex(entry => entry.name === req.params.name)
wonders.splice(indexToDelete,1)
})

router.post('/wonder', function(req,res){
console.log('POST request to /wonder')
console.log(req.body)
wonders.push({ name: req.body.name , location: req.body.location, visited: false})
res.end()
})

module.exports = router