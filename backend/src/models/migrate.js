const mongoose = require('mongoose');
require('./User');
require('./Message');

const migrate = async () => {
  try {
    // Ensure all models are registered and collections are created
    const collections = await mongoose.connection.db.collections();
    console.log('Collections:', collections.map(c => c.collectionName));
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  // Connect to MongoDB
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://root:example@mongo:27017/chat?authSource=admin';
  
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('Connected to MongoDB');
      return migrate();
    })
    .then(() => {
      console.log('Migration finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Migration error:', error);
      process.exit(1);
    });
}

module.exports = migrate;
