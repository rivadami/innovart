import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  noPosts  = 0;
  hasMore = true;

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit(): void {
    this.loadFirstN();
  }

  loadFirstN(noPosts: number = 4) {
    this.apollo.watchQuery({
        query: gql`
        query PortfolioPosts {
          portfolioCompanies(first: ${noPosts}, where: {status: PUBLISH}, after: "") {
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
      this.portfolio = result.data.portfolioCompanies;
      this.noPosts = result.data.portfolioCompanies.edges.length;
      this.hasMore = result.data.portfolioCompanies.pageInfo.hasNextPage;
    });
  }

  loadMore(noPosts: number = 4) {
    this.loadFirstN(noPosts + 4);
  }

}
