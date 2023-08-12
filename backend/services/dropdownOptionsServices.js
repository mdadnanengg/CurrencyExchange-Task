import dropdownOptionsModel from "../model/dropdownOptionsController.js"

const makeOptions = async (options) => {
    const createOptions = await dropdownOptionsModel({options:options})
    await createOptions.save()
    console.log(options)
    return "success"
}

const getOptions = async () => {
    const dropdownOptions = await dropdownOptionsModel.find()
    return dropdownOptions
}

export {makeOptions, getOptions}