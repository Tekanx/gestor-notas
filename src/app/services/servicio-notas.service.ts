import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Nota} from '../interfaces/nota'

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {
  url = "http://localhost:3000/";

  constructor(private service : HttpClient) { 
  }

  getNotas() : Observable<any>{
    return this.service.get(`${this.url}`)
  }

  GuardarNota(nuevaNota:Array<Nota>):Observable<any>{ 
    console.log(nuevaNota[0]);
    return this.service.post(`${this.url}`,nuevaNota);
  }

  /*deleteNota(eliminarNota:Array<Nota>):Observable<any>{
    
    console.log(eliminarNota[0]);
    //return this.service.delete(`${this.url}`,eliminarNota);
  }*/

}
