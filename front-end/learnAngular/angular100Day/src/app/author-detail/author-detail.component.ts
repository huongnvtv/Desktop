import { Component, Input } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'author-detail',
  template: '',
})
export class AuthorDetail {
  @Input() author: Author;
}
