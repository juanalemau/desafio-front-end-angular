import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { CharactersRoutingModule } from './characters.routing';
import { CharactersListComponent } from './page/characters-list/characters-list.component';
import { CharactersDetailComponent } from './page/characters-details/characters-detail.component';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
