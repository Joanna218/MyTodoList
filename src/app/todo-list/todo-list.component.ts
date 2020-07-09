import { Component, OnInit } from '@angular/core';
import { TodoListService } from "./todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addTodo(inputText: HTMLInputElement): void {
    console.log(inputText.value);
    const todo = inputText.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputText.value = '';
    }
  }

  getList(): string[] {
    return this.todoListService.getList();
  }

}
