import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../pipes/pipes.module';
import {IconsModule} from '../icons/icons.module';
import {TabsComponent} from './tabs/tabs.component';

@NgModule({
  declarations: [NavBarComponent, NavItemComponent, SubNavComponent, TabsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    IconsModule
  ],
  exports: [
    NavItemComponent,
    NavBarComponent,
    SubNavComponent,
    TabsComponent
  ]
})
export class NavigationModule { }
