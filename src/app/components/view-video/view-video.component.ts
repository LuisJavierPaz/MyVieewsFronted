import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {
  id: any;
  video = [];
  lisVideos = [];

  constructor( ) {
  }

  ngOnInit(): void {
  }
}
