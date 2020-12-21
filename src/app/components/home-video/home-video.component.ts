import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { RestServicesRestVideoService} from '../../services/rest-services-rest-video.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {
  /*Properediades de la clase*/
  listVideo: any =  [];
  /*Instancia de un input*/
  searchVideo = new FormControl('');

  constructor( private restVideo: RestServicesRestVideoService ) {
  }

  ngOnInit(): void {
    this.restVideo.getListVideo().subscribe(
        (res: any) => {
          this.listVideo = res;
        },
      (err: any) => console.error(err)
    );

  }
/*====================================================*/
  methodSearchVideo(): any {
    const text = this.searchVideo.value;
    console.log(text);
  }
}
