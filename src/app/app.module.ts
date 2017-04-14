import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LaunchComponent } from './launch/launch.component';
import { LaunchIndexComponent } from './launch/launch-index/launch-index.component';
import { LaunchNewComponent } from './launch/launch-new/launch-new.component';
import { LaunchEditComponent } from './launch/launch-edit/launch-edit.component';
import { LaunchShowComponent } from './launch/launch-show/launch-show.component';
import { FooterComponent } from './footer.component';
import { LaunchIndexItemComponent } from './launch/launch-index/launch-index-item.component';
import { LaunchService } from './launch/launch.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaunchComponent,
    LaunchIndexComponent,
    LaunchNewComponent,
    LaunchEditComponent,
    LaunchShowComponent,
    FooterComponent,
    LaunchIndexItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DatepickerModule
  ],
  providers: [LaunchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
