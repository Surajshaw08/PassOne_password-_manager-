const Password = require('../models/Password');

exports.savePassword = async (req, res) => {
  try {
    const { url, username, password } = req.body;
    const newPassword = new Password({ url, username, password, user: req.user.userId });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ user: req.user.userId });
    res.json(passwords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePassword = async (req, res) => {
  try {
    const password = await Password.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!password) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json({ message: 'Password deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
