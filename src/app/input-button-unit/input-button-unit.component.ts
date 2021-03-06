import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
      {{ title }}
      <input class="todo-input" #inputElementRef [value]="title" (keyup.enter)="submitValue($event.target.value)">
      <button class="btn" (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
