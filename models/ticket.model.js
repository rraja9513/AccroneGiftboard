const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ticketSchema=new Schema(
    {
        department:{
            type:String
        },
        subject:{
            type:String
        },
        description:{
            type:String
        }
    },
    {
        timestamps:true,
    }
);
const Ticket=mongoose.model('Ticket',ticketSchema);
module.exports=Ticket;