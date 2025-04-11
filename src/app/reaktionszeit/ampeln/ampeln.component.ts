import { Component, OnInit, OnDestroy } from '@angular/core';
import { BadgeSize,BadgeType, UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { ReaktionService } from '../reaktion.service';

@Component({
  selector: 'app-ampeln',
  imports: [UiCoreModule, CommonModule],
  templateUrl: './ampeln.component.html',
  styleUrl: './ampeln.component.css'
})
export class AmpelnComponent {
  constructor(private reaktion: ReaktionService){
  }

  knopf: string = 'Start';
  badgeType:BadgeType = BadgeType.Disabled;
  badgeSize:BadgeSize = BadgeSize.Normal;
  ampeln: Array<string> = ['ampeln-aus', 'ampeln-aus', 'ampeln-aus', 'ampeln-aus', 'ampeln-aus']
  minDelay: number = 1000;
  randDelay: number = 1000;
  reihen: number = 2;
  spalten: number = 5;
  ampelnArray: Array<number> = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  
  start(i: number){
    if(i === 1){
      this.reaktion.init();
      for(let i = 0; i < this.spalten; i++){
        this.ampeln[i] = 'ampeln-aus';
      }
    }
    if(i <= this.spalten){
      this.ampeln[i - 1] = 'ampeln-an';
      setTimeout((j: number = i + 1) => {
        this.start(j)
      }, this.minDelay)
    }else{
      const randomDelay: number = Math.round((Math.random() * 2000) + (this.randDelay - this.minDelay));
      setTimeout(() => {
        for(let i = 0; i < this.spalten; i++){
          this.ampeln[i] = 'ampeln-aus';
        }
        this.reaktion.start();
      }, randomDelay)
    }
  }

  ngOnInit(){
    this.reaktion.knopfInhalt.subscribe(
      value => this.knopf = value
    );
    this.reaktion.minDelay.subscribe(
      value => this.minDelay = value
    );
    this.reaktion.randDelay.subscribe(
      value => this.randDelay = value
    )
    this.reaktion.reihen.subscribe(
      value => {
        this.reihen = value;
        for(let i = 0; i < this.reihen; i++){
          for(let j = 0; j < this.spalten; j++){
            this.ampelnArray[j + i * 5] = j + 1
          }
        }
      }
    )
    this.reaktion.spalten.subscribe(
      value => {
        this.spalten = value;
        this.ampelnArray = [];
        for(let i = 0; i < this.reihen; i++){
          for(let j = 0; j < this.spalten; j++){
            this.ampelnArray[j + i * this.spalten] = j + 1
          }
        }
        this.ampeln = [];
        for(let i = 0; i < this.spalten; i++){
          this.ampeln[i] = 'ampeln-aus'
        }
      }
    )
  }
}
