import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgForOf, NgIf } from '@angular/common';
import Flickity from 'flickity';
import { GalleryHorizontalComponent } from '../../shared/gallery-horizontal/gallery-horizontal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent,
    HeaderComponent,
    NgIf,
    NgForOf,
    GalleryHorizontalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  home: any;

  constructor(private readonly apollo: Apollo) {
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
      setTimeout(() => this.setupGalleries(), 0);
    });
  }

  setupGalleries() {

  }

}
