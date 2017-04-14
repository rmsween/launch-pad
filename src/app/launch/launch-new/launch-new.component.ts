import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'angular2-material-datepicker'


import 'rxjs/Rx';
import { Launch } from '../launch';

@Component({
  selector: 'app-launch-new',
  templateUrl: './launch-new.component.html',
  styleUrls: ['./launch-new.component.css']
})
export class LaunchNewComponent implements OnInit {
  launchForm: FormGroup;
  date: Date;
  launch: Launch;
  @Output() cleared = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  closeModal() {
    this.cleared.emit(null);
  }

  addNewLaunch() {
    const newLaunch = this.launchForm.value;
    console.log(newLaunch);
  }

  private initForm() {
    let launchDivision = '';
    let launchProject = '';
    let launchClientApproval = '';
    let launchLaunchDate = '';

    this.launchForm = this.formBuilder.group({
      division: launchDivision,
      project: launchProject,
      clientApproval: launchClientApproval,
      launchDate: launchLaunchDate
    });
  }

}
