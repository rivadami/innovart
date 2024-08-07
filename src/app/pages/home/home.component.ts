import { Component } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
