const express = require("express")
const router = express.Router()

const dummyData = [
    {
        name: "priya",
        age: 23
    },
    {
        name: "kala",
        age: 25
    }
]
router.get("/table/data", (req,res) =>{
    console.log("request base path: " , req.baseUrl)
    console.log("request host name:",req.hostname)
    res.send(dummyData)
})

// router.use("/table/post-data", express.json());

// router.post("/table/post-data",(req,res) =>{
//     let data = req.body
//     dummyData.push(data)
//     res.send(dummyData)  
// })

    //or

    router.post("/table/post-data",express.urlencoded(),express.json(),(req,res) =>{
        console.log("encoded", req.body)
        let data = req.body
        dummyData.push(data)
        res.send(dummyData)
    })

module.exports = router