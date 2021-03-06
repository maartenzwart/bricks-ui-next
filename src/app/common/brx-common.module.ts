import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../pipes/pipes.module';
import {NavItemComponent} from './navigation/nav-item/nav-item.component';
import {NavBarComponent} from './navigation/nav-bar/nav-bar.component';
import {SubNavComponent} from './navigation/sub-nav/sub-nav.component';
import {TabsComponent} from './navigation/tabs/tabs.component';
import {IconChevronLeftComponent} from './icons/icon-chevron-left/icon-chevron-left.component';
import {IconChevronRightComponent} from './icons/icon-chevron-right/icon-chevron-right.component';
import {IconDateComponent} from './icons/icon-date/icon-date.component';
import {IconJobComponent} from './icons/icon-job/icon-job.component';
import {IconCloseComponent} from './icons/icon-close/icon-close.component';
import {IconWarningLightComponent} from './icons/icon-warning-light/icon-warning-light.component';
import {IconDashboardComponent} from './icons/icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from './icons/icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from './icons/icon-client-light/icon-client-light.component';
import {IconHoursComponent} from './icons/icon-hours/icon-hours.component';
import {IconSettingsComponent} from './icons/icon-settings/icon-settings.component';
import {IconProfileComponent} from './icons/icon-profile/icon-profile.component';
import {IconSearchComponent} from './icons/icon-search/icon-search.component';
import {IconSortDefaultComponent} from './icons/icon-sort-default/icon-sort-default.component';
import {IconSortUpComponent} from './icons/icon-sort-up/icon-sort-up.component';
import {IconSortDownComponent} from './icons/icon-sort-down/icon-sort-down.component';
import {ListComponent} from './list/list.component';
import {ButtonCreateComponent} from './buttons/button-create/button-create.component';
import {IconPlusLightComponent} from './icons/icon-plus-light/icon-plus-light.component';
import {InputTextComponent} from './inputs/input-text/input-text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconDeleteComponent} from './icons/icon-delete/icon-delete.component';
import {InputSelectCountryComponent} from './inputs/input-select-country/input-select-country.component';
import {NgbModalModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {InputCheckboxComponent} from './inputs/input-checkbox/input-checkbox.component';
import {InputPhoneNumberCountryCodeComponent} from './inputs/input-phone-number-country-code/input-phone-number-country-code.component';
import {ButtonWarningComponent} from './buttons/button-warning/button-warning.component';
import {ButtonPrimaryComponent} from './buttons/button-primary/button-primary.component';
import {ButtonDangerComponent} from './buttons/button-danger/button-danger.component';
import {ButtonDarkComponent} from './buttons/button-dark/button-dark.component';
import {FormAddressComponent} from './forms/form-address/form-address.component';
import {FormCheckboxComponent} from './inputs/input-checkbox/form-checkbox/form-checkbox.component';
import {ListHeaderDirective} from './list/list-header.directive';
import {ListColumnDirective} from './list/list-column.directive';
import {ListCellDirective} from './list/list-cell.directive';
import {FormPhoneNumberComponent} from './forms/form-phone-number/form-phone-number.component';
import {FormEmailComponent} from './forms/form-email/form-email.component';
import {ButtonPlainComponent} from './buttons/button-plain/button-plain.component';
import {InputSelectUserComponent} from './inputs/input-select-user/input-select-user.component';
import {InputSelectProjectComponent} from './inputs/input-select-project/input-select-project.component';
import {InputDateComponent} from './inputs/input-date/input-date.component';
import {InputSelectCustomerComponent} from './inputs/input-select-customer/input-select-customer.component';
import {InputSelectActivityComponent} from './inputs/input-select-activity/input-select-activity.component';
import {LayoutCommonHeaderComponent} from './layouts/layout-common-header/layout-common-header.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NavItemComponent,
    SubNavComponent,
    TabsComponent,
    ListComponent,
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent,
    IconJobComponent,
    IconCloseComponent,
    IconWarningLightComponent,
    IconDashboardComponent,
    IconProjectLightComponent,
    IconClientLightComponent,
    IconHoursComponent,
    IconSettingsComponent,
    IconProfileComponent,
    IconSearchComponent,
    IconSortDefaultComponent,
    IconSortUpComponent,
    IconSortDownComponent,
    ButtonCreateComponent,
    IconPlusLightComponent,
    InputTextComponent,
    IconDeleteComponent,
    InputSelectCountryComponent,
    InputCheckboxComponent,
    InputPhoneNumberCountryCodeComponent,
    ButtonWarningComponent,
    ButtonPrimaryComponent,
    ButtonDangerComponent,
    ButtonDarkComponent,
    FormAddressComponent,
    FormCheckboxComponent,
    ListHeaderDirective,
    ListColumnDirective,
    ListCellDirective,
    FormPhoneNumberComponent,
    FormEmailComponent,
    ButtonPlainComponent,
    InputSelectUserComponent,
    InputSelectProjectComponent,
    InputDateComponent,
    InputSelectCustomerComponent,
    InputSelectActivityComponent,
    LayoutCommonHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbModalModule
  ],
  exports: [
    NavItemComponent,
    NavBarComponent,
    SubNavComponent,
    TabsComponent,
    ListComponent,
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent,
    IconJobComponent,
    IconCloseComponent,
    IconWarningLightComponent,
    IconDashboardComponent,
    IconProjectLightComponent,
    IconClientLightComponent,
    IconHoursComponent,
    IconSettingsComponent,
    IconProfileComponent,
    IconSearchComponent,
    IconSortDefaultComponent,
    IconSortUpComponent,
    IconSortDownComponent,
    ButtonCreateComponent,
    InputTextComponent,
    IconDeleteComponent,
    InputSelectCountryComponent,
    InputCheckboxComponent,
    InputPhoneNumberCountryCodeComponent,
    ButtonWarningComponent,
    ButtonPrimaryComponent,
    ButtonDangerComponent,
    ButtonDarkComponent,
    IconPlusLightComponent,
    ListHeaderDirective,
    ListColumnDirective,
    ListCellDirective,
    FormAddressComponent,
    FormEmailComponent,
    FormCheckboxComponent,
    ButtonPlainComponent,
    InputSelectUserComponent,
    InputDateComponent,
    InputSelectProjectComponent,
    InputSelectActivityComponent,
    InputSelectCustomerComponent,
    FormPhoneNumberComponent,
    LayoutCommonHeaderComponent
  ]
})
export class BrxCommonModule {
}
