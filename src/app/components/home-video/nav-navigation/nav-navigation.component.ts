import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SectionVideoVisibleServiceService} from '../../../services/servicesVideo/visibeSections/section-video-visible-service.service';
import { NgbModal} from '@ng-'

@Component({
  selector: 'app-nav-navigation',
  templateUrl: './nav-navigation.component.html',
  styleUrls: ['./nav-navigation.component.css']
})
export class NavNavigationComponent implements OnInit {
  nameSearchVideo = new FormControl('');
  modalVisible = true;
  files: File[] = [];
  constructor(public visibleSectionEvent: SectionVideoVisibleServiceService, private modalUpload: NgbModal) {
  }

  ngOnInit(): void {
  }

  methodSearchVideo(): void {
    this.visibleSectionEvent.setVisibleSectionHome(false);
  }

  modelUpload(): any {
  }

  modelDetalle(): any {
  }
  upload(upload: any): any{

  }

  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
