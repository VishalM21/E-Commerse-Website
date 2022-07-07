
const express = require("express");

const app = express();

app.use(express.static("public"))

app.get("/",function(request,respond){
    respond.sendFile(__dirname+"/index.html");
});

app.get("/contact",function(req,res){
     res.send("my no is 9694784807");
});

app.listen(3000,function(){
    console.log("Server is Started");
});