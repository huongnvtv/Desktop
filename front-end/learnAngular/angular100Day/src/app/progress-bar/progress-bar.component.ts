import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class progressBarComponent implements OnInit, OnChanges {
  private _progress = 50;
  @Input() backgroundColor: string = '#ccc';
  @Input('progress-color') progressColor: string = 'tomato';

  @Input() set progress(val: number) {
    // chạy validation
    // chạy khi giá trị này thay đổi
    if (typeof val !== 'number') {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    } else {
      this._progress = val;
    }
  }
  public get progress(): number {
    return this._progress;
  }

  constructor() {
    // console.log({
    //   currentProgress: this.progress,
    //   currentBackgroundColor: this.backgroundColor,
    //   currentProgressColor: this.progressColor,
    // });
  }
  // chạy sau khi input được bind cho các thuộc tính trên và chỉ chạy 1 lần đầu tiên
  ngOnInit() {
    console.log('OnInit', {
      currentProgress: this.progress,
      currentBackgroundColor: this.backgroundColor,
      currentProgressColor: this.progressColor,
    });
  }
  // ngOnchanges chạy trước để bind những cái giá trị này cho input sau đó inOnInit chạy
  ngOnChanges() {
    console.log('OnChange', {
      currentProgress: this.progress,
      currentBackgroundColor: this.backgroundColor,
      currentProgressColor: this.progressColor,
    });
  }
}
