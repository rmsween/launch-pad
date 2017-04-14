import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() new = new EventEmitter();
  newForm = false;
  constructor() { }

  ngOnInit() {
  }
  addNew() {
    this.new.emit(null);
    this.newForm = true;
  }
  clear() {
    this.newForm = false;
  }
}
