import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Category } from '../category';


// We use the gql tag to parse our query string into a query document
const CategoryListQuery = gql`
  query CategoryList {
    categories {
      id
      name
    }
  }
`;

@Component({
    selector: 'heroes',
    templateUrl: 'category-list.component.html',
    styleUrls: ['category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    selectedCategory: Category;
    categories: Category[];

    constructor(private apollo: Apollo, private router: Router) {}

    ngOnInit() {
        this.apollo.watchQuery({
            query: CategoryListQuery
        }).subscribe(({data}) => {
            console.log('DATA', data);
            this.categories = <Category[]>data['categories'];
        });
    }

    onSelect(category: Category): void {
        this.selectedCategory = category;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedCategory.id]);
    }
}