
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

router.post('/signup', (req, res, next) => {
    const {username, password} = req.body

    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            return User.create({
                username,
                password: hashedPassword
            })
        })
        .then( () => {
            res.send('user created')
        })
        .catch(e => {
            next(e)
        })

})

router.get('/login', (req, res, next) => {
    res.render('login')
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body

    let currentUser

    User.findOne({username})
        .then(user => {
            if(user) {
                currentUser = user
                return bcrypt.compare(password, user.password)
            }
        })
        .then(hashMatched => {
            if(!hashMatched) {
                return res.send('password incorrect')
            }
            req.session.user = currentUser 
            res.send('password correct')
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router
