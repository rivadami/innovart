import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgIf, NgForOf, NgOptimizedImage, NgClass } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { QUERY_HEADER } from '../../queries/header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: string[] = [];
  menuActive = false;
  classCss: string;
  constructor(private readonly apollo: Apollo,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_HEADER}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result);
      this.menu = result.data.menus.nodes;
    });
  }

  openMenu() {
    if(this.menuActive){
      this.menuActive = false;
      this.classCss = "";
    } else{
      this.menuActive = true;
      this.classCss = "active";
    }
    console.log(this.classCss);
    console.log(this.menuActive);

    /*
    this.dialog.open(AnimatedMenuComponent, {
      panelClass: 'fullscreen-dialog',
      height: '100vh',
      width: '100vw',
      hasBackdrop: true,
      backdropClass: 'custom-backdrop'
    });
    */
  }
}
