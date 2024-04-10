const express = require('express');
const bcrypt = require('bcrypt');
const Ticket = require('../models/Ticket');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).json({ ticket: ticket, message: 'Ticket is created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;