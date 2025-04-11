import { EventEmitter, Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaktionService {
  feldInhalt = new Subject<string>()
  zeiten = new Subject<number>()
  knopfInhalt = new Subject<string>()
  minDelay = new Subject<number>()
  randDelay = new Subject<number>()
  reihen = new Subject<number>()
  spalten = new Subject<number>()
  jetzt: boolean = false;
  geklickt: boolean = false;
  startZeit?: number;
  endZeit?: number;
  effektiveZeit?: number;
  zyklen: number = 0;

  constructor() { }

  init(): void{
    if(this.zyklen > 0){
      this.knopfInhalt.next('warte ...');
    }
    this.feldInhalt.next('Hier klicken, sobald alle Ampeln ausgehen');
    this.jetzt = false;
    this.geklickt = false;
    if(this.zyklen != 0){
    }
    this.zyklen++
  }

  start(){
    if(!this.geklickt){
      this.knopfInhalt.next('Jetzt');
      this.feldInhalt.next('Jetzt');
      this.startZeit = new Date().getTime();
      this.jetzt = true;
    }
  }

  klicken(geschaft: boolean){
    this.geklickt = true;
    if(geschaft){
      this.endZeit = new Date().getTime();
      this.effektiveZeit = this.endZeit - this.startZeit!;
      this.zeiten.next(this.effektiveZeit);
      this.feldInhalt.next(`Bravo du hast ${this.effektiveZeit} ms gebraucht`);
    }else{
      this.feldInhalt.next('Zu Früh')
    }
    this.knopfInhalt.next('Start');
  }
}
