import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolio: any;

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        query PortfolioQuery {
          page(id: "69", idType: DATABASE_ID) {
            seo {
              title
              metaDesc
              metaRobotsNofollow
              metaRobotsNoindex
              opengraphImage {
                sourceUrl
                mediaDetails {
                  height
                  width
                  file
                }
              }
              canonical
              opengraphDescription
              schema {
                raw
              }
              opengraphSiteName
              opengraphUrl
              opengraphTitle
              opengraphType
            }
            title
            portfolioFields {
              title
              description
              projects(after: "", first: 4) {
                edges {
                  node {
                    ... on PortfolioCompany {
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
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
              loadMore
            }
          }
        }`}
    ).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page.homeFields);
      this.portfolio = result.data.page.homeFields;
    });
  }

}
