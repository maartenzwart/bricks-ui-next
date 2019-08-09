import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChevronLeftComponent } from './icon-chevron-left/icon-chevron-left.component';
import { IconChevronRightComponent } from './icon-chevron-right/icon-chevron-right.component';
import { IconDateComponent } from './icon-date/icon-date.component';
import {IconJobComponent} from './icon-job/icon-job.component';
import {IconCloseComponent} from './icon-close/icon-close.component';
import {IconWarningLightComponent} from './icon-warning-light/icon-warning-light.component';



@NgModule({
  declarations: [IconChevronLeftComponent, IconChevronRightComponent, IconDateComponent, IconJobComponent, IconCloseComponent, IconWarningLightComponent],
  exports: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent,
    IconJobComponent,
    IconCloseComponent,
    IconWarningLightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
