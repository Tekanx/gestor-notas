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
  ListaNotas : Array<Nota>=[];
  card = document.getElementById("card")
  //ListaNotas = nota
  constructor(private servicio : ServicioNotasService) {
   }

  ngOnInit(): void {
    this.servicio.getNotas().subscribe((notas) => {
      for (let i = 0; i < notas.length; i++) {
        this.ListaNotas.push(notas[i])
        
      }
    })
    console.log(this.ListaNotas)
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