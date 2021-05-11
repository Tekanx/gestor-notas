import { Component, OnInit } from '@angular/core';
import * as nota from '../../data/data.json';
import { Nota } from '../../interfaces/nota' 
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  ListaNotas = nota;
  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
