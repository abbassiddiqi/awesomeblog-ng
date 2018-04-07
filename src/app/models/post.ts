export class Post {
  id: string;
  title: string;
  content: string;

  getUrl(): string {
    return `http://localhost:3000/${this.id}`;
  }
}
