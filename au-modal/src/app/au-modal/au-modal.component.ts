import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { AuModalService } from './modal.service';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;

  @Input() context: any;

  @Input() hideOnEsc: boolean = true;

  @Input() hideOnClickOutside: boolean = true;

  constructor(private modalService: AuModalService, private eventManager: EventManager) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener("window", 'keyup.esc', () => {
      if (this.hideOnEsc) {
        this.closeModal();
      }
    });
  }

  onClickOutsideModal() {
    if (this.hideOnClickOutside) {
      this.closeModal();
    }
  }

  closeModal() {
    this.modalService.close();
  }

  cancelClick(evt: KeyboardEvent){
    evt.preventDefault();
    evt.stopPropagation();
  }

}
