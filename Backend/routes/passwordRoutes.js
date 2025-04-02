const express = require('express');
const router = express.Router();
const Password = require('../models/Password');

// Save Password
router.post('/', async (req, res) => {
  try {
    const { url, username, password } = req.body;
    const newPassword = new Password({ url, username, password });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Passwords
router.get('/', async (req, res) => {
  try {
    const passwords = await Password.find();
    res.json(passwords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Password
router.delete('/:id', async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.json({ message: 'Password deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
