import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../launch';

@Component({
  selector: 'app-launch-index-item',
  templateUrl: './launch-index-item.component.html',
  styleUrls: ['./launch-index-item.component.css']
})
export class LaunchIndexItemComponent implements OnInit {

  @Input() launch: Launch;

  public daysLeft: number;

  constructor() { }

  ngOnInit() {
    this.calcDaysLeft();
  }

  calcDaysLeft() {
    const today = (new Date).getTime();
    const launchDay = (new Date(this.launch.launchDate)).getTime();
    this.daysLeft = Math.round((launchDay-today)/(1000*60*60*24));
  }

}
