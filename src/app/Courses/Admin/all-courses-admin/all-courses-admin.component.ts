import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/Courses/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses-admin',
  templateUrl: './all-courses-admin.component.html',
  styleUrls: ['./all-courses-admin.component.css']
})
export class AllCoursesAdminComponent implements OnInit {
  courses: course[] = [];
  searchTerm: string = '';

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService.getAllCourses().subscribe(
      (data: course[]) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error loading courses:', error);
        // Handle error (e.g., display an error message)
      }
    );
  }

  filterCourses(): course[] {
    return this.courses.filter(course =>
      course.nameCourse.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteCourse(courseId: number) {
    this.coursesService.deleteCourse(courseId).subscribe(
      () => {
        console.log(`Course with ID ${courseId} deleted successfully`);
        // Reload the courses after deletion
        this.loadCourses();
      },
      (error) => {
        console.error(`Error deleting course with ID ${courseId}:`, error);
        // Handle error (e.g., display an error message)
      }
    );
  }
  

  editCourse(courseId: number) {
    this.router.navigate(['/update', courseId]);
  }
}
