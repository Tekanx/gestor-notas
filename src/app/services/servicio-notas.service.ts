import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../interfaces/nota'

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

  deleteNota(NotaEliminable:Nota):Observable<any>{ 
    console.log(NotaEliminable);
    return this.service.post(`${this.url}borrar`,NotaEliminable);
  }

  modificarNota(Notamod:Array<Nota>):Observable<any>{ 
    console.log(Notamod); //arreglo contiene[nota modificada,nota original]
    return this.service.post(`${this.url}modificar`,Notamod);
  } 
  notaVieja(notavieja:Nota):Observable<any>{ 
    console.log(notavieja);
    return this.service.post(`${this.url}notavieja`,notavieja);
  }

  getNotaVieja() : Observable<any>{
    return this.service.get(`${this.url}notavieja`)
  }


}
