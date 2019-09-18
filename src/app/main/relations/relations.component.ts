import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxRelationOrganisations} from '../../interfaces/brx-relation';
import {RelationService} from '../../services/relation.service';
import {BrxRoutes} from '../../interfaces/brx-route';
import {BrxListHeaders} from '../../interfaces/brx-list-header';
import {BrxModalService} from '../../common/services/brx-modal.service';
import {RelationOrganisationFormComponent} from './relation-organisation-form/relation-organisation-form.component';
import {Subscription} from 'rxjs';
import {or} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'brx-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  sortReversed: boolean;
  sortKey: string;

  tabRoutes: BrxRoutes = [{
    path: '/relations',
    title: 'Organisaties'
  }];
  listHeaders: BrxListHeaders = [
    {index: 0, key: 'name', title: 'Naam', sortable: true}
  ];
  relations: BrxRelationOrganisations = [];

  constructor(private relationService: RelationService, private modalService: BrxModalService) {
  }

  edit(id: string) {
    const organisation = this.relations.find(relation => relation.id === id);
    if (organisation) {
      const modalRef = this.modalService.open(RelationOrganisationFormComponent);
      console.log('ORGANISATION', organisation);
      modalRef.componentInstance.organisation = organisation;
      modalRef.result.then(() => {
        this.loadRelations();
      });
    }
  }

  ngOnInit() {
    this.loadRelations();
  }

  loadRelations() {
    this.subscription = this.relationService.getOrganisations().subscribe((result) => {
      this.relations = result;
    });
  }

  handleSort(sort: { reversed: boolean, key: string }): void {
    this.sortKey = sort.key;
    this.sortReversed = sort.reversed;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  newOrganisation() {
    const modalRef = this.modalService.open(RelationOrganisationFormComponent);
    modalRef.result.then(() => {
      this.loadRelations();
    });
  }
}
