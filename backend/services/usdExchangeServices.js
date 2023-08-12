import { usdExchangeValueModel } from "../model/usdExchangeValueModel.js"

const createUSD = async (val) => {
    const value = await usdExchangeValueModel({valueOfUSD:val})
    value.save()
    console.log(value)
    return "success"
}

const getCurrentValueOfUSD = async () => {
    const getValue = await usdExchangeValueModel.find()
    return getValue
}

export {createUSD, getCurrentValueOfUSD}