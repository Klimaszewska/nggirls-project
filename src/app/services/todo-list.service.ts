import { Injectable } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  private todoList: TodoItem[] = [
    {title: 'install NodeJS', completed: true},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  getTodoList() {
    return this.todoList;
  }
}
