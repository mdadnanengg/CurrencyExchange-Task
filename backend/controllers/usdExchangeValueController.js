import { createUSD, getCurrentValueOfUSD } from "../services/usdExchangeServices.js"


const postValueUSD = async (req, res) => {
    const { valueOfUSD } = req.body
    console.log(valueOfUSD, "req.body")

    if (typeof valueOfUSD === 'number' || typeof valueOfUSD === 'string' && valueOfUSD > 0) {
        const status = await createUSD(valueOfUSD)
        console.log(status, "status")

        if (status == 'success') {
            res.send('Value of USD Updated')
        } else { res.send('error occured while updating') }

    } else {
        res.send("datatype not number")
    }
}

const getValueUSD = async (req, res) => {
    const value = await getCurrentValueOfUSD()
    console.log(value)
    res.send(value)
}

export { postValueUSD, getValueUSD }