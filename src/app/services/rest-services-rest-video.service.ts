import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video} from '../model/Video';


@Injectable({
  providedIn: 'root'
})
export class RestServicesRestVideoService {
  URL_API = 'http://localhost:3000/api';
  constructor( private http: HttpClient) { }
  public getListVideo(): any{
      return this.http.get(`${this.URL_API}/v1`);
  }
  public getSearchVideo(name: string): any{
    return this.http.get(`${this.URL_API}/v1/${name}`);
  }
}
