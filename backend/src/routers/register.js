const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name,email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Email,Name and password are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;

