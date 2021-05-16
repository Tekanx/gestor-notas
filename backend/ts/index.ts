const cors = require('cors')
const express = require('express')
const notas = require('../../src/assets/data.json')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req : any, res : any) => {
    res.send(notas)
    console.log(notas)
})

app.post('/notas', (req : any, res : any) =>{

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
