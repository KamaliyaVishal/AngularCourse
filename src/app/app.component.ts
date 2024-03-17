import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<app-test-tbootstrap></app-test-tbootstrap>',
  styleUrl: './app.component.css',
  styles: [`
    h3 {
      color : green;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
