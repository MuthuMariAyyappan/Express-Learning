const express = require("express")
const app = express()

// let data = [];
app.use(express.json())
app.post("/data",(req,res) =>{
    let data = req.body
    console.log("POST",data)
    res.send(`DATA RECEIVED NAME is ${data.name}`)
})

app.listen(3501,(err) =>{
    err ? console.log("error",err) : console.log("SERVER RUNNING in 3501")
})