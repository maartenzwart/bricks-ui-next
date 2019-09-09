import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {BrxRoutes} from '../../../../../interfaces/brx-route';
import {BrxInputErrorMessages} from '../../../../../interfaces/brx-input-error-message';
import {ActivityService} from '../../../../../services/activity.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'brx-hr-manage-jobs-form',
  templateUrl: './hr-manage-jobs-form.component.html',
  styleUrls: ['./hr-manage-jobs-form.component.scss']
})
export class HrManageJobsFormComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Nieuwe Klus'
  }];

  showNewActivity = false;

  form = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    activity: [null, Validators.required],
    project: [null],
    organisation: [null],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required]
  });

  newActivityForm = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }];

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private activityService: ActivityService) {
  }

  ngOnInit() {
  }

  setShowNewActivity(bool: boolean) {
    this.showNewActivity = bool;
    this.newActivityForm.reset();
  }

  createNewActivity() {
    if (this.newActivityForm.valid) {
      this.activityService.createActivity(this.newActivityForm.value).pipe(first()).subscribe(result => {
        console.log('NEW ACTIVITY', result);
        this.form.patchValue({activity: result});
        this.setShowNewActivity(false);
      });
    }
  }

  cancel() {
    if (this.activeModal) {
      this.activeModal.dismiss();
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('SUBMIT', this.form.value);
    }
  }

}
