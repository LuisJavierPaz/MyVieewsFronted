import {Injectable} from '@angular/core';
import {RestServicesRestVideoService} from '../rest-services-rest-video.service';

@Injectable({
  providedIn: 'root'
})
export class SearchVideoServiceService {
  isVisibleSectionHome = true;
  listaVideoSearch = [];
  nameSearch = '';

  constructor(private rest: RestServicesRestVideoService) {
  }

  setValueSearch(nameSearch: string): void {
    this.nameSearch = nameSearch;
  }

  restSearch(): void {

  }

  getValueSearch(): any {
    return this.nameSearch;
  }

}
