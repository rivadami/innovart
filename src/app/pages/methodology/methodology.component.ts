import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent
  ],
  templateUrl: './methodology.component.html',
  styleUrl: './methodology.component.scss'
})
export class MethodologyComponent {

}
