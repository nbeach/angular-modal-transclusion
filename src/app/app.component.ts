import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="nameFormOpen = true">Open Form</button>
    <name-form-modal [isOpen]="nameFormOpen" (closeRequested)="nameFormOpen = false" (nameSubmitted)="setName($event)"></name-form-modal>
    <h3>You entered the name {{name}}</h3>
  `
})
export class AppComponent {
  name = '';
  nameFormOpen: false;

  setName(name: string): void {
    this.name = name;
    this.nameFormOpen = false;
  }

}
