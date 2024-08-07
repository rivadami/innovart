import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-company',
  standalone: true,
    imports: [
        HeaderComponent,
        LayoutComponent
    ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
