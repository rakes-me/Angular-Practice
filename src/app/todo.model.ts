export class Todo {
  constructor(
    public task: string,
    public desc: string,
    public status: boolean = false,
    public timestamp: Date = new Date()
  ) {
    console.log('Task created' + timestamp);
  }
}
