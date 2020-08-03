import { Component, OnInit } from '@angular/core';
import { TodoListService } from "./todo-list.service";


// import model
import { Todo } from './todo.model';

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

  remove(idx: number): void {
    this.todoListService.remove(idx);
  }

  // getList(): string[] {
  //   return this.todoListService.getList();
  // }


  getList(): Todo[] {
    return this.todoListService.getList();
  }


  // 開始編輯待辦事項
  edit(todo: Todo): void {
    todo.editable = true;
  }


  update(todo: Todo, newTitle: string): void {

    if (!todo.editing) {
      return;
    }

    const title = newTitle.trim();

    // 如果有輸入名稱則修改事項名稱
    if (title) {
      todo.setTitle(title);
      todo.editable = false;

    // 如果沒有名稱則刪除該項待辦事項
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  // 取消編輯狀態
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }


}
