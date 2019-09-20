import {Component, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'brx-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Project',
    tabActive: true
  }];

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }];

  projectForm = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.projectForm.valid) {
      this.projectService.createProject(this.projectForm.value);
      this.activeModal.close();
    }
  }

  cancel() {
    this.activeModal.dismiss();
  }


}
