import {Component, OnInit} from '@angular/core';

import {SearchVideoServiceService} from '../../../services/servicesVideo/search-video-service.service';
import {RestServicesRestVideoService} from '../../../services/rest-services-rest-video.service';

@Component({
  selector: 'app-section-search-video',
  templateUrl: './section-search-video.component.html',
  styleUrls: ['./section-search-video.component.css']
})
export class SectionSearchVideoComponent implements OnInit {
  listVideo: any;
  nameSearch = this.search.getValueSearch();
  /**
   * Subscribe
   */
  constructor(private search: SearchVideoServiceService, private rest: RestServicesRestVideoService) {
  }

  ngOnInit(): void {
    console.log(this.nameSearch);
    this.rest.getSearchVideo(this.nameSearch).subscribe(
      (res: any) => {
        console.log(res);
        this.listVideo = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
