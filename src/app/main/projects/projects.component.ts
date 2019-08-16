import { Component, OnInit } from '@angular/core';
import {BrxRoutes} from '../../interfaces/brx-route';
import {ProjectService} from 'src/app/services/project.service';
import {BrxProjects} from '../../interfaces/brx-project';
import {BrxListHeaders} from '../../interfaces/brx-list-header';

@Component({
  selector: 'brx-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tabRoutes: BrxRoutes = [{
    path: '/projects',
    title: 'Projecten'
  }];
  listHeaders: BrxListHeaders = [
    {index: 0, key: 'id', title: 'ID', sortable: true},
    {index: 1, key: 'name', title: 'Naam', sortable: true}
  ];
  projects: BrxProjects;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(result => {
      console.log(result);
      this.projects = result;
    });
  }

}
