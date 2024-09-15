import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgForOf, NgIf } from '@angular/common';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { GalleryHorizontalComponent } from '../../shared/gallery-horizontal/gallery-horizontal.component';
import { GalleryTextHorizontalComponent } from '../../shared/gallery-text-horizontal/gallery-text-horizontal.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';
import { CurtainRevealComponent } from '../../shared/curtain-reveal/curtain-reveal.component';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-portfolio',
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
    CurtainRevealComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  portfolio: any[] = [];
  noPosts = 0;
  hasMore = true;
  afterKey = null;

  constructor(private readonly apollo: Apollo) {
  }

  ngAfterViewInit(): void {

    ScrollReveal().reveal('body', {
      interval: 200,
      duration: 3000,
      viewFactor: .1,
    });

  }

  ngOnInit(): void {
    this.loadFirstN();
  }

  loadFirstN(noPosts: number = 4) {
    this.apollo.watchQuery({
        query: gql`
          query PortfolioPosts {
            portfolioCompanies(first: ${noPosts}, where: {status: PUBLISH}, after: "${this.afterKey ? this.afterKey : ''}") {
              edges {
                node {
                  title
                  link
                  uri
                  portfolioSingleFields {
                    galleryGrid {
                      edges {
                        node {
                          title
                          altText
                          sourceUrl
                          srcSet
                        }
                      }
                    }
                    title
                    clientLocation
                    description
                    clientName
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `
      }
    ).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.portfolioCompanies);
      result.data.portfolioCompanies.edges.forEach((edge: any) => {
        this.portfolio.push(edge)
      });
      this.afterKey = result.data.portfolioCompanies.pageInfo.endCursor;
      this.noPosts = result.data.portfolioCompanies.edges.length;
      this.hasMore = result.data.portfolioCompanies.pageInfo.hasNextPage;
    });
  }

  loadMore() {
    this.loadFirstN();
  }

}
