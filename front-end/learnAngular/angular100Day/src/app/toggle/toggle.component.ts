import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() checked: boolean = true;
  @Output() checkedChange = new EventEmitter<boolean>();
  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
