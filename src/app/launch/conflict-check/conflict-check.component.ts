import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-conflict-check',
  templateUrl: './conflict-check.component.html',
  styleUrls: ['./conflict-check.component.css']
})
export class ConflictCheckComponent implements OnInit {
  @Output() checkMe: EventEmitter<Launch> = new EventEmitter<Launch>();

  private launches: Launch[];

  constructor(public launchService: LaunchService) { }

  ngOnInit() {
    this.getLaunches();
  }

  getLaunches() {
    this.launchService.getLaunches()
      .subscribe(
        data => {
          const objArray = [];
          for (let key in data) {
            objArray.push(data[key]);
          }
          this.launches = objArray;
        }
      );
  }

  onSelect(date: Date) {
    const toCheck = new Date(date).toISOString();
    for (const launch of this.launches) {
      if (launch.clientApproval) {
        const clientApproval = new Date(launch.clientApproval).toISOString();
        if (toCheck === clientApproval) {
          this.checkMe.emit(launch);
        }
      }
      if (launch.launchDate) {
        const launchDate = new Date(launch.launchDate).toISOString();
        if (toCheck === launchDate) {
          this.checkMe.emit(launch);
        }
      }
    }
  }

}
