import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { OptionenComponent } from './optionen/optionen.component';

@Component({
  selector: 'app-mental-math',
  imports: [InputComponent, OptionenComponent],
  templateUrl: './mental-math.component.html',
  styleUrl: './mental-math.component.css'
})
export class MentalMathComponent {

}
