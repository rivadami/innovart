import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: string[] = [];

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        query MainQuery {
          globalContent {
            globalFields {
              siteLogo {
                node {
                  altText
                  title
                  sourceUrl
                  srcSet
                }
              }
              contactPhrase
              contactPhraseLink
              whoWeAre
              phoneNumber {
                target
                title
                url
              }
              emailAddress {
                target
                title
                url
              }
              socialMedia {
                socialMediaItem {
                  target
                  title
                  url
                }
              }
              footerLogo {
                node {
                  altText
                  title
                  sourceUrl
                  srcSet
                }
              }
              copyright
              bookCall {
                target
                title
                url
              }
            }
          }
          menus {
            nodes {
              name
              menuItems {
                edges {
                  node {
                    label
                    url
                    uri
                    parentId
                    target
                  }
                }
              }
            }
          }
        }`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result);
      this.menu = result.data.menus.nodes;
    });
  }
}
