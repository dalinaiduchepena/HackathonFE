import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemeDetailsComponent } from './scheme-details/scheme-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  routes: Routes = [
    { path: 'schemedetails', component: SchemeDetailsComponent },
{
  path: '',
  redirectTo: 'schemedetails',
  pathMatch: 'full'
}
  ];
}
