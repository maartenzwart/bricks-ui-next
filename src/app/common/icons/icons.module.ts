import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChevronLeftComponent } from './icon-chevron-left/icon-chevron-left.component';
import { IconChevronRightComponent } from './icon-chevron-right/icon-chevron-right.component';
import { IconDateComponent } from './icon-date/icon-date.component';
import {IconJobComponent} from './icon-job/icon-job.component';
import {IconCloseComponent} from './icon-close/icon-close.component';
import {IconWarningLightComponent} from './icon-warning-light/icon-warning-light.component';
import {IconDashboardComponent} from './icon-dashboard/icon-dashboard.component';
import {IconProjectLightComponent} from './icon-project-light/icon-project-light.component';
import {IconClientLightComponent} from './icon-client-light/icon-client-light.component';
import {IconHoursComponent} from './icon-hours/icon-hours.component';
import {IconSettingsComponent} from './icon-settings/icon-settings.component';
import {IconProfileComponent} from './icon-profile/icon-profile.component';
import {IconSearchComponent} from './icon-search/icon-search.component';
import {IconSortDefaultComponent} from './icon-sort-default/icon-sort-default.component';
import {IconSortUpComponent} from './icon-sort-up/icon-sort-up.component';
import {IconSortDownComponent} from './icon-sort-down/icon-sort-down.component';



@NgModule({
  declarations: [IconChevronLeftComponent, IconChevronRightComponent, IconDateComponent, IconJobComponent, IconCloseComponent, IconWarningLightComponent, IconDashboardComponent, IconProjectLightComponent, IconClientLightComponent, IconHoursComponent, IconSettingsComponent, IconProfileComponent, IconSearchComponent, IconSortDefaultComponent, IconSortUpComponent, IconSortDownComponent],
  exports: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent,
    IconJobComponent,
    IconCloseComponent,
    IconWarningLightComponent,
    IconSearchComponent,
    IconSortDefaultComponent,
    IconSortUpComponent,
    IconSortDownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
