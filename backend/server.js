const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors());
//getting dotenv

require("dotenv").config();

// defining PORT 

const PORT =  6000

// using middleware for the passing the data from backend 

app.use(express.json())

// importing the route 

const createDetails = require("./routes/createDetails")
// using cros for connection 



// defining the routing with the mounting 

app.use("/", createDetails )

app.listen(PORT,()=>{
    console.log(`Your port is running  on the ${PORT} `)
})

app.get("/" , (req , res)=>{
    res.send("Your Request has been created")
})

// mounting 



// database connection 
// importing the data  base

const databaseConnection =() => require("./config/database") 
databaseConnection();