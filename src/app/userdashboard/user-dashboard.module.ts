import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routeDashboardpMaster : Routes = [
  {
    path:"hod",component : HodDashboardComponent
  },
  {
    path:"staff",component : StaffDashboardComponent
  }

]

@NgModule({
  declarations: [
    HodDashboardComponent,
    StaffDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeDashboardpMaster)
  ]
})
export class UserDashboardModule { }
