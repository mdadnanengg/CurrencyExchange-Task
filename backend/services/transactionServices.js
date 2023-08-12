import transactionModel from "../model/transactionModel.js"

const createTransaction = async (amountUSD, amountINR, senderName, receiverName, dropdown) => {
    const transaction = await transactionModel({amountUSD:amountUSD, amountINR:amountINR, senderName:senderName, receiverName:receiverName, dropdown:dropdown})
    transaction.save()
    return "success"
}

const readTransactions = async () => {
    const transactions = await transactionModel.find()
    return transactions
}

export {createTransaction, readTransactions}