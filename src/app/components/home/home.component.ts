import { Component, OnInit } from '@angular/core';
import { Nota } from "../../interfaces/nota"
import { ServicioNotasService } from '../../services/servicio-notas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListaNotasA : Array<Nota>=[];
  ListaNotasP : Array<Nota>=[];
  ListaNotasC : Array<Nota>=[];

  constructor(private servicio : ServicioNotasService,private router: Router) {
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
  }
  
  Eliminar(notaEliminable:Nota){
    this.servicio.deleteNota(notaEliminable).subscribe(notas=>{
      console.log(notas); 
    });
    window.location.reload();
  }

  Editar(nota : Nota){
    this.servicio.notaVieja(nota).subscribe(notas=>{
      console.log(notas); 
    });
    this.router.navigateByUrl('/modificar-nota');
  }
} 