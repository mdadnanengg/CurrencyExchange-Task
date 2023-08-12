// import { usdExchangeValueModel } from "../model/usdExchangeValueModel.js"
import {createTransaction, readTransactions} from "../services/transactionServices.js"

const postTransactionData = async (req, res) => {
    console.log(req.body)

    const { amountUSD, amountINR, senderName, receiverName, dropdown } = req.body

    console.log(req.body)

    if (amountUSD != "" && amountINR != 0 && senderName != "" && receiverName != "" && dropdown != "") {

        const status = await createTransaction(amountUSD, amountINR, senderName, receiverName, dropdown)

        if (status === "success") {
            res.send('transaction successfully')
        } else {
            res.send('transaction Failed')
        }

    } else {
        res.send('Inputs Fields Can Not Be Empty')
    }




}

const getAllTransactionHistory = async (req, res) => {
    const transactions = await readTransactions()
    res.json(transactions)
}

export { postTransactionData, getAllTransactionHistory }