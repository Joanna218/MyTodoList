export class Todo {

  // 宣告屬性時先給預設值，減少預期之外的行為
  private title = '';

  private completed = false;

  constructor(title: string) {
    this.title = title || '';
  }

  get done(): boolean {
    return this.completed;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

}
