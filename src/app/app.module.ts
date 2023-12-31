import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { AllCoursesComponent } from './Courses/User/all-courses/all-courses.component';
import { AllCoursesAdminComponent } from './Courses/Admin/all-courses-admin/all-courses-admin.component';
import { AddCoursesAdminComponent } from './Courses/Admin/add-courses-admin/add-courses-admin.component';
import { UpdateCourseComponent } from './Courses/Admin/update-courses/update-courses.component';


@NgModule({
  declarations: [AppComponent, AllCoursesComponent, AllCoursesAdminComponent,AddCoursesAdminComponent, UpdateCourseComponent],
 imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, MatButtonModule,
    MatIconModule, 
     FormsModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
