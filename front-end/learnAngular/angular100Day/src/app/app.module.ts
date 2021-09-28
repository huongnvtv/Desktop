import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { aloComponent } from 'src/alo/alo.component';
import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { progressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [AppComponent, aloComponent, HiComponent, progressBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// typescript module
// cú pháp có @ đường trước gọi là decorator đây là typescript decorator
