const express = require('express');

const Ticket = require('../models/Ticket');

const router = express.Router();


router.delete('/:id', async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      await ticket.remove();
      res.json({ message: 'Ticket deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router ;