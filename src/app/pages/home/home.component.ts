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
  selector: 'app-home',
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  home: any;

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

    this.apollo.watchQuery({
      query: gql`
        query HomeQuery {
          page(id: "12", idType: DATABASE_ID) {
            seo {
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
            homeFields {
              title
              description
              mainImage {
                node {
                  altText
                  title
                  sourceUrl
                  srcSet
                }
              }
              viewAllWorkLabel
              selectedWorkLabel
              selectedWork {
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
              }
              testimonialsLabel
              testimonials {
                edges {
                  node {
                    ... on Testimonial {
                      testimonialSingleFields {
                        name
                        title
                        company
                        description
                      }
                    }
                  }
                }
              }
            }
          }
        }`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page.homeFields);
      this.home = result.data.page.homeFields;
    });
  }

}
