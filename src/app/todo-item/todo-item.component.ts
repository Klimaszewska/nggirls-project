import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <p>
      todo-item works!
    </p>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
