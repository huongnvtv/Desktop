import { Component } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'author-list',
  template: `
    <author-detail
      *ngFor="let author of authors"
      (select)="onSelected($event)"
      (delete)="onDelete($event)"
    ></author-detail>
    <div>
      current selected Author : {{ currentAuthor?.firstName }}
      {{ currentAuthor?.lastName }}
    </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id: number) {
    this.authors = authors.filter((author) => {
      return author.id !== id;
    });
    if (this.currentAuthor.id == id) {
      this.currentAuthor = authors[0];
    }
  }
}
