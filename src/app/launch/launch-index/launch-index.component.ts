import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-index',
  templateUrl: './launch-index.component.html',
  styleUrls: ['./launch-index.component.css']
})
export class LaunchIndexComponent implements OnInit {
  launches: Launch[] = [];
  clientApprovals: Date[] = [];
  launchDates: Date[] = [];
  @Input() conflictedLaunch: Launch;
  @Output() conflicted: EventEmitter<Launch> = new EventEmitter<Launch>();
  conflict: Launch[] = [];


  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches() {
    this.launchService.getLaunches()
      .subscribe(
        data => {
          const objArray = [];
          for (let key in data) {
            const item = data[key];
            objArray.push([item, key.toString()]);
          }
          this.launches = objArray;
          this.checkForConflict();
        }
      );
  }

  checkForConflict() {
    // this.clientApprovals = [];
    this.launchDates = [];
    for (let launch of this.launches) {
      // this.clientApprovals.push(launch[0].clientApproval);
      this.launchDates.push(launch[0].launchDate);
      if (this.launchDates.indexOf(launch[0].clientApproval) > 0 || this.launchDates.indexOf(launch[0].launchDate) > 0){
        launch[0].conflict = true;
      }
    }
  }

  showConflict(event) {
    this.conflict.push(event);
  }

}
