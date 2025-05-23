const express = require('express');
const router = express.Router();
const passwordController = require('../controller/passwordController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/savePassword', authMiddleware, passwordController.savePassword);
router.get('/getPassword', authMiddleware, passwordController.getPasswords);
router.delete('/:id', authMiddleware, passwordController.deletePassword);

module.exports = router;
