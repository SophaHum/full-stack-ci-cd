const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  res.json({ message: 'Login endpoint' });
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        name: username,
        email,
        password // Note: In production, hash the password before storing
      }
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

module.exports = router;