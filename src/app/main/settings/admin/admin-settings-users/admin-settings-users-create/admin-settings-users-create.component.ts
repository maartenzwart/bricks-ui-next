import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrxUser} from '../../../../../interfaces/brx-user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrxValidators} from '../../../../../common/forms/validators';
import {AdminUsersService} from '../../../../../services/settings/admin/admin-users.service';
import {BrxRoutes} from '../../../../../interfaces/brx-route';

@Component({
  selector: 'brx-admin-settings-users-create',
  templateUrl: './admin-settings-users-create.component.html',
  styleUrls: ['./admin-settings-users-create.component.scss']
})
export class AdminSettingsUsersCreateComponent implements OnInit {
  @Input() user: BrxUser;
  brxTabRoutes: BrxRoutes = [{
    title: 'Gebruiker aanpassen'
  }];

  userForm: FormGroup = this.fb.group({
    givenName: ['', Validators.required],
    insertion: [''],
    familyName: ['', Validators.required],
    email: ['', Validators.email],
    isActive: [false]
  });


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private adminUsersService: AdminUsersService) {
  }

  ngOnInit() {
    if (this.user && this.user.id) {
      this.userForm.patchValue(this.user);
    }
  }

  cancel() {
    if (this.activeModal) {
      this.activeModal.dismiss();
    }
  }

  submit() {
    const mergedUser = Object.assign(this.user, this.userForm.value);
    this.adminUsersService.updateUser(mergedUser).subscribe(result => {
      this.activeModal.close(result);
    });
  }
}
