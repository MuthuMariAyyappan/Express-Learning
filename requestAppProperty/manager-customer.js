const express = require('express');
const cookieParser = require('cookie-parser')
const router = express.Router()

router.use(cookieParser())

router.post("/bill-payment",express.json(),(req,res) =>{
    const data = req.body
    console.log("req.baseUrl",req.baseUrl)
    console.log("req.cookies",req.cookies)
    console.dir(data)
    let billAmount;
    if(Array.isArray(data) && data.length > 0){
        billAmount = data.reduce((acc,itemInArray) =>{
            console.log("acc",acc)
            console.log("itemInArray",itemInArray)
            return acc + itemInArray.amount
        },0)
        
    }
    console.log("res.app",res.app)
    res.status(200).send(`The bill amount is ${billAmount || 0}`);
})


router.get("/res-format-eg",(req,res) =>{
    res.format({
        "text/plain" : () =>{
           res.send("This is a plain text format")
        },
        "application/json" : ()=> {
            res.json({message:"This is a json response"});
        },
        "text/html" : () =>{
            res.set("Link","<https://www.rawpixel.com/search/dog>")
            res.send("<h1>This is an HTML response</h1>")
        }
    })
})
module.exports = router