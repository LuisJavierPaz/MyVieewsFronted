import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpinnerService} from './spinner.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private spinner: SpinnerService) { }
  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.start();
    return next.handle(req).pipe(
      finalize(() => this.spinner.stop())
    );
  }
}
