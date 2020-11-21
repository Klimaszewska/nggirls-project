import {Component, OnInit} from '@angular/core';
import {TodoListService} from '../services/todo-list.service';
import {TodoItem} from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
      <div class="todo-app">
          <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

          <ul>
              <li *ngFor="let todoItem of todoList">
                  <app-todo-item [item]="todoItem"></app-todo-item>
              </li>
          </ul>
      </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoListService: TodoListService;
  todoList: TodoItem[];

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }

  ngOnInit(): void {
    // get the list from the service
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList.push({title});
  }


}
