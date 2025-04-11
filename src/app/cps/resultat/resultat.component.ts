import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { KlickenService } from '../klicken.service';

@Component({
  selector: 'app-resultat',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent {
  resultate: number = 0;
  durchschnitt?: string;
  versuche: number = 0;
  max: number = 0;
  min: number = 30;

  constructor(private klicken: KlickenService){
  }

  ngOnInit(){
    this.klicken.resultat.subscribe(
      value => {
        this.versuche++;
        this.resultate += value;
        this.durchschnitt = (this.resultate / this.versuche).toFixed(2);
        if(value > this.max){
          this.max = value;
        }
        if(value < this.min){
          this.min = value;
        }
      }
    )
  }
}
