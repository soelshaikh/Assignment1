import { Routes } from '@angular/router';

import { PayApplicationCreateComponent } from './pay-application-create/pay-application-create.component';
import { AppComponent } from './app.component';
import { DisplayPayApplicationComponent } from './display-pay-application/display-pay-application.component';

export const routes: Routes = [
  { path: 'dashboard', component: DisplayPayApplicationComponent },
  { path: 'createapplication', component: PayApplicationCreateComponent },
];
