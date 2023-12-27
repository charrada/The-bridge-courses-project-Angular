import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCoursesComponent } from './Courses/User/all-courses/all-courses.component';
import { AllCoursesAdminComponent } from './Courses/Admin/all-courses-admin/all-courses-admin.component';

const routes: Routes = [
  { path: 'courses', component: AllCoursesComponent }, 
  { path: 'adm', component: AllCoursesAdminComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
