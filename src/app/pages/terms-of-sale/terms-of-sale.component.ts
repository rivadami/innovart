import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-terms-of-sale',
  standalone: true,
  imports: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  templateUrl: './terms-of-sale.component.html',
  styleUrl: './terms-of-sale.component.scss'
})
export class TermsOfSaleComponent {

}
