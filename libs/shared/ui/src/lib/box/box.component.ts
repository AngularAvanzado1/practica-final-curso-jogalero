import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Region } from '../../../../domain/src/lib/region';


@Component({
  selector: 'jg-ui-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() region: Region;
  @Input() isDescription: boolean;
  @Output() clickBox = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  sendBox(code){
    this.clickBox.emit({code});
  }

}
