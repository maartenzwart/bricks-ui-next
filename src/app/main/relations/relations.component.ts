import { Component, OnInit } from '@angular/core';
import {BrxRelations} from '../../interfaces/brx-relation';
import {RelationService} from '../../services/relation.service';
import {BrxRoutes} from '../../interfaces/brx-route';
import {BrxListHeaders} from '../../interfaces/brx-list-header';

@Component({
  selector: 'brx-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit {
  tabRoutes: BrxRoutes = [{
    path: '/relations',
    title: 'Relaties'
  }];
  listHeaders: BrxListHeaders = [
    {index: 0, key: 'id', title: 'ID', sortable: true},
    {index: 1, key: 'name', title: 'Naam', sortable: true}
  ];
  relations: BrxRelations = [];

  constructor(private relationService: RelationService) {
  }

  ngOnInit() {
    this.relationService.getRelations().subscribe((result) => {
      this.relations = result;
    });
  }
}
