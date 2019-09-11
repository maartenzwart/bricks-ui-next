import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BrxRoutes} from '../../../../../interfaces/brx-route';
import {BrxInputErrorMessages} from '../../../../../interfaces/brx-input-error-message';
import {ActivityService} from '../../../../../services/activity.service';
import {first} from 'rxjs/operators';
import {ProjectService} from '../../../../../services/project.service';
import {RelationService} from '../../../../../services/relation.service';
import {InputSelectCustomerComponent} from '../../../../../common/inputs/input-select-customer/input-select-customer.component';
import {InputSelectActivityComponent} from '../../../../../common/inputs/input-select-activity/input-select-activity.component';
import {InputSelectProjectComponent} from '../../../../../common/inputs/input-select-project/input-select-project.component';

@Component({
  selector: 'brx-hr-manage-jobs-form',
  templateUrl: './hr-manage-jobs-form.component.html',
  styleUrls: ['./hr-manage-jobs-form.component.scss']
})
export class HrManageJobsFormComponent implements OnInit {
  @ViewChild('inputActivity', {static: true}) inputActivity: InputSelectActivityComponent;
  @ViewChild('inputProject', {static: true}) inputProject: InputSelectProjectComponent;
  @ViewChild('inputCustomer', {static: true}) inputCustomer: InputSelectCustomerComponent;

  routes: BrxRoutes = [{
    title: 'Nieuwe Klus'
  }];

  showNewActivity = false;
  showNewProject = false;
  showNewCustomer = false;

  form = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    activity: [null, Validators.required],
    project: [null],
    organisation: [null],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    responsibility: [null, Validators.required],
    responsibilityCheckbox: this.fb.group({
      current: [true],
      other: [false]
    })
  });

  newActivityForm = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  newProjectForm = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  newCustomerForm = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  responsibilityForm = new FormControl({value: null, disabled: true});

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }];

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private activityService: ActivityService,
              private projectService: ProjectService,
              private relationService: RelationService) {
  }

  ngOnInit() {
  }

  setShowNewActivity(bool: boolean) {
    this.showNewActivity = bool;
    this.newActivityForm.reset();
  }

  setShowNewProject(bool: boolean) {
    this.showNewProject = bool;
    this.newProjectForm.reset();
  }

  setShowNewCustomer(bool: boolean) {
    this.showNewCustomer = bool;
    this.newCustomerForm.reset();
  }

  createNewActivity() {
    if (this.newActivityForm.valid) {
      this.activityService.createActivity(this.newActivityForm.value).pipe(first()).subscribe(result => {
        this.form.patchValue({activity: result});
        this.inputActivity.loadData();
        this.setShowNewActivity(false);
      });
    }
  }

  createNewProject() {
    if (this.newProjectForm.valid) {
      this.projectService.createProject(this.newProjectForm.value).pipe(first()).subscribe(result => {
        this.form.patchValue({project: result});
        this.inputProject.loadData();
        this.setShowNewProject(false);
      });
    }
  }

  createNewCustomer() {
    if (this.newCustomerForm.valid) {
      this.relationService.createRelation(this.newCustomerForm.value).pipe(first()).subscribe(result => {
        this.form.patchValue({organisation: result});
        this.inputCustomer.loadData();
        this.setShowNewCustomer(false);
      });
    }
  }

  changeResponsibility(currentUser: boolean) {
    if (currentUser) {
      this.responsibilityForm.disable();
    } else {
      this.responsibilityForm.enable();
    }
    this.responsibilityForm.reset();
    this.form.get('responsibilityCheckbox').patchValue({current: currentUser, other: !currentUser});
  }

  cancel() {
    if (this.activeModal) {
      this.activeModal.dismiss();
    }
  }

  submit() {
    // if (this.form.valid) {
    console.log(this.responsibilityForm.value);
    console.log('SUBMIT', this.form.value);
    // }
  }

}
