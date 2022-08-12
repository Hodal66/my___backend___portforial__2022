import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`MongoDb is runnning`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default mongoDB;
