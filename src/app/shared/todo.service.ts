import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    new Todo('Buy Eggs', '10 pcs'),
    new Todo('Go Club', 'Paarty Kar'),
    new Todo('Bing Watch Bold Type', 'NEtflix series'),
  ];

  doneTodoList: Todo[] = [new Todo('PR Done', 'Hurray !!!', true)];

  constructor() {}

  addTodo(taskName: string, description: string) {
    this.todoList.push(new Todo(taskName, description));
  }

  getTodo(taskName: string) {
    let notDone = this.todoList.find((todo) => todo.task == taskName);
    let done = this.doneTodoList.find((todo) => todo.task == taskName);
    if (done) {
      return done;
    } else {
      return notDone;
    }
  }

  markComplete(todo: Todo) {
    if (this.todoList.includes(todo)) {
      this.todoList = this.todoList.filter((item) => item !== todo);
    }
    if (!this.doneTodoList.includes(todo)) {
      todo.status = true;
      this.doneTodoList.push(todo);
    }
  }

  markIncomplete(todo: Todo) {
    if (this.doneTodoList.includes(todo)) {
      this.doneTodoList = this.doneTodoList.filter((item) => item !== todo);
    }
    if (!this.todoList.includes(todo)) {
      todo.status = false;
      this.todoList.push(todo);
    }
  }

  changeStatus(todo: Todo) {
    if (todo.status) {
      this.markIncomplete(todo);
    } else {
      this.markComplete(todo);
    }
  }
}
