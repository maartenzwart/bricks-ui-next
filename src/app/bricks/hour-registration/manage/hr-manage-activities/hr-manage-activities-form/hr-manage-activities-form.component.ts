import {Component, OnInit} from '@angular/core';
import {BrxRoutes} from '../../../../../interfaces/brx-route';
import {FormBuilder, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BrxInputErrorMessages} from '../../../../../interfaces/brx-input-error-message';
import {ActivityService} from '../../../../../services/activity.service';
import {first} from 'rxjs/operators';
import {BrxActivity} from '../../../../../interfaces/brx-activity';

@Component({
  selector: 'brx-hr-manage-activities-form',
  templateUrl: './hr-manage-activities-form.component.html',
  styleUrls: ['./hr-manage-activities-form.component.scss']
})
export class HrManageActivitiesFormComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Nieuw Uursoort'
  }];

  form = this.fb.group({
    id: [null],
    name: ['', Validators.required]
  });

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }];

  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private activityService: ActivityService) {
  }

  ngOnInit() {
  }

  edit(activity: BrxActivity) {
    this.form.patchValue(activity);
  }

  cancel() {
    this.activeModal.dismiss();
  }

  submit() {
    if (this.form.valid) {
      this.activityService.createOrUpdateActivity(this.form.value).pipe(first()).subscribe(result => {
        this.activeModal.close(this.form.value);
      });
    }
  }

}
