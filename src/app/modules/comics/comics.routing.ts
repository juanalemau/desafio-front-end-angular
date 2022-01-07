import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsListComponent } from './page/comics-list/comics-list.component';

const routes: Routes = [
    {
        path: '',
        component: ComicsListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComicsRoutingModule { }
