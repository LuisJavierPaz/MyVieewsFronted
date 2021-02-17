import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RestServicesRestVideoService} from '../../services/rest-services-rest-video.service';
import {SectionVideoVisibleServiceService} from '../../services/servicesVideo/visibeSections/section-video-visible-service.service';
import {trigger, style, animate, state, transition} from '@angular/animations';
import {SpinnerService} from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css'],
  animations: [
    trigger('introState', [
      state('void', style({
        transform: 'translateX(0)',
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
export class HomeVideoComponent implements OnInit {

  constructor(private restVideo: RestServicesRestVideoService, public isVisebleSecion: SectionVideoVisibleServiceService) {
  }

  ngOnInit(): void {
  }

  /*=============Metodo que carga una lista dentro de la seccion de busqueda=======================================*/

}
