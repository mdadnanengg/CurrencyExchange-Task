import express from 'express'
import { getDropdownOptions, postDropdownOptions } from '../controllers/dropdownOptionsController.js'

const dropdownOptionsRouter = express.Router()

dropdownOptionsRouter.use(express.urlencoded({extended : true}))
dropdownOptionsRouter.use(express.json())

dropdownOptionsRouter.post('/create-dropdownOptions', postDropdownOptions)

dropdownOptionsRouter.get('/get-dropdownOptions', getDropdownOptions)

export default dropdownOptionsRouter