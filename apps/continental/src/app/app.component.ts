import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

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

  constructor(private swUpdate: SwUpdate){
    this.checkVersionUpdates();
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `New version ${appData.version} available.`;
          msg += `${appData.changelog}.`;
          msg += 'Reaload now?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
