import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'author-detail',
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button style="margin-bottom : 1rem" (click)="select.emit(author)">
        select
      </button>
      <button style="margin-left : 10px" (click)="delete.emit(author.id)">
        delete
      </button>
    </div>
  `,
})
export class AuthorDetailComponent {
  @Input() author: Author = {
    id: 1,
    firstName: 'Lee',
    lastName: 'Minho',
    email: 'Minho@gmail.com',
    gender: 'Male',
    ipAddress: '102.160.228.44',
  };
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
