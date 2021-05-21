const cors = require('cors')
const express = require('express')
const notas = require('../../src/assets/data.json')

const app = express()
const port = 3000
const bodyParser = require('body-parser');

let notaguardada:any;
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

app.post('/borrar', (req : any, res : any) =>{
    console.log("Eliminando",req.body);
    for(let i=0 ; i<notas.length; i++){
        if ((req.body.Titulo==notas[i].Titulo)&&(req.body.Estado==notas[i].Estado)&&(req.body.Descripcion==notas[i].Descripcion)){
            console.log(notas[i]);
            notas.splice(i,1);
            break
        }
    }
})

app.post('/modificar', (req : any, res : any) =>{
    console.log("Modificando",req.body);
    for(let i=0 ; i<notas.length; i++){
        if ((req.body[1].Titulo==notas[i].Titulo)&&(req.body[1].Estado==notas[i].Estado)&&(req.body[1].Descripcion==notas[i].Descripcion)){
            notas[i].Titulo = req.body[0].Titulo;
            notas[i].Estado = req.body[0].Estado;
            notas[i].Descripcion = req.body[0].Descripcion;
            break
        }
    }
})

app.post('/notavieja', (req : any, res : any) =>{
    notaguardada=req.body;
    console.log("notita: ",notaguardada);

})

app.get('/notavieja', (req : any, res : any) =>{
    res.send(notaguardada);
    console.log(`get.notavieja${notaguardada}`);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
