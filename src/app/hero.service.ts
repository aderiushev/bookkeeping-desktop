import { Injectable } from '@angular/core';
import { Category } from './category';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Category[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Category> {
        return Promise.resolve(HEROES.find(hero => hero.id === id));
    }
}