import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxUsers} from '../../../../interfaces/brx-user';
import {AdminUsersService} from '../../../../services/settings/admin/admin-users.service';
import {Subscription} from 'rxjs';
import {BrxListHeaders, BrxListType} from '../../../../interfaces/brx-list-header';

@Component({
  selector: 'brx-admin-settings-users',
  templateUrl: './admin-settings-users.component.html',
  styleUrls: ['./admin-settings-users.component.scss']
})
export class AdminSettingsUsersComponent implements OnInit, OnDestroy {
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
      type: BrxListType.BOOLEAN
    }
  ];

  handleSort(sort: { reversed: boolean, key: string }): void {
    this.sortKey = sort.key;
    this.sortReversed = sort.reversed;
  }


  constructor(private adminUsersService: AdminUsersService) {
  }

  editUser(userId: string) {
    console.log('EDIT USER', this.users.find(user => user.id === userId));
  }

  ngOnInit() {
    this.userSubscription = this.adminUsersService.getUsers().subscribe(result => this.users = result);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
