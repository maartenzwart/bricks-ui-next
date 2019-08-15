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
    IconSortDownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
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
    IconSortDownComponent
  ]
})
export class BrxCommonModule {
}
