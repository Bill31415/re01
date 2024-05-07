const express = require('express')
const router = express.Router()
const expressJoi = require('@escook/express-joi')

const {select_name_rules} = require('../schema/userInfor')

const infor_handler = require('../router_handler/userInfor')

router.get('/infor', infor_handler.getAllInfor)
router.get('/inforById', 
    expressJoi(select_name_rules),
    infor_handler.getNameById
)

module.exports = router