import { Component } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FeldComponent } from './feld/feld.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-aim-trainer',
  imports: [UiCoreModule, CommonModule, FeldComponent, OptionenComponent],
  templateUrl: './aim-trainer.component.html',
  styleUrl: './aim-trainer.component.css'
})
export class AimTrainerComponent {

}
