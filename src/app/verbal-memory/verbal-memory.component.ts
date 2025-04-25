import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { WortComponent } from './wort/wort.component';

@Component({
  selector: 'app-verbal-memory',
  imports: [CommonModule, UiCoreModule, WortComponent],
  templateUrl: './verbal-memory.component.html',
  styleUrl: './verbal-memory.component.css'
})
export class VerbalMemoryComponent {

}
