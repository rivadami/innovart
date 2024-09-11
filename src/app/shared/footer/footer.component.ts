import { AfterViewInit, Component } from '@angular/core';
import { LineRevealComponent } from '../line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../paragraph-reveal/paragraph-reveal.component';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LineRevealComponent,
    ParagraphRevealComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    ScrollReveal().reveal('footer', {
      interval: 200,
      duration: 3000,
      viewFactor: .1,
    });

  }
}