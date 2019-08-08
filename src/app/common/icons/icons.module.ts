import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChevronLeftComponent } from './icon-chevron-left/icon-chevron-left.component';
import { IconChevronRightComponent } from './icon-chevron-right/icon-chevron-right.component';
import { IconDateComponent } from './icon-date/icon-date.component';
import {IconJobComponent} from './icon-job/icon-job.component';
import {IconCloseComponent} from './icon-close/icon-close.component';



@NgModule({
  declarations: [IconChevronLeftComponent, IconChevronRightComponent, IconDateComponent, IconJobComponent, IconCloseComponent],
  exports: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent,
    IconJobComponent,
    IconCloseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
