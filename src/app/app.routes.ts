import { Routes } from '@angular/router';
import { ReaktionszeitComponent } from './reaktionszeit/reaktionszeit.component';
import { CpsComponent } from './cps/cps.component';
import { TypespeedComponent } from './typespeed/typespeed.component';

export const routes: Routes = [
    {
        path: 'Reaktionszeit',
        component: ReaktionszeitComponent
    },
    {
        path: 'CPS',
        component: CpsComponent
    },
    {
        path: 'Typespeed',
        component: TypespeedComponent
    }
];
