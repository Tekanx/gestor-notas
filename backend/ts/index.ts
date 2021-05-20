const cors = require('cors')
const express = require('express')
const notas = require('../../src/assets/data.json')

const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json({ extended: true }));

app.get('/', (req : any, res : any) => {
    res.send(notas)
    console.log(notas)
})

app.post('/', (req : any, res : any) =>{
    console.log(req.body);  
    notas.push(req.body[0]);
})

app.post('/2', (req : any, res : any) =>{
    console.log("holii")
    for(let i=0 ; i<notas.length; i++){
        if (req.body.Titulo==notas[i].Titulo){
            console.log(notas[i]);
            notas.splice(i,1);
            break
        }
    }
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
