import { Component } from '@angular/core';
import { FeldComponent } from './feld/feld.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-monke',
  imports: [FeldComponent, OptionenComponent],
  templateUrl: './monke.component.html',
  styleUrl: './monke.component.css'
})
export class MonkeComponent {

}
