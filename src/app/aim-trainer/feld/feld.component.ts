import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { ZielenService } from '../zielen.service';

@Component({
  selector: 'app-feld',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './feld.component.html',
  styleUrl: './feld.component.css'
})
export class FeldComponent {
  randomX?: number;
  randomY?: number;
  angefangen: boolean = false;
  fertig: boolean = false;
  treffer: number = 0;
  rekord: number = 0;
  zeit: number = 20;
  groesse: number = 45;

  constructor(private zielen: ZielenService){
  }

  randomPosition(){
    if(!this.angefangen){
      this.angefangen = true;
      setTimeout(() => {
        this.fertig = true;
      }, this.zeit * 1000)
    }
    if(!this.fertig){
      let offset = this.groesse * .45  + this.groesse / 26.7564562
      if(offset > 93 - this.groesse / 25){
        offset = 93 - this.groesse / 15;
      }else if(offset < 85 + this.groesse / 25){
        offset = 85 + this.groesse / 15;
      }
      this.randomX = Math.random() * 188 - (offset);
      this.randomY = Math.random() * Math.abs(34 - this.groesse / 15);
      this.treffer++;
      if(this.treffer > this.rekord){
        this.rekord = this.treffer
      }
    }
  }

  neustart(){
    this.angefangen = false;
    this.fertig = false;
    this.treffer = 0;
  }

  absolutRekord(){
    return Math.round(this.rekord / (this.zeit / 60) / (this.groesse / 10))
  }

  ngOnInit(){
    this.randomX = Math.random() * 198 - 100;
    this.randomY = Math.random() * 34 - 1;

    this.zielen.zeit.subscribe(
      value => this.zeit = value
    );
    this.zielen.groesse.subscribe(
      value => this.groesse = value
    )
  }
}
