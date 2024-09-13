import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent
  ],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss'
})
export class WorkWithUsComponent {

}
