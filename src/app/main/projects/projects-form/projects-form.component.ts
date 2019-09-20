import {Component, Input, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../interfaces/brx-route';
import {BrxInputErrorMessages} from '../../../interfaces/brx-input-error-message';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectService} from '../../../services/project.service';
import {BrxProject} from '../../../interfaces/brx-project';
import {first} from 'rxjs/operators';

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
  @Input() project: BrxProject;

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
    if (this.project && this.project.id) {
      this.projectForm.patchValue(this.project);
    }
  }

  submit() {
    if (this.projectForm.valid) {
      this.projectService.createOrUpdateProject(this.projectForm.value).pipe(first()).subscribe(result => {
        this.activeModal.close(result);
      });
    }
  }

  cancel() {
    this.activeModal.close();
  }
}
