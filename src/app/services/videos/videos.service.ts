import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private API_SERVER = 'http://localhost:8080/videos/';
  constructor(
    private httpCliente: HttpClient
  ) { }
  public getVideos(): Observable<any>{
    return this.httpCliente.get(this.API_SERVER);
  }
}
