import { Component, OnInit } from '@angular/core';

import { Launch } from './launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  selectedLaunch: Launch;

  constructor() { }

  ngOnInit() {
  }

}
