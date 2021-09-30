const router=require('express').Router();
let Ticket=require('../models/ticket.model');
router.route('/').post((req, res) => {
    Ticket.find()
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Ticket.findById(req.params.id)
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/add').post((req,res)=>{
    const department = req.body.department;
    const subject = req.body.subject;
    const description = req.body.description;
    const newTicket=new Ticket({
      department,
      subject,
      description
    })
    newTicket.save()
  .then(() => res.json('Ticket added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  router.route('/update/:id').post((req,res)=>{
  Ticket.findById(req.params.id)
    .then(ticket => {
      ticket.department = req.body.department;
      ticket.subject = req.body.subject;
      ticket.description = req.body.description;
      ticket.save()
        .then(() => res.json('Ticket updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ticket deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post(async(req,res)=>{
  const ids=req.body.arrayids;
  await Ticket.deleteMany({_id:{$in:ids}})
  res.status(200).json({ message: 'Deleted Successfully'});
});
 module.exports=router;