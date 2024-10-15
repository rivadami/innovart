import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LineRevealComponent } from '../line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../paragraph-reveal/paragraph-reveal.component';
import ScrollReveal from 'scrollreveal';
import { gql } from '@apollo/client/core';
import { QUERY_HEADER } from '../../queries/header';
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LineRevealComponent,
    ParagraphRevealComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit, AfterViewInit {
  info: any = null;
  footerInfo: any = null;

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_HEADER}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result);
      this.footerInfo = result.data.globalContent.globalFields;
      this.info = result.data.menus.nodes;
    });
  }

  ngAfterViewInit(): void {
    ScrollReveal().reveal('footer', {
      interval: 200,
      duration: 3000,
      viewFactor: .1,
    });
  }
}
