const app = require("express")()
const waiterCustomer = require("./waiter-customer")
const managerCustomer = require("./manager-customer")

app.openingHours = "9am - 5pm"
app.dressCode = "casual"
app.todaysSpecial = ["Honey Cake", "Shawarma", "Mango Cake"]

app.useCustomerGreeting = (req,res,next) =>{
    console.log(`Welcome to our Restaurant How can I help you?`)
   
}

app.use("/routes",waiterCustomer)
app.use("/routes",managerCustomer)

app.listen(2001,(err) =>{
    err ? console.error(err) : console.log(`Server running on 2001`)
})



