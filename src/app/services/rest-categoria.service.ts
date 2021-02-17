import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestCategoriaService {
  API_URI = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {
  }
  getCategoria(): any{
    return this.http.get(`${this.API_URI}/categoria`);
  }
  getExternal(nombre: any): any{
    return this.http.get(`${this.API_URI}/categoria/get/${nombre}`);
  }
}
