import express from 'express'
import bodyParser from 'body-parser'
import itemController from './controllers/user'
import cors from 'cors'

const app = express()
const port = 8080

app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('GET!')
})

app.use('/item', itemController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
