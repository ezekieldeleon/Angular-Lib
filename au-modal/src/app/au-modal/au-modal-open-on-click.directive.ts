import { AfterContentInit, ContentChild, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuModalComponent } from './au-modal.component';

@Directive({
  selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective{

  @ContentChild(AuModalComponent, { static: false }) modal: AuModalComponent;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input() set auModalOpenOnClick(els) {
    let elements: HTMLBaseElement[];

    if (els.length) {
      elements = els;
    } else {
      elements = [els];
    }

    elements.forEach(el => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      })
    });
  }

}
