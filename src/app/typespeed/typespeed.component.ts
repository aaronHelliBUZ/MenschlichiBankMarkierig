import { Component } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { InputComponent } from './input/input.component';
import { OptionenComponent } from "./optionen/optionen.component";

@Component({
  selector: 'app-typespeed',
  imports: [CommonModule, UiCoreModule, TextComponent, InputComponent, OptionenComponent],
  templateUrl: './typespeed.component.html',
  styleUrl: './typespeed.component.css'
})
export class TypespeedComponent {

}
