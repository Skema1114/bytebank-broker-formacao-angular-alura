import { PoTemplatesModule } from '@po-ui/ng-templates';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, PoTemplatesModule, SharedModule],
})
export class LoginModule {}
