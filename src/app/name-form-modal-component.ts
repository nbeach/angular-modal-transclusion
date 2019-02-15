import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'name-form-modal',
  template: `
    <modal [isOpen]="isOpen" (closeRequested)="closeRequested.emit()">
      <div class="header">Enter Your Name!</div>
      <div class="body">
        Name: <input #name type="text">
        <br>
        <br>
        <button (click)="nameSubmitted.emit('sdfsdf');">Submit</button>
      </div>
    </modal>
  `
})
export class NameFormModalComponent {
  @Input() isOpen = false;
  @Output() closeRequested = new EventEmitter<void>();
  @Output() nameSubmitted = new EventEmitter<string>();
}
