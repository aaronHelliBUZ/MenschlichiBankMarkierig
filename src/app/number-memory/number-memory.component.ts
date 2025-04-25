import { Component } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { FeldComponent } from './feld/feld.component';
import { InputComponent } from './input/input.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-number-memory',
  imports: [UiCoreModule, CommonModule, FeldComponent, InputComponent, OptionenComponent],
  templateUrl: './number-memory.component.html',
  styleUrl: './number-memory.component.css'
})
export class NumberMemoryComponent {

}
