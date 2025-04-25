import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core'
import { FeldService } from '../feld.service';

@Component({
  selector: 'app-feld',
  imports: [CommonModule, UiCoreModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  randomArray: Array<Array<number>> = [];
  richtig: boolean = true;
  klick: number = 1;
  feld: number = 0;
  maxFelder: number = 2;
  startZeit?: number;
  endZeit?: number;
  effektiveZeit?: number;
  rekordZeit: number = 1000000000;
  rekordZeitFeld: number = 10000000000;
  zeigen: boolean = false;
  schade: boolean = false;

  constructor(private feldService: FeldService){

  }

  randomZahlen(){
    for(let i = 0; i < this.maxFelder; i++){
      this.randomArray[i] = [];
    }

    for(let i = 0; i < this.maxFelder; i++){
      for(let j = 0; j < 25;){
        let randomZahl = Math.round(Math.random() * 25 + (25 * i));
        let gueltig = true;
        for(let k = 0; k < j; k++){
          if(this.randomArray[i][k] == randomZahl || randomZahl == 25 * i){
            gueltig = false;
            break;
          }
        }
        if(gueltig){
          this.randomArray[i][j] = randomZahl;
          j++;
        }
      }
    }
    console.log(this.randomArray)
  }

  klicken(index: number){
    if(this.klick == 1){
      this.startZeit = new Date().getTime();
    }
    if(this.randomArray[this.feld][index] == this.klick){
      this.klick++;
      if(this.klick == (this.feld + 1) * 25 + 1){
        if(this.feld == this.maxFelder - 1){
          this.endZeit = new Date().getTime();
          this.effektiveZeit = parseFloat(((this.endZeit - this.startZeit!) / 1000).toFixed(2))
          this.zeigen = true;
          this.schade = true;
          if(this.effektiveZeit < this.rekordZeit){
            this.rekordZeit = this.effektiveZeit;
          }
          if(this.effektiveZeit / this.maxFelder < this.rekordZeitFeld){
            this.rekordZeitFeld = parseFloat((this.effektiveZeit / this.maxFelder).toFixed(2))
          }
        }else{
          this.feld++;
        }
      }
    }
  }

  reset(){
    this.klick = 1;
    this.feld = 0;
    this.schade = false;
    this.randomZahlen();
  }

  ngOnInit(){
    this.feldService.felder.subscribe(
      value =>{
        this.maxFelder = value;
        this.reset();
      }
    )
    this.randomZahlen();
  }
}
