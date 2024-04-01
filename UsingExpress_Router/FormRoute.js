const express = require('express')
const router = express.Router()

router.get("/form/data",(req,res) =>{
    res.send("Form submitted successfully!")
})

router.get("/form/validation",(req,res) =>{
    res.send("Invalid form data!")
})

module.exports = router