import {AdminComponent} from './admin.component';
import {adminChildren} from './routes-children';
import {BrxRoute} from '../../../interfaces/brxRoute';

export const adminRoute: BrxRoute = {
  path: 'admin',
  component: AdminComponent,
  children: adminChildren
};
