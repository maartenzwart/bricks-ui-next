import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxModalService} from '../../../../common/services/brx-modal.service';
import {HrManageActivitiesFormComponent} from './hr-manage-activities-form/hr-manage-activities-form.component';
import {BrxListHeaders} from '../../../../interfaces/brx-list-header';
import {ActivityService} from '../../../../services/activity.service';
import {BrxActivities, BrxActivity} from '../../../../interfaces/brx-activity';
import {debounceTime, distinctUntilChanged, first, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'brx-hr-manage-activities',
  templateUrl: './hr-manage-activities.component.html',
  styleUrls: ['./hr-manage-activities.component.scss']
})
export class HrManageActivitiesComponent implements OnInit, OnDestroy {
  filterTerm: FormControl = new FormControl();
  filterSubscription: Subscription;
  sortReversed: boolean;
  sortKey: string;

  listHeaders: BrxListHeaders = [{
    index: 0,
    key: 'name',
    title: 'Naam',
    sortable: true,
  }];

  filteredActivities: BrxActivities = [];
  activities: BrxActivities = [];


  constructor(private modalService: BrxModalService, private activityService: ActivityService) {
  }

  ngOnInit() {
    this.getActivities();

    this.filterSubscription = this.filterTerm.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(term => {
        const filterBy = term ? term.toLowerCase() : null;
        this.filteredActivities = filterBy ? this.activities.filter(item => item.name.toLowerCase().indexOf(filterBy) > -1) : this.activities;
      });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  handleSort(sort: { reversed: boolean, key: string }): void {
    this.sortKey = sort.key;
    this.sortReversed = sort.reversed;
  }

  getActivities() {
    this.activityService.getActivities().pipe(first()).subscribe(result => this.filteredActivities = this.activities = result);
  }

  removeActivity(activity: BrxActivity) {
    this.activityService.removeActivity(activity).pipe(first()).subscribe(result => {
      this.getActivities();
    });
  }

  editActivity(activity: BrxActivity) {
    const modalRef = this.modalService.open(HrManageActivitiesFormComponent);
    modalRef.componentInstance.edit(activity);
    modalRef.result.then(result => {
      this.getActivities();
    });
  }

  newActivity() {
    const modalRef = this.modalService.open(HrManageActivitiesFormComponent);
    modalRef.result.then(result => {
      this.getActivities();
    });
  }
}
