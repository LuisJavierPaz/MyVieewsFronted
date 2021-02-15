import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SectionVideoVisibleServiceService} from '../../../services/servicesVideo/visibeSections/section-video-visible-service.service';
import {SearchVideoServiceService} from '../../../services/servicesVideo/search-video-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-navigation',
  templateUrl: './nav-navigation.component.html',
  styleUrls: ['./nav-navigation.component.css']
})
export class NavNavigationComponent implements OnInit {
  nameSearchVideo = new FormControl('');
  modalVisible = true;
  files: File[] = [];

  constructor(
    public visibleSectionEvent: SectionVideoVisibleServiceService,
    private modalUpload: NgbModal,
    private search: SearchVideoServiceService) {
  }

  ngOnInit(): void {
  }

  methodSearchVideo(): void {
    this.visibleSectionEvent.setVisibleSectionHome(false);
    this.search.setValueSearch(this.nameSearchVideo.value);
  }
  modelUpload(): any {
  }

  modelDetalle(): any {
  }

  onSelect(event: any): void {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload(uploadVideo: any): any {
    this.modalUpload.open(uploadVideo);
  }
}
