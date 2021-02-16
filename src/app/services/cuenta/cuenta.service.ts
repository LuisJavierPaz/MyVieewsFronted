import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private API_SERVER = 'http://localhost:8080/cuentas/';
  constructor(private httpCliente: HttpClient) { }

  public getAllCuentas(): Observable<any>{
    return this.httpCliente.get(this.API_SERVER);
  }

  public saveCuenta(cuenta: any): Observable<any>{
    return this.httpCliente.post(this.API_SERVER, cuenta);
  }

  public getCuenta(ExternalId: string): Observable<any>{
    return this.httpCliente.get(this.API_SERVER + 'cuenta/' + ExternalId);
  }

  public deleteCuenta(ExternalId: string ): Observable<any>{
    return  this.httpCliente.delete(this.API_SERVER + 'delete/' + ExternalId);
  }
}
