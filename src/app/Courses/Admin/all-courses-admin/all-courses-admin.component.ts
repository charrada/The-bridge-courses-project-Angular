import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/Courses/courses.service';
import { UpdateCoursesAdminComponent } from '../update-courses-admin/update-courses-admin.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-courses-admin',
  templateUrl: './all-courses-admin.component.html',
  styleUrls: ['./all-courses-admin.component.css']
})
export class AllCoursesAdminComponent implements OnInit {
  courses: course[] = [];
  searchTerm: string = '';

  constructor(private coursesService: CoursesService, private modalService: NgbModal) { }

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
    const courseToUpdate = this.courses.find(c => c.idCourse === courseId);

    // Open the modal using NgbModal
    const modalRef = this.modalService.open(UpdateCoursesAdminComponent);
    modalRef.componentInstance.updatedCourse = { ...courseToUpdate };

    // Subscribe to the modal's result to handle any actions after the modal closes
    modalRef.result.then(
      (result) => {
        // Handle success (e.g., refresh course list)
        this.loadCourses();
      },
      (reason) => {
        // Handle dismissal or other scenarios
        console.log(`Modal dismissed with reason: ${reason}`);
      }
    );
  }
}
