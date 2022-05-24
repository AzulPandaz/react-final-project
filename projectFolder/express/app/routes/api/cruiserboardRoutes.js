const express= require('express')
const router = express.Router()

const {cruiserboardDao: dao} = require('../../daos/dao')
//const { route } = require('./filmRoutes')
// const router = require('./filmRoutes')

router.get('/', (req,res)=>{
    dao.findAll(res, dao.table)
})

router.get('/:id', (req,res)=>{
    dao.findById(res, dao.table, req.params.id)
})


router.get('/search/:id', (req,res)=>{
    dao.search(req, res, req.params.id)
})

module.exports = router