const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const pool = require("./db");
const Router = require("./Router/router");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
dotenv.config();

//routers
app.use("/postgreSQL",Router);



let port = process.env.port ;

app.get("/:start/:end",(req,res)=>{
  res.json({
    start:req.params["start"],
    end:req.params["end"]
  })
  
})


app.listen(port,()=>{
  console.log(`The port has started ${port}`);
})