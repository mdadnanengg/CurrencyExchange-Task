import express from 'express'
import transferRouter from './routes/transferRouter.js'
import cors from 'cors'
import connectDB from './db/connection.js'
import exchnageRouter from './routes/usdExchangeValueRouter.js'
import dropdownOptionsRouter from './routes/dropdownOptionsRouter.js'

const app = express()
const port = 8000
const url = 'mongodb://0.0.0.0:27017/'
const dbName = 'bank'

connectDB(url, dbName)

app.use(cors())
app.use('/', transferRouter)
app.use('/', exchnageRouter)
app.use('/', dropdownOptionsRouter)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})