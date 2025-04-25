import { Component, OnInit } from '@angular/core';
import { ColorPickerSelectionChange, UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { OptionenService } from '../optionen.service';

@Component({
  selector: 'app-feld',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  zeigen: boolean = true;
  randomArray: Array<number> = [];
  klick: number = 0;
  maxNummer: number = 4;
  schade: boolean = false;
  rekordZahl: number = 0;
  rekordRunden: number = 0;
  rundenZahl: number = 2;
  startNummer: number = 4;
  runden: number = 0;

  constructor(private optionenService: OptionenService){
  }

  klicken(index: number){
    this.zeigen = false;
    this.klick++
    
    if(this.randomArray![index] == this.klick && !this.schade){
      if(((this.klick == Math.round(this.maxNummer)) || (this.klick == Math.trunc(this.maxNummer)))){
        console.log(this.maxNummer)
        this.runden++;
        if(this.runden > this.rekordRunden){
          this.rekordRunden = this.runden;
        }
        if(this.klick > this.rekordZahl){
          this.rekordZahl = Math.trunc(this.maxNummer)
        }
        this.weiter();
      }
    }else{
      this.schade = true;
    }
  }

  weiter(){
    this.zeigen = true;
    this.klick = 0;
    if(this.maxNummer <= 16){
      this.maxNummer += 1 / this.rundenZahl;
    }
    for(let i = 0; i < 16; i++){
      this.randomArray![i] = 0;
    }
    for(let i = 1; i <= this.maxNummer; i++){
      let randomZahl = Math.abs(Math.round(Math.random() * 16 - 1));
      if(this.randomArray![randomZahl] == 0){
        this.randomArray![randomZahl] = i;
      }else{
        i--;
      }
    }
    console.log(this.randomArray)
  }

  reset(){
    this.zeigen = true;
    this.schade = false;
    this.klick = 0;
    this.runden = 0;
    this.maxNummer = this.startNummer - 1 / this.rundenZahl;
    this.weiter();
  }

  ngOnInit(){
    for(let i = 0; i < 16; i++){
      this.randomArray?.push(0);
    }
    for(let i = 1; i <= this.maxNummer; i++){
      let randomZahl = Math.abs(Math.round(Math.random() * 16 - 1));
      if(this.randomArray![randomZahl] == 0){
        this.randomArray![randomZahl] = i;
      }else{
        i--;
      }
    }

    this.optionenService.nummer.subscribe(
      value => {
        this.startNummer = value;
        this.maxNummer = value;
        this.reset();
      }
    );
    this.optionenService.runden.subscribe(
      value => {
        this.rundenZahl = value;
        this.reset();
      }
    );
  }
}
