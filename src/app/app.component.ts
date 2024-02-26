import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PayApplicationCreateComponent } from './pay-application-create/pay-application-create.component';

import 'bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PayApplicationCreateComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
