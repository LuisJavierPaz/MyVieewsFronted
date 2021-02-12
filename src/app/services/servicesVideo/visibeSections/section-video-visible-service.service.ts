import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionVideoVisibleServiceService {
  public visibleSectionHome = true;

  constructor() {
  }

  /**
   * Cambio de seccion visible.
   */
  public changeVisible(): void {
    this.visibleSectionHome = !this.visibleSectionHome;
  }

  /**
   * return seccion visible.
   */
  public getVisibleSection(): boolean {
    return this.visibleSectionHome;
  }

  /**
   * Fijar seccion visible
   */
  public setVisibleSectionHome(flag: boolean): void {
    this.visibleSectionHome = flag;
  }
}
