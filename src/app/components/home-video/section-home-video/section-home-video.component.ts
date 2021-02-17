import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RestServicesRestVideoService} from '../../../services/rest-services-rest-video.service';
import {ViewVideoService} from '../../../services/view-video.service';
import {Subscription} from 'rxjs';
import {ModelVideo} from '../../../model/modelVideo';
import {SpinnerService} from '../../../services/spinner/spinner.service';
import {trigger, style, animate, state, transition} from '@angular/animations';

// import {ViewVideoComponent} from '../../view-video/view-video.component';

@Component({
  // providers: [ViewVideoComponent],
  selector: 'app-section-home-video',
  templateUrl: './section-home-video.component.html',
  styleUrls: ['./section-home-video.component.css'],
  animations: [
    trigger('introState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        })),
      ])
    ])
  ]
})
export class SectionHomeVideoComponent implements OnDestroy {

  listaVideos: any;
  /*
  * Susbrcribe
  * */
  video$: Subscription;

  constructor(private  rest: RestServicesRestVideoService,
              private route: Router,
              private spinner: SpinnerService,
              // private view: ViewVideoComponent,
              private viewService: ViewVideoService
  ) {
    this.video$ = this.rest.getListVideo().subscribe(
      (res: any) => {
        this.listaVideos = res;
      }
    );
  }

  ngOnDestroy(): any {
    this.video$.unsubscribe();
  }

  viewVideo(id: string, video: any): void {
    this.viewService.navigate(id, video);
    // this.view.ngOnInit();
  }
}
