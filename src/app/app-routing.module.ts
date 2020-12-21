import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/*---------------------*/
import {HeadersComponent} from './components/home/headers/headers.component';
import {HomeVideoComponent} from './components/home-video/home-video.component';
/*----------------------*/
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/views'
  },
  {
    path: 'home',
    component: HeadersComponent,
  },
  {
    path: 'home/views',
    component: HomeVideoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
