import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrxUser} from '../../../../../interfaces/brx-user';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BrxValidators} from '../../../../../common/forms/validators';
import {AdminUserService} from '../../../../../services/settings/admin/admin-user.service';
import {BrxRoutes} from '../../../../../interfaces/brx-route';
import {Subscription} from 'rxjs';
import {BrxInputErrorMessages} from '../../../../../interfaces/brx-input-error-message';

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
    email: ['', [Validators.required, Validators.email]],
    isActive: [false]
  });

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }, {
    key: 'email',
    message: 'Dit is geen geldig e-mailadres'
  }];


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private adminUserService: AdminUserService) {
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
    if (this.userForm.valid) {
      const mergedUser = Object.assign(this.user, this.userForm.value);
      let sub: Subscription;
      sub = this.adminUserService.updateUser(mergedUser).subscribe(result => {
        sub.unsubscribe();
        this.activeModal.close(result);
      });
    }
  }
}
