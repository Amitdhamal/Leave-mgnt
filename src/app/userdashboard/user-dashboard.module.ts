import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routeDashboardpMaster : Routes = [
  {
    path:"hod",component : HodDashboardComponent
  },
  {
    path:"staff",component : StaffDashboardComponent
  },
  {
    path:"details",component : UserDetailComponent
  }

]

@NgModule({
  declarations: [
    HodDashboardComponent,
    StaffDashboardComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeDashboardpMaster)
  ]
})
export class UserDashboardModule { }
