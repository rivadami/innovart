import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { QUERY_METHODY } from '../../queries/methodology';
import { QUERY_TERMS } from '../../queries/terms';
import { NgIf } from '@angular/common';
import { BaseComponentService } from '../../shared/services/base-component.service';

@Component({
  selector: 'app-terms-of-sale',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent,
    NgIf
  ],
  templateUrl: './terms-of-sale.component.html',
  styleUrl: './terms-of-sale.component.scss'
})
export class TermsOfSaleComponent extends BaseComponentService implements OnInit {
  page: any;

  constructor(private readonly apollo: Apollo,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_TERMS}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page);
      this.page = result.data.page;
    });
  }

}
