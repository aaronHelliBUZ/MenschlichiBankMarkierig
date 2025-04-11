import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { ReaktionService } from '../reaktion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feld',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  feld?: string
  durchschnitt?: number;
  zeiten?: number = 0;
  laenge: number = 0;
  min: number = 9999999999999;
  max: number = 0;
  constructor(private reaktion: ReaktionService){
  }


  feldWechseln(){
    console.log('jetzt')
  }

  reagieren(){
    if(this.reaktion.jetzt){
      this.reaktion.klicken(true);
    }else{
      this.reaktion.klicken(false);
    }
  }

  ngOnInit(){
    this.reaktion.feldInhalt.subscribe(
      value => this.feld = value
    )
    this.reaktion.zeiten.subscribe(
      value => {
        this.zeiten! += value;
        this.laenge++;
        this.durchschnitt = Math.round((this.zeiten! / this.laenge));
        if(value < this.min){
          this.min = value;
        }
        if(value > this.max){
          this.max = value
        }
      }
    )
    this.reaktion.init();
  }
}
