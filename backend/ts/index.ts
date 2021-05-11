const express = require('express')
const notas = require('../../src/app/data/data.json')

const app = express()
const port = 3000


app.get('/', (req : any, res : any) => {
    res.send(notas)
    console.log(notas)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})