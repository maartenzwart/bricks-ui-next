import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {BrxRoutes} from '../../../../../interfaces/brx-route';

@Component({
  selector: 'brx-hr-manage-jobs-form',
  templateUrl: './hr-manage-jobs-form.component.html',
  styleUrls: ['./hr-manage-jobs-form.component.scss']
})
export class HrManageJobsFormComponent implements OnInit {
  routes: BrxRoutes = [{
    title: 'Nieuwe Klus'
  }];

  form = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    activity: [null, Validators.required],
    project: [null],
    organisation: [null],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required]
  });

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  cancel() {
    if (this.activeModal) {
      this.activeModal.dismiss();
    }
  }

  submit() {
    console.log('SUBMIT', this.form.value);
  }

}
