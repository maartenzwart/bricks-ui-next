import {Component, Input, OnInit} from '@angular/core';
import {BrxUser} from '../../../../../interfaces/brx-user';
import {BrxRoutes} from '../../../../../interfaces/brx-route';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../../../../services/user.service';
import {Subscription} from 'rxjs';
import {BrxInputErrorMessages} from '../../../../../interfaces/brx-input-error-message';

@Component({
  selector: 'brx-organisation-settings-user-create',
  templateUrl: './organisation-settings-user-create.component.html',
  styleUrls: ['./organisation-settings-user-create.component.scss']
})
export class OrganisationSettingsUserCreateComponent implements OnInit {

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

  errorMessages: BrxInputErrorMessages = [{
    key: 'required',
    message: 'Dit veld is verplicht'
  }, {
    key: 'email',
    message: 'Dit is geen geldig e-mailadres'
  }];


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private userService: UserService) {
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
      sub = this.userService.updateUser(mergedUser).subscribe(result => {
        sub.unsubscribe();
        this.activeModal.close(result);
      });
    }
  }
}
