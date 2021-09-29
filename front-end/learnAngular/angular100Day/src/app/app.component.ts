import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    name: 'hướng',
    age: 21,
  };
  bgInfo = 'bg-active bg-color';
  bgNormal = 'bg-normal';
  styleOfMe = 'font-size : 20px; color : red';

  progressPercent = 40;
  ProgressColor = 'yellow';
  listColor = ['yellow', 'red', 'orange', 'skyblue'];
  styleProgress = 'margin: 0 20px';
  isChecked = true;
  ngOnInit() {
    // khi khoi tao 1 component
    console.log('hello init');
  }
  ngOnDestroy() {
    // khi xoa 1 component
    console.log('hello destroy');
  }
}
