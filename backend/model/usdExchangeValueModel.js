import mongoose from "mongoose";

const usdExchangeValueSchema = mongoose.Schema({
    valueOfUSD : Number
})

const usdExchangeValueModel = mongoose.model('echange-rate', usdExchangeValueSchema, 'echange-rate')

export {usdExchangeValueModel}