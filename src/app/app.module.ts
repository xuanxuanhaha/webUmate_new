import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MobileCarouselComponent } from './mobile-carousel/mobile-carousel.component';
import { ServiceComponent } from './service/service.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GoogleMapComponentComponent} from './google-map-component/google-map-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MobileCarouselComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    GoogleMapComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
