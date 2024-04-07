const express = require('express');
const router = express.Router();

router.get("/restaurant-spl",(req,res) =>{
    req.app.useCustomerGreeting()
    console.log("Restaurant Opening time:", req.app.openingHours)
    console.log("Restaurant todays special", req.app.todaysSpecial)
    res.send("Order placed are Burger, Pizza")
})

module.exports = router