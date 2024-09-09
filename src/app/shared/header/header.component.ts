import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: string[] = [];

  constructor(private readonly apollo: Apollo,
              private dialog: MatDialog) {
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

  openMenu() {
    this.dialog.open(MainMenuComponent, {
      panelClass: 'fullscreen-dialog',
      // height: '100vh',
      // width: '100vw',
      // position: {top: '0', left: '0'},
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
    });
  }
}
