import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCoursesComponent } from './Courses/User/all-courses/all-courses.component';
import { AllCoursesAdminComponent } from './Courses/Admin/all-courses-admin/all-courses-admin.component';
import { AddCoursesAdminComponent } from './Courses/Admin/add-courses-admin/add-courses-admin.component';
import { UpdateCoursesAdminComponent } from './Courses/Admin/update-courses-admin/update-courses-admin.component';

const routes: Routes = [
  { path: '', component: AllCoursesComponent }, 
  { path: 'adm', component: AllCoursesAdminComponent }, 
  { path: 'courses', component: AllCoursesComponent }, 
  { path: 'adm', component: AllCoursesAdminComponent }, 
  { path: 'adm/add', component: AddCoursesAdminComponent }, 
  { path: 'adm/update', component: UpdateCoursesAdminComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
