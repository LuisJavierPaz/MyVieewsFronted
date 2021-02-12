import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SectionVideoVisibleServiceService} from '../../../services/servicesVideo/visibeSections/section-video-visible-service.service';


@Component({
  selector: 'app-nav-navigation',
  templateUrl: './nav-navigation.component.html',
  styleUrls: ['./nav-navigation.component.css']
})
export class NavNavigationComponent implements OnInit {
  nameSearchVideo = new FormControl('');
  constructor(public visibleSectionEvent: SectionVideoVisibleServiceService) { }

  ngOnInit(): void {
  }
  methodSearchVideo(): void{
    this.visibleSectionEvent.setVisibleSectionHome(false);
  }
}
