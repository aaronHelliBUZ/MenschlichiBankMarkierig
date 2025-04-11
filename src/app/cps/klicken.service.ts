import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KlickenService {
  clicks: number = 0;
  resultat = new Subject<number>();
  buttonInhalt = new Subject<string>();
  laenge: number = 10;
  pause:number = 5;
  fertig: boolean = false;

  constructor(){
  }

  klicken(){
    if(this.clicks === 0 && !this.fertig){
      this.buttonInhalt.next('Klicken!')
      setTimeout(() => {
        this.fertig = true;
        this.resultat.next(this.clicks / this.laenge);
        this.clicks = 0;
        this.buttonInhalt.next('Pause');
        setTimeout(() => {
          this.fertig = false;
          this.buttonInhalt.next('Klicken!');
        }, this.pause * 1000)
      }, this.laenge * 1000);
    }
    if(!this.fertig){
      this.clicks++;
    }
  }
}
