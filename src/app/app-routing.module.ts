import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCoursesComponent } from './Courses/User/all-courses/all-courses.component';

const routes: Routes = [
  { path: 'courses', component: AllCoursesComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
