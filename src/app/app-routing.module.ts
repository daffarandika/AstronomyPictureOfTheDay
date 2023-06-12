import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'detail', component: DashboardComponent},
  {path: '**', pathMatch:'full',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
