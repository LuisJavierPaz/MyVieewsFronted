import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SearchVideoServiceService} from '../../../services/servicesVideo/search-video-service.service';
import {RestServicesRestVideoService} from '../../../services/rest-services-rest-video.service';
import {SubHomeSearchComponentComponent} from '../sub-home-search-component.component';
import {ViewVideoService} from '../../../services/view-video.service';

@Component({
  // providers: [SubHomeSearchComponentComponent, ViewVideoComponent],
  selector: 'app-section-search-video',
  templateUrl: './section-search-video.component.html',
  styleUrls: ['./section-search-video.component.css']
})
export class SectionSearchVideoComponent implements OnInit {
  listVideo: any = [];
  nameSearch: any;

  /**
   * Subscribe
   */
  constructor(
    private search: SearchVideoServiceService,
    private rest: RestServicesRestVideoService,
    private activaRouter: ActivatedRoute,
    private reload: SubHomeSearchComponentComponent,
    // private view: ViewVideoComponent,
    private viewService: ViewVideoService) {
  }

  ngOnInit(): void {
    this.listVideo = [];
    this.rest.getSearchVideo(this.search.nameSearch).subscribe(
      (res: any) => {
        console.log('Esta es la respueta', this.nameSearch);
        console.log(res);
        this.listVideo = res;
      },
      (err: any) => {
      }
    );
  }

  public restart(): void {
    this.ngOnInit();
  }

  public listar(): any {
    location.reload();
    console.log(this.search.nameSearch);
  }

  public viewVideo(externalID: string, video: any): any {
    this.viewService.navigate(externalID, video);
    // this.view.ngOnInit();
  }

}
