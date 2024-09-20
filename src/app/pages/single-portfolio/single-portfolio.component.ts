import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { NgForOf, NgIf } from '@angular/common';
import { GalleryHorizontalComponent } from '../../shared/gallery-horizontal/gallery-horizontal.component';
import { GalleryTextHorizontalComponent } from '../../shared/gallery-text-horizontal/gallery-text-horizontal.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { ActivatedRoute } from '@angular/router';
import { QUERY_PORTFOLIO_SINGLE } from '../../queries/portfolio';

@Component({
  selector: 'app-single-portfolio',
  standalone: true,
  imports: [
    LayoutComponent,
    HeaderComponent,
    NgIf,
    NgForOf,
    GalleryHorizontalComponent,
    GalleryTextHorizontalComponent,
    LineRevealComponent,
    ParagraphRevealComponent,
    FooterComponent,
  ],
  templateUrl: './single-portfolio.component.html',
  styleUrl: './single-portfolio.component.scss'
})
export class SinglePortfolioComponent implements OnInit {
  portfolio: any;
  id: string | null;

  constructor(private readonly apollo: Apollo,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.apollo.watchQuery({
        query: gql`${QUERY_PORTFOLIO_SINGLE(this.id)}`
      }).valueChanges.subscribe((result: any) => {
        //debugger
        console.log("@==>", result.data.portfolioCompany);
        this.portfolio = result.data.portfolioCompany;
      });
    }
  }


}
