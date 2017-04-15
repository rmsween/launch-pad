import { Component, OnInit } from '@angular/core';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-index',
  templateUrl: './launch-index.component.html',
  styleUrls: ['./launch-index.component.css']
})
export class LaunchIndexComponent implements OnInit {

  launches: Launch[] = [];

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
            var item = data[key];
            objArray.push([item, key.toString()]);
          }
          this.launches = objArray;
          console.log(this.launches);
        }
      );
  }

}
