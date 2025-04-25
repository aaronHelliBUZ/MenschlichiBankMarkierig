import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZielenService {
  zeit = new Subject<number>();
  groesse = new Subject<number>();

  constructor() { }
}
