import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate = new Date();
  demo = interval(1000);

  observable = new Observable(function subscribe(observer) {
    const id = setTimeout(() => {
      observer.next('Hello Rxjs');
      observer.complete();
    }, 1000);
  });
}
