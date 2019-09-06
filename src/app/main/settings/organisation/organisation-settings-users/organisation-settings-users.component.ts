import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxUsers} from '../../../../interfaces/brx-user';
import {Subscription} from 'rxjs';
import {BrxListHeaders, BrxListType} from '../../../../interfaces/brx-list-header';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from 'src/app/services/user.service';
import {OrganisationSettingsUserCreateComponent} from './organisation-settings-user-create/organisation-settings-user-create.component';

@Component({
  selector: 'brx-organisation-settings-users',
  templateUrl: './organisation-settings-users.component.html',
  styleUrls: ['./organisation-settings-users.component.scss']
})
export class OrganisationSettingsUsersComponent implements OnInit, OnDestroy {
  users: BrxUsers = [];
  userSubscription: Subscription;
  sortReversed: boolean;
  sortKey: string;
  listHeaders: BrxListHeaders = [
    {
      index: 1,
      key: 'givenName',
      title: 'Voornaam'
    }, {
      index: 2,
      key: 'insertion',
      title: 'Tussenvoegsels'
    }, {
      index: 3,
      key: 'familyName',
      title: 'Achternaam',
      sortable: true
    }, {
      index: 0,
      key: 'avatar',
      title: '',
      type: BrxListType.IMAGE
    }, {
      index: 4,
      key: 'email',
      title: 'Email'
    }, {
      index: 5,
      key: 'isActive',
      title: 'Actief',
      sortable: true,
      type: BrxListType.BOOLEAN
    }
  ];

  constructor(private userService: UserService, private modalService: NgbModal) {
  }

  handleSort(sort: { reversed: boolean, key: string }): void {
    this.sortKey = sort.key;
    this.sortReversed = sort.reversed;
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(result => this.users = result);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  editUser(userId: string) {
    const userToEdit = this.users.find(user => user.id === userId);
    if (userToEdit) {
      const modalRef = this.modalService.open(OrganisationSettingsUserCreateComponent, {
        size: 'xl',
        windowClass: 'modal-full',
        container: '.brx-modal-container'
      });
      modalRef.componentInstance.user = userToEdit;
    }
  }

}
