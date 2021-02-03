import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css']
})
export class HomeVideoComponent implements OnInit {

  /*Instancia de un input*/
  searchVideo = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  methodSearchVideo(): any {
    const text = this.searchVideo.value;
    console.log(text);
  }
}
