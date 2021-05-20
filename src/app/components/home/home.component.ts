import { Component, OnInit } from '@angular/core';
import { Nota } from "../../interfaces/nota"
import * as nota from '../../../assets/data.json';
import { ServicioNotasService } from '../../services/servicio-notas.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListaNotasA : Array<Nota>=[];
  ListaNotasP : Array<Nota>=[];
  ListaNotasC : Array<Nota>=[];
  card = document.getElementById("card")

  constructor(private servicio : ServicioNotasService) {
   }

  ngOnInit(): void {
    this.servicio.getNotas().subscribe((notas) => {
      for (let i = 0; i < notas.length; i++) {
        if(notas[i].Estado=='Abierto'){
          this.ListaNotasA.push(notas[i])
        }
        else if(notas[i].Estado=='Proceso'){
          this.ListaNotasP.push(notas[i])
        }
        else{
          this.ListaNotasC.push(notas[i])
        }
      }
    })
    console.log(this.ListaNotasA)
  }
  
  Eliminar(notaEliminable:Nota){
    console.log("me quieren sacar tio",nota);
    /*let NotaDeleteada:Array<Nota>=[];
    NotaDeleteada.push(notaEliminable);
    this.servicio.deleteNota(NotaDeleteada).subscribe(notas=>{
      console.log(notas); 
    });*/
  }


  onRefresh(nota : Nota){
    switch(nota.Estado){
          case "Abierto": {
            if(this.card != null) this.card.style.backgroundColor="blue"
            break;
          }
          case "Proceso": {
            if(this.card != null) this.card.style.backgroundColor="yellow"
            break;
          }
          case "Cerrado": {
            if(this.card != null) this.card.style.backgroundColor="red"
            break;
          }
        }
        
  }
} 