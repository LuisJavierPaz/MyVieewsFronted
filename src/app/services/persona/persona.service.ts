import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private API_SERVER = 'http://localhost:8080/personas/';

  constructor(
    private httpClient: HttpClient
  ) { }
  // tslint:disable-next-line:typedef
  public getPersona(ExternalId: string){
    return this.httpClient.get(this.API_SERVER + 'persona/' + ExternalId);
  }
}
