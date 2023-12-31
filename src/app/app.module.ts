import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { RecordListComponent } from './record-list/record-list.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgComponent } from './svg/svg.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { RecordSummaryComponent } from './record-summary/record-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordListComponent,
    MessagesComponent,
    DashboardComponent,
    SvgComponent,
    RecordFormComponent,
    RecordSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
