const router = require('express').Router()
const user = require('../controllers/user')

router.get('/users', user.getUser)
router.post('/register', user.register)
router.post('/login', user.login)

module.exports = router