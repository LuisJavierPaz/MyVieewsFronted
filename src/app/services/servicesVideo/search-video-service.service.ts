import {Injectable, Input} from '@angular/core';
import {RestServicesRestVideoService} from '../rest-services-rest-video.service';
import {SectionSearchVideoComponent} from '../../components/sub-home-search-component/section-search-video/section-search-video.component';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SearchVideoServiceService {

  isVisibleSectionHome = true;
  listaVideoSearch = [];
  nameSearch = '';

  constructor(private router: Router, private activaRouter: ActivatedRoute) {
  }

  setValueSearch(nameSearch: string): void {
    this.nameSearch = nameSearch;
  }

  restartSearch(): any {
    console.log(this.activaRouter.snapshot.paramMap.get('nombre'));
    return this.activaRouter.snapshot.paramMap.get('nombre');
  }

  getValueSearch(): any {
    console.log('nombre retornado: ', this.nameSearch);
    return this.nameSearch;
  }
  redirecTo(nombre: string): void {
    this.router.navigate(['home/search', nombre]);

  }

}
