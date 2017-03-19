import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Bookkeeping';

    constructor(private router: Router) {}

    gotoConsumptions() {
        this.router.navigate(['/consumption-list']);
    }

    gotoCategories() {
        this.router.navigate(['/categories']);
    }
}