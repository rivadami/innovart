import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';

@Component({
  selector: 'app-terms-of-sale',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent
  ],
  templateUrl: './terms-of-sale.component.html',
  styleUrl: './terms-of-sale.component.scss'
})
export class TermsOfSaleComponent {

}
