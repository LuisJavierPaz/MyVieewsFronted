import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewVideoService {
  externalId: any;
  constructor(private route: Router) {
  }

  public navigate(id: string): void {
    this.externalId = id;
    this.route.navigate(['/home/play', id]);
  }
  public getId(): any{
    return this.externalId;
  }
}

