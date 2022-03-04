const express = require("express");
const app =express();
app.use(express.json())


app.get("/book",(req,res)=>{
   res.send("hellow");
})

app.get("/book/:name",parikshit,(req,res)=>{
    req.name = req.params.name
    res.send({Bookname:req.name})
})



function parikshit(req,res,next)
{
    console.log("fetching all the books");
    next();

}

app.listen("5000",()=>{
    console.log("port is running on 5000");
})