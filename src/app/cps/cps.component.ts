import { Component } from '@angular/core';
import { FeldComponent } from './feld/feld.component';
import { UiCoreModule } from '@buhler/ui-core';
import { ResultatComponent } from './resultat/resultat.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-cps',
  imports: [FeldComponent, UiCoreModule, ResultatComponent, OptionenComponent],
  templateUrl: './cps.component.html',
  styleUrl: './cps.component.css'
})
export class CpsComponent {

}
