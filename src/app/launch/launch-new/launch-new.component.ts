import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-new',
  templateUrl: './launch-new.component.html',
  styleUrls: ['./launch-new.component.css']
})
export class LaunchNewComponent implements OnInit, OnChanges {
  @Input() launch = Launch;
  @Output() cleared = new EventEmitter();
  clientApproval = '';
  launchDate = '';
  newLaunch: Launch;

  constructor(public launchService: LaunchService) { }

  ngOnInit() {
  }

  closeModal() {
    this.cleared.emit(null);
  }
  ngOnChanges(changes) {
    console.log(changes)
  }
  onSelect(date: Date, id) {
    const refDate = date;
    const year = refDate.getFullYear();
    const month = refDate.getMonth() + 1;
    const day = refDate.getDate();
    const formattedDate = year + '-' + (month < 9 ? '0' + month : month) + '-' + day;
    if (id === 'clientApproval') {
        this.clientApproval = formattedDate;
    } else {
        this.launchDate = formattedDate;
    }
  }

  addNewLaunch(value) {
    this.newLaunch = new Launch(1, value.division, value.project, value.clientApproval, value.launchDate, true);
    this.launchService.saveLaunch(this.newLaunch).subscribe(
      (data: Response) => {
        console.log('Launch saved.');
        this.newLaunch = null;
        this.cleared.emit(null);
      }
    );
  }

}
