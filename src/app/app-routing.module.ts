import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "",
    component: LandingComponent
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: "route/:name",
    component: ScheduleDetailComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
