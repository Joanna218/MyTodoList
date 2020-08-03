export class Todo {

  // 宣告屬性時先給預設值，減少預期之外的行為
  private title = '';

  private completed = false;

  private editMode = false;

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

  // 編輯的 getter
  // 取得此事項是否處於編輯模式
  get editing(): boolean {
    return this.editMode;
  }

  // 編輯的 setter
  // 設定此事項是否可被編輯
  set editable(bl: boolean) {
    this.editMode = bl;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}
