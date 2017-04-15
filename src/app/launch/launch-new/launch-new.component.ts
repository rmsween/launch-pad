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
  @Input() launch: Launch;
  @Output() cleared = new EventEmitter();
  clientApproval: Date;
  launchDate: Date;
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
    id === 'clientApproval' ? this.clientApproval = date : this.launchDate = date;
  }

  addNewLaunch(value) {
    this.newLaunch = new Launch(1, value.division, value.project, value.clientApproval, value.launchDate, true);
    this.launchService.saveLaunch(this.newLaunch).subscribe(
      (data: Response) => {
        console.log('Launch saved.');
        this.newLaunch = null;
        this.closeModal();
      }
    );
  }

}
