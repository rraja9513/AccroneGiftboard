const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 80;
const uri=process.env.ATLAS_URI;
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Atlas started successfully")
})
const ticketRouter=require('./routes/ticket');
app.use('/ticket',ticketRouter);
app.listen(port,function(){
    console.log("Server started Successfully");
});