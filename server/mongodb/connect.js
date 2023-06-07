import mongoose from "mongoose";
const connectDB = (url) => {
    mongoose.set('strictQuery',true); // it will used for searching

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;