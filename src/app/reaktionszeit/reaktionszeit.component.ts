import { Component } from '@angular/core';
import { BadgeSize,BadgeType, UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { AmpelnComponent } from './ampeln/ampeln.component';
import { FeldComponent } from './feld/feld.component';
import { OptionenComponent } from "./optionen/optionen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './reaktionszeit.component.html',
  imports: [CommonModule, UiCoreModule, AmpelnComponent, FeldComponent, OptionenComponent]
})
export class ReaktionszeitComponent {
}
