import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageSlideComponent} from './image-slide/image-slide.component';
import {ImgSliderComponent} from './img-slider.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageSlideComponent, ImgSliderComponent],
  exports: [ImgSliderComponent, ImageSlideComponent]
})
export class ImgSlideModule { }
