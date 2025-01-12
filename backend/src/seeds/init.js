const mongoose = require('mongoose');
require('dotenv').config();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    console.log('Starting seed...');
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create test users
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const users = await User.create([
      {
        email: 'test@example.com',
        password: hashedPassword,
        name: 'Test User'
      },
      {
        email: 'admin@example.com',
        password: hashedPassword,
        name: 'Admin User'
      }
    ]);

    console.log('Database seeded successfully');
    console.log('Created users:', users);
  } catch (error) {
    console.error('Seeding error:', error);
    throw error;
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
};

// Run seed if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = seedDatabase;
