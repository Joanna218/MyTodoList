import { Injectable } from '@angular/core';

// import model
import { Todo } from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  //private list: string[] = [];

  private list: Todo[] = [];

  constructor() { }

  add(title: string): void {
    if (title || title.trim()) {
      //this.list.push(title);
      this.list.push(new Todo(title));
    }
  }

  // getList(): string[] {
  //   return this.list;
  // }

  getList():Todo[] {
    return this.list;
  }
}
