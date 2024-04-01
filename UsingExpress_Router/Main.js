const express = require("express")
const app= express()
const form = express()
const table = express()
const formRoutes = require("./FormRoute")
const tableRoutes = require("./TableRoute")

form.on("mount",(parent) =>{
    console.log("Form Mounted",parent)
})
form.use("/",formRoutes)
app.use("/api",form)
app.use("/api",tableRoutes)

app.get("/api",(req,res) =>{
    res.send({message:"Welcome to the API"})
})


console.log("FormRoutes MountPath:", formRoutes.mountpath);
console.log("TableRoutes MountPath:", tableRoutes.mountpath);
app.listen(2000,(err) =>{
    err ? console.error(err) : console.log(`Server running on 2000`)
})