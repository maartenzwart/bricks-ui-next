import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HrManageJobsFormComponent} from './hr-manage-jobs-form/hr-manage-jobs-form.component';
import {BrxModalService} from '../../../../common/services/brx-modal.service';

@Component({
  selector: 'brx-hr-manage-jobs',
  templateUrl: './hr-manage-jobs.component.html',
  styleUrls: ['./hr-manage-jobs.component.scss']
})
export class HrManageJobsComponent implements OnInit {

  constructor(private modalService: BrxModalService) {
  }

  ngOnInit() {
  }

  newJob() {
    const modalRef = this.modalService.open(HrManageJobsFormComponent);
    // modalRef.componentInstance.user = userToEdit;
  }

}
