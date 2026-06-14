const express=require("express");
const app=express();
const port=8080;
const mysql=require("mysql2");

const connection=mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"aishu",
    password:"shalini"
});

connection.query("SELECT * FROM aishu",(err,resu)=>{
    console.log(err);
    console.log(resu);
})

app.listen(port,()=>{
    console.log("server is working");
})

app.get("/",(req,res)=>{
    res.send("server is working");
})