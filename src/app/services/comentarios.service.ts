import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comentario} from "../model/commentCharger";

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  API_URI = 'http://localhost:8080/api/v1/informacion';

  constructor(private http: HttpClient) {
  }

  getComentarios(clave: any): any {
    return this.http.get(`${this.API_URI}/comentarios/${clave}`);
  }

  insertComentarios(comentario: Comentario): any {
    return this.http.post(`${this.API_URI}/comentarios/insert`, comentario);
  }

}
