import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
