import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
import { QUERY_CONTACT } from '../../queries/contact';
import { BaseComponentService } from '../../shared/services/base-component.service';

@Component({
  selector: 'app-contact',
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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent extends BaseComponentService implements OnInit {
  contact: any;

  constructor(private readonly apollo: Apollo,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(elementRef, renderer);
  }

  ngAfterViewInit(): void {

    ScrollReveal().reveal('body', {
      interval: 200,
      duration: 1000,
      viewFactor: .1,
    });

  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`${QUERY_CONTACT}`
    }).valueChanges.subscribe((result: any) => {
      console.log("@==>", result.data.page);
      this.contact = result.data.page;
    });
  }

}
