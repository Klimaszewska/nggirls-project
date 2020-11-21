import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
      <h1>Welcome to {{title}}
      <app-input-button-unit></app-input-button-unit>
      </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';


}
