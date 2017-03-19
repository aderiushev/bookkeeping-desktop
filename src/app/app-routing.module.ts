import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ConsumptionListComponent } from "./consumption-list/consumption-list.component";

const routes: Routes = [
    {
        path: 'consumption-list',
        component: ConsumptionListComponent
    },
    {
        path: '',
        redirectTo: '/consumption-list',
        pathMatch: 'full'
    },
    {
        path: 'categories',
        component: CategoryListComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}