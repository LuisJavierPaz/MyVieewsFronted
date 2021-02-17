import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SectionVideoVisibleServiceService} from '../../../services/servicesVideo/visibeSections/section-video-visible-service.service';
import {SearchVideoServiceService} from '../../../services/servicesVideo/search-video-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SectionSearchVideoComponent} from '../../sub-home-search-component/section-search-video/section-search-video.component';
import {SubHomeSearchComponentComponent} from '../../sub-home-search-component/sub-home-search-component.component';
import {RestCategoriaService} from '../../../services/rest-categoria.service';
import {ModelVideo, Video} from '../../../model/modelVideo';
import {v4, v4 as uuidv4} from 'uuid';
import {Subscription} from 'rxjs';
import {RestServicesRestVideoService} from '../../../services/rest-services-rest-video.service'
import {SpinnerService } from '../../../services/spinner/spinner.service';

@Component({
  providers: [SubHomeSearchComponentComponent, SectionSearchVideoComponent],
  selector: 'app-nav-navigation',
  templateUrl: './nav-navigation.component.html',
  styleUrls: ['./nav-navigation.component.css']
})
export class NavNavigationComponent implements OnInit, OnDestroy {
  nameSearchVideo = new FormControl('');
  modalVisible = true;
  files: File[] = [];
  format: any;
  url: any;
  listCategoria: any = [];
  categoriaSelect: any;
  externalIdCategoria: any;
  CategoriaInsertar: any;
  suscribe$ = new Subscription();
  responseCloud: any;
  listVisibilidad: any;

  /*Object charger*/
  videoModel: ModelVideo = {
    video: {
      externaId: uuidv4(),
      nombre: '',
      descripcion: '',
      fechaPublicacion: new Date(),
      directorio: '',
      visualizaciones: 0,
      gustar: 0,
      noGustar: 0,
      estadoVideo: 'ACTIVO',
      visibilidad: '',
    },
    externalIdCategoria: '',
    idCanal: 3
  };

  constructor(
    public visibleSectionEvent: SectionVideoVisibleServiceService,
    private modalUpload: NgbModal,
    private search: SearchVideoServiceService,
    private refresComponentSubHOme: SubHomeSearchComponentComponent,
    private searchVideo: SectionSearchVideoComponent,
    private http: RestCategoriaService,
    private videoCloud: RestServicesRestVideoService,
    private spinner: SpinnerService
  ) {
  }

  ngOnInit(): void {
    console.log(uuidv4());
  }

  methodSearchVideo()
    :
    void {
    this.visibleSectionEvent.setVisibleSectionHome(false);
    this.search.setValueSearch(this.nameSearchVideo.value);
    this.search.redirecTo(this.nameSearchVideo.value);
    this.refresComponentSubHOme.ngOnInit();
    this.searchVideo.ngOnInit();
  }

  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.modalVisible = false;

    /**/
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => {
        this.url = (event.target as FileReader).result;
      };
    }
  }

  onRemove(event: any):
    void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(uploadVideo: any): any {
    this.geCategorias();
    this.modalUpload.open(uploadVideo);
  }

  closeModal(): any {
    this.modalUpload.dismissAll();
  }

  geCategorias()
    :
    any {
    this.http.getCategoria().subscribe(
      (res: any) => {
        console.log(res);
        this.listCategoria = res;
      }
    );
  }


  chargerVideo(): any {
    console.log(this.categoriaSelect);

    this.suscribe$ = this.http.getExternal(this.categoriaSelect).subscribe(
      (res: any) => {
        this.spinner.start();
        this.CategoriaInsertar = res;
        this.videoModel.externalIdCategoria = this.CategoriaInsertar.externaId;
        this.videoModel.video.visibilidad = this.listVisibilidad;
        this.uploadVideoCloud();
        console.log(this.CategoriaInsertar);
        console.log(this.videoModel);
      }
    );

  }

  ngOnDestroy(): any {
    this.suscribe$.unsubscribe();
  }

  private uploadVideoCloud(): any {
    const file = this.files[0];
    this.videoCloud.postVideoCloud(file).subscribe(
      (res: any) => {
        this.responseCloud = res;
        this.videoModel.video.directorio = this.responseCloud.public_id;
        this.videoModel.video.externaId = uuidv4().toString();
        console.log(this.videoModel);
        this.setVideo();
        console.log(res);
        this.spinner.stop();
      }
    );
  }

  private setVideo(): any {
    this.videoCloud.setVideoCloud(this.videoModel).subscribe(
      (res: any) => {
        console.log(res);
        location.reload();
      }
    );
  }

}
