import { Component } from '@angular/core';
import { FeldComponent } from './feld/feld.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-one-fifty',
  imports: [FeldComponent, OptionenComponent],
  templateUrl: './one-fifty.component.html',
  styleUrl: './one-fifty.component.css'
})
export class OneFiftyComponent {

}
