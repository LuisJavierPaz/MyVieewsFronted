import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HeadersComponent } from './components/home/headers/headers.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';
import { RestServicesRestVideoService} from './services/rest-services-rest-video.service';


import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeVideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RestServicesRestVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
