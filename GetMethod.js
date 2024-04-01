const express = require('express');
const app = express()

const port = 3500
const json = {
    "name" : "Priya",
    "age": 23
}
// GET METHOD

//this is middleware function that takes place request and response cycle 
//inbetween this if we wanna manipulate any thing we can do by means of middleware

app.use("/about",(req,res,next) =>{
    console.log("First Middleware",req.url)
    res.status(400)
    next() //ethu next middleware erutha pokum or else go to method
})

app.use((req,res,next) =>{
    console.log("common Middleware")
    next()
})
app.get("/",(req,res) =>{
    console.log("inside common route")
    res.setHeader("Cache-control","no-store")
    res.status(200).send("<h1>WELCOME TO HOME PAGE</h1>")
})

app.get("/about", (req, res) => {
    console.log("inside about")
    res.setHeader("Cache-Control", "no-store");
    res.status(200).send(json);
});

app.get("/file",(req,res) =>{
    console.log("inside file")
    res.sendFile("W:\\Node + Express Practice\\Express js Learning\\testFile.html")
   
})
app.listen(port,(err) =>{
    err ? console.error(err) : console.log(`Server running on ${port}`)
})