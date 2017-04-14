import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Launch } from '../launch';

@Component({
  selector: 'app-launch-new',
  templateUrl: './launch-new.component.html',
  styleUrls: ['./launch-new.component.css']
})
export class LaunchNewComponent implements OnInit {
  @Input() launch = Launch;
  @Output() cleared = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.cleared.emit(null);
  }

  addNewLaunch(value) {
    console.log(value);
  }

}
