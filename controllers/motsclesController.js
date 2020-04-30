//Import
const express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

//D:\Documents\projet perso\codememory\models\motscles.json
const adapter = new FileSync('./models/motscles.json')
const db = low(adapter)


//routes
//get all
router.get('/', (req,res)=>{
    const motscles = db.get('motcles')
    .value()

    res.json(motscles)
})

//get by id
router.get('/id/:id', (req,res)=>{
    const motscle = db.get('motcles')
    .find({ id: Number(req.params.id) })
    .value()

    res.json(motscle)
})

//get by word
router.get('/word/:word', (req,res)=>{
    const motscles = db.get('motcles')
    .filter(function(m) { return m.terme.includes(req.params.word); })
    .value()

    res.json(motscles)
})

/*router.get('/:id', (req,res)=>{  
    User.findById(req.params.id, (err, doc) => {
        if (!err){
            res.json(doc);
        }else{
            console.log('Error in retrieving user : ' + err);
        }
    });
});*/


module.exports = router