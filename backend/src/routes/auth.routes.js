const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Request logging middleware with timestamp
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`, {
    body: req.body,
    query: req.query,
    params: req.params,
    headers: req.headers
  });
  next();
});

// Handle OPTIONS requests for all routes in this router
router.options('*', (req, res) => {
  res.status(200).end();
});

router.post('/register', async (req, res, next) => {
  try {
    console.log('[Register] Starting registration process');
    
    const { email, password, name } = req.body;
    
    // Enhanced validation logging
    console.log('[Register] Validating input:', { 
      hasEmail: !!email, 
      hasPassword: !!password, 
      hasName: !!name 
    });

    // Validation with detailed messages
    if (!email || !password) {
      const error = {
        status: 'error',
        message: 'Validation failed',
        details: {
          email: email ? null : 'Email is required',
          password: password ? null : 'Password is required'
        }
      };
      console.log('[Register] Validation failed:', error);
      return res.status(400).json(error);
    }

    // Existing user check with logging
    console.log('[Register] Checking for existing user');
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('[Register] User already exists:', email);
      return res.status(409).json({ 
        status: 'error',
        message: 'User already exists' 
      });
    }

    console.log('[Register] Hashing password');
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('[Register] Creating new user');
    const user = await User.create({
      email,
      password: hashedPassword,
      name: name || email.split('@')[0]
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    console.log('[Register] Registration successful:', { userId: user._id });
    
    // Add response logging
    res.on('finish', () => {
      console.log('[Register] Response sent:', {
        statusCode: res.statusCode,
        headers: res.getHeaders()
      });
    });

    return res.status(201).json({
      status: 'success',
      data: userResponse
    });

  } catch (error) {
    console.error('[Register] Error during registration:', error);
    next(error);
  }
});

module.exports = router;
