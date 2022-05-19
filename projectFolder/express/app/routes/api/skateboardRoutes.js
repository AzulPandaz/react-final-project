const express = require('express')
const router = express.Router()


// Destructure
const{ skateboardDao: dao} = require('../../daos/dao')

// api/film
router.get('/',(req,res)=>{
    dao.findAll(res, dao.table)
})

// api/film/count
router.get('count', (req,res)=>{
    dao.countAll(res,dao.table)
})

// api/film/rating/:rating
router.get('/rating/:rating', (req,res)=>{
    dao.findByRating(res, req.params.rating)
})

// api/film/:id
router.get('/:id', (req,res)=>{
    dao.findById(res, dao.table, req.params.id)
})


router.post('/create', (req,res)=>{
    dao.create(req,res)
})


router.patch('/update/:id', (req, res) =>{
    dao.update(req,res)
})


module.exports = router