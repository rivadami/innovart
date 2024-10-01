import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseComponentService {
  selector: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.addBodyClass();
  }

  getComponentSelector(): string {
    return this.renderer.selectRootElement(this.el.nativeElement).tagName.toLowerCase();
  }

  addBodyClass(): void {
    const bodyElement = document.body;
    const className = this.getComponentSelector();
    this.renderer.setAttribute(bodyElement, 'class', className.replace('app-', ''));
  }
}
