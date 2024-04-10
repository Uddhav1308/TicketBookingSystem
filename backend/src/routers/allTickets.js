const express = require('express');

const Ticket = require('../models/Ticket');

const router = express.Router();

router.get('/', async (req,res)=>
{
    try{
        const data = await Ticket.find();
        if(!data) throw Error('Data Not Found');
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({msg:err});
    }
})

module.exports = router ;