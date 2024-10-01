import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LayoutComponent } from '../../shared/layout/layout.component';
import { LineRevealComponent } from '../../shared/line-reveal/line-reveal.component';
import { ParagraphRevealComponent } from '../../shared/paragraph-reveal/paragraph-reveal.component';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { QUERY_METHODY } from '../../queries/methodology';
import { QUERY_WORK_WITH_US } from '../../queries/work';
import { NgIf } from '@angular/common';
import { BaseComponentService } from '../../shared/services/base-component.service';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LineRevealComponent,
    ParagraphRevealComponent,
    NgIf
  ],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.scss'
})
export class WorkWithUsComponent extends BaseComponentService implements OnInit {
  page: any;

  constructor(private readonly apollo: Apollo,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(elementRef, renderer)
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_WORK_WITH_US}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page);
      this.page = result.data.page;
    });
  }

}
