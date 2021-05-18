import { Component, OnInit } from '@angular/core';
import * as nota from '../../../assets/data.json';
import { Nota } from '../../interfaces/nota';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ServicioNotasService } from '../../services/servicio-notas.service' 

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  formulario:FormGroup;
  ListaNotas = nota;
  constructor(private fb:FormBuilder ,private servicio:ServicioNotasService) {
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['0',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  EnviarDatos(){  
    let nuevaNota:Array<Nota>=[{
      Titulo:this.formulario.get('titulo')?.value,
      Estado:this.formulario.get('estado')?.value,
      Descripcion:this.formulario.get('descripcion')?.value
     }
   ];
   
   this.servicio.GuardarNota(nuevaNota).subscribe(notas=>{
     console.log(notas);
   });
   this.formulario.reset();
  }
}