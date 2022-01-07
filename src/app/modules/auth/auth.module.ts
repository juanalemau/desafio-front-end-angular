import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';

import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
