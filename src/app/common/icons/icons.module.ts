import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChevronLeftComponent } from './icon-chevron-left/icon-chevron-left.component';
import { IconChevronRightComponent } from './icon-chevron-right/icon-chevron-right.component';
import { IconDateComponent } from './icon-date/icon-date.component';



@NgModule({
  declarations: [IconChevronLeftComponent, IconChevronRightComponent, IconDateComponent],
  exports: [
    IconChevronLeftComponent,
    IconChevronRightComponent,
    IconDateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconsModule { }
