import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @Output() slideChange = new EventEmitter<{ currentIndex: number, totalSlides: number }>();
  @Input() gallery: any
  currentIndex?: number;
  totalSlides?: number;

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

    setTimeout(() => {
      // Get total number of slides
      const totalSlides = flkty.slides.length;

      // Emit the initial slide data
      this.currentIndex = flkty.selectedIndex + 1;
      this.totalSlides = totalSlides;

      // Update and emit the current index whenever the slide changes
      flkty.on('select', () => {
        this.currentIndex = flkty.selectedIndex + 1;
        this.totalSlides = totalSlides;
        console.log("updating??", this.currentIndex);
      });
    }, 1000)
  }
}
