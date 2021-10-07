import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate = new Date();
  demo = interval(1000);
}
