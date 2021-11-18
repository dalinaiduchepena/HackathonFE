import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';

const routes: Routes = [];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
  routes: Routes = [
    { path: 'schemedetails', component: SchemeDetailsComponent },
    {path: '*', component: DashboardComponent},
{
  path: '',
  redirectTo: 'schemedetails',
  pathMatch: 'full'
}
  ];
}
