import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: '', pathMatch : "full",  
    loadChildren: () => import('./sign-up-master/sign-up-master.module').then(m => m.SignUpMasterModule)  
  } ,
  {  
    path: 'dashboard', 
    loadChildren: () => import('./userdashboard/user-dashboard.module').then(m => m.UserDashboardModule)  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
