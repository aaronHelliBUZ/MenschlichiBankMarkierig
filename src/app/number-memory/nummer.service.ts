import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NummerService {
  disabled = new Subject<boolean>();
  neu = new Subject<boolean>();
  weiter = new Subject<boolean>();
  durchlauf = new Subject<number>();
  zeit = new Subject<number>();
  zahl?: string;

  pruefen(zahl: string){
    if(this.zahl == zahl){
      this.weiter.next(true);
    }else{
      this.neu.next(true)
    }
  } 
}
