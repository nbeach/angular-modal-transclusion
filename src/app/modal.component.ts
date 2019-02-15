import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'modal',
  styles: [
    `
      .modal-background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0, 0.4);

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal-container {
        background-color: #FFFFFF;
        border: 2px solid black;
        height: 50%;
        width: 50%;
      }

      header {
        background-color: #DDDDDD;
      }

      .close-button {
        float: right;
        cursor: pointer;
      }
    `
  ],
  template: `
    <div *ngIf="isOpen" class="modal-background">
      <div class="modal-container">
        <header>
          <strong class="close-button" (click)="closeRequested.emit()">X</strong>
          <ng-content select=".header"></ng-content>
        </header>
        <ng-content select=".body"></ng-content>
      </div>
    </div>
  `
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() closeRequested = new EventEmitter<void>();
}
