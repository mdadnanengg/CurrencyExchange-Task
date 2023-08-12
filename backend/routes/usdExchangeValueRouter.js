import express from 'express'
import { postValueUSD, getValueUSD } from '../controllers/usdExchangeValueController.js'

const exchnageRouter = express.Router()

exchnageRouter.use(express.urlencoded({extended : true}))
exchnageRouter.use(express.json())


exchnageRouter.post('/update-usd', postValueUSD)

exchnageRouter.get('/get-usd-value', getValueUSD)

export default exchnageRouter