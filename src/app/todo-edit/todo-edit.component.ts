import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  // @Input() addOverlay: boolean;
  // @Output() addOverlayChange = new EventEmitter<boolean>();
  // @Input() forEdit: boolean;
  currTodo: Todo;
  todoName: string;
  todoDesc: string;
  todoStatus: boolean;
  todoEdit = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['todoName']) {
        console.log('In todo available');
        this.currTodo = this.todoService.getTodo(params['todoName']);
        this.todoName = this.currTodo.task;
        this.todoDesc = this.currTodo.desc;
        this.todoStatus = this.currTodo.status;
        this.todoEdit = true;
      }
    });
  }

  closeModal() {
    // this.addOverlayChange.emit(!this.addOverlay);
    this.router.navigate(['']);
  }

  submit() {
    if (this.currTodo == undefined) {
      console.log('in currTodo');
      if (this.todoName != undefined && this.todoDesc != undefined) {
        console.log('in submit');
        console.log(this.todoName, this.todoDesc);
        this.todoService.addTodo(this.todoName, this.todoDesc);
      }
    } else {
      console.log('Todo not empty');
    }
    this.closeModal();
  }
}
