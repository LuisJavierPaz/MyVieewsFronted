import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelVideo} from '../model/modelVideo';


@Injectable({
  providedIn: 'root'
})
export class RestServicesRestVideoService {
  URL_API = 'http://localhost:8080/api';
  constructor( private http: HttpClient) { }
  getListVideo(): any{
      return this.http.get(`${this.URL_API}/v1/video/get`);
  }
  getSearchVideo(name: string): any{
    return this.http.get(`${this.URL_API}/v1/video/get/${name}`);
  }

  getVideoUnique(externalId: string): any{
    return this.http.get(`${this.URL_API}/v1/video/get/id/${externalId}`);
  }
  getVideoDistinto(externalId: string): any{
    return this.http.get(`${this.URL_API}/v1/video/get/distinto/${externalId}`);
  }
  /*
  *namethod (cuenta: Cuenta){
  * retrun this.http.post (!!url, cuenta);
  * }
  * */
}
