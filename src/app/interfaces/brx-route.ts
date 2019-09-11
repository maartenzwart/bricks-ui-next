import {Route} from '@angular/router';

export interface BrxRoute extends Route {
  title?: string;
  firstItem?: boolean;
  icon?: any;
  inactive?: boolean;
  tab?: string;
  tabActive?: boolean;
}

export type BrxRoutes = BrxRoute[];
