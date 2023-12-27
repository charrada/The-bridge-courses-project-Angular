import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model'; // Assuming your model is named Course (capitalized)
import { CoursesService } from 'src/app/Courses/courses.service'; // Adjust the path

@Component({
  selector: 'app-all-courses-admin',
  templateUrl: './all-courses-admin.component.html',
  styleUrls: ['./all-courses-admin.component.css']
})
export class AllCoursesAdminComponent implements OnInit {
  courses: course[] = [];
  searchTerm: string = '';

  constructor(private coursesService: CoursesService) { }

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

  console.log(`Deleting course with ID ${courseId}`);
}


updateCourse(courseId: number) {

  // For example, navigate to an update/edit page or open a modal
  console.log(`Updating course with ID ${courseId}`);
}

}
