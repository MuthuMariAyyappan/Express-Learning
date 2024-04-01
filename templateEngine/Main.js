const app = require("express")()
const mustacheExpress = require("mustache-express")
app.set("view engine","mustache") //app.set(name,value) setting view engine as pug
app.set("views","./myTemplate") //by default the template engine search for the templates in views folder of 
//the current working directory to change that we should explicity set the views folder with our folder

app.engine("mustache",mustacheExpress()) 
//USING PUG
app.get("/template-engine/pug",(req,res) =>{
    res.render("template.pug",{name: "Muthu Mari"})
})

app.get("/template-engine/ejs",(req,res) =>{
    res.render("template.ejs",{name: "Yesh"})
})
app.get("/template-engine/mustache", (req, res) => {
    res.render("template", { name: "Muthu Mari" });
});
 
app.listen(1000)