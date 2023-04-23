const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());
app.use('/',(req,res)=>{
    res.json({name:"Mukesh Kumar",reg: "12003522"});
    // res.send("hello world");
})
app.listen(port,()=>{
    console.log("Server is running in 4000 Ports")
})