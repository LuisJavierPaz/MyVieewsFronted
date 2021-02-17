import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private  spinner: NgxSpinnerService) {
  }

  public start(): any {
    this.spinner.show();
  }

  public stop(): any {
    this.spinner.hide();
  }
}
