import mongoose from "mongoose";

const dropdownOptionsSchema = mongoose.Schema({
    options : [String]
})

const dropdownOptionsModel = mongoose.model('dropdown-option', dropdownOptionsSchema)

export default dropdownOptionsModel