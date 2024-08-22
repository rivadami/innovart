import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import Flickity from 'flickity';

@Component({
  selector: 'app-gallery-text-horizontal',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './gallery-text-horizontal.component.html',
  styleUrl: './gallery-text-horizontal.component.scss'
})
export class GalleryTextHorizontalComponent implements AfterViewInit {
  @ViewChild('carouselText') carousel!: ElementRef;
  @Input() gallery: any

  ngAfterViewInit(): void {
    const elem = this.carousel.nativeElement;
    const flkty = new Flickity(elem, {
      // options
      cellAlign: 'center',
      draggable: true,
      pageDots: false,
      freeScroll: false,
      prevNextButtons: false,
      autoPlay: false,
      wrapAround: true,
      groupCells: true
    });
  }

}
