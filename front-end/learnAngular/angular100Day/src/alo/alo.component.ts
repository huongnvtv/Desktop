import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<span>hello các anh em {{ title }}</span>`,
})
export class aloComponent {
  title = 'hello word';
}
