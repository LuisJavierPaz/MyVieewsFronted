import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelVideo} from '../model/modelVideo';


@Injectable({
  providedIn: 'root'
})
export class RestServicesRestVideoService {
  URL_API = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getListVideo(): any {
    return this.http.get(`${this.URL_API}/v1/video/get`);
  }

  getSearchVideo(name: string): any {
    return this.http.get(`${this.URL_API}/v1/video/get/name/${name}`);
  }

  getVideoUnique(externalId: string | null): any {
    return this.http.get(`${this.URL_API}/v1/video/get/id/${externalId}`);
  }

  getVideoDistinto(externalId: string): any {
    return this.http.get(`${this.URL_API}/v1/video/get/distinto/${externalId}`);
  }

  postVideoCloud(Video: File): any {
    const formData = new FormData();
    formData.append('multipartFile', Video);
    return this.http.post(`${this.URL_API}/v1/video/upload`, formData);
  }
  setVideoCloud(modelVideo: ModelVideo): any {
    return this.http.post(`${this.URL_API}/v1/video/save`, modelVideo);
  }
  /*
  *namethod (cuenta: Cuenta){
  * retrun this.http.post (!!url, cuenta);
  * }
  * */
}
