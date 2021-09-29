import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { aloComponent } from 'src/alo/alo.component';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './authors/author-details.component';
import { AuthorListComponent } from './authors/author-list.component';
import { HiComponent } from './hi/hi.component';
import { progressBarComponent } from './progress-bar/progress-bar.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    aloComponent,
    HiComponent,
    progressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// typescript module
// cú pháp có @ đường trước gọi là decorator đây là typescript decorator
