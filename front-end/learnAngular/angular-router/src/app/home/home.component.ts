import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor() {}

  ngOnInit(): void {
    this.articles$ = of<Article[]>([
      { title: 'title 1', body: 'Lorem 1', slug: 'title 1' },
      { title: 'title 2', body: 'Lorem 2', slug: 'title 2' },
    ]);
  }
}
