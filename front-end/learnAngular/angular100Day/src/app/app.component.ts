import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  checked = true;
  @ViewChild(ToggleComponent) toggleComp!: ToggleComponent;
  @ViewChild('nameInput', { static: true })
  nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('divElement')
  divElement!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    console.log(this.toggleComp);
    console.log(this.divElement);
  }
  ngOnInit() {
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 3000);
  }
}
