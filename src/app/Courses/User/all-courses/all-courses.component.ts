import { Component } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {

  courses: course[] = []; // Assuming course array is named 'courses'

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    // Fetch courses from the service and assign them to the 'courses' array
    this.coursesService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
