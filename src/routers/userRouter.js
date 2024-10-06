const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

//fetch all
router.get("/user",controller.fetchingAll)

//fetchById
router.get("/user/:id",controller.fetchOne)

//adding a single record
router.post("/user",controller.addOne)

//finding and update
router.put("/user/:id",controller.updateById)

//deleting
router.delete("/user/:id",controller.deleteUser)

module.exports = router