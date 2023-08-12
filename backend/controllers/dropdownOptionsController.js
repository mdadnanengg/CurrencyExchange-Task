import { getOptions, makeOptions } from "../services/dropdownOptionsServices.js"

const postDropdownOptions = async (req, res) => {

    // post data
    // {"options": ["Payment towards loan repayment","Deposit Investment", "Gift to relatives / Friends", "Donation", "Payment of education fee", "Rent", "Others"]}

    try {
        const options = req.body.options
        console.log(options)
        const status = await makeOptions(options)
        if (status == 'success') {
            res.send("options added succfully")
        } else {res.status(404).json({ error: 'Options not found' });}
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }

}

const getDropdownOptions = async (req, res) => {
    const options = await getOptions()
    console.log("options", options)
    res.send(options)
}

export { postDropdownOptions, getDropdownOptions }