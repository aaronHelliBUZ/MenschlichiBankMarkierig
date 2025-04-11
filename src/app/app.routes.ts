import { Routes } from '@angular/router';
import { ReaktionszeitComponent } from './reaktionszeit/reaktionszeit.component';
import { CpsComponent } from './cps/cps.component';
import { TypespeedComponent } from './typespeed/typespeed.component';
import { NumberMemoryComponent } from './number-memory/number-memory.component';

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
    },
    {
        path: 'NumberMemory',
        component: NumberMemoryComponent
    }
];
