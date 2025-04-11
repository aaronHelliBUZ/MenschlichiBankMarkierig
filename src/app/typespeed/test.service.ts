import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  randomArray?: Array<string>;
  klasse = new Subject<string>();
  index = new Subject<number>();
  fertig = new Subject<boolean>();
  arrayAendern = new Subject<string>();
  zeit = new Subject<number>();

  constructor() { }

  pruefen(text: string, fertig: boolean){
    const textArray: Array<string> = text.split('');

    if(!fertig){
      for(let i = textArray.length - 2; i < textArray.length; i++){
        this.index.next(i);
        if(textArray[i] === this.randomArray![i]){
          this.klasse.next('r');
        }
      }
      if(textArray[textArray.length - 1] !== this.randomArray![textArray.length - 1]){
        console.log('drück')
        this.klasse.next('f')
      }
    }else{
      this.fertig.next(true)
    }
  }

  modusAendern(modus: string){
    this.arrayAendern.next(modus)
  }

  zeitAendern(zeit: number){
    this.zeit.next(zeit);
  }
}
