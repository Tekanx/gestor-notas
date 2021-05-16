import { Component, OnInit } from '@angular/core';
import * as nota from '../../data/data.json';
import { Nota } from '../../interfaces/nota';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms'; 

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  formulario:FormGroup;
  ListaNotas = nota;
  constructor(private fb:FormBuilder, private http : HttpClient) {
    this.formulario=this.fb.group({
      titulo:['',[Validators.required]],
      estado:['0',[Validators.required]],
      descripcion:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
    console.log()
  }

  EnviarDatos(){
    console.log(this.formulario)
  }
}