import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { course } from 'src/app/models/course.model';

@Component({
  selector: 'app-update-courses-admin',
  templateUrl: './update-courses-admin.component.html',
  styleUrls: ['./update-courses-admin.component.css']
})
export class UpdateCoursesAdminComponent {
  @Input() updatedCourse: course = { idCourse: 0, nameCourse: '', description: '', price: 0, imageCourse: '' };

  constructor(public activeModal: NgbActiveModal) {}

  saveChanges() {
    // Implement logic to save changes to the course
    // You can use a service for this
    console.log('Saved changes:', this.updatedCourse);
    this.activeModal.close('Save Click');
  }

  cancel() {
    // Close the modal without saving changes
    this.activeModal.dismiss('Cancel');
  }
}
