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

app.delete('/', (req : any, res : any) =>{
    let indice=0;
    for(let i=0 ; i<notas.length; i++){
        if (req.body==notas[i]){
            indice=i;
            break
        }
    }
    notas.splice(indice,0);
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
