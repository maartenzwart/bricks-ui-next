import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HrManageJobsFormComponent} from './hr-manage-jobs-form/hr-manage-jobs-form.component';

@Component({
  selector: 'brx-hr-manage-jobs',
  templateUrl: './hr-manage-jobs.component.html',
  styleUrls: ['./hr-manage-jobs.component.scss']
})
export class HrManageJobsComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  newJob() {
    const modalRef = this.modalService.open(HrManageJobsFormComponent, {
      size: 'xl',
      windowClass: 'modal-full',
      container: '.brx-modal-container',
      backdrop: 'static',
      backdropClass: 'brx-modal-backdrop'
    });
    // modalRef.componentInstance.user = userToEdit;
  }

}
