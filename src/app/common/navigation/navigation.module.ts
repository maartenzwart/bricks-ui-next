import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavBarComponent, NavItemComponent, SubNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavItemComponent,
    NavBarComponent,
    SubNavComponent
  ]
})
export class NavigationModule { }
