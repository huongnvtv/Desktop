import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular100Day';
  // các cách đẩy dữ liệu ra file app.component.html
  // cách 1 dùng {{}} (property biding)
  // cách 2 sử dụng data binding (property biding)
  inputType = 'text';
  name = 'huong';
  // cách 3 sử dụng event binding
  demo() {
    console.log('event', event);
  }
}
