import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchVideoServiceService} from '../../services/servicesVideo/search-video-service.service';

@Component({
  selector: 'app-sub-home-search-component',
  templateUrl: './sub-home-search-component.component.html',
  styleUrls: ['./sub-home-search-component.component.css']
})
export class SubHomeSearchComponentComponent implements OnInit {

  constructor(private  activaRouter: ActivatedRoute, private serviceSearch: SearchVideoServiceService) {
  }

  ngOnInit(): void {
    console.log(this.serviceSearch.nameSearch);

  }

  public reload(): void {
    location.reload();
  }
}
