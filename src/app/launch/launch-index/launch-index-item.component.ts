import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../launch';

@Component({
  selector: 'app-launch-index-item',
  templateUrl: './launch-index-item.component.html',
  styleUrls: ['./launch-index-item.component.css']
})
export class LaunchIndexItemComponent implements OnInit {

  @Input() launch: Launch;

  constructor() { }

  ngOnInit() {
  }

}
