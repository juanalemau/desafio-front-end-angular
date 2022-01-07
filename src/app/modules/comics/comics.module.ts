import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ComicsRoutingModule } from './comics.routing';
import { ComicsListComponent } from './page/comics-list/comics-list.component';

@NgModule({
  declarations: [ComicsListComponent],
  imports: [ComicsRoutingModule, SharedModule]
})
export class ComicsModule {}
