import { Component } from '@angular/core';
import { LineRevealComponent } from '../line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../paragraph-reveal/paragraph-reveal.component';

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
export class FooterComponent {

}
