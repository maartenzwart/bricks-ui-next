import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxRoutes} from '../../interfaces/brx-route';
import {ProjectService} from 'src/app/services/project.service';
import {BrxProject, BrxProjects} from '../../interfaces/brx-project';
import {BrxListHeaders} from '../../interfaces/brx-list-header';
import {BrxModalService} from '../../common/services/brx-modal.service';
import {ProjectsFormComponent} from './projects-form/projects-form.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'brx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  tabRoutes: BrxRoutes = [{
    path: '/projects',
    title: 'Projecten'
  }];
  listHeaders: BrxListHeaders = [
    {index: 0, key: 'id', title: 'ID', sortable: true},
    {index: 1, key: 'name', title: 'Naam', sortable: true}
  ];
  projects: BrxProjects;
  filterBy = '';
  sortReversed: boolean;
  sortKey: string;
  projectSub: Subscription;

  constructor(private projectService: ProjectService, private modalService: BrxModalService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    this.projectSub.unsubscribe();
  }

  loadProjects() {
    this.projectSub = this.projectService.getProjects().subscribe(result => {
      this.projects = result;
    });
  }

  handleSort(sort: { reversed: boolean, key: string }): void {
    this.sortKey = sort.key;
    this.sortReversed = sort.reversed;
  }

  edit(project: BrxProject) {
    const modalRef = this.modalService.open(ProjectsFormComponent);
    modalRef.componentInstance.project = project;
    modalRef.result.then(() => this.loadProjects());
  }

  createProject() {
    const modalRef = this.modalService.open(ProjectsFormComponent);
    modalRef.result.then(() => this.loadProjects());
  }

}
