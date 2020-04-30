//Import
const express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

//D:\Documents\projet perso\codememory\models\codes.json
const adapter = new FileSync('./models/codes.json')
const db = low(adapter)


//routes
//get all
router.get('/', (req,res)=>{
    const codes = db.get('codes')
    .value()

    res.json(codes)
})

//get by id
router.get('/id/:id', (req,res)=>{
    const code = db.get('codes')
    .find({ id: Number(req.params.id) })
    .value()

    res.json(code)
})

//get by word
router.get('/word/:id', (req,res)=>{
    const codes = db.get('codes')
    .filter(function(c) {  return c.motscles.map(m => m.idtermes).includes(Number(req.params.id)); })
    .value()

    res.json(codes)
})


/*function tfIdf(unMot) {

    const codes = db.get('codes')
    .filter(function(m) { return m.terme.includes(req.params.word); })
    .value()

   //array id mots cles
   const idscodes = codes.map( m => ({idTerme: m.id, idfTerme: m.idf}))

    const codes = db.get('codes')
    .filter(function(c) { return c.codes.idtermes.includes(codes
        .map(function square(m) { return m.id;}))})
    .value()
    

}*/

module.exports = router