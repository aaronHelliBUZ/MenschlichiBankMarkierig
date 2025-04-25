import { Routes } from '@angular/router';
import { ReaktionszeitComponent } from './reaktionszeit/reaktionszeit.component';
import { CpsComponent } from './cps/cps.component';
import { TypespeedComponent } from './typespeed/typespeed.component';
import { NumberMemoryComponent } from './number-memory/number-memory.component';
import { AimTrainerComponent } from './aim-trainer/aim-trainer.component';
import { MonkeComponent } from './monke/monke.component';
import { VerbalMemoryComponent } from './verbal-memory/verbal-memory.component';
import { OneFiftyComponent } from './one-fifty/one-fifty.component';
import { MentalMathComponent } from './mental-math/mental-math.component';

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
    },
    {
        path: 'AimTrainer',
        component: AimTrainerComponent
    },
    {
        path: 'Monke',
        component: MonkeComponent
    },
    {
        path: 'VerbalMemory',
        component: VerbalMemoryComponent
    },
    {
        path: 'OneFifty',
        component: OneFiftyComponent
    },
    {
        path: 'MentalMath',
        component: MentalMathComponent
    },
];
