import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    amountUSD : Number,
    amountINR : Number,
    senderName : String,
    receiverName : String,
    dropdown : String,
})

const transactionModel = mongoose.model('transaction', transactionSchema)

export default transactionModel