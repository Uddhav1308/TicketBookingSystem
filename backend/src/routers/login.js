const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({ user:user,message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;