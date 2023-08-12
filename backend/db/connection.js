import mongoose from "mongoose";

const connectDB = (url, dbName) => {
    mongoose.connect(url+dbName)
    const db = mongoose.connection
    
    db.on('open', () => {
        console.log(`Database is connected!`)
    })
}

export default connectDB