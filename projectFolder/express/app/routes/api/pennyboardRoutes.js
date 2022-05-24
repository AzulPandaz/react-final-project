const express = require('express')
const router = express.Router()



const{ pennyboardDao: dao} = require('../../daos/dao')

router.get('/',(req,res)=>{
    dao.findAll(res, dao.table)
})

router.get('/:id', (req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

router.patch('/update/:id', (req, res) =>{
    dao.update(req,res)
})


module.exports = router
