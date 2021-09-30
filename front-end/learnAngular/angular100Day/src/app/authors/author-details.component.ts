import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'author-detail',
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-bottom : 1rem" (click)="select.emit()">
        select
      </button>
      <button style="margin-left : 10px" (click)="delete.emit(author.id)">
        delete
      </button>
    </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author = authors[0];
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
