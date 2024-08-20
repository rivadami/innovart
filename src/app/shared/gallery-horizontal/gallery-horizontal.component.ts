import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import Flickity from 'flickity';

@Component({
  selector: 'app-gallery-horizontal',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './gallery-horizontal.component.html',
  styleUrl: './gallery-horizontal.component.scss'
})
export class GalleryHorizontalComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  @Input() gallery: any

  ngAfterViewInit(): void {
    const elem = this.carousel.nativeElement;
    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      draggable: true,
      pageDots: false,
      contain: true,
      freeScroll: false,
      prevNextButtons: false,
      autoPlay: false,      
    });
  }
}
