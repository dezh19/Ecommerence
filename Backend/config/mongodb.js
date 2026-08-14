import mongoose from 'mongoose';

mongoose.set('bufferCommands', false);

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerence`, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

export default connectDB;
