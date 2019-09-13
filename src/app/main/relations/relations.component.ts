import {Component, OnInit} from '@angular/core';
import {BrxRelations} from '../../interfaces/brx-relation';
import {RelationService} from '../../services/relation.service';
import {BrxRoutes} from '../../interfaces/brx-route';
import {BrxListHeaders} from '../../interfaces/brx-list-header';
import {BrxModalService} from '../../common/services/brx-modal.service';
import {RelationOrganisationFormComponent} from './relation-organisation-form/relation-organisation-form.component';

@Component({
  selector: 'brx-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit {
  tabRoutes: BrxRoutes = [{
    path: '/relations',
    title: 'Organisaties'
  }];
  listHeaders: BrxListHeaders = [
    {index: 0, key: 'id', title: 'ID', sortable: true},
    {index: 1, key: 'name', title: 'Naam', sortable: true}
  ];
  relations: BrxRelations = [];

  constructor(private relationService: RelationService, private modalService: BrxModalService) {
  }

  ngOnInit() {
    this.relationService.getRelations().subscribe((result) => {
      this.relations = result;
    });
  }

  newOrganisation() {
    this.modalService.open(RelationOrganisationFormComponent);
  }
}
