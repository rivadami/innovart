import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { NgIf, NgForOf, NgOptimizedImage, NgClass } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { QUERY_HEADER } from '../../queries/header';
import ScrollReveal from 'scrollreveal';

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
export class HeaderComponent implements OnInit, AfterViewInit {
  menu: any = null
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
      const mainMenu = result.data.menus.nodes.find((item: any) => item.name === "Main Menu");
      this.menu = mainMenu.menuItems.nodes;
      this.showMenu();
    });
  }

  ngAfterViewInit(): void {

  }  

  showMenu() {
    setTimeout(() => { 
      ScrollReveal().reveal('.menu-item', {
        interval: 200,
        duration: 1500,
        viewFactor: .1,
      });
    }, 100);
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
  }
}
