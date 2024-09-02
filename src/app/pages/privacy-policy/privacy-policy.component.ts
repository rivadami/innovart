import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        LayoutComponent
    ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
