import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RestServicesRestVideoService} from '../../services/rest-services-rest-video.service';
import {SectionVideoVisibleServiceService} from '../../services/servicesVideo/visibeSections/section-video-visible-service.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {

  constructor(private restVideo: RestServicesRestVideoService, public isVisebleSecion: SectionVideoVisibleServiceService) {
  }

  ngOnInit(): void {
  }
  /*=============Metodo que carga una lista dentro de la seccion de busqueda=======================================*/

}
