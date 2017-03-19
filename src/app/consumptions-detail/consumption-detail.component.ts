import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Category } from '../category';

@Component({
    selector: 'consumption-detail',
    templateUrl: 'consumption-detail.component.html',
    styleUrls: ['consumption-detail.component.scss']
})
export class ConsumptionDetailComponent implements OnInit {
    categories: Category[];

    constructor(private heroService: HeroService) { }

   ngOnInit():void {
        this.heroService.getHeroes().then(heroes => this.categories = heroes.slice(0, 3));

       this.categories = [
           {id: 1, name: 'Steak'},
           {id: 2, name: 'Pizza'},
           {id: 3, name: 'Tacos'}
       ];
   }
}