import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  zeit = new Subject<number>();
  operatoren = new Subject<Array<string>>();
  plusMax1 = new Subject<number>();
  plusMin1 = new Subject<number>();
  plusMax2 = new Subject<number>();
  plusMin2 = new Subject<number>();
  minusMax1 = new Subject<number>();
  minusMin1 = new Subject<number>();
  minusMax2 = new Subject<number>();
  minusMin2 = new Subject<number>();
  multiplikationMax1 = new Subject<number>();
  multiplikationMin1 = new Subject<number>();
  multiplikationMax2 = new Subject<number>();
  multiplikationMin2 = new Subject<number>();
  divisionMax1 = new Subject<number>();
  divisionMin1 = new Subject<number>();
  divisionMax2 = new Subject<number>();
  divisionMin2 = new Subject<number>();
}