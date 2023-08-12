import express from 'express'
import { postTransactionData, getAllTransactionHistory } from '../controllers/transferController.js'

const transferRouter = express.Router()

transferRouter.use(express.urlencoded({extended : true}))
transferRouter.use(express.json())

transferRouter.post('/save-transation-data', postTransactionData)

transferRouter.get('/transactions-history', getAllTransactionHistory)

export default transferRouter