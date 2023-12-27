import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { course } from 'src/app/models/course.model';

@Component({
  selector: 'app-add-courses-admin',
  templateUrl: './add-courses-admin.component.html',
  styleUrls: ['./add-courses-admin.component.css']
})
export class AddCoursesAdminComponent {
  newCourse: course = { idCourse: 0, nameCourse: '', description: '', price: 0, imageCourse: '' };

  constructor(private router: Router, private courseService: CoursesService) {}

  selectedFileName: string = '';

  onFileChange(event: any) {
    const inputFile = event.target;

    if (inputFile.files && inputFile.files.length > 0) {
      this.selectedFileName = inputFile.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }

  addCourse() {
    this.newCourse.imageCourse=this.selectedFileName;
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      console.log('Course added successfully');
      this.router.navigate(['/all']);
    });
  }
  
}
