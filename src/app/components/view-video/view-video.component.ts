import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewVideoService} from '../../services/view-video.service';
import {RestServicesRestVideoService} from '../../services/rest-services-rest-video.service';
import {Subscription} from 'rxjs';
import {SpinnerService} from '../../services/spinner/spinner.service';
import {waitForAsync} from '@angular/core/testing';
import {south} from '@cloudinary/base/qualifiers/compass';
import {ActivatedRoute} from '@angular/router';
import {ComentariosService} from '../../services/comentarios.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit, OnDestroy {
  listaVideosDistintos: any;
  videoB: any;
  videosVistos: any = [];
  $listVideo = new Subscription();
  directorio: any;
  listaComentario: any;

  constructor(private viewService: ViewVideoService, private restServise: RestServicesRestVideoService,
              private spinnerService: SpinnerService, private activateRouter: ActivatedRoute, private restCOmentarios: ComentariosService
  ) {
  }

  ngOnInit(): void {
    this.videoB = this.viewService.getVideo();
    this.directorio = this.videoB.directorio;
    this.videosVistos [0] = this.videoB;
    console.log(this.videoB.directorio);
    this.$listVideo = this.restServise.getVideoDistinto(this.viewService.getVideo().externalId).subscribe(
      (res: any) => {
        this.listaVideosDistintos = res;
      }
    );
  }


  public viewVideo(externalId: string, video: any): void {
    this.viewService.navigate(externalId, video);
    this.ngOnInit();
  }

  ngOnDestroy(): any {
    this.$listVideo.unsubscribe();
  }

  getVideo(): void {
    this.ngOnInit();
  }

}
