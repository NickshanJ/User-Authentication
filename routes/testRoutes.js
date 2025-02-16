const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/test-jwt', (req, res) => {
  const payload = {
    user: {
      id: '123',
    },
  };

  console.log('JWT Secret:', process.env.JWT_SECRET);

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
    (err, token) => {
      if (err) {
        console.error('JWT sign error:', err);
        return res.status(500).json({ msg: 'Token generation error', error: err.message });
      }
      res.json({ token });
    }
  );
});

module.exports = router;