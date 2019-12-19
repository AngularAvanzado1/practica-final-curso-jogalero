import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Links } from '../../../../domain/src/lib/links';

@Component({
  selector: 'jg-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() links: Links[];

  constructor() { }

  ngOnInit() {
  }

}
