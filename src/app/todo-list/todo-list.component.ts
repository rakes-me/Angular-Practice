import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input('listType') listType: boolean = false;
  todoList: Todo[];

  constructor(private todoService: TodoService) {}

  updateList() {
    if (this.listType) {
      this.todoList = this.todoService.doneTodoList;
    } else {
      this.todoList = this.todoService.todoList;
    }
  }

  ngOnInit(): void {
    this.updateList();
  }

  changeStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
    this.updateList();
  }
}
