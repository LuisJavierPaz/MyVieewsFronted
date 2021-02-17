import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewVideoService {
  externalId: any;
  video: any;
  constructor(private route: Router) {
  }

  public navigate(id: string, video: any): void {
    this.externalId = id;
    this.video = video;
    this.route.navigate(['/home/play', id]);
  }
  public getVideo(): any{
    return this.video;
  }
}

