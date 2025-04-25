import { Component, OnInit } from '@angular/core';
import { UiCoreModule } from '@buhler/ui-core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-wort',
  imports: [CommonModule, UiCoreModule],
  templateUrl: './wort.component.html',
  styleUrl: './wort.component.css'
})
export class WortComponent {
  woerter: Array<string> = [];
  vorgekommeneWoerter: Array<string> = [];
  vorgekommen?: boolean;
  schade: boolean = false;
  runden: number = 0;
  rekord: number = 0;

  constructor(private http: HttpService){
  }

  randomWort(){
    let randomIndex = Math.abs(Math.trunc((Math.random() * 50 - 1)));
    this.vorgekommeneWoerter.push(this.woerter[randomIndex]);
  }

  test(vorgekommen: boolean){
    this.vorgekommen = false;
    for(let i = 0; i < this.vorgekommeneWoerter.length - 1; i++){
      if(this.vorgekommeneWoerter[this.vorgekommeneWoerter.length - 1] == this.vorgekommeneWoerter[i]){
        this.vorgekommen = true;
      }
    }

    if(vorgekommen == this.vorgekommen){
      this.runden++;
      if(this.runden > this.rekord){
        this.rekord = this.runden;
      }
      this.randomWort();
    }else{
      this.schade = true;
    }
  }

  reset(){
    this.vorgekommeneWoerter = [];
    this.vorgekommen = false;
    this.schade = false
    this.runden = 0;
    this.randomWort();
  }

  ngOnInit(){
    this.http.getData().subscribe(
      data => {
        for(let i = 0; i < 50; i++){
          this.woerter.push(data[i].wort);
        }
        this.randomWort();
      }
    )
  }
}
