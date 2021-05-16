import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}
