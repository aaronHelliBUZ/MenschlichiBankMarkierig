import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { KlickenService } from '../klicken.service';

@Component({
  selector: 'app-feld',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  clicks?: number;
  buttonInhalt?: string;

  constructor(private klickenService: KlickenService){
  }

  klicken(){
    this.klickenService.klicken()
  }

  ngOnInit(){
    this.buttonInhalt = 'Hier Klicken';
    this.klickenService.buttonInhalt.subscribe(
      value => this.buttonInhalt = value
    )
  }
}
