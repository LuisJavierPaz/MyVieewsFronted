import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RestServicesRestVideoService} from '../../services/rest-services-rest-video.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {
  /*Propediades de la clase*/
  listVideo: any = [];
  listSearchVideo: any = [];
  visibleSection = true;
  /*Instancia de un input*/
  searchVideo = new FormControl('');

  constructor(private restVideo: RestServicesRestVideoService) {
  }

  ngOnInit(): void {
    this.restVideo.getListVideo().subscribe(
      (res: any) => {
        this.listVideo = res;
      },
      (err: any) => console.error(err)
    );

  }

  /*=============Metodo que carga una lista dentro de la seccion de busqueda=======================================*/
  methodSearchVideo(): any {
    const name = this.searchVideo.value;
    this.restVideo.getSearchVideo(name).subscribe(
      (res: any) => {
        console.log(res);
        this.visibleSection = false;
        this.listSearchVideo = res;
      },
      (err: any) => console.error(err)
    );
  }
}
