import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { HomeComponent } from './components/home/home.component';*/
import { HeaderComponent } from './components/home/header/header.component';
import { VideoBackgroudComponent } from './components/home/video-backgroud/video-backgroud.component';
import { NavComponent } from './components/home/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoBackgroudComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
