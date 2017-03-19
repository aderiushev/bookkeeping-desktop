import 'whatwg-fetch';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HeroService } from './hero.service';
import { ConsumptionListComponent } from "./consumption-list/consumption-list.component";
import { ConsumptionDetailComponent } from "./consumptions-detail/consumption-detail.component";
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:8080'
    }),
});

export function provideClient(): ApolloClient {
    return client;
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        AppRoutingModule,
        ApolloModule.forRoot(provideClient)
    ],
    declarations: [
        AppComponent,
        CategoryListComponent,
        HeroDetailComponent,
        ConsumptionListComponent,
        ConsumptionDetailComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);



