import { Component, OnInit } from '@angular/core';
import { Nota } from '../../interfaces/nota';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ServicioNotasService } from '../../services/servicio-notas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar-nota',
  templateUrl: './modificar-nota.component.html',
  styleUrls: ['./modificar-nota.component.scss']
})
export class ModificarNotaComponent implements OnInit {
  formulario:FormGroup;
  antiguaNota:Nota={
    "Titulo": "Arreglar colores",
    "Estado": "Proceso",
    "Descripcion":"clasificar por colorcito"
  }

  constructor(private fb:FormBuilder ,private servicio:ServicioNotasService, private router: Router) {
    this.formulario=this.fb.group({
      titulo:[this.antiguaNota.Titulo,[Validators.required]],
      estado:[this.antiguaNota.Estado,[Validators.required]],
      descripcion:[this.antiguaNota.Descripcion,[Validators.required,Validators.maxLength(150)]]
    });
   }

  ngOnInit(): void {
  }

  ModificarDatos(){  
    let NotasNV:Array<Nota>=[{
      Titulo:this.formulario.get('titulo')?.value,
      Estado:this.formulario.get('estado')?.value,
      Descripcion:this.formulario.get('descripcion')?.value
     }
   ];
   NotasNV.push(this.antiguaNota);
   
   this.servicio.modificarNota(NotasNV).subscribe(notas=>{
     console.log(notas);
   });
   this.router.navigateByUrl('/')
  }

}
