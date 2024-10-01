import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { QUERY_METHODY } from '../../queries/methodology';
import { QUERY_PRIVACY } from '../../queries/privacy';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent,
    NgIf
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  page: any;

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_PRIVACY}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page);
      this.page = result.data.page;
    });
  }

}
