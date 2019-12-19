import { Component } from '@angular/core';

@Component({
  selector: 'jg-continental-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'continental';
  links = [
    {url: '/', name: 'Home'}
  ]
}
