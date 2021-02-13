import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {HeadersComponent} from './components/home/headers/headers.component';
import {HomeVideoComponent} from './components/home-video/home-video.component';
import {RestServicesRestVideoService} from './services/rest-services-rest-video.service';
import { NgxDropzoneModule} from 'ngx-dropzone';


import {ReactiveFormsModule} from '@angular/forms';
import {NavNavigationComponent} from './components/home-video/nav-navigation/nav-navigation.component';
import {AsideMenuComponent} from './components/home-video/aside-menu/aside-menu.component';
import {SectionHomeVideoComponent} from './components/home-video/section-home-video/section-home-video.component';
import {SectionSearchVideoComponent} from './components/home-video/section-search-video/section-search-video.component';
import {SearchVideoServiceService} from './services/servicesVideo/search-video-service.service';
import {SectionVideoVisibleServiceService} from './services/servicesVideo/visibeSections/section-video-visible-service.service';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { ViewVideoComponent } from './components/view-video/view-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeVideoComponent,
    NavNavigationComponent,
    AsideMenuComponent,
    SectionHomeVideoComponent,
    SectionSearchVideoComponent,
    ViewVideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: 'dzkcr9eec', upload_preset: 'lp8lafrr'
    }),

  ],
  providers: [RestServicesRestVideoService, SearchVideoServiceService, SectionVideoVisibleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
