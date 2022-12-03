import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo = '';
  todos: { todo: string; completed: boolean }[] = [];

  addTodo(todo: string) {
    this.todos.push({ todo: todo, completed: false });
  }
}
