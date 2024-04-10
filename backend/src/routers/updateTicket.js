const express = require('express');

const Ticket = require('../models/Ticket');

const router = express.Router();

router.put('/:id',async (req,res) =>{
    try{
        const data = await Ticket.findByIdAndUpdate(req.params.id,{userId:req.body.userId,booked:true},{ new: true });
        if(!data) throw Error('Data Not Found');
        await res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json({msg:err})
    }
})

module.exports = router;
