import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RestServicesRestVideoService} from '../../../services/rest-services-rest-video.service';
import {ViewVideoService} from '../../../services/view-video.service';
import {Subscription} from 'rxjs';
import {ModelVideo} from '../../../model/modelVideo';
import {SpinnerService} from '../../../services/spinner/spinner.service';

@Component({
  selector: 'app-section-home-video',
  templateUrl: './section-home-video.component.html',
  styleUrls: ['./section-home-video.component.css']
})
export class SectionHomeVideoComponent implements OnDestroy {

  listaVideos: any;
  /*
  * Susbrcribe
  * */
  video$: Subscription;

  constructor(private  rest: RestServicesRestVideoService, private route: Router, private spinner: SpinnerService) {
    this.video$ = this.rest.getListVideo().subscribe(
      (res: any) => {
        this.listaVideos = res;
      }
    );
  }

  ngOnDestroy(): any {
    this.video$.unsubscribe();
  }

}
