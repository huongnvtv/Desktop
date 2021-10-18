import { Observable } from 'rxjs';

const observable = new Observable(function (observer) {
  setTimeout(function () {
    observer.next('hello word');
    observer.complete();
  }, 2000);
});
