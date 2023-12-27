import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Courses/courses.service';
import { course } from 'src/app/models/course.model';

@Component({
  selector: 'app-update-courses-admin',
  templateUrl: './update-courses-admin.component.html',
  styleUrls: ['./update-courses-admin.component.css']
})
export class UpdateCoursesAdminComponent implements OnInit {
  courseId: number = 0; // Initialize here
  updatedCourse: course = { idCourse: 0, nameCourse: '', description: '', price: 0, imageCourse: '' };

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id'];
    });
  }




}
