import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordListComponent } from './record-list/record-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordComponent } from './record/record.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { RecordSummaryComponent } from './record-summary/record-summary.component';
const routes: Routes = [
  {path: 'records', component: RecordListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'records/:id', component: RecordComponent},
  {path: 'new', component: RecordFormComponent},
  {path: 'summary', component: RecordSummaryComponent},
  {path: '', redirectTo: '/summary', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
