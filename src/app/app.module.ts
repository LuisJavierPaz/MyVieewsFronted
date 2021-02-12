import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HeadersComponent } from './components/home/headers/headers.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';
import { RestServicesRestVideoService} from './services/rest-services-rest-video.service';


import { ReactiveFormsModule} from '@angular/forms';
import { NavNavigationComponent } from './components/home-video/nav-navigation/nav-navigation.component';
import { AsideMenuComponent } from './components/home-video/aside-menu/aside-menu.component';
import { SectionHomeVideoComponent } from './components/home-video/section-home-video/section-home-video.component';
import { SectionSearchVideoComponent } from './components/home-video/section-search-video/section-search-video.component';
import {SearchVideoServiceService} from './services/servicesVideo/search-video-service.service';
import {SectionVideoVisibleServiceService} from './services/servicesVideo/visibeSections/section-video-visible-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeVideoComponent,
    NavNavigationComponent,
    AsideMenuComponent,
    SectionHomeVideoComponent,
    SectionSearchVideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RestServicesRestVideoService, SearchVideoServiceService, SectionVideoVisibleServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
