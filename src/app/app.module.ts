import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImageSlideComponent } from './img-slider/image-slide/image-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgSliderComponent,
    ImageSlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
