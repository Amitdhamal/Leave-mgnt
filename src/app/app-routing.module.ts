import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: '', pathMatch : "full",  
    loadChildren: () => import('./sign-up-master/sign-up-master.module').then(m => m.SignUpMasterModule)  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
